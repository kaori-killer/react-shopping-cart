import Product from "./Product";

export default function ProductTable() {
  return (
    <section className="product-container">
      {new Array(16).fill(0).map((_, i) => (
        <Product key={i} />
      ))}
    </section>
  );
}
