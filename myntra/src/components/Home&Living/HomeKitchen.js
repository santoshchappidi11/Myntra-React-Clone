import React, { useContext, useEffect, useState } from "react";
import "./HomeKitchen.css";
import { useNavigate } from "react-router-dom";
import api from "../../ApiConfig/index";
import { toast } from "react-hot-toast";
// import { AuthContexts } from "../Context/AuthContext";

const HomeKitchen = () => {
  // const { state } = useContext(AuthContexts);
  const [productsData, setProductsData] = useState([]);
  const [homekitchenProductData, sethomekitchenProductData] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await api.get("/all-products");
        if (response.data.success) {
          setProductsData(response.data.products);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    getAllProducts();
  }, []);

  useEffect(() => {
    if (productsData?.length) {
      const newProducts = productsData?.filter(
        (prod) => prod.category == "Home&Kitchen"
      );
      sethomekitchenProductData(newProducts);
    } else {
      sethomekitchenProductData([]);
    }
  }, [productsData]);

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
          {homekitchenProductData?.length ? (
            homekitchenProductData.map((prod) => (
              <div
                className="product"
                key={prod._id}
                onClick={() => navigateTo(`/single-product/${prod._id}`)}
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
        </div>
      </div>
    </>
  );
};

export default HomeKitchen;
