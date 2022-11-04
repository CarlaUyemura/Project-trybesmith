export interface Product {
  name: string;
  amount: string;
  orderId?: number;
}

export interface ProductId extends Product {
  id: number;
}