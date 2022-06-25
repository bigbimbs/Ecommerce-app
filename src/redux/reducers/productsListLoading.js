export default function productsListLoading(productLoading = true, action) {
  switch (action.type) {
    case "SET_PRODUCT_ITEMS_LOADING": {
      productLoading = action.payload;
      return productLoading;
    }
    default: {
      return productLoading;
    }
  }
}
