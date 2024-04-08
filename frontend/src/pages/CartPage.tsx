import Header from "../components/cart-list/Header";
import CartList from "../components/cart-list/CartList";
import CartSection from "../components/cart-list/CartSection";

export default function CartPage() {
  return (
    <section className="cart-section">
      <Header />
      <div className="flex">
        <CartList />
        <CartSection />
      </div>
    </section>
  );
}
