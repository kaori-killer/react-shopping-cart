import { useState } from "react";

import { useBoolean } from "usehooks-ts";

import trash from "../../assets/svgs/trash.svg";

import Image from "../ui/Image";

import { CartDetail } from "../../types";

import priceFormat from "../../utils/PriceFormat";

import { useOrderPayListContext } from "../../hooks/useOrderPayListContext";

function Quantity() {
  return (
    <div className="number-input-container">
      <input type="number" className="number-input" value="1" />
      <div>
        <button className="number-input-button">▲</button>
        <button className="number-input-button">▼</button>
      </div>
    </div>
  );
}

function Price({ price }) {
  return <span className="cart-price">{priceFormat(price)}원</span>;
}

type CartContentProps = {
  cart: CartDetail;
};

export default function CartContent({ cart }: CartContentProps) {
  const { product } = cart;
  const { value: isChecked, toggle } = useBoolean(false);
  const {
    getOrderPayList,
    addProductToOrderPayList,
    updateProductInOrderPayList,
    deleteProductFromOrderPayList,
  } = useOrderPayListContext();

  const handleToggleProductSelection = () => {
    toggle();

    isChecked
      ? addProductToOrderPayList(product)
      : deleteProductFromOrderPayList(product.id);

    console.log(getOrderPayList());
  };

  return (
    <div className="cart-container">
      <div className="flex gap-15 mt-10">
        <input
          className="checkbox"
          name="checkbox"
          type="checkbox"
          defaultChecked={isChecked}
          onClick={handleToggleProductSelection}
        />
        <Image
          variant="small"
          src={product.imageUrl}
          alt="PET보틀-정사각(420ml)"
        />
        <span className="cart-name">{product.name}</span>
      </div>
      <div className="flex-col-center justify-end gap-15">
        <img className="cart-trash-svg" src={trash} alt="삭제" />
        <Quantity />
        <Price price={product.price} />
      </div>
    </div>
  );
}
