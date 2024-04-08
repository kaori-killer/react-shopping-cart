import { useSearchParams } from "react-router-dom";

import Product from "../components/product-detail/Product";

export default function ProductDetailPage() {
  const params = useSearchParams();

  console.log(params);

  return <Product />;
}
