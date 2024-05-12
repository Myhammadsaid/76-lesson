import React from "react";
import cart from "../../assets/cart.png";
import heart from "../../assets/heart.png";
import heart2 from "../../assets/heart2.png";
import search from "../../assets/search.png";
import "../product/Product.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../context/wishlistSlice";
import { addToCart } from "../../context/cartSlice";

const ProductCart = ({ data }) => {
  let wishlist = useSelector((state) => state.wishlist.value);
  // let cart2 = useSelector((state) => state.cart.value);
  // console.log(cart2);
  const dispatch = useDispatch();

  const products = data?.map((val) => (
    <div key={val.id} className="product-card">
      <img className="product-img" src={val.images[0]} alt="product-img" />
      <p className="product-text">{val.title}</p>
      <p className="product-price">${val.price}</p>
      <div className="product-group">
        <img
          className="cart"
          onClick={() => dispatch(addToCart(val))}
          src={cart}
          alt="cart"
        />
        {/* {cart2?.some((item2) => item2.id === val.id) ? (
          <svg
            onClick={() => dispatch(addToCart(val))}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
          >
            <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"></path>
            <circle cx="10.5" cy="19.5" r="1.5"></circle>
            <circle cx="17.5" cy="19.5" r="1.5"></circle>
          </svg>
        ) : (
          <img onClick={() => dispatch(addToCart(val))} src={cart} alt="cart" />
        )} */}

        {wishlist?.some((item) => item.id === val.id) ? (
          <img
            onClick={() => dispatch(toggleLike(val))}
            width={34}
            src={heart2}
            alt="heart"
          />
        ) : (
          <img
            onClick={() => dispatch(toggleLike(val))}
            src={heart}
            alt="heart"
          />
        )}
        <img src={search} alt="search" />
      </div>
    </div>
  ));
  return (
    <>
      <div className="product-cards">{products}</div>
    </>
  );
};

export default ProductCart;
