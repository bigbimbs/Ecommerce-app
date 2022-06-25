import { combineReducers } from "redux";
import cart from "./cart";
import getProductItems from "./getProductItems";
import productsListLoading from "./productsListLoading";
import getCurrency from "./getCurrency";

const rootReducer = combineReducers({
  cart,
  getProductItems,
  productsListLoading,
  getCurrency,
});

export default rootReducer;
