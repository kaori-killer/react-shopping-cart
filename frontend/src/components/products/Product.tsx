import { useBoolean } from "usehooks-ts";

import product from "../../assets/images/product.png";
import cart from "../../assets/svgs/cart.svg";

import Img from "../Img";

export default function Product() {
  const { value: isSelect, toggle } = useBoolean(false);

  const handleClickSelect = () => {
    toggle();
  };

  return (
    <div>
      <Img variant="default" src={product} alt="PET보틀-정사각(420ml)" />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">PET보틀-정사각(420ml)</span>
          <span className="product-info__price">43,000원</span>
        </div>
        {isSelect ? (
          <p>✅</p>
        ) : (
          <img src={cart} alt="장바구니" onClick={handleClickSelect} />
        )}
      </div>
    </div>
  );
}
