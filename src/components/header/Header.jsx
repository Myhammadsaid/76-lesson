import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import search from "../../assets/search.png";
import cart from "../../assets/cart.png";
import logout from "../../assets/Logout.png";
import heart from "../../assets/heart.png";
import "./Header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <Link to={"/"}>
              <img src={logo} alt="header-logo" />
            </Link>
            <div
              className={`nav-links ${toggle ? "open" : ""}`}
              id="navbar-responsive"
            >
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
              <Link className="nav-link" to={"/carts"}>
                Shop
              </Link>
              <Link className="nav-link" to={"/checkout"}>
                Plant Care
              </Link>
              <a className="nav-link">Blogs</a>
            </div>
            <div className="nav-items">
              <img src={search} alt="search" />
              <Link to={"/carts"}>
                <img src={cart} alt="cart" />
              </Link>
              <Link to={"/wishlist"}>
                <img src={heart} alt="heart" />
              </Link>
              <button className="nav-btn">
                <img src={logout} alt="Logout" />
                Login
              </button>
            </div>
            <button
              onClick={() => setToggle(!toggle)}
              class="menu-btn"
              id="menu-btn"
            >
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
