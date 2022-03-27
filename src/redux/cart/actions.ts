import { ADD_TO_CART, CHANGE_PRODUCT_AMOUNT, REMOVE_FROM_CART } from "./types";

export const addToCart = (id: number, amount: number) => ({
  type: ADD_TO_CART,
  payload: {
    id,
    amount,
  },
});

export const changeProductAmount = (id: number, amount: number) => ({
  type: CHANGE_PRODUCT_AMOUNT,
  payload: {
    id,
    amount,
  },
});

export const removeFromCart = (id: number) => ({
  type: REMOVE_FROM_CART,
  payload: { id },
});
