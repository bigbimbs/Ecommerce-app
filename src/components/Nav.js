import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Nav = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);
  const cartLength = reduxState.cart.length;
  console.log("first", reduxState);
  return (
    <div className="nav d-flex justify-content-between align-items-center">
      <div className="d-md-flex align-items-center logo-col">
        <h3 className="logo-test">LUMIN</h3>
        <p className="mt-2 logo-col-shop">Shop</p>
        <p className="mt-2 logo-col-learn">Learn</p>
      </div>
      <div className="d-flex">
        <p className="me-4">Account</p>
        <span className="cart-icon">
          <i className="bi bi-cart-fill"></i>
          <p className="cart-count">{cartLength}</p>
        </span>
      </div>
    </div>
  );
};

export default Nav;
