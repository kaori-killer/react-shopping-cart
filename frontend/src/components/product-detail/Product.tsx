import product from "../../assets/images/product.png";

import Img from "../Img";
import { useNavigate } from "react-router-dom";

export default function Product() {
  const navigate = useNavigate();

  const handleClickCart = () => {
    navigate("/cart");
  };

  return (
    <div className="product-detail-container">
      <div className="flex-col-center w-520">
        <Img
          variant="big"
          className="mb-10"
          src={product}
          alt="PET보틀-정사각(420ml)"
        />
        <div className="product-detail-info">
          <span className="product-detail-info__name">
            PET보틀-정사각(420ml)
          </span>
          <hr className="divide-line-gray my-20" />
          <div className="flex justify-between">
            <span>금액</span>
            <span className="product-detail-info__price">43,000원</span>
          </div>
        </div>
        <button
          className="product-detail-button flex-center mt-20"
          onClick={handleClickCart}
        >
          장바구니
        </button>
      </div>
    </div>
  );
}
