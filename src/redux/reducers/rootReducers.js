import { combineReducers } from "redux";
import cart from "./cart";
import getProductItems from "./getProductItems";

const rootReducer = combineReducers({
  cart,
  getProductItems,
});

export default rootReducer;
