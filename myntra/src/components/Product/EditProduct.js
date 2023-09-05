import React, { useContext, useEffect, useState } from "react";
import "./EditProduct.css";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
// import { AuthContexts } from "../Context/AuthContext";
import api from "../../ApiConfig/index";

const EditProduct = () => {
  const navigateTo = useNavigate();
  const { editProdId } = useParams();
  // const { state } = useContext(AuthContexts);
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
    const getEditProductData = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("MyntraUserToken"));

        const response = await api.post("/get-editproduct-data", {
          token,
          productId: editProdId,
        });

        if (response?.data?.success) {
          setEditProductData(response?.data?.product);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };

    if (editProdId) {
      getEditProductData();
    }
  }, [editProdId]);

  const handleEditProductSubmit = async (e) => {
    e.preventDefault();

    if (
      editProductData.name &&
      editProductData.image &&
      editProductData.price &&
      editProductData.category
    ) {
      try {
        const token = JSON.parse(localStorage.getItem("MyntraUserToken"));

        const response = await api.patch("/update-your-product", {
          editProductData,
          token,
          productId: editProdId,
        });

        if (response.data.success) {
          toast.success(response.data.message);
          navigateTo(`/${response?.data?.product?.category}`);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
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
