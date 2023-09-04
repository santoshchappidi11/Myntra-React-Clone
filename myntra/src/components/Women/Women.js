import React, { useContext, useEffect, useState } from "react";
import "./Women.css";
import { AuthContexts } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import api from "../../ApiConfig/index";

const Women = () => {
  // const { state } = useContext(AuthContexts);
  const [productsData, setProductsData] = useState([]);
  const [womenProductsData, setWomenProductsData] = useState([]);
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
        (prod) => prod.category == "Women"
      );
      setWomenProductsData(newProducts);
    } else {
      setWomenProductsData([]);
    }
  }, [productsData]);

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
          {womenProductsData?.length ? (
            womenProductsData.map((prod) => (
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

export default Women;
