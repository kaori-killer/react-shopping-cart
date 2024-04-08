import { render, screen, waitFor } from "@testing-library/react";

import ProductList from "./ProductList";

test("ProductTable", async () => {
  render(<ProductList products={[]} />);

  await waitFor(() => {
    screen.getByText("Apple");
  });
});
