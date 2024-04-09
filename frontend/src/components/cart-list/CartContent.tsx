import { useState } from "react";

import { useBoolean } from "usehooks-ts";

import trash from "../../assets/svgs/trash.svg";

import Image from "../ui/Image";

import { CartDetail, OrderPayDetail } from "../../types";

import priceFormat from "../../utils/PriceFormat";

import { useOrderPayListContext } from "../../hooks/useOrderPayListContext";

type CartContentProps = {
  cart: CartDetail;
};

const DEFAULT_QUANTITY = 1;

export default function CartContent({ cart }: CartContentProps) {
  const { product } = cart;
  const { value: isChecked, toggle } = useBoolean(false);
  const [quantity, setQuantity] = useState(DEFAULT_QUANTITY);
  const {
    getOrderPayList,
    addProductToOrderPayList,
    updateProductInOrderPayList,
    deleteProductFromOrderPayList,
  } = useOrderPayListContext();

  const handleToggleProductSelection = () => {
    toggle();

    if (isChecked) {
      addProductToOrderPayList({ ...product, quantity });
    }

    if (!isChecked) {
      deleteProductFromOrderPayList(product.id);
    }

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
        <div className="number-input-container">
          <input
            type="number"
            className="number-input"
            value={DEFAULT_QUANTITY}
          />
          <div>
            <button className="number-input-button">▲</button>
            <button className="number-input-button">▼</button>
          </div>
        </div>
        <span className="cart-price">{priceFormat(product.price)}원</span>
      </div>
    </div>
  );
}
