import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartState } from "@/types/cart";

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addToCart: (item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }
          return { items: [...state.items, item] };
        }),
        
      removeFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
        
      updateProductQuantity: (id, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            return {
              items: state.items.filter((item) => item.id !== id),
            };
          }
          return {
            items: state.items.map((item) =>
              item.id === id ? { ...item, quantity } : item
            ),
          };
        }),
        
      getTotalItems: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),
        
      getTotalPrice: () =>
        get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
        
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);