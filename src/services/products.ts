import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";
import type { ProductsResponse } from "@/types/products";


export const fetchProducts = async (): Promise<ProductsResponse> => {
  const response = await api.get<ProductsResponse>(
    "/estoque/v2/app/products/list/?app_variant=mobile"
  );
  return response;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
  });
};