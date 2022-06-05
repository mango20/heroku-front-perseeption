import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./AdminProfile.css";
import { Link, useHistory } from "react-router-dom";
import { Image } from "cloudinary-react";
function AdminProfile() {
  Axios.defaults.withCredentials = true;
  const history = useHistory();
  const [USER_ID, setUSER_ID] = useState("");
  const [USER_PASSWORD, setUSER_PASSWORD] = useState("");
  const [USERNAME, setUSERNAME] = useState("");
  const [ADMIN_CONTACT, setADMIN_CONTACT] = useState("");
  const [ADMIN_ADDRESS, setADMIN_ADDRESS] = useState("");
  const [NAME, setNAME] = useState("");
  const [ADMIN_EMAIL, setADMIN_EMAIL] = useState("");

  const [ADMIN_INFO, setADMIN_INFO] = useState([]);

  // const [USERNAME, setUSERNAME] = useState("");
  const [AVATAR, setAVATAR] = useState("");
  useEffect(() => {
    var name1 = JSON.parse(localStorage.getItem("Client"));
    if (
      localStorage.getItem("Client") === null ||
      name1[0].USER_TYPE === "Member"
    ) {
      history.push("/");
    } else {
      var name = JSON.parse(localStorage.getItem("Client"));

      // console.log(name);
      // console.log(name[0].ADMIN_NAME);
      setUSERNAME(name[0].USERNAME);
      setUSER_ID(name[0].USER_ID);
      setADMIN_EMAIL(name[0].ADMIN_EMAIL);
      setNAME(name[0].NAME);
      setADMIN_ADDRESS(name[0].ADMIN_ADDRESS);
      setADMIN_CONTACT(name[0].ADMIN_CONTACT);
      setUSERNAME(name[0].USERNAME);
      setUSER_PASSWORD(name[0].USER_PASSWORD);
      setAVATAR(name[0].AVATAR);
    }
  }, []);

  const logout = () => {
    document.getElementById("popUpGetMsgApprove_logout").style.display =
      "block";
    setTimeout(function () {
      document.getElementById("popUpGetMsgApprove_logout").style.display =
        "none";
    }, 3000);
    localStorage.clear();
    window.location.reload();
  };

  const hideUpdateProfile = () => {
    document.getElementById("popupProfileCont").style.display = "none";
    document.getElementById("profileBg").style.display = "none";
    // popupProfileBox; showUpdateProfile
  };

  const showUpdateProfile = (USER_ID) => {
    document.getElementById("popupProfileCont").style.display = "block";
    document.getElementById("profileBg").style.display = "block";
    // document.getElementById("profileBg").style.backgroundcolor = "red";
    // popupProfileBox; showUpdateProfile
    Axios.get(
      `https://perseeption-tromagade.herokuapp.com/getAdminProfileInfo_/${USER_ID}`
    ).then((response) => {
      // console.log(response.data);
      setNAME(response.data[0].NAME);
      setADMIN_ADDRESS(response.data[0].ADMIN_ADDRESS);
      setADMIN_CONTACT(response.data[0].ADMIN_CONTACT);
      setADMIN_EMAIL(response.data[0].ADMIN_EMAIL);
      setUSER_ID(response.data[0].USER_ID);
    });
  };

  const updateAdmin = (USER_ID) => {
    const p = document.getElementById("profPass").value;
    const name_update_ = document.getElementById("name_update_").value;
    const username_update_ = document.getElementById("username_update_").value;
    const email_update_ = document.getElementById("email_update_").value;
    const adress_update_ = document.getElementById("adress_update_").value;
    const contact_update_ = document.getElementById("contact_update_").value;
    var nameRegex = /^([a-zA-Z\s]{1,50})$/;
    var nameNumRegex = /^([a-zA-Z0-9\s\.#,]{1,50})$/;
    var emailRegex_ =
      /^([a-zA-Z0-9\.-]+)@([a-z0-9]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    var numberRegex = /^([0-9]{1,11})$/;
    if (
      p === "" ||
      name_update_ === "" ||
      username_update_ === "" ||
      email_update_ === "" ||
      adress_update_ === "" ||
      contact_update_ === "" ||
      !nameRegex.test(name_update_) ||
      !nameNumRegex.test(adress_update_) ||
      !emailRegex_.test(email_update_) ||
      !numberRegex.test(contact_update_)
    ) {
      document.getElementById("popUpGetMsgDeleteMember_").style.display =
        "block";
      setTimeout(function () {
        document.getElementById("popUpGetMsgDeleteMember_").style.display =
          "none";
        // document.getElementById("popUpGetMsgInCont").style.display = "none";
      }, 3000);
    }

    if (
      p !== "" ||
      name_update_ !== "" ||
      username_update_ !== "" ||
      email_update_ !== "" ||
      adress_update_ !== "" ||
      contact_update_ !== "" ||
      nameRegex.test(name_update_) ||
      nameNumRegex.test(adress_update_) ||
      emailRegex_.test(email_update_) ||
      numberRegex.test(contact_update_)
    ) {
      Axios.put(
        `https://perseeption-tromagade.herokuapp.com/api/updateAdminInfo_/${USER_ID}`,
        {
          USER_ID: USER_ID,
          USERNAME: USERNAME,
          ADMIN_CONTACT: ADMIN_CONTACT,
          ADMIN_ADDRESS: ADMIN_ADDRESS,
          NAME: NAME,
          USER_PASSWORD: USER_PASSWORD,
          ADMIN_EMAIL: ADMIN_EMAIL,
        }
      ).then((response) => {
        // console.log(response.data);
        setADMIN_INFO(
          ADMIN_INFO.map((val) => {
            return val.USER_ID === USER_ID
              ? {
                  USER_ID: val.USER_ID,
                  USERNAME: USERNAME,
                  ADMIN_CONTACT: ADMIN_CONTACT,
                  ADMIN_ADDRESS: ADMIN_ADDRESS,
                  NAME: NAME,
                  USER_PASSWORD: USER_PASSWORD,
                  ADMIN_EMAIL: ADMIN_EMAIL,
                }
              : val;
          })
        );
      });
      document.getElementById("popUpGetMsgApprove").style.display = "block";
      setTimeout(function () {
        document.getElementById("popUpGetMsgApprove").style.display = "none";
        // document.getElementById("popUpGetMsgInCont").style.display = "none";
      }, 3000);
    }
  };
  return (
    <div className="adminProfile">
      <div className="AdminHeader">
        <div className="imgAdminContainer">
          <p className="AdminHeaderTitle">Profile</p>
        </div>
        <Link to="/AdminProfile" className="profileIcon">
          <Image
            className="profilePicture"
            cloudName="dlvt2lnkh"
            alt="img"
            publicId={AVATAR}
          />
          <p className="profileNameHeader">{NAME}</p>
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
            <i className="fa fa-envelope"></i>Messages
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
          <Link to="/MemberForum" className="dash">
            <i className="fa fa-comments"></i>Forum
          </Link>
          <div className="line"></div>
          <p className="logout_Admin" onClick={logout}>
            <i className="fa fa-sign-out" id="adminLogout"></i> Logout
          </p>
        </div>
        <div id="popUpGetMsgDeleteMember_">
          <div id="popUpGetMsgInDeleteMember_">
            <h2>PerSEEption Message</h2>
            <h1>Please enter valid information</h1>
          </div>
        </div>
        <div id="popUpGetMsgApprove">
          <div id="popUpGetMsgInApprove">
            <h2>PerSEEption Message</h2>
            <h1>Your Profile Update Successfully!</h1>
          </div>
        </div>
        <div id="popUpGetMsgApprove_logout">
          <div id="popUpGetMsgInApprove">
            <h2>PerSEEption Message</h2>
            <h1>Logout Successfully!</h1>
          </div>
        </div>
        <div className="adminInfo">
          <div className="adminInfoBox">
            <div className="adminDummyImage">
              <Image
                id="iconDummy"
                cloudName="dlvt2lnkh"
                alt="img"
                publicId={AVATAR}
              />
              {/* <i className="fa fa-user-circle-o " id="iconDummy"></i> */}
            </div>
            <div className="adminInfoTexts">
              <p className="adminName">Name: {NAME}</p>
              <p className="adminContact">Contact: {ADMIN_CONTACT}</p>
              <p className="adminAddress">Address: {ADMIN_ADDRESS}</p>
              <p className="adminEmail">Email Address: {ADMIN_EMAIL}</p>
              <p className="adminPassword">Password: ************</p>
            </div>
          </div>
          <button
            className="updateInfo"
            onClick={() => {
              showUpdateProfile(USER_ID);
            }}
          >
            Update Information
          </button>
        </div>

        <div className="popupProfile" id="profileBg">
          <div className="popupProfileBox" id="popupProfileCont">
            <p className="updateYourInfoTitle">Update Your Information</p>
            <label className="profileName">Name:</label>
            <input
              type="text"
              id="name_update_"
              value={NAME}
              onChange={(e) => {
                setNAME(e.target.value);
              }}
            ></input>
            <label className="profileContact">
              Contact:{" "}
              <input
                type="text"
                id="contact_update_"
                // placeholder={val.ADMIN_CONTACT}
                value={ADMIN_CONTACT}
                onChange={(e) => {
                  setADMIN_CONTACT(e.target.value);
                }}
              ></input>
            </label>
            <label className="profileAddress">
              Address:{" "}
              <input
                type="text"
                id="adress_update_"
                value={ADMIN_ADDRESS}
                onChange={(e) => {
                  setADMIN_ADDRESS(e.target.value);
                }}
              ></input>
            </label>
            <label className="profileEmail">
              Email:{" "}
              <input
                type="email"
                id="email_update_"
                value={ADMIN_EMAIL}
                onChange={(e) => {
                  setADMIN_EMAIL(e.target.value);
                }}
              ></input>
            </label>
            <label className="profilePass">
              Username:{" "}
              <input
                id="username_update_"
                type="text"
                value={USERNAME}
                onChange={(e) => {
                  setUSERNAME(e.target.value);
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
                  setUSER_PASSWORD(e.target.value);
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
                  updateAdmin(USER_ID);
                }}
              >
                Update Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
