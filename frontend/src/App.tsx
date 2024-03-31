import product from './assets/images/product.png';
import cart from './assets/svgs/cart.svg';

import Img from './components/Img';

function Product() {
  return (
    <div>
      <Img variant="default" src={product} alt="PET보틀-정사각(420ml)" />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">PET보틀-정사각(420ml)</span>
          <span className="product-info__price">43,000원</span>
        </div>
        <img src={cart} alt="장바구니" /> 
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="root">
      <nav className="nav flex justify-around">
        <div className="flex-center">
          <h1 className="nav-title">CLEAN CODE SHOP</h1>
        </div>
        <div className="flex gap-15">
          <button className="nav-button">장바구니</button>
          <button className="nav-button">주문목록</button>
        </div>
      </nav>
      <section className="product-container">
        {new Array(16).fill(0).map((_, i) => (
          <Product key={i} />
        ))}
      </section>
    </div>
  )
}
