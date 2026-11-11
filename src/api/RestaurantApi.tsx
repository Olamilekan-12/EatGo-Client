import { API_BASE_URL } from "@/lib/api";
import { SearchState } from "@/pages/SearchPage";
import { Restaurant, RestaurantSearchResponse } from "@/types";
import { useQuery } from "react-query";


export const useGetRestaurant = (restaurantId?: string) => {
  const getRestaurantByIdRequest = async (): Promise<Restaurant> => {
    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/${restaurantId}`
    );

    if (!response.ok) {
      throw new Error("Failed to get restaurant");
    }

    return response.json();
  };

  const {
    data: restaurant,
    isLoading,
    isError,
  } = useQuery(["fetchRestaurant", restaurantId], getRestaurantByIdRequest, {
    enabled: !!restaurantId,
    retry: false,
  });

  return { restaurant, isLoading, isError };
};

export const useSearchRestaurants = (
  searchState: SearchState,
  city?: string
) => {
  const createSearchRequest = async (): Promise<RestaurantSearchResponse> => {
    const params = new URLSearchParams();
    params.set("searchQuery", searchState.searchQuery);
    params.set("page", searchState.page.toString());
    params.set("selectedCuisines", searchState.selectedCuisines.join(","));
    params.set("sortOption", searchState.sortOption);

    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${city}?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error("Failed to get restaurant");
    }

    return response.json();
  };

  const { data: results, isLoading } = useQuery(
    ["searchRestaurants", searchState],
    createSearchRequest,
    { enabled: !!city }
  );

  return {
    results,
    isLoading,
  };
};

export const useGetFeaturedRestaurants = (limit = 8) => {
  const request = async (): Promise<Restaurant[]> => {
    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/featured?limit=${limit}`
    );

    if (!response.ok) {
      throw new Error("Failed to get featured restaurants");
    }

    return response.json();
  };

  const { data: restaurants, isLoading } = useQuery(
    ["featuredRestaurants", limit],
    request
  );

  return { restaurants, isLoading };
};

export const useGetCities = () => {
  const request = async (): Promise<{ city: string; count: number }[]> => {
    const response = await fetch(`${API_BASE_URL}/api/restaurant/cities`);

    if (!response.ok) {
      throw new Error("Failed to get cities");
    }

    return response.json();
  };

  const { data: cities, isLoading } = useQuery("restaurantCities", request);

  return { cities, isLoading };
};
