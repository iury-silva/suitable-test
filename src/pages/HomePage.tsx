import { useCompany } from "@/services/company";
import { useProducts } from "@/services/products";
import { useCompanyStore } from "@/stores/company";
import { useProductsStore } from "@/stores/products";
import { useEffect } from "react";
import { Products } from "@/components/products";
import { Skeleton } from "@/components/ui/skeleton";

export const HomePage = () => {
  const { data: company } = useCompany();
  const { data: products, isLoading: isLoadingProducts } = useProducts();
  const setProducts = useProductsStore((state) => state.setProducts);
  const setCompany = useCompanyStore((state) => state.setCompany);
  const categories = useProductsStore((state) => state.categories);

  useEffect(() => {
    if (company) {
      setCompany(company);
    }
  }, [company, setCompany]);

  useEffect(() => {
    if (products) {
      setProducts(products);
    }
  }, [products, setProducts]);

  if (isLoadingProducts) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="p-4">
            <Skeleton className="h-6 w-1/3 mb-4" />
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

  return (
    <div className="mx-auto py-8 space-y-8 overflow-visible">
      {categories.map((category) => (
        <div key={category.category_id}>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            {category.category_name}
          </h2>
          <Products
            products={{
              products:
                products?.products.filter(
                  (p) => p.category_id === category.category_id
                ) || [],
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
