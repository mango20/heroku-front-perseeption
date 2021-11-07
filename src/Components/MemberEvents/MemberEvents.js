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

  const readMoreEvents_ = (EVENT_ID) => {
    console.log(EVENT_ID);
    document.getElementById("popUpReadmoreEvent_id").style.display = "block";
    document.getElementById("memberEventList_id").style.display = "none";
    Axios.get(
      `https://perseeption-tromagade.herokuapp.com/readMoreEvent/${EVENT_ID}`
    ).then((response) => {
      console.log(response);
      setEVENT_LIST(
        EVENT_LIST.filter((val) => {
          // console.log(response);
          return val.EVENT_ID === EVENT_ID;
        })
      );
      // Axios.get("https://perseeption-tromagade.herokuapp.com/AdminList").then((response) => {
      //   setADMIN_LIST(response.data);
      //   console.log(response.data);
      // });
    });
  };

  const backEventReadMore = () => {
    Axios.get(
      "https://perseeption-tromagade.herokuapp.com/api/getMemberEvent"
    ).then((response) => {
      setEVENT_LIST(response.data);
      console.log(response.data);
    });
    document.getElementById("popUpReadmoreEvent_id").style.display = "none";
    // document.getElementById("memberEventList_id").style.display = "block";
    document.getElementById("memberEventList_id").style.display = "grid";
  };
  useEffect(() => {
    if (localStorage.getItem("Client") === null) {
      // history.push("/");
    } else {
      var name1 = JSON.parse(localStorage.getItem("Client"));
      if (name1[0].USER_TYPE === "Admin") {
        document.getElementById("portalDash").style.display = "block";
        document.getElementById("profileGo").style.display = "none";
      } else {
        document.getElementById("portalDash").style.display = "none";
      }
      document.getElementById("floatBtn").style.display = "none";
      document.getElementById("LoginHeader").style.display = "none";
      document.getElementById("loggedInImg").style.display = "block";
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
    alert("logout");
    localStorage.clear();
    document.getElementById("floatBtn").style.display = "block";
    document.getElementById("LoginHeader").style.display = "block";
    document.getElementById("loggedInImg").style.display = "none";
    document.getElementById("dropdown-content").style.display = "none";
    window.location.reload();
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
              src="/images/events1.jpg"
              alt="sdf"
              className="loggedInImg"
              id="loggedInImg"
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
        </div>
      </div>
      <h1 className="eventTitle_Head">Event</h1>
      <div className="memberEventList" id="memberEventList_id">
        {EVENT_LIST.map((val, key) => {
          return (
            <div key={key} className="eventRender" id="eventRender_id">
              <Image
                className="announcement_Img"
                cloudName="dlvt2lnkh"
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
        {EVENT_LIST.map((val, key) => {
          return (
            <div
              key={key}
              className="popUpReadmoreEvent"
              id="popUpReadmoreEvent_id"
            >
              <p onClick={backEventReadMore} id="xbtnReadMore">
                back
              </p>

              <Image
                className="announcement_Img_"
                cloudName="dlvt2lnkh"
                publicId={val.EVENT_IMAGE}
              />
              <p className="event_TitleRM">{val.EVENT_TITLE}</p>
              <p className="event_DateRM">{val.EVENT_DATE}</p>
              <p className="event_ContentRM">{val.EVENT_CONTENT}</p>
            </div>
          );
        })}
      </div>
      <Link to="/Registration" className="floatBtn" id="floatBtn">
        <p className="JoinUs"> Join Us!</p>
      </Link>
      <div className="footer">
        <div className="footIcon">
          <img src="/images/logoIcon.png" alt="img" className="imgfooterIcon" />
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
  );
}

export default MemberEvents;
