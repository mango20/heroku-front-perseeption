import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./MainPage.css";
import { Link, useHistory } from "react-router-dom";
import { Image } from "cloudinary-react";
// import cookieParser from "cookie-parser";

function MainPage() {
  Axios.defaults.withCredentials = true;
  const [MAIN_EVENT, setMAIN_EVENT] = useState([]);
  const [AVATAR, setAVATAR] = useState("");
  const [USER_ID, setUSER_ID] = useState("");
  const [USERNAME, setUSERNAME] = useState([]);

  // const [loginStatus, setLoginStatus] = useState(false);
  // useEffect(() => {
  //   Axios.get("https://perseeption-tromagade.herokuapp.com/logout").then((response) => {
  //     console.log(response.data.loggedIn);
  //     if (response.data.loggedIn === true) {
  //       document.getElementById("loggedInImg").style.display = "none";
  //       document.getElementById("floatBtn").style.display = "block";
  //       document.getElementById("LoginHeader").style.display = "block";
  //     }
  //   });
  // }, []);

  useEffect(() => {
    if (localStorage.getItem("Client") === null) {
      history.push("/");
      document.getElementById("profileGo_").style.display = "none";
      document.getElementById("memberLogout").style.display = "none";
      document.getElementById("portalDash_").style.display = "none";
    } else {
      var name1 = JSON.parse(localStorage.getItem("Client"));
      if (name1[0].USER_TYPE === "Admin") {
        document.getElementById("portalDash").style.display = "block";
        document.getElementById("profileGo").style.display = "none";
        document.getElementById("portalDash_").style.display = "block";
      } else {
        document.getElementById("portalDash").style.display = "none";
        document.getElementById("portalDash_").style.display = "none";
      }
      setAVATAR(name1[0].AVATAR);
      document.getElementById("floatBtn").style.display = "none";
      document.getElementById("LoginHeader").style.display = "none";
      document.getElementById("loggedInImg").style.display = "block";
      document.getElementById("LoginHeader_").style.display = "none";
      document.getElementById("profileGo_").style.display = "block";
      // document.getElementById("memberLogout").style.display = "none";
      // document.getElementById("portalDash_").style.display = "none";
    }
  }, []);

  // useEffect(() => {
  //   Axios.get("https://perseeption-tromagade.herokuapp.com/login").then(
  //     (response) => {
  //       console.log(response.data.loggedIn);
  //       console.log(response.data.user);
  //       if (response.data.loggedIn === true) {
  //         setUSER_ID(response.data.user[0].USER_ID);
  //         // setUSERNAME(response.data);
  //         document.getElementById("floatBtn").style.display = "none";
  //         document.getElementById("LoginHeader").style.display = "none";
  //         document.getElementById("loggedInImg").style.display = "block";
  //         // document.getElementById("loggedInImg").style.display = "none";
  //         // document.getElementById("dropdown-content").style.display = "block";
  //       }
  //       // else {
  //       //   document.getElementById("loggedInImg").style.display = "none";
  //       // }
  //     }
  //   );
  // }, []);

  // Render
  useEffect(() => {
    Axios.get(
      "https://perseeption-tromagade.herokuapp.com/api/getMainEvent"
    ).then((response) => {
      setMAIN_EVENT(response.data);
    });
  }, []);
  //   useEffect(() => {
  //     Axios.post("https://foodernity.herokuapp.com/").then((response) => {
  //       // setMAIN_EVENT(response.data);
  //       console.log(response.data);
  //     });
  //   }, []);
  const popup = () => {
    if (document.getElementById("dropdown-content").style.display !== "block") {
      document.getElementById("dropdown-content").style.display = "block";
    } else {
      document.getElementById("dropdown-content").style.display = "none";
    }
  };

  // const logout = () => {
  //   Axios.get("https://perseeption-tromagade.herokuapp.com/logout").then((response) => {
  //     // alert("sdf");
  //     window.location.reload();
  //     console.log(response.data);
  //   });
  //   localStorage.clear();
  //   document.getElementById("floatBtn").style.display = "block";
  //   document.getElementById("LoginHeader").style.display = "block";
  //   document.getElementById("loggedInImg").style.display = "none";
  //   document.getElementById("dropdown-content").style.display = "none";
  // };

  const history = useHistory();
  const logout = () => {
    alert("logout");
    localStorage.clear();
    document.getElementById("floatBtn").style.display = "block";
    document.getElementById("LoginHeader").style.display = "block";
    document.getElementById("loggedInImg").style.display = "none";
    document.getElementById("dropdown-content").style.display = "none";
    window.location.reload();
  };

  const showMenuBar = () => {
    document.getElementById("menuBar_bground_").style.display = "block";
    document.getElementById("menuBar_inside").style.display = "block";
    document.getElementById("imageOrg").style.display = "none";
    document.getElementById("eventTitleHead").style.display = "none";
    document.getElementById("mainEventList").style.display = "none";
    document.getElementById("outerFoot").style.display = "none";
  };

  const backMain = () => {
    document.getElementById("menuBar_bground_").style.display = "none";
    document.getElementById("menuBar_inside").style.display = "none";
    document.getElementById("imageOrg").style.display = "block";
    document.getElementById("eventTitleHead").style.display = "block";
    document.getElementById("mainEventList").style.display = "grid";
    document.getElementById("outerFoot").style.display = "block";
  };

  return (
    <>
      <div className="MainBg">
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
              <div>
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
                </div>
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

        <div className="imageOrg" id="imageOrg">
          <div className="slideshow">
            <img src="/images/pavic.jpg" alt="img" className="orgImg" />
            <img src="/images/events1.jpg" alt="img" className="orgImg1" />
            <img src="/images/events2.jpg" alt="img" className="orgImg2" />
            <img src="/images/events1.jpg" alt="img" className="orgImg3" />
            <img src="/images/events2.jpg" alt="img" className="orgImg4" />
          </div>
        </div>
        <Link to="/Registration" className="floatBtn" id="floatBtn">
          <p className="JoinUs"> Join Us!</p>
        </Link>
        <h1 className="eventTitleHead" id="eventTitleHead">
          Perseeption Events
        </h1>
        <div className="mainEventList" id="mainEventList">
          {MAIN_EVENT.map((val, key) => {
            return (
              <div key={key} className="eventMain_List">
                <div className="imgCont_">
                  <Image
                    className="eventImgMain"
                    cloudName="dlvt2lnkh"
                    publicId={val.EVENT_IMAGE}
                  />
                </div>

                <p className="eventTitleMain">{val.EVENT_TITLE}</p>
                <p className="eventDateMain">{val.EVENT_DATE}</p>
                <p className="eventContentMain">{val.EVENT_CONTENT}</p>
                <Link to="/MemberEvents" className="readMoreMain">
                  Read More
                </Link>
              </div>
            );
          })}
        </div>
        <div className="outerFoot" id="outerFoot">
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
                href="https://db.skidax.com/www.facebook.com/PAVIC.ph"
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
    </>
  );
}

export default MainPage;
