import React from "react";
import icon from "../../assets/Delete.png";
import "./ProductTotal.css";
import { useSelector, useDispatch } from "react-redux";
import { incCartQuantity } from "../../context/cartSlice";
import { decCartQuantity } from "../../context/cartSlice";
import { removeItemFromCart } from "../../context/cartSlice";
import "number-brm";

const ProductTotal = () => {
  const carts = useSelector((s) => s.cart.value);
  const dispatch = useDispatch();

  let totalprice = carts?.reduce((a, b) => a + b.price * b.quantity, 0);

  const cart = carts?.map((val) => (
    <div key={val.id} className="cart-card">
      <div className="cart-box-img">
        <img className="cart-img" src={val.images[0]} alt="" />
        <div className="cart-text-par">
          <p className="cart-text">{val.title}</p>
          <p className="cart-par">
            SKU: <span>19484189471289</span>
          </p>
        </div>
      </div>
      <p className="cart-price">${val.price?.brm()}</p>
      <div className="cart-btns">
        <button
          disabled={val.quantity <= 1}
          onClick={() => dispatch(decCartQuantity(val))}
          className="cart-dec"
        >
          -
        </button>
        <span className="cart-count">{val.quantity}</span>
        <button
          onClick={() => dispatch(incCartQuantity(val))}
          className="cart-inc"
        >
          +
        </button>
      </div>
      <p className="cart-price-total">${(val.price * val.quantity)?.brm()}</p>
      <img
        onClick={() => dispatch(removeItemFromCart(val))}
        src={icon}
        alt="delete"
        style={{ cursor: "pointer" }}
      />
    </div>
  ));
  return (
    <>
      <section className="product-total">
        <div className="container">
          <p className="cart-title">
            <span>Home</span> / Shop / Shopping Cart
          </p>
          <div className="cart-contents">
            <div className="cart-content">
              <div className="cart-box">
                <p className="cart-box-text">Products</p>
                <p className="cart-box-text">Price</p>
                <p className="cart-box-text">Quantity</p>
                <p className="cart-box-text">Total</p>
              </div>
              <hr />
              <div className="cart-cards">{cart}</div>
            </div>
            <div className="cart-total">
              <p className="total-title">Cart Totals</p>
              <hr />
              <p className="total-text">Coupon Apply</p>
              <form action="">
                <input
                  className="total-input"
                  type="text"
                  placeholder="Enter coupon code here..."
                />
                <button type="button" className="total-btn">
                  Apply
                </button>
              </form>
              <div className="subtotals">
                <div className="subtotal">
                  <p className="total-text2">Subtotal</p>
                  <p className="total-price">${totalprice?.brm()}</p>
                </div>
                <div className="subtotal">
                  <p className="total-text2">Coupon Discount</p>
                  <p className="total-price">(-) 00.00</p>
                </div>
                <div className="subtotal">
                  <p className="total-text2">Shiping</p>
                  <p className="total-price">$0.00</p>
                </div>
                <div className="subtotal">
                  <p className="total-text2">Total</p>
                  <p className="total-price">${totalprice?.brm()}</p>
                </div>
              </div>
              <button className="total-btn2">Proceed To Checkout</button>
              <a href="#" className="total-end">
                Continue Shopping
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductTotal;
