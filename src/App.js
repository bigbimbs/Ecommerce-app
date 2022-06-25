import React, { useEffect } from "react";
import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client/core";
import { useSelector, useDispatch } from "react-redux";
import Nav from "./components/Nav";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import Product from "./components/Product";
import setProductItems from "./redux/action/setProductItems";
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
  console.log("loading", loading);
  console.log("error", err);
  console.log("data", data);
  useEffect(() => {
    dispatch(setProductItems(data && data.products ? data.products : ""));
  }, [loading, data, dispatch]);
  return (
    <>
      <Nav />
      <SectionOne />
      <SectionTwo>
        {data &&
          data.products &&
          data.products.map((product) => {
            return (
              <Product
                img={product.image_url}
                title={product.title}
                price={product.price}
              />
            );
          })}
      </SectionTwo>
    </>
  );
}

export default App;
