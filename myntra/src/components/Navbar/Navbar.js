import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import myntraLogo from "./../../images/myntra-logo.jpg";
import { AuthContexts } from "../Context/AuthContext";

const Navbar = () => {
  const { state, Logout } = useContext(AuthContexts);
  const navigateTo = useNavigate();
  const [isShowSidePopup, setIsShowSidePopup] = useState(false);
  const [isShowLogoutPopup, setIsShowLogoutPopup] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if (state?.currentUser?.email) {
      setCurrentUser(state?.currentUser);
    } else {
      setCurrentUser({});
    }
  }, [state]);

  const openSidePopup = () => {
    setIsShowSidePopup(true);
  };

  const closeSidePopup = () => {
    setIsShowSidePopup(false);
  };

  const openLogoutPopup = () => {
    setIsShowLogoutPopup(true);
  };

  const closeLogoutPopup = () => {
    setIsShowLogoutPopup(false);
  };

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
            <div onClick={() => navigateTo("/men")}>Men</div>
            <div onClick={() => navigateTo("/women")}>Women</div>
            <div onClick={() => navigateTo("/kids")}>Kids</div>
            <div onClick={() => navigateTo("/home&kitchen")}>Home & Living</div>
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
            <div id="profile">
              {!currentUser.name && (
                <h3 onMouseOver={openSidePopup} onMouseLeave={closeSidePopup}>
                  Register/Login
                </h3>
              )}

              {currentUser?.name && (
                <h3
                  onMouseOver={openLogoutPopup}
                  onMouseLeave={closeLogoutPopup}
                >
                  {currentUser?.name.toUpperCase()}({currentUser?.role})
                </h3>
              )}
            </div>

            {currentUser.role == "Buyer" && (
              <div id="wishlist">
                <i class="fa-solid fa-heart"></i>
                <span>Wishlist</span>
              </div>
            )}

            {currentUser.role == "Buyer" && (
              <div id="cart" onClick={() => navigateTo("/cart")}>
                <i class="fa-solid fa-bag-shopping"></i>
                <span>Bag</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* -----------------------------login/register-popup-------------------------------- */}

      {isShowSidePopup && (
        <div
          class="modal-box"
          onMouseOver={openSidePopup}
          onMouseLeave={closeSidePopup}
        >
          <div class="box" id="welcome">
            <h3>Welcome</h3>
            <span>To access account and manage orders</span>
            <div id="button" onClick={() => navigateTo("/login")}>
              <button>LOGIN / SIGNUP</button>
            </div>
          </div>
          <div class="box">
            <span>Orders</span>
            <span>Wishlist</span>
            <span>Gift Cards</span>
            <span>Contact Us</span>
            <span>Myntra insider</span>
          </div>
          <div class="box">
            <span>Myntra Credit</span>
            <span>Coupons</span>
            <span>Saved Cards</span>
            <span>Saved VPA</span>
            <span>Saved Addresses</span>
          </div>
        </div>
      )}
      {/* -----------------------------logout-add-product-popup--------------------------------- */}

      {isShowLogoutPopup && (
        <div
          class="modal-box-2"
          onMouseOver={openLogoutPopup}
          onMouseLeave={closeLogoutPopup}
        >
          <div class="box-2" id="welcome">
            <h3>Hello,</h3>
            <span>{currentUser?.name?.toUpperCase()}</span>
            <div id="button" onClick={() => navigateTo("/profile")}>
              <button>Profile</button>
            </div>
            {currentUser?.role == "Seller" && (
              <div id="button" onClick={() => navigateTo("/add-product")}>
                <button>Add Product</button>
              </div>
            )}
            <div id="button">
              <button onClick={Logout}>Logout</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
