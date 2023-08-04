import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Register = () => {
  const navigateTo = useNavigate();
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Buyer",
    cart: [],
  });

  const handleChangeValues = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (
      registerData.name &&
      registerData.email &&
      registerData.password &&
      registerData.role
    ) {
      const allUsers = JSON.parse(localStorage.getItem("users")) || [];
      allUsers.push(registerData);
      localStorage.setItem("users", JSON.stringify(allUsers));
      setRegisterData({
        name: "",
        email: "",
        password: "",
        role: "Buyer",
      });
      toast.success("Registered Successfully!");
      navigateTo("/login");
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
                    value={registerData.name}
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
                    value={registerData.email}
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
                    value={registerData.password}
                    onChange={handleChangeValues}
                  />
                </div>
              </div>
              <div id="role">
                <div>
                  <select
                    name="role"
                    onChange={handleChangeValues}
                    value={registerData.role}
                  >
                    <option>Buyer</option>
                    <option>Seller</option>
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
