import React from "react";
import "./SingleProduct.css";

const SingleProduct = () => {
  return (
    <>
      <div id="product-path">
        <p>
          Home / Clothing / Men Clothing / Tshirts /
          <b>Roadster Tshirts {">"} More By Roadster</b>
        </p>
      </div>
      <div id="product-body">
        <div id="left">
          <div>
            <img
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2475811/2018/4/20/11524206887991-Roadster-Men-Tshirts-9291524206887825-1.jpg"
              alt="product"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2475811/2018/4/20/11524206887970-Roadster-Men-Tshirts-9291524206887825-2.jpg"
              alt="product"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2475811/2018/4/20/11524206887935-Roadster-Men-Tshirts-9291524206887825-3.jpg"
              alt="product"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2475811/2018/4/20/11524206887922-Roadster-Men-Tshirts-9291524206887825-4.jpg"
              alt="product"
            />
          </div>
          <div>
            <img
              src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/2475811/2018/4/20/11524206887911-Roadster-Men-Tshirts-9291524206887825-5.jpg"
              alt="product"
            />
          </div>
        </div>
        <div id="right">
          <div id="div-one">
            <h2>Roadster</h2>
            <p>Men White Printed Cotton Pure Cotton T-shirt</p>
            <div id="rating-button">
              <h4>
                4.1
                <i
                  class="fa-solid fa-star"
                  style={{
                    fontSize: "13px",
                    color: "#14958f",
                    margin: "0 5px 0 5px",
                  }}
                ></i>
              </h4>
              <p>4.3k Ratings</p>
            </div>
          </div>
          <div id="div-two">
            <div id="price">
              <div id="main-price">
                <h2>₹359</h2>
                <p style={{ fontSize: "18px", color: "grey" }}>
                  MRP
                  <span style={{ textDecoration: "line-through" }}>₹599</span>
                </p>
                <h3 style={{ color: "#ff905a" }}>(40% OFF)</h3>
              </div>
              <h5 style={{ color: "#14958f", paddingTop: "10px" }}>
                inclusive of all taxes
              </h5>
              <div id="size">
                <h4>SELECT SIZE</h4>
                <h5>SIZE CHART {">"}</h5>
              </div>
              <div id="size-chart">
                <div>XS</div>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
              </div>
            </div>
            <div id="add-to-cart">
              <button style={{ fontSize: "15px", fontWeight: "bold" }}>
                <i
                  class="fa-solid fa-bag-shopping fa-lg"
                  style={{ paddingRight: "5px" }}
                ></i>
                ADD TO BAG
              </button>
              <button style={{ fontSize: "15px", fontWeight: "bold" }}>
                <i
                  class="fa-regular fa-heart fa-lg"
                  style={{ paddingRight: "5px" }}
                ></i>
                WISHLIST
              </button>
            </div>
          </div>
          <div id="div-three">
            <div id="delivery">
              <h4>DELIVERY OPTIONS</h4>
              <i class="fa-solid fa-truck"></i>
            </div>
            <div id="pincode">
              <div id="pincode-input">
                <input type="text" placeholder="Enter pincode" />
                <b style={{ color: "#ff3e6c" }}>check</b>
              </div>
              <p style={{ fontSize: "13px", color: "rgb(105, 105, 105)" }}>
                Please enter PIN code to check delivery time & Pay on Delivery
                Availability
              </p>
            </div>
            <div id="delivery-policy">
              <p>100% Original Products</p>
              <p>Pay on delivery might be available</p>
              <p>Easy 14 days returns and exchanges</p>
              <p>Try & Buy might be available</p>
            </div>
          </div>
          <div id="div-four">
            <h4>
              BEST OFFERS{" "}
              <i class="fa-solid fa-tag" style={{ padding: "5px" }}></i>
            </h4>
            <div id="best-price">
              <h4>
                Best Price: <span style={{ color: "#ff905a" }}>Rs. 299</span>
              </h4>
              <ul>
                <li>
                  Applicable on: Orders above Rs. 599 (only on first purchase)
                </li>
                <li>
                  Coupon code: <b style={{ color: "black" }}>MYNTRA100</b>
                </li>
                <li>
                  Coupon Discount: Rs. 60 off (check cart for final savings)
                </li>
              </ul>
              <h5 style={{ color: "#ff3e6c" }}>View Eligible Products</h5>
            </div>
            <div id="cred">
              <h4>Up To Rs 500 Cashback on CRED pay transactions.</h4>
              <ul>
                <li>Min Spend Rs 1,000. Available only on Android Devices.</li>
              </ul>
              <h5 style={{ color: "#ff3e6c" }}>Terms & Condition</h5>
            </div>
            <div id="emi">
              <h4>EMI option available</h4>
              <ul>
                <li>EMI starting from Rs.17/month</li>
              </ul>
              <h5 style={{ color: "#ff3e6c" }}>View Plan</h5>
            </div>
          </div>
          <div id="div-five">
            <div id="pro-details">
              <h3>
                PRODUCT DETAILS
                <i
                  style={{ paddingLeft: "5px" }}
                  class="fa-solid fa-note-sticky"
                ></i>
              </h3>
              <p style={{ color: "rgb(89, 89, 89)" }}>
                White printed T-shirt, has a round neck, short sleeves
              </p>
            </div>
            <div id="size-fit">
              <h3>Size & Fit</h3>
              <p style={{ color: "rgb(89, 89, 89)" }}>
                The model (height 6') is wearing a size M
              </p>
            </div>
            <div id="material-care">
              <h3>Material & Care</h3>
              <div style={{ color: "rgb(89, 89, 89)" }}>
                <p>100% cotton</p>
                <p>Machine-wash</p>
              </div>
            </div>
            <div id="specifications">
              <h3>Specifications</h3>
              <div id="details">
                <div id="left">
                  <div>
                    <span>Fabric</span>
                    <p style={{ padding: "0 0 0 10px", margin: "0" }}>
                      Pure Cotton
                    </p>
                  </div>
                  <div>
                    <span>Length</span>
                    <p style={{ padding: "0 0 0 10px", margin: "0" }}>
                      Regular
                    </p>
                  </div>
                  <div>
                    <span>Multipack Set</span>
                    <p style={{ padding: "0 0 0 10px", margin: "0" }}>Single</p>
                  </div>
                  <div>
                    <span>Occasion</span>
                    <p style={{ padding: "0 0 0 10px", margin: "0" }}>Casual</p>
                  </div>
                </div>
                <div id="right">
                  <div>
                    <span>Fit</span>
                    <p style={{ padding: "0 0 0 10px", margin: "0" }}>
                      Regular Fit
                    </p>
                  </div>
                  <div>
                    <span>Main Trend</span>
                    <p style={{ padding: "0 0 0 10px", margin: "0" }}>
                      New Basics
                    </p>
                  </div>
                  <div>
                    <span>Neck</span>
                    <p style={{ padding: "0 0 0 10px", margin: "0" }}>
                      Round Neck
                    </p>
                  </div>
                  <div>
                    <span>Pattern</span>
                    <p style={{ padding: "0 0 0 10px", margin: "0" }}>
                      Printed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h5 style={{ color: "#ff3e6c" }}>See More</h5>
          </div>
          <div id="div-six">
            <div id="rating">
              <h3>RATINGS</h3>
              <i class="fa-regular fa-star"></i>
            </div>
            <div id="whole-rating">
              <div id="left">
                <h1 style={{ fontSize: "40px", fontWeight: "500" }}>
                  4.1
                  <i
                    style={{ fontSize: "20px", color: "#14958f", margin:"0 0 0 10px" }}
                    class="fa-solid fa-star"
                  ></i>
                </h1>
                <p style={{ fontSize: "14px", padding: "0", margin: "0" }}>
                  4.3k Verified Buyers
                </p>
              </div>
              <div id="right">
                <div>
                  <b>5</b>
                  <i class="fa-solid fa-star" style={{ color: "grey" }}></i>
                  <div class="bar"></div>
                  <span>2295</span>
                </div>
                <div>
                  <b>4</b>
                  <i class="fa-solid fa-star" style={{ color: "grey" }}></i>
                  <div class="bar"></div>
                  <span>1023</span>
                </div>
                <div>
                  <b>3</b>
                  <i class="fa-solid fa-star" style={{ color: "grey" }}></i>
                  <div class="bar"></div>
                  <span>480</span>
                </div>
                <div>
                  <b>2</b>
                  <i class="fa-solid fa-star" style={{ color: "grey" }}></i>
                  <div class="bar"></div>
                  <span>191</span>
                </div>
                <div>
                  <b>1</b>
                  <i class="fa-solid fa-star" style={{ color: "grey" }}></i>
                  <div class="bar"></div>
                  <span>354</span>
                </div>
              </div>
            </div>

            <div id="customers">
              <div id="customer">
                <h3>WHAT CUSTOMERS SAID</h3>
                <i class="fa-solid fa-star"></i>
              </div>
              <div id="measurement">
                <div>
                  <div>
                    <p>Fit</p>
                    <div class="bar"></div>
                  </div>
                  <b>Just Right (68%)</b>
                </div>
                <div>
                  <div>
                    <p>Length</p>
                    <div class="bar"></div>
                  </div>
                  <b>Just Right (75%)</b>
                </div>
              </div>
              <h5 style={{ color: "#ff3e6c" }}>View Details</h5>
            </div>
          </div>

          <div id="div-seven">
            <h4>Customer Photos (36)</h4>
            <div id="photos">
              <div class="photo">
                <img
                  src="https://assets.myntassets.com/h_150,q_75,w_150,c_thumb,fl_progressive/assets/images/2021/10/15/d6094e0b-4de1-4f25-b44c-a97d5df22e621634283820881-IMG_20211012_001913-01.jpeg"
                  alt="customer"
                />
              </div>
              <div class="photo">
                <img
                  src="https://assets.myntassets.com/h_150,q_75,w_150,c_thumb,fl_progressive/assets/images/2020/9/22/30e4acfc-e4eb-4467-a739-d776e42ae69f1600787021138-1600700664165-01.jpeg"
                  alt="customer"
                />
              </div>
              <div class="photo">
                <img
                  src="https://assets.myntassets.com/h_150,q_75,w_150,c_thumb,fl_progressive/assets/images/2020/9/5/b9b13a9c-3a6b-44dc-80a0-a5f94f75d4c91599286923079-IMG20200904175945-2.jpg"
                  alt="customer"
                />
              </div>
              <div class="photo">
                <img
                  src="https://assets.myntassets.com/h_150,q_75,w_150,c_thumb,fl_progressive/assets/images/2022/4/13/65b40325-4d6e-424b-846c-14210958ab931649788281131-IMG20220411213020.jpg"
                  alt="customer"
                />
              </div>
            </div>
            <h4>Customer Reviews (341)</h4>
            <div class="reviews">
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
                mollitia iste corporis perferendis modi iure neque non quo
                dolores eveniet?
              </span>
              <div>
                <div class="left">
                  <p>Amit Kumar Tiwari</p>
                  <span>31 Aug 2020</span>
                </div>
                <div class="right">
                  <i class="fa-regular fa-thumbs-up"></i>
                  <span>91</span>
                  <i class="fa-regular fa-thumbs-down"></i>
                  <span>21</span>
                </div>
              </div>
            </div>
            <div class="reviews">
              <span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus voluptas consequatur ipsa id, reiciendis eius
                expedita veniam voluptatum libero excepturi sapiente, a ab
                suscipit architecto in, at rem ipsum ut!
              </span>
              <div>
                <div class="left">
                  <p>Amit Kumar</p>
                  <span>3 Apr 2021</span>
                </div>
                <div class="right">
                  <i class="fa-regular fa-thumbs-up"></i>
                  <span>41</span>
                  <i class="fa-regular fa-thumbs-down"></i>
                  <span>15</span>
                </div>
              </div>
            </div>
            <div class="reviews">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, magni.
              </span>
              <div>
                <div class="left">
                  <p>Myntra Customer</p>
                  <span>31 Aug 2020</span>
                </div>
                <div class="right">
                  <i class="fa-regular fa-thumbs-up"></i>
                  <span>5</span>
                  <i class="fa-regular fa-thumbs-down"></i>
                  <span>1</span>
                </div>
              </div>
            </div>
          </div>

          <div id="div-eight">
            <h4 style={{ color: "#ff3e6c" }}>View all 341 reviews</h4>
            <p>
              Product Code: <b>2475811</b>
            </p>
            <p>
              Seller: <b style={{ color: "#ff3e6c" }}>Truenet Commerce</b>
            </p>
            <h5>View Supplier Information</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
