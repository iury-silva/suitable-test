export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  recalc: (items: CartItem[]) => {
    items: CartItem[];
    totalItems: number;
    totalPrice: number;
  };
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateProductQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}