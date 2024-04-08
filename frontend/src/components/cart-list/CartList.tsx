import product from "../../assets/images/product.png";
import trash from "../../assets/svgs/trash.svg";

export default function CartList() {
  return (
    <section className="cart-left-section">
      <div className="flex justify-between items-center">
        <div className="checkbox-container">
          <input
            className="checkbox"
            name="checkbox"
            type="checkbox"
            checked={true}
          />
          <label className="checkbox-label" htmlFor="checkbox">
            선택해제
          </label>
        </div>
        <button className="delete-button">상품삭제</button>
      </div>
      <h3 className="cart-title">든든배송 상품(3개)</h3>
      <hr className="divide-line-gray mt-10" />
      <div className="cart-container">
        <div className="flex gap-15 mt-10">
          <input
            className="checkbox"
            name="checkbox"
            type="checkbox"
            checked={true}
          />
          <img src={product} alt="PET보틀-정사각(420ml)" />
          <span className="cart-name">PET보틀-정사각(420ml)</span>
        </div>
        <div className="flex-col-center justify-end gap-15">
          <img className="cart-trash-svg" src={trash} alt="삭제" />
          <div className="number-input-container">
            <input type="number" className="number-input" value="1" />
            <div>
              <button className="number-input-button">▲</button>
              <button className="number-input-button">▼</button>
            </div>
          </div>
          <span className="cart-price">123,456원</span>
        </div>
      </div>
      <hr className="divide-line-thin mt-10" />
    </section>
  );
}
