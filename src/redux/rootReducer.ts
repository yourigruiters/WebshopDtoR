import productsReducer from "./products/reducer";
import cartReducer from "./cart/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  theme: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
