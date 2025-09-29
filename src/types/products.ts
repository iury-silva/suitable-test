export interface Product {
  id: number;
  product_type: 'product' | 'combo';
  name: string;
  details: string;
  url_image: string;
  category_id: number;
  category_name: string;
  category_image_url: string;
  category_order: number;
  price: number;
  promotional_price: number | null;
  internal_code: string | null;
  tags: string[];
  is_kilo: boolean;
  order: number;
}

export interface Category {
  category_id: number;
  category_name: string;
  category_image_url: string;
  category_order: number;
}

export interface Combo extends Omit<Product, 'product_type' | 'details' | 'internal_code' | 'tags' | 'is_kilo'> {
  product_type: 'combo';
  details: string;
  max_price: number;
  is_promotion: boolean;
  combo_has_pizza: boolean;
}

export type ProductsResponse = {
  products: (Product | Combo)[];
};