export default function cart(cartItems = [], action) {
  switch (action.type) {
    case "INSERT_INTO_CART": {
      const itemIndex = cartItems.filter(
        (cItem, index) => cItem.id === action.payload.id
      );
      const findTheIndex = itemIndex.indexOf(...itemIndex);
      console.log("c", action.payload.id);
      console.log("itemIndex", findTheIndex);
      if (itemIndex.length > 0) {
        const moses = cartItems.map((item, index) => {
          if (index === findTheIndex) {
            return Object.assign({ qty: item.qty + 1 }, item);
          } else {
            return item;
          }
        });
        moses[findTheIndex].qty += 1;
        cartItems = [...moses];
      } else {
        let newItem = Object.assign({ qty: 1 }, action.payload);
        cartItems = [...cartItems, newItem];
      }
      return cartItems;
    }
    default: {
      return cartItems;
    }
  }
}
