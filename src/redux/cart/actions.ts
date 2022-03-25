import { Product } from "../../typings/defaultTypes";
import { ADD_TO_CART, CHANGE_PRODUCT_AMOUNT, REMOVE_FROM_CART } from "./types";

export const addToCart = (product: Product) => ({
  type: ADD_TO_CART,
  action: product,
});

export const changeProductAmount = (id: number, amount: number) => ({
  type: CHANGE_PRODUCT_AMOUNT,
  action: {
    id,
    amount,
  },
});

export const removeFromCart = (id: number) => ({
  type: REMOVE_FROM_CART,
  action: id,
});
