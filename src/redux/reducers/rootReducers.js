import { combineReducers } from "redux";
import cart from "./cart";
import getProductItems from "./getProductItems";
import productsListLoading from "./productsListLoading";

const rootReducer = combineReducers({
  cart,
  getProductItems,
  productsListLoading,
});

export default rootReducer;
