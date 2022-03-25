/* eslint-disable @typescript-eslint/no-explicit-any*/
import { ProductsState } from "../redux/products/reducer";
import { CartState } from "../redux/cart/reducer";

export interface ReduxState {
  product: ProductsState;
  cart: CartState;
}

export interface ReduxActionState {
  type: string;
  payload?: any;
}
