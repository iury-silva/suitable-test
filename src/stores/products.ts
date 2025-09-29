import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ProductsResponse, Category } from "@/types/products";

interface ProductsState {
  products: ProductsResponse;
  categories: Category[];
  setProducts: (products: ProductsResponse) => void;
  updateProductQuantity: (id: string, quantity: number) => void;
  clearProducts: () => void;
}

export const useProductsStore = create<ProductsState>()(
  persist(
    (set) => ({
      products: { products: [] },
      categories: [],
      setProducts: (products) => {
        const categories = Array.from(
          new Map(
            products.products.map((p) => [
              p.category_id,
              {
                category_id: p.category_id,
                category_name: p.category_name,
                category_image_url: p.category_image_url,
                category_order: p.category_order,
              },
            ])
          ).values()
        ).sort((a, b) => a.category_order - b.category_order);

        set({ products, categories });
      },
      updateProductQuantity: (id, quantity) =>
        set((state) => ({
          products: {
            products: state.products.products.map((product) =>
              String(product.id) === id ? { ...product, quantity } : product
            ),
          },
        })),
      clearProducts: () => set({ products: { products: [] }, categories: [] }),
    }),
    {
      name: "products-storage",
    }
  )
);
