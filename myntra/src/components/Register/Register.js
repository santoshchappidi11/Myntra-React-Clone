import React from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigateTo = useNavigate();

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
            <form>
              <div id="header">
                <h2>Register</h2>
              </div>

              <div id="name">
                <div>
                  <input placeholder="Name*" type="name" />
                </div>
              </div>
              <div id="email">
                <div>
                  <input placeholder="Email*" type="email" />
                </div>
              </div>
              <div id="password">
                <div>
                  <input placeholder="Password*" type="password" />
                </div>
              </div>
              <div id="role">
                <div>
                  <select>
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
                <button>CONTINUE</button>
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
