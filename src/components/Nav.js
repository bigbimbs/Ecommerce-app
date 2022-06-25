import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import setCurrency from "../redux/action/setCurrency";

const CURRENCY_QUERY = gql`
  query Currency {
    currency
  }
`;

const Nav = () => {
  const { loading, err, data } = useQuery(CURRENCY_QUERY);
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);
  const cartLength = reduxState.cart.length;
  const cart = reduxState.cart;
  const currency = reduxState.getCurrency;
  // const productItems = reduxState.getProductItems;
  const [selectedCurr, setSelectedCurr] = useState("USD");
  const cartAmount =
    cart.length > 0
      ? cart.reduce((a, b) => parseInt(a) + parseInt(b.price * b.qty), 0)
      : "";

  const handleCurrencySelect = (e) => {
    setSelectedCurr(e.target.value);
    if (e.target.value !== "Select your currency") {
      dispatch(setCurrency(e.target.value));
    }
  };

  // useEffect(() => {
  //   let reCal = cart.reduce(
  //     (a, b) => parseInt(a) + parseInt(b.price * b.qty),
  //     0
  //   );
  //   setTotalAmount(reCal);
  // }, [loading, cart, data]);

  return (
    <div className="nav d-flex justify-content-between align-items-center">
      <div className="d-md-flex align-items-center logo-col">
        <h3 className="logo-test">LUMIN</h3>
        <p className="mt-2 logo-col-shop">Shop</p>
        <p className="mt-2 logo-col-learn">Learn</p>
      </div>
      <div className="col d-flex justify-content-end">
        <p className="me-4">Account</p>

        <span
          className="cart-icon"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <i className="bi bi-cart-fill"></i>
          <p className="cart-count">{cartLength}</p>
        </span>
        <div
          className="offcanvas offcanvas-end"
          data-bs-scroll="true"
          tabIndex={-1}
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
              Cart
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <select
              className="form-select form-select mb-5"
              aria-label=".form-select-sm example"
              onChange={handleCurrencySelect}
              value={selectedCurr}
            >
              <option defaultValue>Select your currency</option>
              {!loading &&
                data !== undefined &&
                data.currency.map((curr, index) => {
                  return (
                    <option key={index} value={curr}>
                      {curr}
                    </option>
                  );
                })}
            </select>
            {cartLength > 0
              ? cart.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="my-4 d-flex align-items-center"
                    >
                      <div className="col-5">
                        <img
                          className="cart-img"
                          src={item.image_url}
                          alt="cart-items"
                        />
                      </div>
                      <div className="col-7 d-flex align-items-center">
                        <div>
                          <p>{item.title}</p>
                          <p>{item.price + " " + currency}</p>
                          <div className="d-flex align-items-center justify-content-between">
                            <button
                              className="btn btn-sm fs-6 btn-dark px-2 py-2"
                              onClick={() => {
                                dispatch({
                                  type: "DECREMENT_QUANTITY",
                                  payload: item.id,
                                });
                              }}
                            >
                              -
                            </button>
                            {item.qty}
                            <button
                              className="btn btn-sm btn-dark py-2 px-2"
                              onClick={() => {
                                dispatch({
                                  type: "INCREMENT_QUANTITY",
                                  payload: item.id,
                                });
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : "No items in cart"}
            <h3 className="fw-bold">
              Total: {cartLength > 0 ? `${currency} ${cartAmount}` : ""}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
