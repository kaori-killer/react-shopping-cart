import axios from "axios";
import { useQuery } from "react-query";

import { CartDetail } from "../types";

export const QUERY_KEY = "/carts";

const BASE_URL = "http://localhost:3003";

const fetcher = () =>
  axios.get<CartDetail[]>(`${BASE_URL}/carts`).then(({ data }) => {
    return data;
  });

const useCartListQuery = () => {
  return useQuery(QUERY_KEY, fetcher);
};

export default useCartListQuery;
