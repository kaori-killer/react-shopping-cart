import Layout from "./components/Layout";

import IntroPage from "./pages/IntroPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";

const routes = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <IntroPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/order", element: <OrderPage /> },
    ],
  },
];

export default routes;
