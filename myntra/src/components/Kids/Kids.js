import React, { useContext, useEffect, useState } from "react";
import "./Kids.css";
import { AuthContexts } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Kids = () => {
  const { state } = useContext(AuthContexts);
  const [productsData, setProductsData] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (state?.products?.length) {
      const newProducts = state?.products?.filter(
        (prod) => prod.category == "Kids"
      );
      setProductsData(newProducts);
    } else {
      setProductsData([]);
    }
  }, [state]);

  return (
    <>
      <div id="product-kids">
        <div id="path">
          <p>
            Home / Clothing / <b>Kids Wear Online Store</b>
          </p>
        </div>
        <div id="items">
          <h3>
            Kids Wear Online Store
            <span style={{ fontWeight: " 400", color: "rgb(100, 100, 100)" }}>
              - 33205 items
            </span>
          </h3>
        </div>
        <div id="men-filters">
          <div id="filters-main">
            <h3>FILTERS</h3>
          </div>
          <div id="sort">
            <div id="sort-1">
              <div>
                <p>Bundles</p>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div>
                <p>Country of Origin</p>
                <i class="fa-solid fa-angle-down"></i>
              </div>
              <div>
                <p>Size</p>
                <i class="fa-solid fa-angle-down"></i>
              </div>
            </div>
            <div id="sort-2">
              <select>
                <option>Sort by : Recommended</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div id="kids-body">
        <div id="left">
          {/* <div id="gender">
            <input type="radio" style="margin-top: 5px; margin-right: 5px" />
            <label style="font-weight: 600">Boys</label>
            <br />
            <input type="radio" style="margin-top: 5px; margin-right: 5px" />
            <label style="font-weight: 600">Girls</label>
          </div> */}
          <div id="categories">
            <h2>CATEGORIES</h2>
            <input type="checkbox" />
            <label>Tshirts</label>
            <br />
            <input type="checkbox" />
            <label>Shirts</label>
            <br />
            <input type="checkbox" />
            <label>Sweatshirts</label>
            <br />
            <input type="checkbox" />
            <label>Clothing Set</label>
            <br />
            <input type="checkbox" />
            <label>Kurta Sets</label>
            <br />
            <input type="checkbox" />
            <label>Shorts</label>
            <br />
            <input type="checkbox" />
            <label>Track Pants</label>
            <br />
            <input type="checkbox" />
            <label>Night suits</label>
            <div id="more">
              <span>+ 240 more</span>
            </div>
          </div>
          <div id="brand">
            <h2>BRAND</h2>
            <input type="checkbox" />
            <label>Gini and Jony</label>
            <br />
            <input type="checkbox" />
            <label>NUSYL</label>
            <br />
            <input type="checkbox" />
            <label>Marvel by Wear</label>
            <br />
            <input type="checkbox" />
            <label>max</label>
            <br />
            <input type="checkbox" />
            <label>V-Mart</label>
            <br />
            <input type="checkbox" />
            <label>Kids Ville</label>
            <br />
            <input type="checkbox" />
            <label>Pantaloons Junior</label>
            <br />
            <input type="checkbox" />
            <label>Disney by Wear</label>
            <div id="more">
              <span>+ 318 more</span>
            </div>
          </div>

          <div id="price">
            <h2>PRICE</h2>
            <input type="checkbox" />
            <label>Rs. 99 to Rs. 2700</label>
            <br />
            <input type="checkbox" />
            <label>Rs. 2700 to Rs. 5301</label>
            <br />
            <input type="checkbox" />
            <label>Rs. 5301 to Rs. 7902</label>
            <br />
            <input type="checkbox" />
            <label>Rs. 7902 to Rs. 10503</label>
            <br />
          </div>

          <div id="color">
            <h2>COLOR</h2>
            <div class="color-structure">
              <input type="checkbox" />
              <div id="black"></div>
              <label>Black</label>
            </div>
            <div class="color-structure">
              <input type="checkbox" />
              <div id="blue"></div>
              <label>Blue</label>
            </div>
            <div class="color-structure">
              <input type="checkbox" />
              <div id="white"></div>
              <label>White</label>
            </div>
            <div class="color-structure">
              <input type="checkbox" />
              <div id="navy"></div>
              <label>Navy Blue</label>
            </div>
            <div class="color-structure">
              <input type="checkbox" />
              <div id="green"></div>
              <label>Green</label>
            </div>
            <div class="color-structure">
              <input type="checkbox" />
              <div id="grey"></div>
              <label>Grey</label>
            </div>
            <div class="color-structure">
              <input type="checkbox" />
              <div id="red"></div>
              <label>Red</label>
            </div>
            <div id="more">
              <span>+ 35 more</span>
            </div>
          </div>

          <div id="discount">
            <h2>DISCOUNT RANGE</h2>
            <input type="radio" />
            <label>10% and above</label>
            <br />
            <input type="radio" />
            <label>20% and above</label>
            <br />
            <input type="radio" />
            <label>30% and above</label>
            <br />
            <input type="radio" />
            <label>40% and above</label>
            <br />
            <input type="radio" />
            <label>50% and above</label>
            <br />
            <input type="radio" />
            <label>60% and above</label>
            <br />
            <input type="radio" />
            <label>70% and above</label>
            <br />
            <input type="radio" />
            <label>80% and above</label>
            <br />
          </div>
        </div>
        <div id="right">
          {productsData?.length ? (
            productsData.map((prod) => (
              <div
                className="product"
                onClick={() => navigateTo(`/single-product/${prod.id}`)}
              >
                <div className="img">
                  <img src={prod.image} alt="women" />
                </div>
                <div className="details">
                  <h2>{prod.name}</h2>
                  <h3>{prod.category}</h3>
                  <div className="price-structure">
                    <h3>Rs. {prod.price}</h3>
                    <span>Rs. 1099</span>
                    <h6>(69% OFF)</h6>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div id="no-prod">
              <h2>No Products!</h2>
            </div>
          )}
          {/* <div class="product">
            <a href="./single-product.html">
              <img
                src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22797270/2023/5/15/2c4f57f3-192f-4a19-b9d5-5490f7eafe701684136617812-US-Polo-Assn-Kids-Boys-Tshirts-1741684136617292-1.jpg"
                alt="kids"
              />
            </a>
            <h2>U.S. Polo Assn. kids</h2>
            <p>Boys Set of 2 Cotton T-shirts</p>
            <div class="price-structure">
              <h3>Rs. 599</h3>
              <span>Rs. 1599</span>
              <h6>(65% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22508642/2023/3/25/6c5f1070-ab90-421e-8a2e-fbd1e4ccc2631679691490894BONKIDSBoysWhitePrintedPocketsT-shirt2.jpg"
              alt="kids"
            />
            <h2>BONKIDS</h2>
            <p>Boys Printed Cotton T-shirt</p>
            <div class="price-structure">
              <h3>Rs. 399</h3>
              <span>Rs. 1332</span>
              <h6>(70% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15334348/2021/9/1/d784aa9b-15a9-41e0-86d1-a9cba85591e71630509125052BonOrganikBoysWhitePrintedV-NeckAppliqueT-shirt1.jpg"
              alt="kids"
            />
            <h2>BonOrganik</h2>
            <p>Boys Graphic Printed T-shirt</p>
            <div class="price-structure">
              <h3>Rs. 349</h3>
              <span>Rs. 1164</span>
              <h6>(70% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22204518/2023/3/2/a9b7d358-129e-4170-82d4-1166e59a1f451677770727893Tshirts1.jpg"
              alt="kids"
            />
            <h2>HELLCAT</h2>
            <p>Boys Pack of 5 Cotton T-shirt</p>
            <div class="price-structure">
              <h3>Rs. 714</h3>
              <span>Rs. 6495</span>
              <h6>(89% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11245466/2022/9/9/81178c26-49cc-4555-9d23-78084d871e6c1662729416552-Hrx-By-Hrithik-Roshan-Boys-Navy-Blue-Printed-Bio-Wash-Lifest-1.jpg"
              alt="kids"
            />
            <h2>HRX by Hrithik Roshan</h2>
            <p>U-17 Boys Lifestyle T-shirts</p>
            <div class="price-structure">
              <h3>Rs. 199</h3>
              <span>Rs. 799</span>
              <h6>(75% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22797248/2023/5/15/d6ff77cc-395e-44ab-a5ea-bc0be1ff0ce11684136591208-US-Polo-Assn-Kids-Boys-Tshirts-8021684136590655-1.jpg"
              alt="kids"
            />
            <h2>U.S. Polo Assn. Kids</h2>
            <p>Boys Set of 2 Cotton T-Shirts</p>
            <div class="price-structure">
              <h3>Rs. 559</h3>
              <span>Rs. 1599</span>
              <h6>(65% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16864688/2022/1/18/30cd2a51-290a-41b0-80de-b91ac7d98d071642503006966BONKIDSBoysWhiteSpider-ManPrintedAppliqueT-shirt1.jpg"
              alt="kids"
            />
            <h2>BONKIDS</h2>
            <p>Boys Printed T-shirt</p>
            <div class="price-structure">
              <h3>Rs. 293</h3>
              <span>Rs. 1332</span>
              <h6>(78% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23023620/2023/5/4/bc50fea8-3ff7-4ea8-9028-9e17b2093eb11683206181206UnitedColorsofBenettonBoysWhiteStripedPocketsT-shirt1.jpg"
              alt="kids"
            />
            <h2>United Colors of Benetton</h2>
            <p>Boys Striped Cotton T-Shirt</p>
            <div class="price-structure">
              <h3>Rs. 649</h3>
              <span>Rs. 999</span>
              <h6>(35% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22861230/2023/4/24/6bb873d8-ef5c-49da-ae3c-5ce9f6447a161682338712445KUCHIPOOBoysGreen5PrintedAppliqueT-shirt1.jpg"
              alt="kids"
            />
            <h2>KUCHIPOO</h2>
            <p>Boys Pack of 5 T-shirts</p>
            <div class="price-structure">
              <h3>Rs. 799</h3>
              <span>Rs. 2400</span>
              <h6>(70% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22854464/2023/4/21/0fe7d495-c392-4c1e-b2b6-5bbb0616c5751682097508442Tshirts1.jpg"
              alt="kids"
            />
            <h2>Pantaloons Junior</h2>
            <p>Boys Printed Cotton T-shirt</p>
            <div class="price-structure">
              <h3>Rs. 424</h3>
              <span>Rs. 499</span>
              <h6>(15% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21389254/2023/3/9/cbca41b9-a43a-4afc-86cf-13fbdba7de5d1678355543147-HERENOW-Boys-Tshirts-5371678355542468-1.jpg"
              alt="kids"
            />
            <h2>HERE&NOW</h2>
            <p>Boys 3 PCs Cotton T-shirt</p>
            <div class="price-structure">
              <h3>Rs. 524</h3>
              <span>Rs. 2099</span>
              <h6>(75% OFF)</h6>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Kids;
