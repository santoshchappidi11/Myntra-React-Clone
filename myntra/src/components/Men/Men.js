import React from "react";
import "./Men.css";

const Men = () => {
  return (
    <>
      <div id="product-men">
        <div id="men-path">
          <p>
            Home / Clothing / <b>Men T-Shirts</b>
          </p>
        </div>
        <div id="items">
          <h3>
            Men T-Shirts
            <span style={{ fontWeight: " 400", color: "rgb(100, 100, 100)" }}>
              - 106356 items
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

      <div id="men-body">
        <div id="left">
          <div id="categories">
            <h2>CATEGORIES</h2>
            <input type="checkbox" />
            <label>Tshirts</label>
            <br />
            <input type="checkbox" />
            <label>Lounge Tshirts</label>
          </div>
          <div id="brand">
            <h2>BRAND</h2>
            <input type="checkbox" />
            <label>Roadster</label>
            <br />
            <input type="checkbox" />
            <label>Friskers</label>
            <br />
            <input type="checkbox" />
            <label>U.S. Polo Assn.</label>
            <br />
            <input type="checkbox" />
            <label>Tommy Hilfiger</label>
            <br />
            <input type="checkbox" />
            <label>Jack & Jones</label>
            <br />
            <input type="checkbox" />
            <label>HRX by Hritik Roshan </label>
            <br />
            <input type="checkbox" />
            <label>Puma</label>
            <br />
            <input type="checkbox" />
            <label>Being Human</label>
            <div id="more">
              <span>+ 632 more</span>
            </div>
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
              <span>+ 39 more</span>
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
          </div>
        </div>
        <div id="right">
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg"
              alt="men"
            />
            <h2>Huetrap</h2>
            <p>Typography print T-shirt</p>
            <div class="price-structure">
              <h3>Rs. 340</h3>
              <span>Rs. 1099</span>
              <h6>(69% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <a href="./single-product.html">
              <img
                src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2475811/2018/4/20/11524206887991-Roadster-Men-Tshirts-9291524206887825-1.jpg"
                alt="men"
              />
            </a>
            <h2>Roadster</h2>
            <p>Pure Cotton T-shirt</p>
            <div class="price-structure">
              <h3>Rs. 239</h3>
              <span>Rs. 599</span>
              <h6>(60% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11545192/2022/3/25/626b0419-cbb0-4200-8490-67e20a0021c51648208612203-Roadster-Men-Green--White-Printed-Round-Neck-Pure-Cotton-T-s-1.jpg"
              alt="men"
            />
            <h2>Roadster</h2>
            <p>Printed Round Neck T-shirt</p>
            <div class="price-structure">
              <h3>Rs. 314</h3>
              <span>Rs. 899</span>
              <h6>(65% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21936198/2023/2/23/c5bd261e-b2b9-4996-8736-7fd5d909dc5b1677135088695-Louis-Philippe-Sport-Men-Tshirts-5851677135088136-1.jpg"
              alt="men"
            />
            <h2>Louis Philippe Sport</h2>
            <p>Polo Collar T-shirt</p>
            <div class="price-structure">
              <h3>Rs. 1049</h3>
              <span>Rs. 1499</span>
              <h6>(30% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700944/2019/6/8/488007ef-c65e-4a2f-a92b-65b6846894861559989274078-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--1.jpg"
              alt="men"
            />
            <h2>HRX by Hrithik Roshan</h2>
            <p>Printed Cotton Pure Cotton T-shirt</p>
            <div class="price-structure">
              <h3>Rs. 349</h3>
              <span>Rs. 699</span>
              <h6>(50% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22879942/2023/4/25/92aba434-6d11-4456-aabf-3715df3664b31682367889514USPoloAssnMenBlackPoloCollarAppliqueT-shirt1.jpg"
              alt="men"
            />
            <h2>U.S. Pollo Assn.</h2>
            <p>Polo Collar T-shirt</p>
            <div class="price-structure">
              <h3>Rs. 576</h3>
              <span>Rs. 1049</span>
              <h6>(45% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18176640/2023/5/18/efbd5632-a203-495b-9ab6-ebea9ef63b2b1684410440255-Tommy-Hilfiger-Men-Tshirts-6151684410439892-1.jpg"
              alt="men"
            />
            <h2>Tommy Hilfiger</h2>
            <p>Men Pure Cotton T-shirt</p>
            <div class="price-structure">
              <h3>Rs. 1649</h3>
              <span>Rs. 2999</span>
              <h6>(45% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1996770/2018/2/8/11518088823846-Roadster-Men-Rust-Solid-Henley-Neck-T-shirt-7631518088823602-1.jpg"
              alt="men"
            />
            <h2>Roadster</h2>
            <p>Henly Neck T-shirt</p>
            <div class="price-structure">
              <h3>Rs. 249</h3>
              <span>Rs. 499</span>
              <h6>(50% OFF)</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Men;
