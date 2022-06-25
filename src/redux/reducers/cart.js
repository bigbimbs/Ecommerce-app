export default function cart(cartItems = [], action) {
  switch (action.type) {
    case "INSERT_INTO_CART": {
      const itemIndex = cartItems.filter(
        (cItem, index) => cItem.id === action.payload.id
      );
      const findTheIndex = cartItems.indexOf(...itemIndex);
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
    case "INCREMENT_QUANTITY": {
      const id = action.payload;
      console.log("increment", id);

      const newArr = cartItems.map((item) => {
        if (item.id === id) {
          item.qty += 1;
          return item;
        } else {
          return item;
        }
      });
      cartItems = [...newArr];
      return cartItems;
    }
    case "DECREMENT_QUANTITY": {
      const id = action.payload;
      console.log("DECREMENT", id);

      const newArr = cartItems
        .map((item) => {
          if (item.id === id) {
            if (item.qty > 0) {
              item.qty -= 1;
              return item;
            } else {
              return item.delete();
            }
          } else {
            return item;
          }
        })
        .filter((arr) => arr.qty > 0);
      cartItems = [...newArr];
      return cartItems;
    }
    case "UPDATE_CART_PRICE": {
      let newProducts = action.payload;
      let updatedProducts = [];

      for (let i = 0; i < cartItems.length; i++) {
        for (let j = 0; j < newProducts.length; j++) {
          if (cartItems[i].id === newProducts[j].id) {
            console.log("cart", cartItems[i].price);
            console.log("products", newProducts[j].id);
            let newProductPrice = cartItems[i];
            newProductPrice.price = newProducts[j].price;
            // cartItems[i].price = newProducts[j].price;
            updatedProducts.push(newProductPrice);
          }
        }
      }
      cartItems = updatedProducts;
      return cartItems;
    }
    default: {
      return cartItems;
    }
  }
}
