import { ReduxState } from "../../typings/state";
import { createSelector } from "reselect";
import { get } from "lodash";

const selectProductsData = (state: ReduxState) => get(state, "products");

export const selectProducts = createSelector(
  selectProductsData,
  (productData) => get(productData, "products")
);
