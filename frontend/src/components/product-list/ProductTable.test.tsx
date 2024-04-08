import { render, screen, waitFor } from "@testing-library/react";

import ProductTable from "./ProductList";

test("ProductTable", async () => {
  render(<ProductTable />);

  await waitFor(() => {
    screen.getByText("Apple");
  });
});
