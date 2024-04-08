import axios from "axios";
import { useQuery } from "react-query";

import { ProductDetail } from "../types";

export const QUERY_KEY = "/products";

const BASE_URL = "http://localhost:3003";

const fetcher = () =>
  axios.get<ProductDetail[]>(`${BASE_URL}/products`).then(({ data }) => {
    return data;
  });

const useProductsQuery = () => {
  return useQuery(`/products`, fetcher);
};

export default useProductsQuery;
