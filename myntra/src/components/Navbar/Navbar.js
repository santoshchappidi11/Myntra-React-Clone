import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import myntraLogo from "./../../images/myntra-logo.jpg";

const Navbar = () => {
  const navigateTo = useNavigate();

  return (
    <>
      <div id="navbar">
        <div id="myntra-navbar">
          <div id="logo" onClick={() => navigateTo("/")}>
            <img
              style={{ height: "100%", width: "100%" }}
              src={myntraLogo}
              alt="myntra"
            />
          </div>
          <div id="nav-items">
            <div onClick={() => navigateTo("/mens")}>Men</div>
            <div onClick={() => navigateTo("/womens")}>Women</div>
            <div onClick={() => navigateTo("/kids")}>Kids</div>
            <div onClick={() => navigateTo("/home-living")}>Home & Living</div>
            <div onClick={() => navigateTo("/beauty")}>Beauty</div>
            <div>
              Studio
              <sup style={{ fontSize: "10px", color: "#ff3f75" }}>NEW</sup>
            </div>
          </div>
          <div id="search">
            <div>
              <i class="fa-solid fa-magnifying-glass fa-1x"></i>
              <input
                placeholder="Search for products,brands & More..."
                // style="
                //     height: 30px;
                //     width: 300px;
                //     border: none;
                //     outline: none;
                //   "
              />
            </div>
          </div>

          <div id="nav-others">
            <div
              id="profile"
              onmouseenter="showPopUp()"
              onmouseleave="hidePopUp()"
            >
              <i class="fa-solid fa-user"></i>
              <span>
                <a href="./profile.html">Profile</a>
              </span>
            </div>
            <div id="wishlist">
              <i class="fa-solid fa-heart"></i>
              <span>
                <a href="./wishlist.html">Wishlist</a>
              </span>
            </div>
            <div id="cart">
              <i class="fa-solid fa-bag-shopping"></i>
              <span>
                <a href="./cart.html">Bag</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
