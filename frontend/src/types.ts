export interface Image {
  url: string;
}

export interface ProductDetail {
  id: number;
  price: number;
  imageUrl: Image;
  name: string;
}

export interface CartDetail {
  id: number;
  product: ProductDetail;
}
