import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <div id="profile-body">
        <div id="details">
          <div id="account">
            <h3>Account</h3>
            <span>santosh</span>
          </div>
          <div id="overview">
            <div id="left">
              <div id="overview-main">
                <p>Overview</p>
              </div>
              <div id="orders">
                <span>ORDERS</span>
                <p>Orders & Returns</p>
              </div>
              <div id="credits">
                <span>CREDITS</span>
                <p>Coupons</p>
                <p>Myntra Credit</p>
                <p>MynCash</p>
              </div>
              <div id="account">
                <span>ACCOUNT</span>
                <h3>Profile</h3>
                <p>Saved Cards</p>
                <p>Saved VPA</p>
                <p>Address</p>
                <p>Myntra Insider</p>
              </div>
              <div id="legal">
                <span>LEGAL</span>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p></p>
              </div>
            </div>
            <div id="right">
              <div id="header">
                <h3>Profile Details</h3>
              </div>
              <div id="personal-details">
                <div>
                  <p>Full Name</p>
                  <span>santosh</span>
                </div>
                <div>
                  <p>Mobile Number</p>
                  <span>8356015803</span>
                </div>
                <div>
                  <p>Email ID</p>
                  <span>santoshchappidi03@gmail.com</span>
                </div>
                <div>
                  <p>Gender</p>
                  <span>MALE</span>
                </div>
                <div>
                  <p>Date of Birth</p>
                  <span>- not added</span>
                </div>
                <div>
                  <p>Location</p>
                  <span>Chembur</span>
                </div>
                <div>
                  <p>Alternate mobile</p>
                  <span>- not added</span>
                </div>
                <div>
                  <p>Hint Name</p>
                  <span>- not added</span>
                </div>
              </div>
              <div id="button">
                <button>EDIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
