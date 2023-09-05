import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContexts } from "../Context/AuthContext";
import api from "../../ApiConfig/index";
// import axios from "axios";

const Login = () => {
  const navigateTo = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });
  const { state, Login } = useContext(AuthContexts);

  useEffect(() => {
    if (state?.currentUser?.name) {
      navigateTo("/");
    }
  }, [state, navigateTo]);

  const handleChangeValues = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (userData.email && userData.password) {
      try {
        const response = await api.post("/login", {
          userData,
        });
        if (response.data.success) {
          localStorage.setItem(
            "MyntraUserToken",
            JSON.stringify(response.data.token)
          );
          Login(response.data);
          toast.success(response.data.message);
          setUserData({ email: "", password: "" });
          navigateTo("/");
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
      <div id="login-body">
        <div id="login-structure">
          <div id="upper">
            <img
              src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/2/7/c2be095d-a4fb-4981-bdad-9d69ea189da31675792659902-offer-banner-500-600x240-code-_-MYNTRA200.jpg"
              alt="login"
            />
          </div>
          <div id="lower">
            <form onSubmit={handleLoginSubmit}>
              <div id="header">
                <h2>Login</h2>
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
              <div id="terms">
                <p>
                  By continuing, I agree to the
                  <b style={{ color: "#ff3f75" }}>Terms of Use</b> &
                  <b style={{ color: "#ff3f75" }}> Privacy Policy</b>
                </p>
              </div>
              <div id="button">
                <button>CONTINUE</button>
              </div>
              <div id="trouble">
                <p>
                  Don't have an account?
                  <b
                    style={{ color: "#ff3f75" }}
                    onClick={() => navigateTo("/register")}
                  >
                    {""} Register
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

export default Login;
