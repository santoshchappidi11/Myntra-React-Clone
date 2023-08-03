import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div id="myntra-footer">
        <div id="footer">
          <div id="online-shopping">
            <div id="online">
              <h2 style={{ fontSize: "25px", fontVariant: "small-caps" }}>
                online shopping
              </h2>
              <p>Men</p>
              <p>Women</p>
              <p>Kids</p>
              <p>Home & pving</p>
              <p>Beauty</p>
              <p>Gift Cards</p>
              <p>Myntra Insider</p>
            </div>
            <div id="link">
              <h2 style={{ fontSize: "25px", fontVariant: "small-caps" }}>
                useful links
              </h2>
              <p>Blogs</p>
              <p>Careers</p>
              <p>Site Map</p>
              <p>Corporate Information</p>
            </div>
          </div>
          <div id="customer-policies">
            <h2 style={{ fontSize: "25px", fontVariant: "small-caps" }}>
              customer policies
            </h2>
            <p>Contact US</p>
            <p>FAQ</p>
            <p>T&C</p>
            <p>Terms of Use</p>
            <p>Track Orders</p>
            <p>Shipping</p>
            <p>Cancellation</p>
            <p>Returns</p>
            <p>Privacy Policy</p>
          </div>
          <div id="mobile">
            <div id="playstore">
              <h2 style={{ fontSize: "25px", fontVariant: "small-caps" }}>
                experience myntra app on mobile
              </h2>
              <div id="play">
                <i class="fa-brands fa-google-play fa-2x"></i>
                <i class="fa-brands fa-apple fa-2x"></i>
              </div>
            </div>
            <div id="social-medias">
              <h2 style={{ fontSize: "25px", fontVariant: "small-caps" }}>
                keep in touch
              </h2>
              <div id="socials">
                <i class="fa-brands fa-square-facebook fa-2x"></i>
                <i class="fa-brands fa-twitter fa-2x"></i>
                <i class="fa-brands fa-youtube fa-2x"></i>
                <i class="fa-brands fa-instagram fa-2x"></i>
              </div>
            </div>
          </div>
          <div id="myntra-policies">
            <div id="policy-hundred">
              <div>
                <img
                  src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                  alt="policy"
                />
              </div>
              <p>
                <b style={{ color: "black" }}>100% original</b> guarantee for
                all products on myntra.com
              </p>
            </div>
            <div id="policy-thirty">
              <div>
                <img
                  src="https://assets.myntassets.com/assets/images/retaillabs/2023/5/22/becb1b16-86cc-4e78-bdc7-7801c17947831684737106127-Return-Window-image.png"
                  alt="policy"
                />
              </div>
              <p>
                <b style={{ color: "black" }}>Return within 30 days</b> of
                recieving your order
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
