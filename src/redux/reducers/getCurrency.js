export default function getCurrency(currency = "USD", action) {
  switch (action.type) {
    case "CHANGE_CURRENCY": {
      currency = action.payload;
      return currency;
    }
    default: {
      return currency;
    }
  }
}
