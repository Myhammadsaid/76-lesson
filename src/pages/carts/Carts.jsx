import React from "react";
import ProductTotal from "../../components/productTotal/ProductTotal";
import { useSelector } from "react-redux";

const Carts = () => {
  const cards = useSelector((s) => s.cart.value);
  console.log(cards);
  return (
    <>
      <ProductTotal />
    </>
  );
};

export default Carts;
