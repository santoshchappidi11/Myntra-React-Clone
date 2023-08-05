import React, { useContext, useEffect, useState } from "react";
import "./Beauty.css";
import { AuthContexts } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Beauty = () => {
  const { state } = useContext(AuthContexts);
  const [productsData, setProductsData] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (state?.products?.length) {
      const newProducts = state.products.filter(
        (prod) => prod.category == "Beauty"
      );
      setProductsData(newProducts);
    } else {
      setProductsData([]);
    }
  }, [state]);

  return (
    <>
      <div id="product-beauty">
        <div id="path">
          <p>
            Home / <b>Personal Care</b>
          </p>
        </div>
        <div id="items">
          <h3>
            Personal Care
            <span style={{ fontWeight: " 400", color: "rgb(100, 100, 100)" }}>
              - 84558 items
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

      <div id="beauty-body">
        <div id="left">
          <div id="categories">
            <h2>CATEGORIES</h2>
            <input type="checkbox" />
            <label>Lipstick</label>
            <br />
            <input type="checkbox" />
            <label>Nail Polish</label>
            <br />
            <input type="checkbox" />
            <label>Perfume and Body mist</label>
            <br />
            <input type="checkbox" />
            <label>Beauty Accessory</label>
            <br />
            <input type="checkbox" />
            <label>Body Wash and Scrub</label>
            <br />
            <input type="checkbox" />
            <label>Body Oil</label>
            <br />
            <input type="checkbox" />
            <label>Shampoo & Conditioner</label>
            <br />
            <input type="checkbox" />
            <label>Face Wash and Cleanser</label>
            <div id="more">
              <span>+ 74 more</span>
            </div>
          </div>
          <div id="brand">
            <h2>BRAND</h2>
            <input type="checkbox" />
            <label>Comet Busters</label>
            <br />
            <input type="checkbox" />
            <label>MI FASHION</label>
            <br />
            <input type="checkbox" />
            <label>Deve Herbes</label>
            <br />
            <input type="checkbox" />
            <label>PERPAA</label>
            <br />
            <input type="checkbox" />
            <label>Menjewell</label>
            <br />
            <input type="checkbox" />
            <label>ME-ON</label>
            <br />
            <input type="checkbox" />
            <label>MANASIK</label>
            <br />
            <input type="checkbox" />
            <label>MISS ROSE</label>
            <div id="more">
              <span>+ 1449 more</span>
            </div>
          </div>

          <div id="price">
            <h2>PRICE</h2>
            <input type="checkbox" />
            <label>Rs. 26 to Rs. 11495</label>
            <br />
            <input type="checkbox" />
            <label>Rs. 11495 to Rs. 22964</label>
            <br />
            <input type="checkbox" />
            <label>Rs. 22964 to Rs. 34433</label>
            <br />
            <input type="checkbox" />
            <label>Rs. 34433 to Rs. 45902</label>
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
                src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12974254/2023/1/24/1a0ac7fc-8757-472b-af57-874145dddc261674560059578-Livon-Set-of-2-Heat-Protect-Hair-Serum--Syska-Hair-Dryer-672-1.jpg"
                alt="beauty"
              />
            </a>
            <h2>Livon</h2>
            <p>Set of 2 Hair Serum & Dryer</p>
            <div class="price-structure">
              <h3>Rs. 524</h3>
              <span>Rs. 1749</span>
              <h6>(70% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/2/12/ff464a4e-42e7-439d-91e3-dc7366fb28a31613120818099-1.jpg"
              alt="beauty"
            />
            <h2>Olay</h2>
            <p>Retinol 24 Facial Moisturizer</p>
            <div class="price-structure">
              <h3>Rs. 899</h3>
              <span>Rs. 1999</span>
              <h6>(55% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2472301/2022/6/30/ed041d1c-4e72-4e7e-ba6a-3ef573d4ecf11656588475326Lakme9to5SPF30ComplexionCareCream-Beige9g1.jpg"
              alt="beauty"
            />
            <h2>Lakme</h2>
            <p>9 to 5 Complexion Care CC..</p>
            <div class="price-structure">
              <h3>Rs. 88</h3>
              <span>Rs. 110</span>
              <h6>(20% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10244851/2021/2/10/32c4b366-a522-4d98-91f0-46d413de66031612945921510-Philips-Women-Heated-Straightening-Brush-with-Thermo-Protect-1.jpg"
              alt="beauty"
            />
            <h2>Philips</h2>
            <p>BHH880/10 Straightening Brush</p>
            <div class="price-structure">
              <h3>Rs. 2556</h3>
              <span>Rs. 3995</span>
              <h6>(36% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14047424/2022/7/27/62632c8e-f7fd-495a-91de-4f7c462418d41658914502661VILLAINMenClassicEauDeParfum-100ml1.jpg"
              alt="beauty"
            />
            <h2>VILLAIN</h2>
            <p>Men Classic Eau De Parfum</p>
            <div class="price-structure">
              <h3>Rs. 239</h3>
              <span>Rs. 799</span>
              <h6>(70% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18641908/2022/6/6/bdcfd3ba-5815-4baf-9b5f-d2eb3109b4b71654521644709ThePinkFoundryOilFreeMatteMoisturiserwithBlueLightProtection1.jpg"
              alt="beauty"
            />
            <h2>The Pink Foundary</h2>
            <p>Oil Free Matte Moisturiser</p>
            <div class="price-structure">
              <h3>Rs. 1120</h3>
              <span>Rs. 2000</span>
              <h6>(44% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22660956/2023/5/4/7b409b9d-0c8c-41ab-8b72-8ceb2e777aeb1683191418526-dyson-Gift-Edition-Airwrap-Hair-Multi-Styler---Vinca-Blue--R-1.jpg"
              alt="beauty"
            />
            <h2>dyson</h2>
            <p>Gift Edition Airwrap</p>
            <div class="price-structure">
              <h3>Rs. 4700</h3>
              <span>Rs. 4900</span>
              <h6>(15% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9925133/2022/4/5/3a653d2e-10eb-42ab-8acc-6b47e47b61891649150288841-LOreal-Professionnel--Gold-Quinoa--Protein-Repair-Shampoo-30-1.jpg"
              alt="beauty"
            />
            <h2>LOreal Professionnel</h2>
            <p>Absolute Repair Shampoo 300ml</p>
            <div class="price-structure">
              <h3>Rs. 745</h3>
              <span>Rs. 1000</span>
              <h6>(75% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18641908/2022/6/6/bdcfd3ba-5815-4baf-9b5f-d2eb3109b4b71654521644709ThePinkFoundryOilFreeMatteMoisturiserwithBlueLightProtection1.jpg"
              alt="beauty"
            />
            <h2>The Pink Foundary</h2>
            <p>Oil Free Matte Moisturiser</p>
            <div class="price-structure">
              <h3>Rs. 1120</h3>
              <span>Rs. 2000</span>
              <h6>(44% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9589299/2019/5/21/179f93af-b4a9-4e61-80a5-2ca54e95a6341558418211559-Clinique-Women-Perfume-and-Body-Mist-1991558418211485-1.jpg"
              alt="beauty"
            />
            <h2>Clinique</h2>
            <p>Happy Perfume Spray 100ml</p>
            <div class="price-structure">
              <h3>Rs. 2187</h3>
              <span>Rs. 8750</span>
              <h6>(75% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/55118/2022/3/21/d647d908-2909-4244-ad1a-186fa8f3f89d1647860104751-Lakme-Absolute-Mattreal-Skin-Natural-Mousse-with-SPF-8---Ivo-1.jpg"
              alt="beauty"
            />
            <h2>Lakme</h2>
            <p>Mattreal Skin Natural Mousse</p>
            <div class="price-structure">
              <h3>Rs. 437</h3>
              <span>Rs. 875</span>
              <h6>(50% OFF)</h6>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Beauty;
