import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartState } from "@/types/cart";

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,

      recalc: (items) => ({
        items,
        totalItems: items.reduce((total, item) => total + item.quantity, 0),
        totalPrice: items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
      }),

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
          return get().recalc([...state.items, item]);
        }),

      removeFromCart: (id) =>
        set((state) =>
          get().recalc(state.items.filter((item) => item.id !== id))
        ),

      updateProductQuantity: (id, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            return {
              items: state.items.filter((item) => item.id !== id),
            };
          }
          return get().recalc(
            state.items.map((item) =>
              item.id === id ? { ...item, quantity } : item
            )
          );
        }),

      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
    }
  )
);
