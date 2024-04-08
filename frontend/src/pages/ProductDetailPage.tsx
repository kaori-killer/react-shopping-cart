import { useParams } from "react-router-dom";

import Product from "../components/product-detail/Product";

export default function ProductDetailPage() {
  const { id } = useParams();
  const productId = Number(id);

  if (!productId) {
    return null;
  }

  return <Product productId={productId} />;
}
