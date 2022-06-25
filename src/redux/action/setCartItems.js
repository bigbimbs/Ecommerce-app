export default function setCartItems(item) {
  return {
    type: "INSERT_INTO_CART",
    payload: item,
  };
}
