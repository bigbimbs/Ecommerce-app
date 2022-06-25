import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client/core";
const FILMS_QUERY = gql`
  query Product {
    products {
      id
      title
      image_url
      price(currency: USD)
    }
  }
`;
// export default function setProductItems() {
//   return async (dispatch) => {
//     dispatch({ type: "SET_PRODUCT_ITEMS_LOADING", payload: true });
//     // const { loading, err, data } = useQuery(FILMS_QUERY);
//     // console.log("data redux", data, err, loading);
//     // // const products = data;

//     // dispatch({ type: "SET_PRODUCT_ITEMS", payload: data });
//   };
// }
export default function setProductItems(bool) {
  console.log("actions");
  return { type: "SET_PRODUCT_ITEMS", payload: bool };
}
