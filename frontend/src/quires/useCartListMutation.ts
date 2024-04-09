import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { QUERY_KEY as cartQueryKey } from "./useCartListQuery";

import { ProductDetail } from "../types";

const BASE_URL = "http://localhost:3003";

const fetcher = (product: ProductDetail) =>
  axios.post(`${BASE_URL}/carts`, { product });

const useCartListMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(fetcher, {
    onSuccess: () => queryClient.invalidateQueries(cartQueryKey),
  });
};

export default useCartListMutation;
