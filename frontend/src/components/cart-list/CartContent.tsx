import { useBoolean } from "usehooks-ts";

import trash from "../../assets/svgs/trash.svg";

import Image from "../ui/Image";

import { CartDetail } from "../../types";

import priceFormat from "../../utils/PriceFormat";

import { useOrderPayListContext } from "../../hooks/useOrderPayListContext";
import { useProductForm } from "../../hooks/useProductForm";

type QuantityProps = {
  quantity: number;
  updateQuantity: (newQuantity: number) => void;
};

function Quantity({ quantity, updateQuantity }: QuantityProps) {
  const handleClickIncrease = () => {
    updateQuantity(quantity + 1);
  };

  const handleClickDecrease = () => {
    updateQuantity(quantity - 1);
  };

  return (
    <div className="number-input-container">
      <input type="number" className="number-input" value={quantity} />
      <div>
        <button className="number-input-button" onClick={handleClickIncrease}>
          ▲
        </button>
        <button className="number-input-button" onClick={handleClickDecrease}>
          ▼
        </button>
      </div>
    </div>
  );
}

type PriceProps = {
  totalPrice: number;
};

function Price({ totalPrice }: PriceProps) {
  return <span className="cart-price">{priceFormat(totalPrice)}원</span>;
}

type CartContentProps = {
  cart: CartDetail;
};

export default function CartContent({ cart }: CartContentProps) {
  const { product } = cart;
  const { value: isChecked, toggle } = useBoolean(false);
  const { getTotalPrice, updateQuantity, quantity } = useProductForm();
  const { addProductToOrderPayList, deleteProductFromOrderPayList } =
    useOrderPayListContext();

  const handleToggleProductSelection = () => {
    toggle();

    const quantity = getQuantity();

    isChecked
      ? addProductToOrderPayList(product, quantity)
      : deleteProductFromOrderPayList(product.id);
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
        <Quantity quantity={quantity} updateQuantity={updateQuantity} />
        <Price totalPrice={getTotalPrice(product.price)} />
      </div>
    </div>
  );
}
