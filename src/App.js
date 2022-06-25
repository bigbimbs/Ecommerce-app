import React, { useEffect } from "react";
import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client/core";
import { useSelector, useDispatch } from "react-redux";
import Nav from "./components/Nav";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import Product from "./components/Product";
import setProductItems from "./redux/action/setProductItems";
import setCartItems from "./redux/action/setCartItems";
import "./App.css";

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
function App() {
  const dispatch = useDispatch();
  const { loading, err, data } = useQuery(FILMS_QUERY);
  // console.log("loading", loading);
  // console.log("error", err);
  // console.log("data", data);
  const reduxState = useSelector((state) => state);
  const productItems = reduxState.getProductItems;
  const productsListLoading = reduxState.productsListLoading;

  useEffect(() => {
    dispatch(setProductItems(data && data.products ? data.products : ""));
  }, [loading, data, dispatch]);

  const handleCartItems = (itemData) => {
    console.log("handleCartItems", itemData);
    dispatch(setCartItems(itemData));
  };
  return (
    <>
      <Nav />
      <SectionOne />
      <SectionTwo>
        {!productsListLoading && reduxState.getProductItems.length > 0 ? (
          productItems.map((product) => {
            return (
              <div key={product.id}>
                <Product
                  img={product.image_url}
                  title={product.title}
                  price={product.price}
                >
                  <button
                    className="btn btn-dark w-100"
                    onClick={() => handleCartItems(product)}
                  >
                    Add to Cart
                  </button>
                </Product>
              </div>
            );
          })
        ) : (
          <h1 className="text-center">Loading!!!</h1>
        )}
      </SectionTwo>
    </>
  );
}

export default App;
