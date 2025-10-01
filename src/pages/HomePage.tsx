import { useProducts } from "@/services/products";
import { Products } from "@/components/products";
import { Skeleton } from "@/components/ui/skeleton";

export const HomePage = () => {
  const { data, isLoading: isLoadingProducts } = useProducts();

  // Extrai categorias únicas dos produtos para exibição de seções separadas por categoria
  const categories = data
    ? Array.from(
        // Map para garantir que cada categoria seja única e remover duplicatas
        new Map(
          data.products.map((p) => [
            p.category_id, // Chave única para cada categoria
            {
              category_id: p.category_id,
              category_name: p.category_name,
              category_image_url: p.category_image_url,
              category_order: p.category_order,
            },
          ])
        ).values()
      ).sort((a, b) => a.category_order - b.category_order)
    : [];

  // Agrupa os produtos por categoria para exibição separada em cada seção
  const productsByCategory = data
    ? categories.reduce((acc, category) => {
        acc[category.category_id] = data.products.filter(
          (p) => p.category_id === category.category_id
        );
        return acc;
      }, {} as Record<string, typeof data.products>)
    : {};

  // Exibe skeletons enquanto os produtos estão carregando
  if (isLoadingProducts) {
    return (
      <div className="space-y-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index}>
            <div className="bg-accent/30 rounded-lg p-4 mb-4">
              <Skeleton className="h-6 w-1/3 mb-4" />
            </div>
            <div className="grid grid-cols-1 gap-4">
              {Array.from({ length: 4 }).map((_, idx) => (
                <Skeleton key={idx} className="h-40 w-full" />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Se não houver produtos, exibe uma mensagem informando
  if (!data || data.products.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        Nenhum produto disponível.
      </p>
    );
  }

  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category.category_id} className="relative">
          <h2 className="sticky top-0 text-xl font-semibold mb-4 p-4 bg-brand-primary text-white shadow-2xl rounded-lg">
            {category.category_name}
          </h2>
          <Products
            products={{
              products: productsByCategory[category.category_id] || [],
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
