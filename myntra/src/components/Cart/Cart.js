import React from "react";
import "./Cart.css";
import offers from "./../../images/offers.JPG";

const Cart = () => {
  return (
    <>
      <div id="cart-body">
        <div id="left">
          <div id="left-one">
            <p>Check delivery time & services</p>
            <button>ENTER PIN CODE</button>
          </div>
          <div id="left-two">
            <div id="offer">
              <img src={offers} alt="offers" />
              <b>Available Offers</b>
            </div>
            <p id="para">
              10% Instant Discount on ICICI Bank Credit and Debit Cards on a min
              spend of Rs 3,500.TCA
            </p>
            <div id="more">
              <b>Show More</b> <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
          <div id="left-three">
            <div>
              <input type="checkbox" />
              <h3>1/1 ITEMS SELECTED</h3>
            </div>
            <div>
              <h4>REMOVE</h4>
              <h4>MOVE TO WHISLIST</h4>
            </div>
          </div>
          <div id="left-four">
            <div id="products">
              <div className="product">
                <div className="product-img">
                  <img
                    src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg"
                    alt="cart-productS"
                  />
                </div>
                <div className="details">
                  <h5>Huetrap</h5>
                  <p>
                    Men Beige &amp; Black Typography Printed Sustainable T-shirt
                  </p>
                  <span>Sold by: HUETRAP CLOTHING SJIT</span>
                  <div className="buttons">
                    <button>
                      Size: S <i class="fa-solid fa-caret-down"></i>
                    </button>
                    <button>
                      Qty: 1 <i class="fa-solid fa-caret-down"></i>
                    </button>
                  </div>
                  <div className="price">
                    <h5>₹318</h5>
                    <span>₹1,099</span>
                    <p>71% OFF</p>
                  </div>
                  <span>
                    <b>
                      <i class="fa-solid fa-rotate-left"></i> 14 days
                    </b>
                    return availabe
                  </span>
                </div>
              </div>
              <div className="cross">
                <i
                  class="fa-solid fa-xmark fa-2x"
                  style={{ fontSize: "25px", paddingTop: "10px" }}
                ></i>
              </div>
            </div>
          </div>
          <div id="left-five">
            <div id="add-more">
              <i class="fa-regular fa-bookmark"></i>
              <h3>Add More From Wishlist</h3>
            </div>
            <i
              class="fa-solid fa-chevron-right"
              style={{ marginRight: "10px" }}
            ></i>
          </div>
        </div>

        <div id="right">
          <div id="coupons">
            <p>COUPONS</p>
            <div id="coupon">
              <div>
                <i class="fa-solid fa-tag" style={{ fontSize: "18px" }}></i>
                <h4 style={{ fontSize: "14px" }}>Apply Coupons</h4>
              </div>
              <button>APPLY</button>
            </div>
          </div>
          <div id="support">
            <p>SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA</p>
            <div>
              <input
                style={{
                  height: "18px",
                  width: "18px",
                  accentColor: "hsl(345, 100%, 56%)",
                  cursor: "pointer",
                }}
                type="checkbox"
              />
              <b>Support Us</b>
            </div>
            <div>
              <button>₹10</button>
              <button>₹50</button>
              <button>₹100</button>
            </div>
            <b>Know More</b>
          </div>
          <div id="price-details">
            <p>PRICE DETAILS (1 Item)</p>
            <div>
              <div>
                <label>Total MRP</label>
                <span>₹1,099</span>
              </div>
              <div>
                <label>Discount on MRP</label>
                <span style={{ color: "rgb(7, 171, 7)" }}>-₹781</span>
              </div>
              <div>
                <label>Coupon Discount</label>
                <span style={{ color: "#ff3f6c" }}>Apply Coupon</span>
              </div>
              <div></div>
            </div>
          </div>
          <div id="amount">
            <div>
              <h4>Total Amount</h4>
              <h4>₹318</h4>
            </div>
            <div>
              <button>PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>

      <div id="footer-main">
        <div id="footer">
          <div id="pay">
            <div>
              <img
                src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png"
                alt="pay"
              />
            </div>
            <div>
              <img
                src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"
                alt="pay"
              />
            </div>
            <div>
              <img
                src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"
                alt="pay"
              />
            </div>
            <div>
              <img
                src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"
                alt="pay"
              />
            </div>
            <div>
              <img
                src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png"
                alt="pay"
              />
            </div>
            <div>
              <img
                src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png"
                alt="pay"
              />
            </div>
            <div>
              <img
                src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png"
                alt="pay"
              />
            </div>
            <div>
              <img
                src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"
                alt="pay"
              />
            </div>
            <div>
              <img
                src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png"
                alt="pay"
              />
            </div>
            <div>
              <img
                src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png"
                alt="pay"
              />
            </div>
          </div>
          <div id="help">
            <h3 style={{ fontSize: "14px" }}>Need Help ? Contact Us</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
