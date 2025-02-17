import { http, HttpResponse } from "msw";
import buyerTypes from "./responseMocks/buyerTypes";
import products from "./responseMocks/products";

const API_URL: string = import.meta.env.VITE_API || "";

export const handlers = [
  http.get(`${API_URL}/buyerTypes`, () => {
    return HttpResponse.json(buyerTypes);
  }),
  http.get(`${API_URL}/products`, () => {
    return HttpResponse.json(products);
  }),
];
