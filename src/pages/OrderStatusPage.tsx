import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { OrderListSkeleton } from "@/components/Skeletons";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Receipt } from "lucide-react";
import { Link } from "react-router-dom";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return <OrderListSkeleton count={2} />;
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <span className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-yellow">
          <Receipt size={40} strokeWidth={1.75} />
        </span>
        <h2 className="text-2xl font-extrabold">No orders yet</h2>
        <p className="max-w-sm text-muted-foreground">
          When you place an order you can follow it here, step by step.
        </p>
        <Button asChild size="lg">
          <Link to="/">Browse restaurants</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold tracking-tight">Your orders</h1>
      {orders.map((order) => (
        <div
          key={order._id}
          className="space-y-6 rounded-3xl border bg-white p-5 shadow-soft md:p-8"
        >
          <OrderStatusHeader order={order} />
          <div className="grid gap-8 md:grid-cols-2">
            <OrderStatusDetail order={order} />
            <AspectRatio ratio={16 / 7}>
              <img
                src={order.restaurant.imageUrl}
                alt={order.restaurant.restaurantName}
                className="h-full w-full rounded-2xl object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStatusPage;
