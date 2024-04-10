import { useState } from "react";

export const useProductForm = () => {
  const [quantity, setQuantity] = useState(1);

  const getTotalPrice = (price: number) => {
    return price * quantity;
  };

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity <= 0) {
      return;
    }

    setQuantity(newQuantity);
  };

  return { getTotalPrice, updateQuantity, quantity };
};
