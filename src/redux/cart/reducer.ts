import { ADD_TO_CART, CHANGE_PRODUCT_AMOUNT, REMOVE_FROM_CART } from "./types";
import { ReduxActionState } from "../../typings/state";
import { CartProduct } from "../../typings/defaultTypes";

export interface CartState {
  cart: CartProduct[];
}

const initialState: CartState = {
  cart: [],
};

const themeReducer = (state = initialState, action: ReduxActionState) => {
  const { type } = action;

  switch (type) {
    case ADD_TO_CART: {
      const newCart = [
        ...state.cart,
        { productID: action.payload.id, amount: action.payload.amount },
      ];

      return {
        ...state,
        cart: newCart,
      };
    }

    case CHANGE_PRODUCT_AMOUNT: {
      const newCart = state.cart.filter((cartItem) => {
        if (cartItem.productID === action.payload.id) {
          cartItem.amount = action.payload.amount;
        }

        return cartItem;
      });

      return {
        ...state,
        cart: newCart,
      };
    }

    case REMOVE_FROM_CART: {
      const newCart = state.cart.filter(
        (cartItem) => cartItem.productID !== action.payload.id
      );

      return {
        ...state,
        cart: newCart,
      };
    }

    default: {
      return state;
    }
  }
};

export default themeReducer;
