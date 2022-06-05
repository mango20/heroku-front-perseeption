import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./MemberEvent.css";
import { Link, useHistory } from "react-router-dom";
import { Image } from "cloudinary-react";
function MemberEvents() {
  Axios.defaults.withCredentials = true;
  const history = useHistory();
  const [USER_ID, setUSER_ID] = useState("");
  const [EVENT_LIST, setEVENT_LIST] = useState([]);
  const [EVENT_LIST_, setEVENT_LIST_] = useState([]);
  const [AVATAR, setAVATAR] = useState("");
  const [EVENT_ID_, setEVENT_ID_] = useState("");
  const [EVENT_IMAGE, setEVENT_IMAGE] = useState("");
  const [EVENT_TITLE, setEVENT_TITLE] = useState("");
  const [EVENT_DATE, setEVENT_DATE] = useState("");
  const [EVENT_CONTENT, setEVENT_CONTENT] = useState("");

  const readMoreEvents_ = (EVENT_ID) => {
    // console.log(EVENT_ID);
    document.getElementById("memberEventList_id_").style.display = "block";
    document.getElementById("popUpReadmoreEvent_id").style.display = "block";
    document.getElementById("memberEventList_id").style.display = "none";
    Axios.get(
      `https://perseeption-tromagade.herokuapp.com/readMoreEvent/${EVENT_ID}`
    ).then((response) => {
      // console.log(response.data);

      setEVENT_IMAGE(response.data[0].EVENT_IMAGE);
      setEVENT_TITLE(response.data[0].EVENT_TITLE);
      setEVENT_DATE(response.data[0].EVENT_DATE);
      setEVENT_CONTENT(response.data[0].EVENT_CONTENT);
      setEVENT_ID_(response.data[0].EVENT_ID);
    });
  };

  const backEventReadMore = (EVENT_ID_) => {
    Axios.get(
      `https://perseeption-tromagade.herokuapp.com/readMoreEvent/${EVENT_ID_}`
    ).then((response) => {
      // console.log(response.data);

      setEVENT_IMAGE("");
      setEVENT_TITLE("");
      setEVENT_DATE("");
      setEVENT_CONTENT("");
      setEVENT_ID_("");
    });
    Axios.get(
      "https://perseeption-tromagade.herokuapp.com/api/getMemberEvent"
    ).then((response) => {
      setEVENT_LIST(response.data);
      // console.log(response.data);
    });
    document.getElementById("memberEventList_id_").style.display = "none";
    document.getElementById("popUpReadmoreEvent_id").style.display = "none";
    // document.getElementById("memberEventList_id").style.display = "block";
    document.getElementById("memberEventList_id").style.display = "grid";
  };
  useEffect(() => {
    if (localStorage.getItem("Client") === null) {
      // history.push("/");
      document.getElementById("memberLogout").style.display = "none";
      document.getElementById("profileGo_").style.display = "none";
      document.getElementById("portalDash_").style.display = "none";
    } else {
      var name1 = JSON.parse(localStorage.getItem("Client"));
      if (name1[0].USER_TYPE === "Admin") {
        document.getElementById("loggedInImg").style.display = "block";
        document.getElementById("loggedInImg_").style.display = "none";
        document.getElementById("portalDash").style.display = "block";
        document.getElementById("profileGo").style.display = "none";
        document.getElementById("portalDash_").style.display = "block";
      } else {
        document.getElementById("loggedInImg_").style.display = "block";
        document.getElementById("loggedInImg").style.display = "none";
        document.getElementById("portalDash").style.display = "none";
        document.getElementById("portalDash_").style.display = "none";
      }
      setAVATAR(name1[0].AVATAR);
      document.getElementById("floatBtn").style.display = "none";
      document.getElementById("LoginHeader").style.display = "none";
      document.getElementById("LoginHeader_").style.display = "none";
      document.getElementById("profileGo_").style.display = "block";
    }
  }, []);

  useEffect(() => {
    Axios.get(
      "https://perseeption-tromagade.herokuapp.com/api/getMemberEvent"
    ).then((response) => {
      setEVENT_LIST(response.data);
    });
  }, []);

  const popup = () => {
    if (document.getElementById("dropdown-content").style.display !== "block") {
      document.getElementById("dropdown-content").style.display = "block";
    } else {
      document.getElementById("dropdown-content").style.display = "none";
    }
  };

  const logout = () => {
    document.getElementById("popUpGetMsgApprove_logout").style.display =
      "block";
    setTimeout(function () {
      document.getElementById("popUpGetMsgApprove_logout").style.display =
        "none";
    }, 3000);
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
    document.getElementById("memberEventList_id").style.display = "none";
    document.getElementById("memberEventList_id_").style.display = "none";
    document.getElementById("eventTitle_Head").style.display = "none";
    // document.getElementById("mainEventList").style.display = "none";
    document.getElementById("outerFoot").style.display = "none";
  };

  const backMain = () => {
    document.getElementById("menuBar_bground_").style.display = "none";
    document.getElementById("menuBar_inside").style.display = "none";
    document.getElementById("memberEventList_id").style.display = "grid";
    // document.getElementById("memberEventList_id_").style.display =
    //   "block";
    document.getElementById("eventTitle_Head").style.display = "block";
    // document.getElementById("mainEventList").style.display = "none";
    document.getElementById("outerFoot").style.display = "block";
  };
  return (
    <div className="MemberEventsBg">
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
      <div id="popUpGetMsgApprove_logout">
        <div id="popUpGetMsgInApprove">
          <h2>PerSEEption Message</h2>
          <h1>Logout Successfully!</h1>
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
      <h1 className="eventTitle_Head" id="eventTitle_Head">
        Event
      </h1>
      <div className="memberEventList" id="memberEventList_id">
        {EVENT_LIST.map((val, key) => {
          return (
            <div key={key} className="eventRender" id="eventRender_id">
              <Image
                className="announcement_Img"
                cloudName="dlvt2lnkh"
                // id="announcement_Img_event"
                publicId={val.EVENT_IMAGE}
              />
              <p className="event_Title">{val.EVENT_TITLE}</p>
              <p className="event_Date">{val.EVENT_DATE}</p>
              <p className="event_Content">{val.EVENT_CONTENT}</p>
              <p
                className="readMoreEvent"
                onClick={() => {
                  readMoreEvents_(val.EVENT_ID);
                }}
              >
                Read More
              </p>
            </div>
          );
        })}
      </div>
      <div className="memberEventList_" id="memberEventList_id_">
        <div className="popUpReadmoreEvent" id="popUpReadmoreEvent_id">
          <p
            onClick={() => {
              backEventReadMore(EVENT_ID_);
            }}
            id="xbtnReadMore"
          >
            back
          </p>

          <Image
            className="announcement_Img_event"
            cloudName="dlvt2lnkh"
            // id="announcement_Img_event"
            publicId={EVENT_IMAGE}
          />
          <p className="event_TitleRM">{EVENT_TITLE}</p>
          <p className="event_DateRM">{EVENT_DATE}</p>
          <p className="event_ContentRM">{EVENT_CONTENT}</p>
        </div>
      </div>
      <Link to="/Registration" className="floatBtn" id="floatBtn">
        <p className="JoinUs"> Join Us!</p>
      </Link>
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
  );
}

export default MemberEvents;
