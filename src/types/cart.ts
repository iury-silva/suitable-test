export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateProductQuantity: (id: number, quantity: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  clearCart: () => void;
}