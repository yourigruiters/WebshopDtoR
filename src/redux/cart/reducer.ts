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
      return {
        ...state,
        cart: action,
      };
    }
    case CHANGE_PRODUCT_AMOUNT: {
      return {
        ...state,
        cart: action,
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart: action,
      };
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
