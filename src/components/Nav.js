import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Nav = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);
  const cartLength = reduxState.cart.length;
  const cart = reduxState.cart;
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
        <div className="dropdown">
          <span
            className="cart-icon"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-cart-fill"></i>
            <p className="cart-count">{cartLength}</p>
          </span>
          <ul
            className="dropdown-menu p-3"
            aria-labelledby="dropdownMenuButton1"
          >
            {cartLength > 0
              ? cart.map((item) => {
                  return (
                    <div className="my-4 d-flex align-items-center">
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
                          <p>{item.price}</p>
                          <div className="d-flex align-items-center justify-content-between">
                            <button className="btn btn-sm btn-dark px-2 py-2">
                              -
                            </button>
                            {item.qty}
                            <button className="btn btn-sm btn-dark py-2">
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : "No items in cart"}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
