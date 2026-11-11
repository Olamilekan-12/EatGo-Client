import { Restaurant } from "@/types";
import { formatNaira } from "@/lib/utils";
import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";
import { Bike, Clock } from "lucide-react";

type Props = {
  restaurant: Restaurant;
};

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <Link
      to={`/detail/${restaurant._id}`}
      className="group flex flex-col gap-3 rounded-3xl border bg-white p-3 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative">
        <AspectRatio ratio={4 / 3}>
          <img
            src={restaurant.imageUrl}
            alt={restaurant.restaurantName}
            loading="lazy"
            className="h-full w-full rounded-2xl object-cover"
          />
        </AspectRatio>
        <span className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-xs font-bold shadow-soft">
          <Clock size={14} className="text-primary" />
          {restaurant.estimatedDeliveryTime} min
        </span>
      </div>
      <div className="flex min-w-0 flex-col gap-1 px-1 pb-1">
        <h3 className="truncate text-lg font-bold tracking-tight group-hover:text-primary">
          {restaurant.restaurantName}
        </h3>
        <p className="truncate text-sm text-muted-foreground">
          {restaurant.cuisines.join(" · ")}
        </p>
        <p className="mt-1 flex items-center gap-1.5 text-sm font-medium">
          <Bike size={16} className="text-primary" />
          {formatNaira(restaurant.deliveryPrice)} delivery
          <span className="text-muted-foreground">· {restaurant.city}</span>
        </p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
