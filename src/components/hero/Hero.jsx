import React from "react";
import "./Hero.css";
import img from "../../assets/hero-img.png";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-style">
            <div className="hero-content">
              <p className="hero-title">Welcome to GreenShop</p>
              <h1 className="hero-text">
                Let’s Make a Better <span className="hero-span">Planet</span>
              </h1>
              <p className="hero-par">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="hero-btn">SHOP NOW</button>
            </div>
            <img src={img} alt="hero-img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
