export default function setProductItems(bool) {
  return async (dispatch) => {
    dispatch({ type: "SET_PRODUCT_ITEMS_LOADING", payload: true });
    await dispatch({ type: "SET_PRODUCT_ITEMS", payload: bool });
    dispatch({ type: "SET_PRODUCT_ITEMS_LOADING", payload: false });
  };
}
