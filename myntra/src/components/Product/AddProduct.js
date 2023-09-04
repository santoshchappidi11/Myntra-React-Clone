import React, { useContext, useState } from "react";
import "./AddProduct.css";
import { toast } from "react-hot-toast";
import { AuthContexts } from "../Context/AuthContext";
import api from "../../ApiConfig";
import { useNavigate } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";

const AddProduct = () => {
  const { state, contextProducts } = useContext(AuthContexts);
  const navigateTo = useNavigate();
  // const [currentUser, setCurrentUser] = useState({});
  const [addProductData, setAddProductData] = useState({
    name: "",
    image: "",
    price: "",
    category: "Men",
  });

  // useEffect(() => {
  //   if (state?.currentUser?.email) {
  //     setCurrentUser(state?.currentUser);
  //   } else {
  //     setCurrentUser({});
  //   }
  // }, [state]);

  const handleChangeValues = (e) => {
    setAddProductData({ ...addProductData, [e.target.name]: e.target.value });
  };

  const handleSubmitAddProduct = async (e) => {
    e.preventDefault();

    if (
      addProductData.name &&
      addProductData.image &&
      addProductData.price &&
      addProductData.category
    ) {
      try {
        const token = JSON.parse(localStorage.getItem("MyntraUserToken"));

        if (token) {
          const response = await api.post("/add-product", {
            addProductData,
            token,
          });

          if (response.data.success) {
            toast.success(response.data.message);
            navigateTo("/");
          } else {
            toast.error(response.data.message);
          }
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("Please fill all the fields!");
    }
  };

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
            <form onSubmit={handleSubmitAddProduct}>
              <div id="header">
                <h2>Add Product</h2>
              </div>

              <div id="name">
                <div>
                  <input
                    placeholder="Product Name*"
                    type="text"
                    name="name"
                    value={addProductData.name}
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
                    value={addProductData.image}
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
                    value={addProductData.price}
                    onChange={handleChangeValues}
                  />
                </div>
              </div>
              <div id="category">
                <div>
                  <select
                    name="category"
                    value={addProductData.category}
                    onChange={handleChangeValues}
                  >
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
