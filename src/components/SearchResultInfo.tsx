import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className="text-xl font-extrabold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      <span>
        {total} {total === 1 ? "Restaurant" : "Restaurants"} found for {city}
        <Link
          to="/"
          className="ml-2 cursor-pointer text-sm font-semibold text-primary hover:underline"
        >
          New Search
        </Link>
      </span>
    </div>
  );
};

export default SearchResultInfo;
