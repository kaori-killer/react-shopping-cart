import Layout from "./components/Layout";

import IntroPage from "./pages/IntroPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import OrderDetailPage from "./pages/OrderDetailPage";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/products", element: <IntroPage /> },
      { path: "/products/:id", element: <ProductDetailPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/orders", element: <OrderPage /> },
      { path: "/orders/:id{", element: <OrderDetailPage /> },
    ],
  },
];

export default routes;
