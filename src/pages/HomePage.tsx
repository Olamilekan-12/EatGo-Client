import SearchBar, { SearchForm } from "@/components/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import RestaurantCard from "@/components/RestaurantCard";
import RestaurantAvatar from "@/components/RestaurantAvatar";
import Wave from "@/components/Wave";
import { useGetCities, useGetFeaturedRestaurants } from "@/api/RestaurantApi";
import { cuisineList } from "@/config/restaurant-options-config";
import { Bike, MapPin, PackageCheck, Store } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { RestaurantGridSkeleton, CityChipsSkeleton } from "@/components/Skeletons";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Store,
    title: "Pick a restaurant",
    text: "Browse local favourites for jollof, suya, soups, snacks and more.",
  },
  {
    icon: Bike,
    title: "Fast delivery",
    text: "Order in a few taps and have hot food brought to your door.",
  },
  {
    icon: PackageCheck,
    title: "Track your order",
    text: "Follow every step from confirmation to delivery in real time.",
  },
];

const HomePage = () => {
  const navigate = useNavigate();
  const { cities, isLoading: isCitiesLoading } = useGetCities();
  const { restaurants, isLoading } = useGetFeaturedRestaurants(12);

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${encodeURIComponent(searchFormValues.searchQuery)}`,
    });
  };

  const popular = restaurants?.slice(0, 6) ?? [];
  const more = restaurants?.slice(6, 12) ?? [];

  return (
    <div className="overflow-x-clip">
      {/* ---------- Hero ---------- */}
      <section className="relative bg-brand-yellow">
        {popular[0] && (
          <img
            src={popular[0].imageUrl}
            alt=""
            aria-hidden="true"
            className="absolute bottom-16 left-[4%] hidden h-44 w-44 -rotate-6 rounded-full border-8 border-white object-cover shadow-lift xl:block"
          />
        )}
        {popular[1] && (
          <img
            src={popular[1].imageUrl}
            alt=""
            aria-hidden="true"
            className="absolute right-[4%] top-10 hidden h-40 w-40 rotate-6 rounded-full border-8 border-white object-cover shadow-lift xl:block"
          />
        )}
        <div className="container relative mx-auto flex flex-col items-center gap-6 pb-10 pt-8 text-center md:pt-14">
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-5xl md:text-6xl">
            Nigerian meals, delivered fast
          </h1>
          <p className="max-w-xl text-base font-medium text-brand-ink/80 md:text-lg">
            Order jollof, suya, amala and more from the restaurants you love.
          </p>
          <div className="w-full max-w-2xl">
            <SearchBar
              placeHolder="Search by city, restaurant or cuisine"
              onSubmit={handleSearchSubmit}
            />
          </div>
          {isCitiesLoading && <CityChipsSkeleton />}
          {cities && cities.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-sm font-semibold text-brand-ink/70">
                Popular:
              </span>
              {cities.map(({ city, count }) => (
                <Link
                  key={city}
                  to={`/search/${encodeURIComponent(city)}`}
                  className="flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm font-semibold shadow-soft hover:bg-brand-mint"
                >
                  <MapPin size={14} className="text-primary" />
                  {city}
                  <span className="text-muted-foreground">({count})</span>
                </Link>
              ))}
            </div>
          )}
        </div>
        <Wave className="text-white" />
      </section>

      {/* ---------- Popular right now ---------- */}
      <section className="container mx-auto flex flex-col gap-10 pb-14 pt-10">
        <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-4xl">
          Popular restaurants right now
        </h2>
        {isLoading ? (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <Skeleton className="h-28 w-28 rounded-full sm:h-32 sm:w-32" />
                <Skeleton className="h-6 w-24 rounded-full" />
              </div>
            ))}
          </div>
        ) : popular.length > 0 ? (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {popular.map((restaurant) => (
              <RestaurantAvatar key={restaurant._id} restaurant={restaurant} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            No restaurants yet. Search for your city above to get started.
          </p>
        )}
      </section>

      {/* ---------- Restaurant cards ---------- */}
      {(isLoading || more.length > 0) && (
        <section className="container mx-auto flex flex-col gap-6 pb-12">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">
            Hungry? Start with these
          </h2>
          {isLoading ? (
            <RestaurantGridSkeleton count={3} />
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((restaurant) => (
                <RestaurantCard key={restaurant._id} restaurant={restaurant} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* ---------- How it works ---------- */}
      <section className="container mx-auto flex flex-col gap-10 pb-16">
        <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-4xl">
          Anything delivered
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col items-center gap-3 text-center">
              <span className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-yellow">
                <Icon size={40} strokeWidth={1.75} className="text-brand-ink" />
              </span>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="max-w-xs text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Cities + categories (yellow) ---------- */}
      <Wave className="text-brand-yellow" flip />
      <section className="bg-brand-yellow">
        <div className="container mx-auto flex flex-col items-center gap-8 pb-4 text-center">
          {cities && cities.length > 0 && (
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                Top cities in Nigeria
              </h2>
              <div className="flex flex-wrap justify-center gap-2">
                {cities.map(({ city }) => (
                  <Link
                    key={city}
                    to={`/search/${encodeURIComponent(city)}`}
                    className="rounded-full bg-white px-5 py-2 font-semibold shadow-soft hover:bg-brand-mint"
                  >
                    {city}
                  </Link>
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Top categories
            </h2>
            <div className="flex max-w-3xl flex-wrap justify-center gap-2">
              {cuisineList.map((cuisine) => (
                <Link
                  key={cuisine}
                  to={`/search/${encodeURIComponent(cuisine)}`}
                  className="rounded-full bg-brand-chip px-4 py-2 text-sm font-semibold hover:bg-brand-mint"
                >
                  {cuisine}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Wave className="text-brand-mint" />
      </section>

      {/* ---------- Partner CTA (mint) ---------- */}
      <section className="bg-brand-mint">
        <div className="container mx-auto flex flex-col items-center gap-4 pb-6 pt-2 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Let's do it together
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Run a restaurant? Put your menu in front of hungry customers and
            manage orders in one place.
          </p>
          <Button asChild size="lg">
            <Link to="/manage-restaurant">Register your restaurant</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
