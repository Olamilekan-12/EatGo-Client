import { Restaurant } from "@/types";
import { formatNaira } from "@/lib/utils";
import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";
import { Bike, Clock } from "lucide-react";

type Props = {
  restaurant: Restaurant;
};

const SearchResultCard = ({ restaurant }: Props) => {
  return (
    <Link
      to={`/detail/${restaurant._id}`}
      className="group grid min-w-0 grid-cols-1 gap-4 rounded-3xl border bg-white p-3 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift lg:grid-cols-[2fr_3fr] lg:gap-6"
    >
      <div className="relative">
        <AspectRatio ratio={16 / 8}>
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
      <div className="flex min-w-0 flex-col justify-center gap-3 px-1 pb-1 lg:pr-4">
        <h3 className="truncate text-2xl font-extrabold tracking-tight group-hover:text-primary">
          {restaurant.restaurantName}
        </h3>
        <div className="flex flex-wrap gap-2">
          {restaurant.cuisines.map((item) => (
            <span
              key={item}
              className="rounded-full bg-brand-chip px-3 py-1 text-xs font-semibold"
            >
              {item}
            </span>
          ))}
        </div>
        <p className="flex items-center gap-2 text-sm font-medium">
          <Bike size={18} className="text-primary" />
          Delivery from {formatNaira(restaurant.deliveryPrice)}
          <span className="text-muted-foreground">· {restaurant.city}</span>
        </p>
      </div>
    </Link>
  );
};

export default SearchResultCard;
