import { Product } from "../../typings/defaultTypes";
import { SET_PRODUCTS } from "./types";

export const setProducts = (products: Product) => ({
  type: SET_PRODUCTS,
  action: products,
});
