import React from "react";
import "./AddProduct.css";

const AddProduct = () => {
  return (
    <>
      <div id="add-product-body">
        <div id="add-product-structure">
          <div id="upper">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/c2be095d-a4fb-4981-bdad-9d69ea189da31675792659902-offer-banner-500-600x240-code-_-MYNTRA200.jpg"
              alt="register"
            />
          </div>
          <div id="lower">
            <form>
              <div id="header">
                <h2>Add Product</h2>
              </div>

              <div id="name">
                <div>
                  <input placeholder="Product Name*" type="text" />
                </div>
              </div>
              <div id="image">
                <div>
                  <input placeholder="Product Image*" type="text" />
                </div>
              </div>
              <div id="price">
                <div>
                  <input placeholder="Product Price*" type="number" />
                </div>
              </div>
              <div id="category">
                <div>
                  <select>
                    <option>Men</option>
                    <option>Women</option>
                    <option>Kids</option>
                    <option>Home&Kitchen</option>
                    <option>Beauty</option>
                  </select>
                </div>
              </div>
              <div id="terms">
                <p>
                  By continuing, I agree to the
                  <b style={{ color: "#ff3f75" }}>Terms of Use</b> &
                  <b style={{ color: "#ff3f75" }}> Privacy Policy</b>
                </p>
              </div>
              <div id="button">
                <button>ADD PRODUCT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
