import Layout from "./components/Layout";
import ProductTable from "./components/products/ProductTable";

const routes = [
  {
    element: <Layout />,
    children: [{ path: "/", element: <ProductTable /> }],
  },
];

export default routes;
