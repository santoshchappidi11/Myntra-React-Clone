import React, { useContext, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContexts } from "../Context/AuthContext";

const Login = () => {
  const navigateTo = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { Login } = useContext(AuthContexts);

  const handleChangeValues = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (loginData.email && loginData.password) {
      const allUsers = JSON.parse(localStorage.getItem("users"));
      let flag = false;
      for (let i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email == loginData.email &&
          allUsers[i].password == loginData.password
        ) {
          flag = true;
          Login(allUsers[i]);
          // localStorage.setItem("current-user", JSON.stringify(allUsers[i]));
          setLoginData({ email: "", password: "" });
          toast.success("Login Successfull!");
          navigateTo("/");
          break;
        }
      }
      if (flag == false) {
        setLoginData({ email: "", password: "" });
        toast.error("Invalid email or password!");
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
                    value={loginData.email}
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
                    value={loginData.password}
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
