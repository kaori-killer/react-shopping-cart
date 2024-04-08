import Image from "../Image";

import { ProductDetail } from "../../types";

import cart from "../../assets/svgs/cart.svg";
import { useNavigate } from "react-router-dom";

type ProductItemProps = {
  product: ProductDetail;
};

export default function ProductItem({ product }: ProductItemProps) {
  const navigate = useNavigate();
  const productPrice = product.price.toLocaleString();

  const handleClickProductItem = () => {
    navigate(`/products/${product.id}`);
  };

  const handleClickAddCard = () => {
    confirm("장바구니에 추가되었습니다.");
  };

  return (
    <div>
      <div onClick={handleClickProductItem}>
        <Image variant="default" src={product.imageUrl} alt={product.name} />
      </div>
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{product.name}</span>
          <span className="product-info__price">{productPrice}원</span>
        </div>
        <button type="button" onClick={handleClickAddCard}>
          <img src={cart} alt="장바구니" />
        </button>
      </div>
    </div>
  );
}
