import { PropsWithChildren, createContext, useState } from "react";

import { OrderPayDetail } from "../types";

type InitialOrderPayList = {
  getOrderPayList: () => OrderPayDetail[];
  addProductToOrderPayList: (product: OrderPayDetail) => void;
  updateProductInOrderPayList: (product: OrderPayDetail) => void;
  deleteProductFromOrderPayList: (id: number) => void;
};

const initialOrderPayList: InitialOrderPayList = {
  getOrderPayList: () => [],
  addProductToOrderPayList: () => null,
  updateProductInOrderPayList: () => null,
  deleteProductFromOrderPayList: () => null,
};

export const OrderPayListContext = createContext(initialOrderPayList);

export default function OrderPayListProvider({ children }: PropsWithChildren) {
  const [orderPayList, setOrderPayList] = useState<OrderPayDetail[]>([]);

  const getOrderPayList = (): OrderPayDetail[] => {
    return orderPayList;
  };

  const addProductToOrderPayList = (product: OrderPayDetail) => {
    setOrderPayList([product, ...orderPayList]);
  };

  const updateProductInOrderPayList = (product: OrderPayDetail) => {
    const newOrderPayList = orderPayList.map((preProduct) =>
      preProduct.id != product.id ? preProduct : product
    );
    setOrderPayList(newOrderPayList);
  };

  const deleteProductFromOrderPayList = (id: number) => {
    setOrderPayList(orderPayList.filter((preProduct) => preProduct.id != id));
  };

  return (
    <OrderPayListContext.Provider
      value={{
        getOrderPayList,
        addProductToOrderPayList,
        updateProductInOrderPayList,
        deleteProductFromOrderPayList,
      }}
    >
      {children}
    </OrderPayListContext.Provider>
  );
}
