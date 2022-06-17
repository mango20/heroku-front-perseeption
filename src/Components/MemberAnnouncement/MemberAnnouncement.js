import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./MemberAnnouncement.css";
import { Link, useHistory } from "react-router-dom";
import { CloudinaryContext, Image } from "cloudinary-react";
function MemberAnnouncement() {
  Axios.defaults.withCredentials = true;
  const history = useHistory();
  const [AVATAR, setAVATAR] = useState("");
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

      // document.getElementById("loggedInImg").style.display = "block";
      // document.getElementById("LoginHeader_").style.display = "none";
      // document.getElementById("profileGo_").style.display = "block";
      // document.getElementById("memberLogout").style.display = "none";
      // document.getElementById("portalDash_").style.display = "none";
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
    alert(USER_ID);
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

  const [ANNOUNCEMENT_ID_, setANNOUNCEMENT_ID_] = useState("");
  const [ANNOUNCEMENT_IMAGE, setANNOUNCEMENT_IMAGE] = useState("");
  const [ANNOUNCEMENT_TITLE, setANNOUNCEMENT_TITLE] = useState("");
  const [ANNOUNCEMENT_DATE, setANNOUNCEMENT_DATE] = useState("");
  const [ANNOUNCEMENT_CONTENT, setANNOUNCEMENT_CONTENT] = useState("");

  const backAnnouncementReadMore = (ANNOUNCEMENT_ID_) => {
    Axios.get(
      `https://perseeption-tromagade.herokuapp.com/readMoreAnnouncement/${ANNOUNCEMENT_ID_}`
    ).then((response) => {
      // console.log(response.data);

      setANNOUNCEMENT_IMAGE("");
      setANNOUNCEMENT_TITLE("");
      setANNOUNCEMENT_DATE("");
      setANNOUNCEMENT_CONTENT("");
      setANNOUNCEMENT_ID_("");
    });
    Axios.get(
      "https://perseeption-tromagade.herokuapp.com/api/getMemberAnnouncement"
    ).then((response) => {
      setMemberAnnouncementList(response.data);
      // console.log(response.data);
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
    // console.log(ANNOUNCEMENT_ID);
    document.getElementById("popUpReadmoreAnnouncement_id").style.display =
      "block";
    document.getElementById("_memberAnnouncementList_id_").style.display =
      "block";
    document.getElementById("memberAnnouncementList_id_").style.display =
      "none";
    Axios.get(
      `https://perseeption-tromagade.herokuapp.com/readMoreAnnouncement/${ANNOUNCEMENT_ID}`
    ).then((response) => {
      // console.log(response.data);

      setANNOUNCEMENT_IMAGE(response.data[0].ANNOUNCEMENT_IMAGE);
      setANNOUNCEMENT_TITLE(response.data[0].ANNOUNCEMENT_TITLE);
      setANNOUNCEMENT_DATE(response.data[0].ANNOUNCEMENT_DATE);
      setANNOUNCEMENT_CONTENT(response.data[0].ANNOUNCEMENT_CONTENT);
      setANNOUNCEMENT_ID_(response.data[0].ANNOUNCEMENT_ID);
    });
  };

  const showMenuBar = () => {
    document.getElementById("menuBar_bground_").style.display = "block";
    document.getElementById("menuBar_inside").style.display = "block";
    document.getElementById("memberAnnouncementList_id_").style.display =
      "none";
    document.getElementById("_memberAnnouncementList_id_").style.display =
      "none";
    document.getElementById("announcementTitleHead").style.display = "none";
    // document.getElementById("mainEventList").style.display = "none";
    document.getElementById("outerFoot").style.display = "none";
  };

  const backMain = () => {
    document.getElementById("menuBar_bground_").style.display = "none";
    document.getElementById("menuBar_inside").style.display = "none";
    document.getElementById("memberAnnouncementList_id_").style.display =
      "grid";
    // document.getElementById("_memberAnnouncementList_id_").style.display =
    //   "block";
    document.getElementById("announcementTitleHead").style.display = "block";
    // document.getElementById("mainEventList").style.display = "none";
    document.getElementById("outerFoot").style.display = "block";
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

      <h1 className="announcementTitleHead" id="announcementTitleHead">
        Announcement
      </h1>
      <div className="memberAnnouncementList" id="memberAnnouncementList_id_">
        {memberAnnouncementList.map((val, key) => {
          return (
            <div key={key} className="announcementRender">
              {/* <h1>{USER_ID}</h1> */}
              <Image
                className="announcement_Img"
                cloudName="dlvt2lnkh"
                publicId={val.ANNOUNCEMENT_IMAGE}
              />
              {/* <img
                src={ANNOUNCEMENT_IMAGE}
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
        <div
          className="popUpReadmoreAnnouncement"
          id="popUpReadmoreAnnouncement_id"
        >
          <p
            onClick={() => {
              backAnnouncementReadMore(ANNOUNCEMENT_ID_);
            }}
            id="xbtnReadMoreAnnouncement"
          >
            back
          </p>
          <Image
            className="announcement_Img"
            cloudName="dlvt2lnkh"
            publicId={ANNOUNCEMENT_IMAGE}
          />
          <p className="announcement_TitleRM">{ANNOUNCEMENT_TITLE}</p>
          <p className="announcement_DateRM">{ANNOUNCEMENT_DATE}</p>
          <p className="announcement_ContentRM">{ANNOUNCEMENT_CONTENT}</p>
        </div>
      </div>
      <div id="sp_"></div>
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
            <a href="www.facebook.com/PAVIC.ph" className="fa fa-facebook">
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

export default MemberAnnouncement;
