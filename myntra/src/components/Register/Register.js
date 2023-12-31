import React, { useContext, useEffect, useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContexts } from "../Context/AuthContext";
import api from "../../ApiConfig/index";
// import axios from "axios";

const Register = () => {
  const { state } = useContext(AuthContexts);
  const navigateTo = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
    role: "Buyer",
  });

  useEffect(() => {
    if (state?.currentUser?.name) {
      navigateTo("/");
    }
  }, [state, navigateTo]);

  const handleChangeValues = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (
      userData.name &&
      userData.email &&
      userData.number &&
      userData.password &&
      userData.confirmPassword &&
      userData.role
    ) {
      if (userData.password == userData.confirmPassword) {
        try {
          const response = await api.post("/register", {
            userData,
          });

          if (response.data.success) {
            setUserData({
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
              number: "",
              role: "Buyer",
            });
            toast.success(response.data.message);
            navigateTo("/login");
          } else {
            toast.error(response.data.message);
          }
        } catch (error) {
          toast.error(error.response.data.message);
        }
      } else {
        toast.error("Password and ConfirmPassword does not match!");
      }
    } else {
      toast.error("Please fill all the details!");
    }
  };

  return (
    <>
      <div id="register-body">
        <div id="register-structure">
          <div id="upper">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/c2be095d-a4fb-4981-bdad-9d69ea189da31675792659902-offer-banner-500-600x240-code-_-MYNTRA200.jpg"
              alt="register"
            />
          </div>
          <div id="lower">
            <form onSubmit={handleRegisterSubmit}>
              <div id="header">
                <h2>Register</h2>
              </div>

              <div id="name">
                <div>
                  <input
                    placeholder="Enter Your Name*"
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChangeValues}
                  />
                </div>
              </div>
              <div id="email">
                <div>
                  <input
                    placeholder="Enter Your Email*"
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChangeValues}
                  />
                </div>
              </div>
              <div id="number">
                <div>
                  <input
                    placeholder="Enter Your Number*"
                    type="number"
                    name="number"
                    value={userData.number}
                    onChange={handleChangeValues}
                  />
                </div>
              </div>
              <div id="password">
                <div>
                  <input
                    placeholder="Enter Your Password*"
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChangeValues}
                  />
                </div>
              </div>
              <div id="password">
                <div>
                  <input
                    placeholder="Enter Your Confirm Password*"
                    type="password"
                    name="confirmPassword"
                    value={userData.confirmPassword}
                    onChange={handleChangeValues}
                  />
                </div>
              </div>
              <div id="role">
                <div>
                  <select
                    name="role"
                    onChange={handleChangeValues}
                    value={userData.role}
                  >
                    <option>Buyer</option>
                    <option>Seller</option>
                    <option>Admin</option>
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
                <button type="submit">CONTINUE</button>
              </div>
              <div id="trouble">
                <p>
                  Already have an account?
                  <b
                    style={{ color: "#ff3f75" }}
                    onClick={() => navigateTo("/login")}
                  >
                    {""} Login
                  </b>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
