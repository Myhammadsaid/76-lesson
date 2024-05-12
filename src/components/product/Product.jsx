import React, { useEffect, useState } from "react";
import ProductCarts from "../productCarts/ProductCart";
import "./Product.css";
import axios from "../../api";

const Product = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("/products?limit=8")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <section className="product">
        <div className="container">
          <div className="product-titles">
            <a href="#" className="product-title">
              All Plants
            </a>
            <a href="#" className="product-title">
              New Arrivals
            </a>
            <a href="#" className="product-title">
              Sale
            </a>
            <a href="#" className="product-title">
              Short by: Default sorting &gt;
            </a>
          </div>
          <ProductCarts data={data} />
        </div>
      </section>
    </>
  );
};

export default Product;
