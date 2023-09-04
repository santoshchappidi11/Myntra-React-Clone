import React, { useContext, useEffect, useState } from "react";
import "./Kids.css";
// import { AuthContexts } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../../ApiConfig/index";

const Kids = () => {
  // const { state } = useContext(AuthContexts);
  const [productsData, setProductsData] = useState([]);
  const [kidsProductsData, setKidsProductsData] = useState([]);
  const navigateTo = useNavigate();

  // console.log(productsData);

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
        (prod) => prod.category == "Kids"
      );
      setKidsProductsData(newProducts);
    } else {
      setKidsProductsData([]);
    }
  }, [productsData]);

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
          {kidsProductsData?.length ? (
            kidsProductsData.map((prod) => (
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

export default Kids;
