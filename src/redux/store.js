import { configureStore, compose, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducers";

const middleware = [thunk];

const composeEnhancers = compose;

const store = configureStore(
  { reducer: rootReducer },
  {},
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
