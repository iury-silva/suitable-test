import { type ProductsResponse } from "@/types/products";
import { Card, CardTitle } from "../ui/card";
import { formatMoney } from "@/utils/formatMoney";
import { useMemo } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart";

export function Products({ products }: { products: ProductsResponse }) {
  return (
    <div className="flex flex-col gap-3">
      {products.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({
  product,
}: {
  product: ProductsResponse["products"][number];
}) {
  // Acessa as funções e estado individualmente para evitar re-renderizações desnecessárias
  const addToCart = useCartStore((state) => state.addToCart);
  const updateProductQuantity = useCartStore(
    (state) => state.updateProductQuantity
  );
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const items = useCartStore((state) => state.items);

  // Memoiza a quantidade para evitar cálculos desnecessários
  const quantity = useMemo(() => {
    const item = items.find((item) => item.id === product.id);
    return item ? item.quantity : 0;
  }, [items, product.id]);

  // Funções para aumentar e diminuir a quantidade do produto no carrinho
  const increase = () => {
    const newQuantity = quantity + 1;
    const productId = product.id;
    if (quantity === 0) {
      addToCart({
        id: productId,
        name: product.name,
        price: product.promotional_price || product.price, // Usa o preço promocional se disponível
        quantity: 1,
      });
    } else {
      updateProductQuantity(productId, newQuantity); // Atualiza a quantidade existente
    }
  };

  const decrease = () => {
    if (quantity <= 0) return;

    const newQuantity = quantity - 1;
    const productId = product.id;

    // Se a nova quantidade for 0, remove o item do carrinho
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      updateProductQuantity(productId, newQuantity); // Atualiza a quantidade existente
    }
  };

  return (
    <Card className="bg-card text-card-foreground flex flex-row items-stretch gap-4 p-0">
      <div className="w-36 sm:w-1/3 aspect-square overflow-hidden rounded-l-2xl">
        <img
          src={product.url_image}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between gap-2">
        <div className="flex flex-col gap-1">
          <CardTitle className="md:text-base text-sm">{product.name}</CardTitle>
          <span className="text-xs sm:text-xs text-muted-foreground line-clamp-3">
            {product.details}
          </span>
        </div>

        <div className="flex items-center justify-between mt-2">
          {/* Se o produto tiver um preço promocional, exibe ambos os preços */}
          {product.promotional_price ? (
            <div className="flex flex-col">
              <span className="text-green-600 font-medium text-xs sm:text-base mr-2">
                {formatMoney(product.promotional_price)}
              </span>
              <span className="text-muted-foreground line-through text-xs sm:text-sm">
                {formatMoney(product.price)}
              </span>
            </div>
          ) : (
            <span className="text-green-600 font-medium text-xs md:text-base mr-2">
              {formatMoney(product.price)}
            </span>
          )}

          <div className="flex items-center gap-2">
            <Button
              onClick={decrease}
              variant="outline"
              className="flex items-center justify-center rounded-full border border-muted-foreground md:w-8 md:h-8 w-7 h-7"
            >
              <MinusIcon className="w-4 h-4" />
            </Button>

            <span className="w-6 text-center text-sm sm:text-base">
              {quantity}
            </span>

            <Button
              onClick={increase}
              className="flex items-center justify-center rounded-full bg-brand-primary hover:bg-brand-primary/90 md:w-8 md:h-8 w-7 h-7"
            >
              <PlusIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Products;
