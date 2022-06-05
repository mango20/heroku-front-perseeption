import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./ContactUs.css";
import { Link, useHistory } from "react-router-dom";
import { Image } from "cloudinary-react";
function ContactUs() {
  Axios.defaults.withCredentials = true;
  const [USER_ID, setUSER_ID] = useState("");
  const [contact_name, setcontact_name] = useState("");
  const [contact_number, setcontact_number] = useState("");
  const [contact_email, setcontact_email] = useState("");
  const [contact_message, setcontact_message] = useState("");
  const [AVATAR, setAVATAR] = useState("");
  const history = useHistory();
  // const [announcementContentList, setAnnouncementList] = useState([]);
  // const [newReview, setNewReview] = useState("");
  // const [newTitle, setNewTitle] = useState("");

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

  const insertContactUsMsg = () => {
    const _contactUsName = document.getElementById("_contactUsName").value;
    const _contactUsNumber = document.getElementById("_contactUsNumber").value;
    const _contactUsEmail = document.getElementById("_contactUsEmail").value;
    const _contactUsMessage =
      document.getElementById("_contactUsMessage").value;
    // email
    const contactus_email_regex =
      /^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    // name
    const contactus_name_regex = /^([a-zA-Z\s\.]{1,50})$/;

    // contact number
    const contactus_contactNum_regex = /^([0-9]{11})$/;

    // const specialStr = _contactUsMessage.charAt(0);

    // message regex
    const contactus_contactMessage_regex = /^([a-zA-Z0-9\,\;\:\s\.\-\_]+)$/;

    //else { }

    //if all is blank
    if (
      _contactUsName === "" ||
      _contactUsNumber === "" ||
      _contactUsEmail === "" ||
      _contactUsMessage === ""
    ) {
      document.getElementById("popUpGetMsgCont").style.display = "block";
      document.getElementById("popUpGetMsgInCont").style.display = "block";
      setTimeout(function () {
        document.getElementById("popUpGetMsgCont").style.display = "none";
        document.getElementById("popUpGetMsgInCont").style.display = "none";
      }, 3000);
    }

    // if email is not match
    if (!contactus_email_regex.test(_contactUsEmail)) {
      document.getElementById("_contactUsEmail").style.borderColor = "red";
      document.getElementById("_Msg3").innerHTML = "Please Check your Email!";
    } else {
      document.getElementById("_contactUsEmail").style.borderColor = "#c6c6c6";
      document.getElementById("_Msg3").innerHTML = "";
    }

    if (!contactus_name_regex.test(_contactUsName)) {
      document.getElementById("_contactUsName").style.borderColor = "red";
      document.getElementById("_Msg1").innerHTML = "Please Check! Letters Only";
    } else {
      document.getElementById("_contactUsName").style.borderColor = "#c6c6c6";
      document.getElementById("_Msg1").innerHTML = "";
    }

    if (!contactus_contactNum_regex.test(_contactUsNumber)) {
      document.getElementById("_contactUsNumber").style.borderColor = "red";
      document.getElementById("_Msg2").innerHTML = "Please Check! Numbers Only";
    } else {
      document.getElementById("_contactUsNumber").style.borderColor = "#c6c6c6";
      document.getElementById("_Msg2").innerHTML = "";
    }

    if (_contactUsMessage === "") {
      document.getElementById("_contactUsMessage").style.borderColor = "red";
      document.getElementById("_Msg4").innerHTML = "Please input message!";
    } else {
      document.getElementById("_contactUsMessage").style.borderColor =
        "#c6c6c6";
      document.getElementById("_Msg4").innerHTML = "";
    }

    //regex
    /* if (!contactus_contactMessage_regex.test(_contactUsMessage)) {
      document.getElementById("_contactUsMessage").style.borderColor = "red";
    } else {
      document.getElementById("_contactUsMessage").style.borderColor =
        "#c6c6c6";
    }
*/
    if (
      !(
        _contactUsName === "" &&
        _contactUsNumber === "" &&
        _contactUsEmail === "" &&
        _contactUsMessage === ""
      ) &&
      contactus_email_regex.test(_contactUsEmail) &&
      contactus_name_regex.test(_contactUsName) &&
      contactus_contactNum_regex.test(_contactUsNumber) &&
      contactus_contactMessage_regex.test(_contactUsMessage)
    ) {
      Axios.post(
        "https://perseeption-tromagade.herokuapp.com/insertContactUsMsg",
        {
          contact_name: contact_name,
          contact_number: contact_number,
          contact_email: contact_email,
          contact_message: contact_message,
          // USER_ID: USER_ID,
        }
      );

      //
      document.getElementById("_contactUsEmail").style.borderColor = "#c6c6c6";

      document.getElementById("_contactUsName").style.borderColor = "#c6c6c6";

      document.getElementById("_contactUsNumber").style.borderColor = "#c6c6c6";

      document.getElementById("_contactUsMessage").style.borderColor =
        "#c6c6c6";
      //

      const _contactUsName = (document.getElementById("_contactUsName").value =
        "");
      const _contactUsNumber = (document.getElementById(
        "_contactUsNumber"
      ).value = "");
      const _contactUsEmail = (document.getElementById(
        "_contactUsEmail"
      ).value = "");
      const _contactUsMessage = (document.getElementById(
        "_contactUsMessage"
      ).value = "");

      document.getElementById("contactUsSent").style.display = "block";
      // document.getElementById("popUpGetMsgInCont").style.display = "block";
      setTimeout(function () {
        document.getElementById("contactUsSent").style.display = "none";
        // document.getElementById("popUpGetMsgInCont").style.display = "none";
      }, 3000);
    }

    /* if (
      _contactUsName === "" ||
      _contactUsNumber === "" ||
      _contactUsEmail === "" ||
      _contactUsMessage === ""
    ) {
      document.getElementById("popUpGetMsgCont").style.display = "block";
      document.getElementById("popUpGetMsgInCont").style.display = "block";
      setTimeout(function () {
        document.getElementById("popUpGetMsgCont").style.display = "none";
        document.getElementById("popUpGetMsgInCont").style.display = "none";
      }, 3000);
    } else if (
      !contactus_email_regex.test(_contactUsEmail) ||
      !contactus_name_regex.test(_contactUsName)
    ) {
      document.getElementById("_contactUsName").style.borderColor = "red";
      document.getElementById("_contactUsName").style.borderColor = "red";
    } else {
      Axios.post(
        "https://perseeption-tromagade.herokuapp.com/insertContactUsMsg",
        {
          contact_name: contact_name,
          contact_number: contact_number,
          contact_email: contact_email,
          contact_message: contact_message,
          // USER_ID: USER_ID,
        }
      );
      const _contactUsName = (document.getElementById("_contactUsName").value =
        "");
      const _contactUsNumber = (document.getElementById(
        "_contactUsNumber"
      ).value = "");
      const _contactUsEmail = (document.getElementById(
        "_contactUsEmail"
      ).value = "");
      const _contactUsMessage = (document.getElementById(
        "_contactUsMessage"
      ).value = "");

      document.getElementById("contactUsSent").style.display = "block";
      // document.getElementById("popUpGetMsgInCont").style.display = "block";
      setTimeout(function () {
        document.getElementById("contactUsSent").style.display = "none";
        // document.getElementById("popUpGetMsgInCont").style.display = "none";
      }, 3000);
    }*/
  };

  const showMenuBar = () => {
    document.getElementById("menuBar_bground_").style.display = "block";
    document.getElementById("menuBar_inside").style.display = "block";
    document.getElementById("eventTitle_Head_").style.display = "none";
    document.getElementById("map_").style.display = "none";
    document.getElementById("containerContact").style.display = "none";
    // document.getElementById("copyrightText").style.display = "none";
    document.getElementById("outerFoot").style.display = "none";
  };

  const backMain = () => {
    document.getElementById("menuBar_bground_").style.display = "none";
    document.getElementById("menuBar_inside").style.display = "none";
    document.getElementById("eventTitle_Head_").style.display = "grid";
    document.getElementById("map_").style.display = "block";
    document.getElementById("containerContact").style.display = "block";
    // document.getElementById("copyrightText").style.display = "block";
    document.getElementById("outerFoot").style.display = "block";
  };

  return (
    <div>
      <div className="contactUsBg">
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
                src="/images/AvatarIcon.png"
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

        <div id="popUpGetMsgApprove_logout">
          <div id="popUpGetMsgInApprove">
            <h2>PerSEEption Message</h2>
            <h1>Logout Successfully!</h1>
          </div>
        </div>
        <div id="popUpGetMsgCont">
          <div id="popUpGetMsgInCont">
            <h2>Message</h2>
            <h1 id="popMsg_contactUS">Please fill out all field!</h1>
          </div>
        </div>

        <div id="contactUsSent">
          <div id="popUpGetMsgInCont__">
            <h2>Message</h2>
            <i className="fa fa-check-circle"></i>
            <h1>Your message has been sent</h1>
          </div>
        </div>

        <h1 className="eventTitle_Head" id="eventTitle_Head_">
          Contact Us
        </h1>
        <div className="containerContact" id="containerContact">
          <div className="contactUsContent">
            <div className="contactUsForm">
              <p className="contactUsFormTitle">Get in touch</p>
              <p id="_Msg_"></p>
              {/* <p className="contactUsFormSubtitle"></p> */}
              <input
                type="text"
                placeholder="Enter Full Name"
                className="contactUsName"
                id="_contactUsName"
                onChange={(e) => setcontact_name(e.target.value)}
              />
              <p id="_Msg1"></p>
              <input
                type="text"
                placeholder="Contact Number"
                className="contactUsContact"
                id="_contactUsNumber"
                onChange={(e) => setcontact_number(e.target.value)}
              />
              <p id="_Msg2"></p>
              <input
                type="email"
                placeholder="Email Address"
                className="contactUsEmail"
                id="_contactUsEmail"
                onChange={(e) => setcontact_email(e.target.value)}
              />
              <p id="_Msg3"></p>
              <textarea
                placeholder="Type your message here"
                className="contactUsMessage"
                onChange={(e) => setcontact_message(e.target.value)}
                id="_contactUsMessage"
              ></textarea>
              <p id="_Msg4"></p>
              <p className="contactSubmit" onClick={insertContactUsMsg}>
                Submit
              </p>
            </div>
            <div className="map" id="map_">
              <p className="contactTitleMap">Perseeption</p>
              <p className="emailContactAdd">
                Email Address: Perseeption@gmail.com
              </p>
              <p className="contactContactNum">Contact Number: 0927896541236</p>
              <iframe
                className="visualMap"
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.6272222366365!2d121.04814191535186!3d14.620299280512077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7affe1a3917%3A0x9f31783e1f8885bf!2sResources%20for%20the%20Blind%20Inc.!5e0!3m2!1sen!2sph!4v1619932190147!5m2!1sen!2sph"
              ></iframe>
            </div>
          </div>
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

export default ContactUs;
