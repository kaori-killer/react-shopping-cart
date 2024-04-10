import { PropsWithChildren, createContext, useState } from "react";

import { OrderPayDetail, ProductDetail } from "../types";

type InitialOrderPayList = {
  getOrderPayList: () => OrderPayDetail[];
  addProductToOrderPayList: (product: ProductDetail, quantity: number) => void;
  updateProductInOrderPayList: (
    product: ProductDetail,
    quantity: number
  ) => void;
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

  const addProductToOrderPayList = (
    product: ProductDetail,
    quantity: number
  ) => {
    setOrderPayList([{ ...product, quantity }, ...orderPayList]);
  };

  const updateProductInOrderPayList = (
    product: ProductDetail,
    quantity: number
  ) => {
    const newOrderPayList = orderPayList.map((preProduct) =>
      preProduct.id != product.id ? preProduct : { ...product, quantity }
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
