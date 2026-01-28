export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number | string;
  image_url: string;
  stock_quantity: number;
  category?: string;
  featured?: boolean;
}