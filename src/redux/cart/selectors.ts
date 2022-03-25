import { ReduxState } from "../../typings/state";
import { createSelector } from "reselect";
import { get } from "lodash";

const selectCartData = (state: ReduxState) => get(state, "cart");

export const selectCart = createSelector(selectCartData, (cartData) =>
  get(cartData, "cart")
);
