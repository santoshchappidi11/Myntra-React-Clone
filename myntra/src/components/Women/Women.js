import React from "react";
import "./Women.css";

const Women = () => {
  return (
    <>
      <div id="product-women">
        <div id="path">
          <p>
            Home / Clothing / <b>Kurtis For Women</b>
          </p>
        </div>
        <div id="items">
          <h3>
            Kurtis For Women
            <span style={{ fontWeight: " 400", color: "rgb(100, 100, 100)" }}>
              - 131954 items
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

      <div id="women-body">
        <div id="left">
          <div id="categories">
            <h2>CATEGORIES</h2>
            <input type="checkbox" />
            <label>Kurtas</label>
            <br />
            <input type="checkbox" />
            <label>Kurta Sets</label>
          </div>
          <div id="brand">
            <h2>BRAND</h2>
            <input type="checkbox" />
            <label>KALINI</label>
            <br />
            <input type="checkbox" />
            <label>Ethnic basket</label>
            <br />
            <input type="checkbox" />
            <label>7Threads</label>
            <br />
            <input type="checkbox" />
            <label>Anouk</label>
            <br />
            <input type="checkbox" />
            <label>Sangria</label>
            <br />
            <input type="checkbox" />
            <label>Indo Era</label>
            <br />
            <input type="checkbox" />
            <label>1 Stop Fashion</label>
            <br />
            <input type="checkbox" />
            <label>Varanga</label>
            <div id="more">
              <span>+ 806 more</span>
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
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22120556/2023/2/25/986d6f97-fe9b-487a-9c64-f577e0a32c491677314970316KhushalKwomenEmbroideryKurtaandpalazzowithdupattaset7.jpg"
              alt="women"
            />
            <h2>Khushal K</h2>
            <p>Kurta with Palazzos and Dupatta</p>
            <div class="price-structure">
              <h3>Rs. 1416</h3>
              <span>Rs. 5449</span>
              <h6>(74% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <a href="./single-product.html">
              <img
                src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/20695836/2022/11/10/ba1724c2-c606-481c-a0ca-63424b61a8661668078028270WomensRayonPrintedEmbroideredKurtaWithPantAndDupatta1.jpg"
                alt="women"
              />
            </a>
            <h2>SINGNI</h2>
            <p>Women Embroided Kurta Set</p>
            <div class="price-structure">
              <h3>Rs. 1299</h3>
              <span>Rs. 4999</span>
              <h6>(74% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18652620/2022/8/26/4d5f7043-a460-42e5-b67a-b04d9c0bc7041661503606623-KALINI-Women-Beige-Floral-Yoke-Design-Kurta-with-Trousers--W-1.jpg"
              alt="women"
            />
            <h2>KALINI</h2>
            <p>Women Yoke Design Kurta Set</p>
            <div class="price-structure">
              <h3>Rs. 813</h3>
              <span>Rs. 3699</span>
              <h6>(78% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13932876/2021/4/14/7ac5777f-1bb6-41ae-82f2-b432efca47661618405359810AnaynaWomensFlaredKurta2.jpg"
              alt="women"
            />
            <h2>anayna</h2>
            <p>Bandhani Cotton Angrakha kurta</p>
            <div class="price-structure">
              <h3>Rs. 659</h3>
              <span>Rs. 2199</span>
              <h6>(70% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22911800/2023/4/26/28bf7014-3ee9-4024-a506-ee02ccb83f8e1682515506345FASHIONDEPTHWomenEmbroideredCottonStraightKurtaPantDupattaSe1.jpg"
              alt="women"
            />
            <h2>FASHION DEPTH</h2>
            <p>Kurta with Trousers & Dupatta</p>
            <div class="price-structure">
              <h3>Rs. 1299</h3>
              <span>Rs. 3999</span>
              <h6>(70% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16714126/2022/2/3/0250ccee-67d6-46fa-ab5b-f4d5e36ccb761643878799794-Anouk-Women-Kurtas-5101643878799296-1.jpg"
              alt="women"
            />
            <h2>Anouk</h2>
            <p>Women Bandhani Printed Kurta</p>
            <div class="price-structure">
              <h3>Rs. 594</h3>
              <span>Rs. 1699</span>
              <h6>(65% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10356511/2019/8/8/a28f9ccb-c0d7-4e66-87f0-e639f157ff2d1565263388836-Libas-Women-Kurta-Sets-571565263387250-1.jpg"
              alt="women"
            />
            <h2>Libas</h2>
            <p>Ethnic Print Kurta Set</p>
            <div class="price-structure">
              <h3>Rs. 767</h3>
              <span>Rs. 2399</span>
              <h6>(68% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/20498352/2022/10/22/3424a72e-8518-4853-aa99-e48a0e1205841666419466834KALINIWomenPistaGreenStraightKurtawithTrouserDupatta1.jpg"
              alt="women"
            />
            <h2>KALINI</h2>
            <p>Women Embroided Kurta Set</p>
            <div class="price-structure">
              <h3>Rs. 813</h3>
              <span>Rs. 3699</span>
              <h6>(78% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19824518/2022/9/8/e9743e35-4c67-4e74-872d-58da3461e8731662619809853InddusWomenMagentaThreadWorkKurtawithTrousersWithDupatta5.jpg"
              alt="women"
            />
            <h2>Inddus</h2>
            <p>Women Embroided Kurta Set</p>
            <div class="price-structure">
              <h3>Rs. 2634</h3>
              <span>Rs. 8499</span>
              <h6>(69% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22143838/2023/3/9/19485e92-d4cf-4d2e-8e10-01dacc0d4b4d1678359322683-anayna-Ethnic-Motifs-Printed-Kurta-5981678359322070-1.jpg"
              alt="women"
            />
            <h2>anayna</h2>
            <p>Women Ethnic Motifs Printed..</p>
            <div class="price-structure">
              <h3>Rs. 539</h3>
              <span>Rs. 1799</span>
              <h6>(70% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23142798/2023/5/12/c013275e-3d58-4b78-b516-db8fab54f3b21683880128771KurtaSets1.jpg"
              alt="women"
            />
            <h2>HANDME</h2>
            <p>Embroided Kurta Set</p>
            <div class="price-structure">
              <h3>Rs. 5599</h3>
              <span>Rs. 6999</span>
              <h6>(20% OFF)</h6>
            </div>
          </div>
          <div class="product">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/19231474/2022/7/23/cbc61e73-8d7e-415a-9ade-bc4b9daab57d1658563077615Kurtas1.jpg"
              alt="women"
            />
            <h2>HERE&NOW</h2>
            <p>Women Floral Embroidered..</p>
            <div class="price-structure">
              <h3>Rs. 659</h3>
              <span>Rs. 1998</span>
              <h6>(67% OFF)</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Women;
