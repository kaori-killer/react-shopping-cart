export type ProductDetail = {
  id: number;
  price: number;
  imageUrl: string;
  name: string;
};

export type CartDetail = {
  id: number;
  product: ProductDetail;
};
