let productItems = [];
let productItemErr = "";
export default function getProductItems(productLoading = false, action) {
  switch (action.type) {
    case "SET_PRODUCT_ITEMS": {
      productItems = action.payload;
      return productItems;
    }
    case "SET_PRODUCT_ITEMS_LOADING": {
      productLoading = action.payload;
      return productLoading;
    }
    default: {
      return { productItems, productLoading };
    }
  }
}
