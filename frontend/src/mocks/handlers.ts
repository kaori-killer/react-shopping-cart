import { rest } from "msw";

const BASE_URL = "http://localhost:3003";

const handlers = [
  rest.get(`${BASE_URL}/products`, (req, res, ctx) => {
    const products = [
      {
        category: "Fruits",
        price: "$1",
        stocked: true,
        name: "Apple",
      },
    ];

    return res(ctx.status(200), ctx.json({ products }));
  }),
];

export default handlers;
