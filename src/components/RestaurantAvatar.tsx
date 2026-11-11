import { Restaurant } from "@/types";
import { Link } from "react-router-dom";

type Props = {
  restaurant: Restaurant;
};

/** Round restaurant photo with a name tag, used for "popular right now". */
const RestaurantAvatar = ({ restaurant }: Props) => (
  <Link
    to={`/detail/${restaurant._id}`}
    className="group flex min-w-0 flex-col items-center"
  >
    <span className="rounded-full bg-brand-yellow/30 p-2 transition group-hover:bg-brand-yellow/50 group-hover:scale-105">
      <img
        src={restaurant.imageUrl}
        alt={restaurant.restaurantName}
        loading="lazy"
        className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-soft sm:h-32 sm:w-32"
      />
    </span>
    <span className="-mt-4 max-w-full truncate rounded-full border-2 border-brand-yellow bg-white px-3 py-1 text-sm font-semibold shadow-soft">
      {restaurant.restaurantName}
    </span>
  </Link>
);

export default RestaurantAvatar;
