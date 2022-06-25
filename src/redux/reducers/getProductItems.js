export default function getProductItems(productItems = [], action) {
  switch (action.type) {
    case "SET_PRODUCT_ITEMS": {
      productItems = action.payload;
      return productItems;
    }
    default: {
      return productItems;
    }
  }
}
