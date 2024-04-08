import { useBoolean } from "usehooks-ts";

import Image from "../Image";

import { ProductDetail } from "../../types";

import cart from "../../assets/svgs/cart.svg";
import { useNavigate } from "react-router-dom";

type ProductItemProps = {
  product: ProductDetail;
};
export default function ProductItem({ product }: ProductItemProps) {
  const navigate = useNavigate();
  const { value: isSelect, toggle } = useBoolean(false);
  const productPrice = product.price.toLocaleString();

  const handleClickProductItem = () => {
    // navigate(`/products/${}`);
  };
  const handleClickButton = () => {
    toggle();
  };

  return (
    <div onClick={handleClickProductItem}>
      <Image variant="default" src={product.imageUrl} alt={product.name} />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{product.name}</span>
          <span className="product-info__price">{productPrice}원</span>
        </div>
        {isSelect ? (
          <p>✅</p>
        ) : (
          <img src={cart} alt="장바구니" onClick={handleClickButton} />
        )}
      </div>
    </div>
  );
}
