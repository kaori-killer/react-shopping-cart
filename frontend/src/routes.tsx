import Layout from "./components/Layout";

import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";
import OrderDetailPage from "./pages/OrderDetailPage";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <ProductListPage /> },
      { path: "/products", element: <ProductListPage /> },
      { path: "/products/:id", element: <ProductDetailPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/orders", element: <OrderPage /> },
      { path: "/orders/:id{", element: <OrderDetailPage /> },
    ],
  },
];

export default routes;
