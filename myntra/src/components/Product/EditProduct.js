import React, { useContext, useEffect, useState } from "react";
import "./EditProduct.css";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { AuthContexts } from "../Context/AuthContext";

const EditProduct = () => {
  const singleProduct = useParams();
  const { state, contextProducts } = useContext(AuthContexts);
  const [productsContext, setProductsContext] = useState([]);
  const [editProductData, setEditProductData] = useState({
    name: "",
    image: "",
    price: "",
    category: "Men",
  });

  const handleChangeValues = (e) => {
    setEditProductData({ ...editProductData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (state.products?.length) {
      const newProduct = state?.products?.find(
        (prod) => prod.id == singleProduct.id
      );
      setEditProductData(newProduct);
    } else {
      setEditProductData({});
    }
  }, [state, singleProduct]);

  useEffect(() => {
    if (state?.currentUser) {
      setProductsContext(state?.products);
    } else {
      setProductsContext([]);
    }
  }, [state]);

  const handleEditProductSubmit = (e) => {
    e.preventDefault();

    if (
      editProductData.name &&
      editProductData.image &&
      editProductData.price &&
      editProductData.category
    ) {
      // const allProducts = JSON.parse(localStorage.getItem("products")) || [];
      for (let i = 0; i < productsContext.length; i++) {
        if (productsContext[i].id == singleProduct.id) {
          productsContext[i].id = editProductData.id;
          productsContext[i].name = editProductData.name;
          productsContext[i].image = editProductData.image;
          productsContext[i].price = editProductData.price;
          productsContext[i].category = editProductData.category;
        }
      }
      contextProducts(productsContext);
      setEditProductData({
        name: "",
        image: "",
        price: "",
        category: "Men",
      });
      toast.success("Product updated successfully!");
    } else {
      toast.error("Please fill all the details!");
    }
  };

  return (
    <>
      <div id="edit-product-body">
        <div id="edit-product-structure">
          <div id="upper">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/c2be095d-a4fb-4981-bdad-9d69ea189da31675792659902-offer-banner-500-600x240-code-_-MYNTRA200.jpg"
              alt="register"
            />
          </div>
          <div id="lower">
            <form onSubmit={handleEditProductSubmit}>
              <div id="header">
                <h2>Edit Product</h2>
              </div>

              <div id="name">
                <div>
                  <input
                    placeholder="Product Name*"
                    type="text"
                    name="name"
                    value={editProductData.name}
                    onChange={handleChangeValues}
                  />
                </div>
              </div>
              <div id="image">
                <div>
                  <input
                    placeholder="Product Image*"
                    type="text"
                    name="image"
                    value={editProductData.image}
                    onChange={handleChangeValues}
                  />
                </div>
              </div>
              <div id="price">
                <div>
                  <input
                    placeholder="Product Price*"
                    type="number"
                    name="price"
                    value={editProductData.price}
                    onChange={handleChangeValues}
                  />
                </div>
              </div>
              <div id="category">
                <div>
                  <select
                    name="category"
                    value={editProductData.category}
                    onChange={handleChangeValues}
                  >
                    <option>Men</option>
                    <option>Women</option>
                    <option>Kids</option>
                    <option>Home&Living</option>
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
                <button>UPDATE PRODUCT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduct;
