import React from "react";
import { useSelector } from "react-redux";
import ProductCart from "../../components/productCarts/ProductCart";

const Wishlist = () => {
  let wishlist = useSelector((state) => state.wishlist.value);
  console.log(wishlist);

  return (
    <div>
      {wishlist.length ? (
        <ProductCart data={wishlist} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Wishlist not is defined</h1>
      )}
    </div>
  );
};

export default Wishlist;
