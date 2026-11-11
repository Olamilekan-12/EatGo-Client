import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useGetMyRestaurantOrders,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import {
  FormSkeleton,
  OrderListSkeleton,
} from "@/components/Skeletons";
import { Skeleton } from "@/components/ui/skeleton";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { restaurant, isLoading: isRestaurantLoading } =
    useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

  const { orders, isLoading: isOrdersLoading } = useGetMyRestaurantOrders();

  const isEditing = !!restaurant;

  return (
    <Tabs defaultValue="orders" className="space-y-2">
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
      </TabsList>
      <TabsContent
        value="orders"
        className="space-y-5 pt-4"
      >
        {isOrdersLoading ? (
          <>
            <Skeleton className="h-8 w-48" />
            <OrderListSkeleton count={2} />
          </>
        ) : (
          <>
            <h2 className="text-2xl font-extrabold tracking-tight">
              {orders?.filter(
                (o) => o.status !== "delivered" && o.status !== "cancelled"
              ).length ?? 0}{" "}
              active orders
            </h2>
            {orders?.map((order) => (
              <OrderItemCard key={order._id} order={order} />
            ))}
          </>
        )}
      </TabsContent>
      <TabsContent value="manage-restaurant">
        {isRestaurantLoading ? (
          <FormSkeleton fields={5} />
        ) : (
          <ManageRestaurantForm
            restaurant={restaurant}
            onSave={isEditing ? updateRestaurant : createRestaurant}
            isLoading={isCreateLoading || isUpdateLoading}
          />
        )}
      </TabsContent>
    </Tabs>
  );
};

export default ManageRestaurantPage;
