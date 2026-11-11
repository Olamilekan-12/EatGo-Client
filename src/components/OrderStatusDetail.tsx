import { formatNaira } from "@/lib/utils";
import { Order } from "@/types";
import { Separator } from "./ui/separator";

type Props = {
  order: Order;
};

const label = "text-xs font-bold uppercase tracking-wide text-muted-foreground";

const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-1">
        <span className={label}>Delivering to</span>
        <span className="font-semibold">{order.deliveryDetails.name}</span>
        <span className="text-muted-foreground">
          {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className={label}>Your order</span>
        <ul className="space-y-1">
          {order.cartItems.map((item, index) => (
            <li key={`${item.menuItemId}-${index}`}>
              <span className="font-semibold">{item.quantity}×</span>{" "}
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <div className="flex items-center justify-between">
        <span className={label}>Total</span>
        <span className="text-xl font-extrabold">
          {formatNaira(order.totalAmount)}
        </span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
