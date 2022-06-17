import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./MemberAbout.css";
import { Link, useHistory } from "react-router-dom";
import { Image } from "cloudinary-react";
function MemberAbout() {
  Axios.defaults.withCredentials = true;
  const [AVATAR, setAVATAR] = useState("");
  const [USER_ID, setUSER_ID] = useState("");
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("Client") === null) {
      // history.push("/");
      document.getElementById("memberLogout").style.display = "none";
      document.getElementById("profileGo_").style.display = "none";
      document.getElementById("portalDash_").style.display = "none";
    } else {
      var name1 = JSON.parse(localStorage.getItem("Client"));
      setAVATAR(name1[0].AVATAR);
      document.getElementById("floatBtn").style.display = "none";
      document.getElementById("LoginHeader").style.display = "none";
      document.getElementById("LoginHeader_").style.display = "none";
      document.getElementById("profileGo_").style.display = "block";

      if (name1[0].USER_TYPE === "Admin") {
        document.getElementById("loggedInImg").style.display = "block";
        document.getElementById("loggedInImg_").style.display = "none";
        document.getElementById("portalDash").style.display = "block";
        document.getElementById("profileGo").style.display = "none";
        document.getElementById("profileGo_").style.display = "none";
        document.getElementById("portalDash_").style.display = "block";
      } else {
        document.getElementById("loggedInImg_").style.display = "block";
        document.getElementById("loggedInImg").style.display = "none";
        document.getElementById("portalDash").style.display = "none";
        document.getElementById("portalDash_").style.display = "none";
      }
    }
  }, []);

  const popup = () => {
    if (document.getElementById("dropdown-content").style.display !== "block") {
      document.getElementById("dropdown-content").style.display = "block";
    } else {
      document.getElementById("dropdown-content").style.display = "none";
    }
  };

  const logout = () => {
    var client = JSON.parse(localStorage.getItem("Client"));
    const USER_ID = client[0].USER_ID;
 
    const stat = "logout";
    Axios.put(
      `https://perseeption-tromagade.herokuapp.com/logoutUser/${USER_ID}`,
      {
        STATUS: stat,
      }
    );
    document.getElementById("popUpGetMsgApprove_logout").style.display =
      "block";
    setTimeout(function () {
      document.getElementById("popUpGetMsgApprove_logout").style.display =
        "none";
      history.push("/");
    }, 3000);
    localStorage.clear();
    document.getElementById("floatBtn").style.display = "block";
    document.getElementById("LoginHeader").style.display = "block";
    document.getElementById("loggedInImg").style.display = "none";
    document.getElementById("dropdown-content").style.display = "none";
  };

  const showMenuBar = () => {
    document.getElementById("menuBar_bground_").style.display = "block";
    document.getElementById("menuBar_inside").style.display = "block";
    document.getElementById("aboutContainers_").style.display = "none";
    // document.getElementById("_memberAnnouncementList_id_").style.display =
    //   "none";
    // document.getElementById("announcementTitleHead").style.display = "none";
    // // document.getElementById("mainEventList").style.display = "none";
    // document.getElementById("outerFoot").style.display = "none";
  };

  const backMain = () => {
    document.getElementById("menuBar_bground_").style.display = "none";
    document.getElementById("menuBar_inside").style.display = "none";
    document.getElementById("aboutContainers_").style.display = "grid";
    // document.getElementById("_memberAnnouncementList_id_").style.display =
    //   "block";
    // document.getElementById("announcementTitleHead").style.display = "block";
    // // document.getElementById("mainEventList").style.display = "none";
    // document.getElementById("outerFoot").style.display = "block";
  };

  return (
    <div className="AboutBg">
      <div className="MainHeader">
        <div className="imgContainer">
          <Link className="imgHeader" to="/">
            <img src="/images/logoIcon.png" alt="img" className="imgIcon" />
            <img src="/images/logotext.png" alt="img" className="imgtxt" />
          </Link>
        </div>
        <div className="headerText">
          <Link className="homeHeader" to="/">
            Home
          </Link>
          <Link className="announcementHeader" to="/MemberAnnouncement">
            Announcement
          </Link>
          <Link className="eventHeader" to="/MemberEvents">
            Event
          </Link>
          <Link className="forumHeader" to="/MemberForum">
            Forum
          </Link>
          <Link className="aboutHeader" to="/MemberAbout">
            About
          </Link>
          <Link className="contactHeader" to="/ContactUs">
            Contact
          </Link>
          <Link className="signinHeader" id="LoginHeader" to="/Login">
            Log in
          </Link>
          <div className="memberDiv" id="memberDiv">
            <img
              src="/images/AvatarIcon.jpg"
              alt="img"
              className="loggedInImg"
              id="loggedInImg_"
              onClick={popup}
            />
            <Image
              className="loggedInImg"
              id="loggedInImg"
              cloudName="dlvt2lnkh"
              alt="img"
              publicId={AVATAR}
              onClick={popup}
            />
            <div className="dropdown-content" id="dropdown-content">
              <Link to="/MemberProfile" id="profileGo">
                Profile
              </Link>
              <Link to="/AdminDashboard" id="portalDash">
                Dashboard
              </Link>
              <p onClick={logout}>Logout</p>
              {/* <a href="#">Sign In other Account</a> */}
            </div>
          </div>
          <i className="fa fa-bars" onClick={showMenuBar}></i>
        </div>
      </div>

      <div id="menuBar_bground_">
        <div id="menuBar_inside">
          <Link className="homeHeader_" to="/">
            Home
          </Link>
          <Link className="announcementHeader_" to="/MemberAnnouncement">
            Announcement
          </Link>
          <Link className="eventHeader_" to="/MemberEvents">
            Event
          </Link>
          <Link className="forumHeader_" to="/MemberForum">
            Forum
          </Link>
          <Link className="aboutHeader_" to="/MemberAbout">
            About
          </Link>
          <Link className="contactHeader_" to="/ContactUs">
            Contact
          </Link>
          <Link className="signinHeader_" id="LoginHeader_" to="/Login">
            Log in
          </Link>
          <Link to="/MemberProfile" id="profileGo_">
            Profile
          </Link>
          <Link to="/AdminDashboard" id="portalDash_">
            Dashboard
          </Link>
          <div className="mobOptions">
            <a id="backtoWeb" onClick={backMain}>
              Back
            </a>
            <a id="memberLogout" onClick={logout}>
              Logout
            </a>
          </div>
          {/* <i className="fa fa-bars" onClick={showMenuBar}></i> */}
        </div>
      </div>
      <div id="aboutContainers_">
        <div className="imageAboutUs">
          <img src="/images/aboutUs.jpg" alt="img" className="abtImg" />
          {/* <h1 className="aboutUs_Title">About Us</h1> */}
        </div>
        <div className="history">
          <p className="historyTitle">History</p>
          <p className="historyContent">PAVIC as Parents Organization.</p>
          <p className="historyContent">
            PAVIC was formed in 1999 with just a dozen of parents whose children
            are either blind, low vision and/or with additional disabilities. As
            of date, PAVIC parent membership is 700 nationwide, with majority in
            capital region.
          </p>
          <p className="historyContent">
            PAVIC was registered with Securities and Exchange Commission as a
            non stock non profit organization , and is accredited with
            Department of Social Welfare and Development, recognized by National
            Council on Disability Affairs as a Disabled People’s Organization (
            DPO ).
          </p>
          <p className="historyContent">
            PAVIC is a partner with Department of Education in holding seminars
            for teachers and school administrators on handling children and
            youth with visual impairment. PAVIC works with various government
            Departments and other NGOs promoting general public awareness on
            well beings of Children with Disabilities.
          </p>
        </div>
        <div className="visionMission">
          <img src="/images/events1.jpg" alt="jpg" className="historyImg"></img>
          <div className="visionMissionContent">
            <h1 className="visionTitle">Vision</h1>
            <p className="visionContent">
              Every visually impaired child will enjoy equal opportunities and
              access in all activities in life according to choice and ability.
            </p>
            <h1 className="misionTitle">Mission</h1>
            <p className="misionContent">
              Every visually impaired child will enjoy equal opportunities and
              access in all activities in life according to choice and ability.
            </p>
          </div>
        </div>
        <div id="popUpGetMsgApprove_logout">
          <div id="popUpGetMsgInApprove">
            <h2>PerSEEption Message</h2>
            <h1>Logout Successfully!</h1>
          </div>
        </div>
        <Link to="/Registration" className="floatBtn" id="floatBtn">
          <p className="JoinUs"> Join Us!</p>
        </Link>
        <div className="outerFoot">
          <div className="footer">
            <div className="footIcon">
              <img
                src="/images/logoIcon.png"
                alt="img"
                className="imgfooterIcon"
              />
            </div>
            <div className="locMain">
              <label className="mainInfoFooter">
                <p className="fa fa-map-marker"></p>Cubao Philippines
              </label>
              <label className="mainInfoFooter">
                <p className="fa fa-phone"></p>+63978965896
              </label>
              <label className="mainInfoFooter">
                <Link to="/TermsCondition" className="terms">
                  <p className="fa fa-file"></p>
                  Terms & Conditions
                </Link>
              </label>
            </div>
            <div className="fbLogo">
              <a
                href="https://www.facebook.com/PAVIC.ph"
                className="fa fa-facebook"
              >
                {}
              </a>
            </div>
          </div>
          <div className="copyrightText">
            <p className="copyright">Copyright © 2021 | Perseeption</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberAbout;
