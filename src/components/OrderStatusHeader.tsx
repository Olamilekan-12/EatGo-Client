import { Order } from "@/types";
import { Progress } from "./ui/progress";
import { ORDER_STATUS, isOrderActive } from "@/config/order-status-config";
import { cn } from "@/lib/utils";

type Props = {
  order: Order;
};

const OrderStatusHeader = ({ order }: Props) => {
  const getExpectedDelivery = () => {
    const created = new Date(order.createdAt);

    created.setMinutes(
      created.getMinutes() + order.restaurant.estimatedDeliveryTime
    );

    const hours = created.getHours();
    const minutes = created.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };

  const getOrderStatusInfo = () => {
    return (
      ORDER_STATUS.find((o) => o.value === order.status) || ORDER_STATUS[0]
    );
  };

  const statusInfo = getOrderStatusInfo();
  // "Expected by" only makes sense while the order is still on its way.
  const showExpectedBy = isOrderActive(order.status);

  return (
    <>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-semibold text-muted-foreground">
          {order.restaurant.restaurantName} ·{" "}
          {new Date(order.createdAt).toLocaleDateString("en-NG", {
            day: "numeric",
            month: "short",
          })}
        </p>
        <h1 className="flex flex-col gap-2 text-2xl font-extrabold tracking-tight md:flex-row md:items-baseline md:justify-between md:text-3xl">
          <span className={statusInfo.text}>{statusInfo.label}</span>
          {showExpectedBy && (
            <span className="text-lg font-bold text-brand-ink">
              Expected by {getExpectedDelivery()}
            </span>
          )}
        </h1>
      </div>
      {order.status === "cancelled" && (
        <p className="text-red-600">
          {order.cancelledReason || "This order was cancelled."}
        </p>
      )}
      <Progress
        className={cn(statusInfo.track, isOrderActive(order.status) && "animate-pulse")}
        indicatorClassName={statusInfo.bar}
        value={statusInfo.progressValue}
      />
    </>
  );
};

export default OrderStatusHeader;
