import { PropsWithChildren, createContext, useState } from "react";

import { OrderPayDetail, ProductDetail } from "../types";

type InitialOrderPayList = {
  getOrderPayList: () => OrderPayDetail[];
  addProductToOrderPayList: (product: ProductDetail) => void;
  updateProductInOrderPayList: (product: ProductDetail) => void;
  deleteProductFromOrderPayList: (id: number) => void;
  getPrice: (product: ProductDetail) => number;
  getQuantity: () => number;
  updateQuantity: (newQuantity: number) => void;
};

const initialOrderPayList: InitialOrderPayList = {
  getOrderPayList: () => [],
  addProductToOrderPayList: () => null,
  updateProductInOrderPayList: () => null,
  deleteProductFromOrderPayList: () => null,
  getPrice: () => 0,
  getQuantity: () => 0,
  updateQuantity: () => null,
};

export const OrderPayListContext = createContext(initialOrderPayList);

export default function OrderPayListProvider({ children }: PropsWithChildren) {
  const [orderPayList, setOrderPayList] = useState<OrderPayDetail[]>([]);
  const [quantity, setQuantity] = useState(1);

  const getOrderPayList = (): OrderPayDetail[] => {
    return orderPayList;
  };

  const addProductToOrderPayList = (product: ProductDetail) => {
    setOrderPayList([{ ...product, quantity }, ...orderPayList]);
  };

  const updateProductInOrderPayList = (product: ProductDetail) => {
    const newOrderPayList = orderPayList.map((preProduct) =>
      preProduct.id != product.id ? preProduct : { ...product, quantity }
    );
    setOrderPayList(newOrderPayList);
  };

  const deleteProductFromOrderPayList = (id: number) => {
    setOrderPayList(orderPayList.filter((preProduct) => preProduct.id != id));
  };

  const getPrice = (product: ProductDetail) => {
    return product.price * quantity;
  };

  const getQuantity = () => {
    return quantity;
  };

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity <= 0) {
      return;
    }

    setQuantity(newQuantity);
  };

  return (
    <OrderPayListContext.Provider
      value={{
        getOrderPayList,
        addProductToOrderPayList,
        updateProductInOrderPayList,
        deleteProductFromOrderPayList,
        getPrice,
        getQuantity,
        updateQuantity,
      }}
    >
      {children}
    </OrderPayListContext.Provider>
  );
}
