import { PropsWithChildren, createContext, useState } from "react";

import { OrderPayDetail } from "../types";

type InitialOrderPayList = {
  getOrderPayList: () => OrderPayDetail[];
  addOrderPayList: (orderPayDetail: OrderPayDetail) => void;
};

const initialOrderPayList: InitialOrderPayList = {
  getOrderPayList: () => [],
  addOrderPayList: () => null,
};

export const OrderPayListContext = createContext(initialOrderPayList);

export default function OrderPayListProvider({ children }: PropsWithChildren) {
  const [orderPayList, setOrderPayList] = useState<OrderPayDetail[]>([]);

  const getOrderPayList = (): OrderPayDetail[] => {
    return orderPayList;
  };

  const addOrderPayList = (orderPayDetail: OrderPayDetail) => {
    setOrderPayList([orderPayDetail, ...orderPayList]);
  };

  return (
    <OrderPayListContext.Provider
      value={{
        getOrderPayList,
        addOrderPayList,
      }}
    >
      {children}
    </OrderPayListContext.Provider>
  );
}
