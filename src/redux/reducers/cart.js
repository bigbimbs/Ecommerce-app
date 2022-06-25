export default function cart(cartItems = [], action) {
  switch (action.type) {
    case "GET_ALL_HOSPITALS_LIST": {
      cartItems.push(action.payload);
      return cartItems;
    }
    default: {
      return cartItems;
    }
  }
}
