import useProductDetailQuery from "../../quires/useProductDetailQuery";

import ProductContent from "./ProductContent";

type ProductProps = {
  productId: number;
};

export default function Product({ productId }: ProductProps) {
  const { data } = useProductDetailQuery(productId);

  if (!data) {
    return null;
  }

  return <ProductContent product={data} />;
}
