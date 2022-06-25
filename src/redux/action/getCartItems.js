export default function getCartItems(item) {
  return {
    type: "GET_CART_ITEMS",
    payload: item,
  };
}
