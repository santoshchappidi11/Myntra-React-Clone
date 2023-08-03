import React from "react";
import "./HomeKitchen.css";

const HomeKitchen = () => {
  return (
    <>
      <div id="product-home-living">
        <div id="path">
          <p>
            Home / <b>Home Furnishing</b>
          </p>
        </div>
        <div id="items">
          <h3>
            Home Furnishing
            <span style={{ fontWeight: " 400", color: "rgb(100, 100, 100)" }}>
              - 193715 items
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

      <div id="home-living-body">
        <div id="left">
          <div id="categories">
            <h2>CATEGORIES</h2>
            <input type="checkbox" />
            <label>Bedsheets</label>
            <br />
            <input type="checkbox" />
            <label>Wall Art</label>
            <br />
            <input type="checkbox" />
            <label>Cushion Covers</label>
            <br />
            <input type="checkbox" />
            <label>Curtains and Sheers</label>
            <br />
            <input type="checkbox" />
            <label>Table Lamps</label>
            <br />
            <input type="checkbox" />
            <label>Organisers</label>
            <br />
            <input type="checkbox" />
            <label>Blankets and Dohars</label>
            <br />
            <input type="checkbox" />
            <label>Showpieces</label>
            <div id="more">
              <span>+ 120 more</span>
            </div>
          </div>
          <div id="brand">
            <h2>BRAND</h2>
            <input type="checkbox" />
            <label>999Store</label>
            <br />
            <input type="checkbox" />
            <label>eCraftIndia</label>
            <br />
            <input type="checkbox" />
            <label>Kuber Industries</label>
            <br />
            <input type="checkbox" />
            <label>JC Collection</label>
            <br />
            <input type="checkbox" />
            <label>Devansh</label>
            <br />
            <input type="checkbox" />
            <label>Arrabi</label>
            <br />
            <input type="checkbox" />
            <label>KLOTTHE</label>
            <br />
            <input type="checkbox" />
            <label>SAF</label>
            <div id="more">
              <span>+ 693 more</span>
            </div>
          </div>

          <div id="price">
            <h2>PRICE</h2>
            <input type="checkbox" />
            <label>Rs. 40 to Rs. 22530</label>
            <br />
            <input type="checkbox" />
            <label>Rs. 22530 to Rs. 45020</label>
            <br />
            <input type="checkbox" />
            <label>Rs. 45020 to Rs. 67510</label>
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
              <span>+ 38 more</span>
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
            <input type="radio" />
            <label>90% and above</label>
          </div>
        </div>
        <div id="right">
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21779088/2023/2/1/69e45095-8c7f-4a6c-beab-df4d4dfb71601675224623690KitchenStorage1.jpg"
              alt="home-living"
            />
            <h2>Milton</h2>
            <p>Pro Lunch Tiffin 5 PCs</p>
            <div class="price-structure">
              <h3>Rs. 899</h3>
              <span>Rs. 1999</span>
              <h6>(50% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <a href="./single-product.html">
              <img
                src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22888050/2023/4/25/8c71d659-4a75-4a19-86b7-568a5082bd451682405980805TowelSet1.jpg"
                alt="home-living"
              />
            </a>
            <h2>Trident</h2>
            <p>2 Pieces Cotton Towel</p>
            <div class="price-structure">
              <h3>Rs. 474</h3>
              <span>Rs. 1899</span>
              <h6>(75% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22786284/2023/5/26/88b3201c-74b4-4f69-8dc1-fa04eb352f271685085541978-Storyhome-Ventura-Teal--Black-Geometric-152-TC-Cotton-Queen--1.jpg"
              alt="home-living"
            />
            <h2>Story@home</h2>
            <p>Queen Bedsheet, Pillow and Cover</p>
            <div class="price-structure">
              <h3>Rs. 424</h3>
              <span>Rs. 2499</span>
              <h6>(83% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21162354/2022/12/12/7a812b74-c5ad-4d8f-866a-c1fa3978f87e1670843579160CHHAVIINDIAWhitePinkFloral210TCKingBedsheetwith2PillowCovers1.jpg"
              alt="home-living"
            />
            <h2>CHHAVI INDIA</h2>
            <p>210 TC King 2 Pillow Covers</p>
            <div class="price-structure">
              <h3>Rs. 779</h3>
              <span>Rs. 2999</span>
              <h6>(74% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/2/4e586db8-ef87-4ba3-accf-f3d33503298b1612251367093-1.jpg"
              alt="home-living"
            />
            <h2>Home Sizzler</h2>
            <p>144 TC 1 Queen Bedsheet..</p>
            <div class="price-structure">
              <h3>Rs. 299</h3>
              <span>Rs. 1199</span>
              <h6>(75% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/20260770/2022/10/4/d534bfe6-df92-4330-b364-f8505f0b24d81664887843543MiltonMaroonSolidTriply3mmExtra-ThickCookwareSet1.jpg"
              alt="home-living"
            />
            <h2>Milton</h2>
            <p>Pro Cook 5 PCs Cookware Set</p>
            <div class="price-structure">
              <h3>Rs. 1499</h3>
              <span>Rs. 5500</span>
              <h6>(40% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/18/f6531b3a-7f62-43cf-8b0e-881920d2fe171613631479005-1.jpg"
              alt="home-living"
            />
            <h2>GOODHOMES</h2>
            <p>Set of 3 Glass Storage Box with..</p>
            <div class="price-structure">
              <h3>Rs. 795</h3>
              <span>Rs. 3000</span>
              <h6>(74% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/20072904/2022/9/19/cf483cfc-c260-4d61-a397-02d9b58257ea1663577085606Serveware1.jpg"
              alt="home-living"
            />
            <h2>Milton</h2>
            <p>Set of 3 Serving Casseroles</p>
            <div class="price-structure">
              <h3>Rs. 949</h3>
              <span>Rs. 2999</span>
              <h6>(49% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18327324/2022/5/19/0c645a5c-1695-477c-9f19-e9539ca0d8af1652941342373HomeSizzlerUnisexGreyBedsheets1.jpg"
              alt="home-living"
            />
            <h2>Home Sizzler</h2>
            <p>210 TC Single 1 Pillow Cover</p>
            <div class="price-structure">
              <h3>Rs. 199</h3>
              <span>Rs. 799</span>
              <h6>(75% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17361352/2022/3/3/ec2fcbee-3373-406b-b69c-a171e1a1a7bf1646305826450CortinaBrownSetof2AbstractRoomDarkeningVelvetWindowCurtains1.jpg"
              alt="home-living"
            />
            <h2>Cortina</h2>
            <p>Set of 2 Window Curtains</p>
            <div class="price-structure">
              <h3>Rs. 559</h3>
              <span>Rs. 1598</span>
              <h6>(65% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15292382/2021/8/28/0147767f-9631-426f-a56f-64d253b14ef61630140611270Planters1.jpg"
              alt="home-living"
            />
            <h2>Homesake</h2>
            <p>Set of 2 plant Hangers</p>
            <div class="price-structure">
              <h3>Rs. 375</h3>
              <span>Rs. 2000</span>
              <h6>(25% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23264074/2023/5/19/2d3e3a62-fd64-4d2a-97fb-12f8ade750221684434714932TridentQueenBedsheetSet144TC100CottonBagh1.jpg"
              alt="home-living"
            />
            <h2>Trident</h2>
            <p>Queen Bedsheet & Pillow Covers</p>
            <div class="price-structure">
              <h3>Rs. 620</h3>
              <span>Rs. 2699</span>
              <h6>(77% OFF)</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeKitchen;
