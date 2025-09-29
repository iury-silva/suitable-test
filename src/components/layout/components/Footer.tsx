import { ShoppingCartIcon } from "lucide-react";
import { useCartStore } from "@/stores/cart";
import { formatMoney } from "@/utils/formatMoney";
import Cart from "@/components/cart";
import { useState } from "react";

export const Footer = () => {
  const { getTotalItems, getTotalPrice } = useCartStore();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {getTotalItems() > 0 && (
        <div
          className="sticky bottom-0 w-full bg-brand-primary text-white p-4 flex justify-between items-center cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <div className="relative">
            <ShoppingCartIcon className="h-8 w-8" />
            <div className="absolute -top-2 -right-2 bg-red-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              {getTotalItems()}
            </div>
          </div>
          <div className="flex-1">
            <p className="text-center font-semibold">Ver carrinho</p>
          </div>
          <div className="text-sm font-bold">
            <p className="text-sm">Total:</p>
            <p>{formatMoney(getTotalPrice())}</p>
          </div>
        </div>
      )}
      <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default { Footer };
