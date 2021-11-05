import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./MemberAnnouncement.css";
import { Link, useHistory } from "react-router-dom";
import { CloudinaryContext, Image } from "cloudinary-react";
function MemberAnnouncement() {
  const history = useHistory();
  const [memberAnnouncementList, setMemberAnnouncementList] = useState([]);
  useEffect(() => {
    Axios.get(
      "https://perseeption-tromagade.herokuapp.com/api/getMemberAnnouncement"
    ).then((response) => {
      setMemberAnnouncementList(response.data);
    });
  }, []);

  const [USER_ID, setUSER_ID] = useState("");

  useEffect(() => {
    if (localStorage.getItem("Client") === null) {
      history.push("/");
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

  const backAnnouncementReadMore = () => {
    Axios.get(
      "https://perseeption-tromagade.herokuapp.com/api/getMemberAnnouncement"
    ).then((response) => {
      setMemberAnnouncementList(response.data);
      console.log(response.data);
    });
    document.getElementById("popUpReadmoreAnnouncement_id").style.display =
      "none";
    document.getElementById("_memberAnnouncementList_id_").style.display =
      "none";
    // document.getElementById("memberEventList_id").style.display = "block";
    document.getElementById("memberAnnouncementList_id_").style.display =
      "grid";
  };

  const readMoreAnnouncement = (ANNOUNCEMENT_ID) => {
    console.log(ANNOUNCEMENT_ID);
    document.getElementById("popUpReadmoreAnnouncement_id").style.display =
      "block";
    document.getElementById("_memberAnnouncementList_id_").style.display =
      "block";
    document.getElementById("memberAnnouncementList_id_").style.display =
      "none";
    Axios.get(
      `https://perseeption-tromagade.herokuapp.com/readMoreAnnouncement/${ANNOUNCEMENT_ID}`
    ).then((response) => {
      console.log(response);
      setMemberAnnouncementList(
        memberAnnouncementList.filter((val) => {
          // console.log(response);
          return val.ANNOUNCEMENT_ID === ANNOUNCEMENT_ID;
        })
      );
      // Axios.get("https://perseeption-tromagade.herokuapp.com:3306/AdminList").then((response) => {
      //   setADMIN_LIST(response.data);
      //   console.log(response.data);
      // });
    });
  };

  return (
    <div className="AnnouncementBg">
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
      <h1 className="announcementTitleHead">Announcement</h1>
      <div className="memberAnnouncementList" id="memberAnnouncementList_id_">
        {memberAnnouncementList.map((val, key) => {
          return (
            <div key={key} className="announcementRender">
              {/* <h1>{val.USER_ID}</h1> */}
              <Image
                className="announcement_Img"
                cloudName="dlvt2lnkh"
                publicId={val.ANNOUNCEMENT_IMAGE}
              />
              {/* <img
                src={val.ANNOUNCEMENT_IMAGE}
                alt="img"
                className="announcement_Img"
              /> */}
              <p className="announcement_Title">{val.ANNOUNCEMENT_TITLE}</p>
              <p className="announcement_Date">{val.ANNOUNCEMENT_DATE}</p>
              <p className="announcement_Content">{val.ANNOUNCEMENT_CONTENT}</p>
              <p
                className="readMoreAnnouncement"
                onClick={() => {
                  readMoreAnnouncement(val.ANNOUNCEMENT_ID);
                }}
              >
                Read More
              </p>
            </div>
          );
        })}
      </div>
      <div className="memberAnnouncementList_" id="_memberAnnouncementList_id_">
        {memberAnnouncementList.map((val, key) => {
          return (
            <div
              key={key}
              className="popUpReadmoreAnnouncement"
              id="popUpReadmoreAnnouncement_id"
            >
              <p
                onClick={backAnnouncementReadMore}
                id="xbtnReadMoreAnnouncement"
              >
                back
              </p>
              {/* <img
                src={val.ANNOUNCEMENT_IMAGE}
                alt="img"
                className="announcement_Img_"
              /> */}
              <Image
                className="announcement_Img"
                cloudName="dlvt2lnkh"
                publicId={val.ANNOUNCEMENT_IMAGE}
              />
              <p className="announcement_TitleRM">{val.ANNOUNCEMENT_TITLE}</p>
              <p className="announcement_DateRM">{val.ANNOUNCEMENT_DATE}</p>
              <p className="announcement_ContentRM">
                {val.ANNOUNCEMENT_CONTENT}
              </p>
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
          <a href="www.facebook.com/PAVIC.ph" className="fa fa-facebook">
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

export default MemberAnnouncement;
