import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import OrderPayListProvider from "./context/OrderPayListProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <OrderPayListProvider>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </OrderPayListProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
