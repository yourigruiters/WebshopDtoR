import { SET_PRODUCTS } from "./types";
import { ReduxActionState } from "../../typings/state";
import { Product } from "../../typings/defaultTypes";

export interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [
    { id: 1, title: "Product 1", content: "Content...", price: 39.99 },
    { id: 2, title: "Product 2", content: "Content...", price: 29.99 },
    { id: 3, title: "Product 3", content: "Content...", price: 19.99 },
    { id: 4, title: "Product 4", content: "Content...", price: 25.99 },
  ],
};

const themeReducer = (state = initialState, action: ReduxActionState) => {
  const { type } = action;

  switch (type) {
    case SET_PRODUCTS: {
      return {
        ...state,
        products: action,
      };
    }
    default: {
      return state;
    }
  }
};

export default themeReducer;
