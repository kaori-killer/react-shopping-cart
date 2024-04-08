import ProductList from "../components/product-list/ProductList";
import useProductsQuery from "../quires/useProductsQuery";

export default function ProductListPage() {
  const { data } = useProductsQuery();

  if (!data) {
    return null;
  }

  return <ProductList products={data} />;
}
