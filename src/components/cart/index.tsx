import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import { ShoppingCartIcon, XIcon, TrashIcon } from "lucide-react";
import { useCartStore } from "@/stores/cart";
import { formatMoney } from "@/utils/formatMoney";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export function Cart({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  // Acessa o estado do carrinho individualmente para evitar re-renderizações desnecessárias
  const totalItems = useCartStore((state) => state.totalItems);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const items = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  useEffect(() => {
    // Fecha o carrinho automaticamente se não houver itens
    if (totalItems === 0) {
      setIsOpen(false);
    }
  }, [totalItems, setIsOpen]);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent className="mx-auto max-w-md md:max-w-xl h-[100vh] flex flex-col bg-card">
        <DrawerHeader className="flex-shrink-0 border-b">
          <div className="flex items-center justify-between">
            <div>
              <DrawerTitle className="text-xl text-start">Carrinho</DrawerTitle>
              <DrawerDescription className="flex items-center gap-2 mt-1">
                <ShoppingCartIcon className="h-4 w-4" />
                {totalItems} item{totalItems > 1 ? "s" : ""}
              </DrawerDescription>
            </div>
            <DrawerClose asChild>
              <Button variant="ghost" size="icon">
                <XIcon className="h-5 w-5" />
              </Button>
            </DrawerClose>
          </div>
        </DrawerHeader>
        {/* Lista de itens no carrinho */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-muted p-4 rounded-lg"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-sm max-w-[calc(100%-3rem)] truncate">
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {formatMoney(item.price)} x {item.quantity}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-sm text-green-600">
                    {formatMoney(item.price * item.quantity)}
                  </p>
                </div>
                <Button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-white bg-red-600 hover:bg-red-700 p-2 rounded-lg"
                >
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0 p-4 border-t bg-background">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-xl font-bold text-green-600">
              {formatMoney(totalPrice)}
            </span>
          </div>
          <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 py-3 rounded-lg">
            Finalizar Pedido
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default Cart;
