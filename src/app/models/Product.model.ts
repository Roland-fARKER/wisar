export interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  shopId: string;
  categoryId: string;
  imageUrl: string;
  state: boolean;
  discount?: number;
  discountPrice?: number;
  discountDesc?: number;
}
