import { Skeleton } from "./ui/skeleton";
import { AspectRatio } from "./ui/aspect-ratio";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

/** Vertical restaurant card (home page grid). */
export const RestaurantCardSkeleton = () => (
  <div className="flex flex-col gap-3 rounded-3xl border bg-white p-3 shadow-soft">
    <AspectRatio ratio={4 / 3}>
      <Skeleton className="h-full w-full rounded-2xl" />
    </AspectRatio>
    <Skeleton className="h-6 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <div className="flex gap-4">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-4 w-28" />
    </div>
  </div>
);

export const RestaurantGridSkeleton = ({ count = 4 }: { count?: number }) => (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    {Array.from({ length: count }).map((_, i) => (
      <RestaurantCardSkeleton key={i} />
    ))}
  </div>
);

/** City chips under the home page search bar. */
export const CityChipsSkeleton = () => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    {Array.from({ length: 3 }).map((_, i) => (
      <Skeleton key={i} className="h-7 w-24 rounded-full" />
    ))}
  </div>
);

/** Horizontal card used on the search results page. */
export const SearchResultCardSkeleton = () => (
  <div className="grid lg:grid-cols-[2fr_3fr] gap-5">
    <AspectRatio ratio={16 / 6}>
      <Skeleton className="h-full w-full" />
    </AspectRatio>
    <div className="flex flex-col gap-3">
      <Skeleton className="h-8 w-2/3" />
      <div className="grid md:grid-cols-2 gap-2">
        <Skeleton className="h-5 w-3/4" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-40" />
        </div>
      </div>
    </div>
  </div>
);

export const SearchPageSkeleton = () => (
  <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
    <div className="flex flex-col gap-3">
      <Skeleton className="h-6 w-32" />
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="h-5 w-40" />
      ))}
    </div>
    <div className="flex flex-col gap-5">
      <Skeleton className="h-16 w-full rounded-full" />
      <div className="flex justify-between flex-col gap-3 lg:flex-row">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-9 w-44" />
      </div>
      {Array.from({ length: 3 }).map((_, i) => (
        <SearchResultCardSkeleton key={i} />
      ))}
    </div>
  </div>
);

/** Restaurant detail page: banner, info, menu list and order summary. */
export const DetailPageSkeleton = () => (
  <div className="flex flex-col gap-10">
    <AspectRatio ratio={16 / 5}>
      <Skeleton className="h-full w-full" />
    </AspectRatio>
    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,4fr)_minmax(0,2fr)] gap-5 md:px-8 lg:px-32">
      <div className="flex flex-col gap-4">
        <Skeleton className="h-9 w-2/3" />
        <Skeleton className="h-5 w-1/2" />
        <Skeleton className="h-8 w-20" />
        {Array.from({ length: 5 }).map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-5 w-24" />
            </CardContent>
          </Card>
        ))}
      </div>
      <div>
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-full" />
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
          </CardContent>
          <CardFooter>
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>
);

/** A single order block (Order Status page / manage-restaurant orders). */
export const OrderCardSkeleton = () => (
  <div className="space-y-6 rounded-3xl border bg-white p-5 shadow-soft md:p-8">
    <Skeleton className="h-8 w-1/2" />
    <Skeleton className="h-2 w-full rounded-full" />
    <div className="grid gap-8 md:grid-cols-2">
      <div className="flex flex-col gap-3">
        <Skeleton className="h-5 w-48" />
        <Skeleton className="h-5 w-56" />
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-5 w-32" />
      </div>
      <AspectRatio ratio={16 / 5}>
        <Skeleton className="h-full w-full" />
      </AspectRatio>
    </div>
  </div>
);

export const OrderListSkeleton = ({ count = 2 }: { count?: number }) => (
  <div className="space-y-10">
    {Array.from({ length: count }).map((_, i) => (
      <OrderCardSkeleton key={i} />
    ))}
  </div>
);

/** Profile / restaurant forms. */
export const FormSkeleton = ({ fields = 4 }: { fields?: number }) => (
  <div className="flex flex-col gap-4 rounded-3xl border bg-white p-5 shadow-soft md:p-8">
    <Skeleton className="h-8 w-48" />
    <Skeleton className="h-4 w-72 max-w-full" />
    {Array.from({ length: fields }).map((_, i) => (
      <div key={i} className="flex flex-col gap-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-full" />
      </div>
    ))}
    <Skeleton className="h-10 w-28" />
  </div>
);

/** Generic page-level placeholder (auth redirect / route guard). */
export const PageSkeleton = () => (
  <div className="container mx-auto flex flex-col gap-6 py-10">
    <Skeleton className="h-10 w-1/3" />
    <Skeleton className="h-48 w-full" />
    <Skeleton className="h-6 w-2/3" />
    <Skeleton className="h-6 w-1/2" />
  </div>
);
