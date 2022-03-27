import { Product } from "../../typings/defaultTypes";
import { ADD_TO_CART, CHANGE_PRODUCT_AMOUNT, REMOVE_FROM_CART } from "./types";

export const addToCart = (product: Product, amount: number) => {
  console.log(product);
  return {
    type: ADD_TO_CART,
    payload: {
      product,
      amount,
    },
  };
};

export const changeProductAmount = (id: number, amount: number) => ({
  type: CHANGE_PRODUCT_AMOUNT,
  payload: {
    id,
    amount,
  },
});

export const removeFromCart = (id: number) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
