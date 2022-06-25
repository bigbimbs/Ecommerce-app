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

function App() {
  const reduxState = useSelector((state) => state);
  const currency = reduxState.getCurrency;

  const dispatch = useDispatch();
  const PRODUCTS_QUERY = gql`
    query Product {
      products {
        id
        title
        image_url
        price(currency: ${currency})
      }
    }
  `;
  const { loading, data } = useQuery(PRODUCTS_QUERY);

  const productItems = reduxState.getProductItems;
  const productsListLoading = reduxState.productsListLoading;

  useEffect(() => {
    handleDatas();
  }, [loading, data, productItems]);

  // useEffect(() => {
  //   if (data !== "" && productItems.length > 0) {
  //     dispatch({ type: "UPDATE_CART_PRICE", payload: productItems });
  //   }
  // }, [loading]);

  const handleDatas = async () => {
    await dispatch(setProductItems(data && data.products ? data.products : ""));
    if (data !== "" && productItems.length > 0) {
      dispatch({ type: "UPDATE_CART_PRICE", payload: productItems });
    }
  };

  const handleCartItems = (itemData) => {
    dispatch(setCartItems(itemData));
  };
  return (
    <>
      <Nav />
      <SectionOne />

      {!productsListLoading && reduxState.getProductItems.length > 0 ? (
        <SectionTwo>
          {productItems.map((product) => {
            return (
              <div key={product.id}>
                <Product
                  img={product.image_url}
                  title={product.title}
                  price={product.price + " " + currency}
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
          })}
        </SectionTwo>
      ) : (
        <div className="d-flex align-items-center justify-content-center w-100 brand-bg">
          <div
            className="spinner-border"
            role="status"
            aria-hidden="true"
            style={{ width: "5rem", height: "5rem" }}
          ></div>
        </div>
      )}
    </>
  );
}

export default App;
