import { formatNaira } from "@/lib/utils";
import { Order, OrderStatus } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ORDER_STATUS } from "@/config/order-status-config";
import { useUpdateMyRestaurantOrder } from "@/api/MyRestaurantApi";
import { useEffect, useState } from "react";

type Props = {
  order: Order;
};

const fieldLabel =
  "text-xs font-bold uppercase tracking-wide text-muted-foreground";

const OrderItemCard = ({ order }: Props) => {
  const { updateRestaurantStatus, isLoading } = useUpdateMyRestaurantOrder();
  const [status, setStatus] = useState<OrderStatus>(order.status);

  useEffect(() => {
    setStatus(order.status);
  }, [order.status]);

  const handleStatusChange = async (newStatus: OrderStatus) => {
    await updateRestaurantStatus({
      orderId: order._id as string,
      status: newStatus,
    });
    setStatus(newStatus);
  };

  const getTime = () => {
    const orderDateTime = new Date(order.createdAt);

    const hours = orderDateTime.getHours();
    const minutes = orderDateTime.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="mb-3 grid gap-4 text-base md:grid-cols-4">
          <div className="flex flex-col">
            <span className={fieldLabel}>Customer</span>
            <span>{order.deliveryDetails.name}</span>
          </div>
          <div className="flex flex-col">
            <span className={fieldLabel}>Delivery address</span>
            <span className="font-medium">
              {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
            </span>
          </div>
          <div className="flex flex-col">
            <span className={fieldLabel}>Time</span>
            <span>{getTime()}</span>
          </div>
          <div className="flex flex-col">
            <span className={fieldLabel}>Total</span>
            <span className="text-primary">{formatNaira(order.totalAmount)}</span>
          </div>
        </CardTitle>
        <Separator />
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          {order.cartItems.map((cartItem, index) => (
            <span key={`${cartItem.menuItemId}-${index}`}>
              <Badge variant="secondary" className="mr-2">
                {cartItem.quantity}×
              </Badge>
              {cartItem.name}
            </span>
          ))}
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="status">What is the status of this order?</Label>
          {order.status === "cancelled" && (
            <span className="text-sm text-red-600">
              {order.cancelledReason || "This order was cancelled."}
            </span>
          )}
          <Select
            value={status}
            disabled={isLoading || order.status === "cancelled"}
            onValueChange={(value) => handleStatusChange(value as OrderStatus)}
          >
            <SelectTrigger id="status">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent position="popper">
              {ORDER_STATUS.map((status) => (
                <SelectItem
                  key={status.value}
                  value={status.value}
                  disabled={
                    status.value === "cancelled" && order.status !== "cancelled"
                  }
                >
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderItemCard;
