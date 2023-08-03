import React from "react";
import "./Navbar.css";
import myntraLogo from "./../../images/myntra-logo.jpg";

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <div id="myntra-navbar">
          <div id="logo">
            <a href="./myntra-home.html">
              <img
                style={{ height: "100%", width: "100%" }}
                src={myntraLogo}
                alt="myntra"
              />
            </a>
          </div>
          <div id="nav-items">
            <div>
              <a
                style={{ textDecoration: "none", color: "rgb(79, 79, 79)" }}
                href="./men.html"
              >
                Men
              </a>
            </div>
            <div>
              <a
                // style="text-decoration: none; color: rgb(79, 79, 79)"
                href="./women.html"
              >
                Women
              </a>
            </div>
            <div>
              <a
                // style="text-decoration: none; color: rgb(79, 79, 79)"
                href="./kids.html"
              >
                Kids
              </a>
            </div>
            <div>
              <a
                // style="text-decoration: none; color: rgb(79, 79, 79)"
                href="./home-living.html"
              >
                Home & Living
              </a>
            </div>
            <div>
              <a
                // style="text-decoration: none; color: rgb(79, 79, 79)"
                href="./beauty.html"
              >
                Beauty
              </a>
            </div>
            <div>
              Studio{" "}
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
