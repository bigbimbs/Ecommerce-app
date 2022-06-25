export default function getProductItems(productItems = [], action) {
  switch (action.type) {
    case "SET_PRODUCT_ITEMS": {
      productItems = action.payload;
      return productItems;
    }
    case "HIGHEST_PRICE": {
      const newArr = [...productItems].sort(
        (a, b) => parseInt(b.price) - parseInt(a.price)
      );
      productItems = [...newArr];
      return productItems;
    }
    case "LOWEST_PRICE": {
      const newArr = [...productItems].sort(
        (a, b) => parseInt(a.price) - parseInt(b.price)
      );
      productItems = [...newArr];
      return productItems;
    }
    default: {
      return productItems;
    }
  }
}
