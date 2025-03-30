export interface IProduct {
  _id: string;
  name: string;
  description: string;
  image: string;
  category?: string;
  quantity?: number;
  price: number;
}