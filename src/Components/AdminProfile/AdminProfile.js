import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./AdminProfile.css";
import { Link, useHistory } from "react-router-dom";
function AdminProfile() {
  Axios.defaults.withCredentials = true;
  const history = useHistory();
  const [USER_ID, setUSER_ID] = useState("");
  const [ADMIN_INFO_PASSWORD, setADMIN_INFO_PASSWORD] = useState("");
  const [ADMIN_INFO_USERNAME, setADMIN_INFO_USERNAME] = useState("");
  const [ADMIN_INFO_CONTACT, setADMIN_INFO_CONTACT] = useState("");
  const [ADMIN_INFO_ADDRESS, setADMIN_INFO_ADDRESS] = useState("");
  const [ADMIN_INFO_NAME, setADMIN_INFO_NAME] = useState("");
  const [ADMIN_INFO_EMAIL, setADMIN_INFO_EMAIL] = useState("");

  const [ADMIN_INFO, setADMIN_INFO] = useState([]);

  const [USERNAME_, setUSERNAME] = useState("");

  useEffect(() => {
    var name1 = JSON.parse(localStorage.getItem("Client"));
    if (
      localStorage.getItem("Client") === null ||
      name1[0].USER_TYPE === "Member"
    ) {
      history.push("/");
    } else {
      var name = JSON.parse(localStorage.getItem("Client"));

      console.log(name);
      console.log(name[0].ADMIN_NAME);
      setUSERNAME(name[0].ADMIN_NAME);
      setUSER_ID(name[0].USER_ID);
      setADMIN_INFO_EMAIL(name[0].ADMIN_EMAIL);
      setADMIN_INFO_NAME(name[0].ADMIN_NAME);
      setADMIN_INFO_ADDRESS(name[0].ADMIN_ADDRESS);
      setADMIN_INFO_CONTACT(name[0].ADMIN_CONTACT);
      setADMIN_INFO_USERNAME(name[0].USERNAME);
      setADMIN_INFO_PASSWORD(name[0].USER_PASSWORD);
    }
  }, []);

  const logout = () => {
    alert("logout");
    localStorage.clear();
    window.location.reload();
  };

  const hideUpdateProfile = () => {
    document.getElementById("popupProfileCont").style.display = "none";
    document.getElementById("profileBg").style.display = "none";
    // popupProfileBox; showUpdateProfile
  };

  const showUpdateProfile = () => {
    document.getElementById("popupProfileCont").style.display = "block";
    document.getElementById("profileBg").style.display = "block";
    // document.getElementById("profileBg").style.backgroundcolor = "red";
    // popupProfileBox; showUpdateProfile
  };

  const updateAdmin = (USER_ID) => {
    Axios.put(
      "https://perseeption-tromagade.herokuapp.com/api/updateAdminInfo_",
      {
        USER_ID: USER_ID,
        ADMIN_INFO_USERNAME: ADMIN_INFO_USERNAME,
        ADMIN_INFO_CONTACT: ADMIN_INFO_CONTACT,
        ADMIN_INFO_ADDRESS: ADMIN_INFO_ADDRESS,
        ADMIN_INFO_NAME: ADMIN_INFO_NAME,
        ADMIN_INFO_PASSWORD: ADMIN_INFO_PASSWORD,
        ADMIN_INFO_EMAIL: ADMIN_INFO_EMAIL,
      }
    ).then((response) => {
      setADMIN_INFO(
        ADMIN_INFO.map((val) => {
          return val.USER_ID === USER_ID
            ? {
                USER_ID: val.USER_ID,
                ADMIN_INFO_USERNAME: ADMIN_INFO_USERNAME,
                ADMIN_INFO_CONTACT: ADMIN_INFO_CONTACT,
                ADMIN_INFO_ADDRESS: ADMIN_INFO_ADDRESS,
                ADMIN_INFO_NAME: ADMIN_INFO_NAME,
                ADMIN_INFO_PASSWORD: ADMIN_INFO_PASSWORD,
                ADMIN_INFO_EMAIL: ADMIN_INFO_EMAIL,
              }
            : val;
        })
      );
    });
  };
  return (
    <div className="adminProfile">
      <div className="AdminHeader">
        <div className="imgAdminContainer">
          <p className="AdminHeaderTitle">Profile</p>
        </div>
        <Link to="/AdminProfile" className="profileIcon">
          <img src="/images/events1.jpg" alt="img" className="profilePicture" />
          <p className="profileNameHeader">{USERNAME_}</p>
        </Link>
      </div>
      <div className="eventCont">
        <div className="sidebar">
          <img src="/images/logoIcon.png" alt="img" className="imgAdIcon" />
          <img src="/images/logotext.png" alt="img" className="imgAdTxt" />
          <Link to="/AdminDashboard" className="dash">
            <i className="fa fa-bar-chart"></i>Dashboard
          </Link>
          <Link to="/AdminAdminList" className="dash">
            <i className="fa fa-list-ul"></i>Admin List
          </Link>
          <Link to="/AdminAnnouncement" className="dash">
            <i className="fa fa-bullhorn"></i>Announcement
          </Link>
          <Link to="/AdminContactUs" className="dash">
            <i className="fa fa-envelope"></i>Contact Us
          </Link>
          <Link to="/Events" className="dash">
            <i className="fa fa-calendar-o"></i>Event
          </Link>
          <Link to="/AdminMemberList" className="dash">
            <i className="fa fa-users"></i>Member List
          </Link>
          <Link to="/AdminProfile" className="dash">
            <i className="fa fa-user"></i>Profile
          </Link>
          <div className="line"></div>
          <p className="logout_Admin" onClick={logout}>
            <i className="fa fa-sign-out" id="adminLogout"></i> Logout
          </p>
        </div>
        <div className="adminInfo">
          <div className="adminInfoBox">
            <div className="adminDummyImage">
              <i className="fa fa-user-circle-o " id="iconDummy"></i>
            </div>
            <div className="adminInfoTexts">
              <p className="adminName">Name: {ADMIN_INFO_NAME}</p>
              <p className="adminContact">Contact: {ADMIN_INFO_CONTACT}</p>
              <p className="adminAddress">Address: {ADMIN_INFO_ADDRESS}</p>
              <p className="adminEmail">Email Address: {ADMIN_INFO_EMAIL}</p>
              <p className="adminPassword">Password: ************</p>
            </div>
          </div>
          <button className="updateInfo" onClick={showUpdateProfile}>
            Update Information
          </button>
        </div>
        {/* {USERNAME_.map((val, key) => {
          return (
            <div className="popupProfile" id="profileBg">
              <div className="popupProfileBox" id="popupProfileCont">
                <p className="updateYourInfoTitle">Update Your Information</p>
                <label className="profileName">Name:</label>
                <input
                  type="text"
                  placeholder={val.ADMIN_NAME}
                  defaultValue={val.ADMIN_NAME}
                  onChange={(e) => {
                    setADMIN_INFO_NAME(e.target.value);
                  }}
                ></input>
                <label className="profileContact">
                  Contact:{" "}
                  <input
                    type="text"
                    placeholder={val.ADMIN_CONTACT}
                    onChange={(e) => {
                      setADMIN_INFO_CONTACT(e.target.value);
                    }}
                  ></input>
                </label>
                <label className="profileAddress">
                  Address:{" "}
                  <input
                    type="text"
                    placeholder={val.ADMIN_ADDRESS}
                    onChange={(e) => {
                      setADMIN_INFO_ADDRESS(e.target.value);
                    }}
                  ></input>
                </label>
                <label className="profileEmail">
                  Email:{" "}
                  <input
                    type="email"
                    placeholder={val.ADMIN_EMAIL}
                    onChange={(e) => {
                      setADMIN_INFO_EMAIL(e.target.value);
                    }}
                  ></input>
                </label>
                <label className="profilePass">
                  Username:{" "}
                  <input
                    type="text"
                    placeholder={val.USERNAME}
                    onChange={(e) => {
                      setADMIN_INFO_USERNAME(e.target.value);
                    }}
                  ></input>
                </label>
                <label className="profilePass">
                  Password:{" "}
                  <input
                    type="password"
                    placeholder="*******"
                    id="profPass"
                    onChange={(e) => {
                      setADMIN_INFO_PASSWORD(e.target.value);
                    }}
                  ></input>
                </label>
                <div className="btnProfile">
                  <p className="cancelBtnProfile" onClick={hideUpdateProfile}>
                    Cancel
                  </p>
                  <p
                    className="updateNowBtn"
                    onClick={() => {
                      updateAdmin(val.USER_ID);
                    }}
                  >
                    Update Now
                  </p>
                </div>
              </div>
            </div>
          );
        })} */}
        Form
      </div>
    </div>
  );
}

export default AdminProfile;
