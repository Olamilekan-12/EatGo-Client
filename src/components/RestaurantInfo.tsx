import { Restaurant } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Props = {
  restaurant: Restaurant;
};

const RestaurantInfo = ({ restaurant }: Props) => {
  return (
    <Card className="min-w-0 rounded-3xl shadow-soft">
      <CardHeader>
        <CardTitle className="text-3xl font-extrabold tracking-tight">
          {restaurant.restaurantName}
        </CardTitle>
        <CardDescription>
          {restaurant.city}, {restaurant.country}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {restaurant.cuisines.map((item) => (
          <span
            key={item}
            className="whitespace-nowrap rounded-full bg-brand-chip px-3 py-1 text-sm font-semibold"
          >
            {item}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
