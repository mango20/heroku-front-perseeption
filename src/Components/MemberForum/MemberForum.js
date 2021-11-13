import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./MemberForum.css";
import { Link, useHistory } from "react-router-dom";
import { Image } from "cloudinary-react";
function MemberForum() {
  Axios.defaults.withCredentials = true;
  const [FORUM_TITLE, setFORUM_TITLE] = useState("");
  const [NAME, setNAME] = useState("");
  const [ADMIN_NAME, setADMIN_NAME] = useState("");
  const [FORUM_CONTENT, setFORUM_CONTENT] = useState("");
  const [FORUM_ID, setFORUM_ID] = useState("");
  const [FORUM_LIST, setFORUM_LIST] = useState([]);
  const [FORUM_LIST_TOP, setFORUM_LIST_TOP] = useState([]);
  const [FORUM_REPLY_CONTENT, setFORUM_REPLY_CONTENT] = useState("");
  const [FORUM_REPLY_LIST, setFORUM_REPLY_LIST] = useState([]);
  const [USER_ID, setUSER_ID] = useState("");

  const history = useHistory();
  // const [USER_ID, setUSER_ID] = useState("");
  const [AVATAR, setAVATAR] = useState("");
  useEffect(() => {
    if (localStorage.getItem("Client") === null) {
    } else {
      var name1 = JSON.parse(localStorage.getItem("Client"));

      if (name1[0].USER_TYPE === "Admin") {
        document.getElementById("loggedInImg").style.display = "block";
        document.getElementById("loggedInImg_").style.display = "none";
        document.getElementById("portalDash").style.display = "block";
        document.getElementById("profileGo").style.display = "none";
      } else {
        document.getElementById("loggedInImg_").style.display = "block";
        document.getElementById("loggedInImg").style.display = "none";
        document.getElementById("portalDash").style.display = "none";
      }
      setAVATAR(name1[0].AVATAR);
      document.getElementById("floatBtn").style.display = "none";
      document.getElementById("LoginHeader").style.display = "none";
      // document.getElementById("LoginHeader_").style.display = "none";
      // document.getElementById("profileGo_").style.display = "block";
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
  // useEffect(() => {
  //   Axios.get("https://perseeption-tromagade.herokuapp.com/login").then((response) => {
  //     console.log(response.data.loggedIn);
  //     if (response.data.loggedIn === true) {
  //       setUSER_ID(response.data.user[0].USER_ID);
  //     } else {
  //       window.location = "/";
  //     }
  //   });
  // }, []);

  useEffect(() => {
    Axios.get(
      "https://perseeption-tromagade.herokuapp.com/api/getForumReply_/${FORUM_ID}"
    ).then((response) => {
      setFORUM_REPLY_LIST(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get(
      "https://perseeption-tromagade.herokuapp.com/api/getForumTop"
    ).then((response) => {
      setFORUM_LIST_TOP(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get(`https://perseeption-tromagade.herokuapp.com/api/getForum`).then(
      (response) => {
        setFORUM_LIST(response.data);
        if (response.data[0].USER_TYPE === "Admin") {
          document.getElementById("iconForum_").style.display = "block";
          document.getElementById("iconForum").style.display = "none";
        } else {
          document.getElementById("iconForum_").style.display = "none";
          document.getElementById("iconForum").style.display = "block";
        }
        console.log(response.data);
      }
    );
  }, []);

  const deletForumQuestion = (FORUM_ID) => {
    if (localStorage.getItem("Client") !== null) {
      Axios.delete(
        `https://perseeption-tromagade.herokuapp.com/api/deleteQuestion/${FORUM_ID}`
      ).then((response) => {
        console.log(response);
        setFORUM_LIST(
          FORUM_LIST.filter((val) => {
            return val.FORUM_ID !== FORUM_ID; // Filter/remove if it not equals to id
          })
        );

        Axios.get(
          "https://perseeption-tromagade.herokuapp.com/api/getForum"
        ).then((response) => {
          setFORUM_LIST(response.data);
          console.log(response.data);
          if (response.data[0].USER_TYPE === "Admin") {
            document.getElementById("iconForum_").style.display = "block";
            document.getElementById("iconForum").style.display = "none";
          } else {
            document.getElementById("iconForum_").style.display = "none";
            document.getElementById("iconForum").style.display = "block";
          }
        });
        window.location.reload();
      });
      document.getElementById("popUpGetMsgDeleteMember_").style.display =
        "block";
      setTimeout(function () {
        document.getElementById("popUpGetMsgDeleteMember_").style.display =
          "none";
        // document.getElementById("popUpGetMsgInCont").style.display = "none";
      }, 3000);
    } else {
      document.getElementById("floatYouNeedLoginBg").style.display = "block";
      document.getElementById("floatYouNeedContainer").style.display = "block";
    }
  };

  const createForumReply = (FORUM_ID) => {
    if (localStorage.getItem("Client") !== null) {
      const name = JSON.parse(localStorage.getItem("Client"));
      const USER_ID_ = name[0].USER_ID;
      const NAME = name[0].NAME;
      console.log(USER_ID_);
      console.log(NAME);
      setUSER_ID(name[0].USER_ID);

      Axios.post(
        `https://perseeption-tromagade.herokuapp.com/insertForumReply/${FORUM_ID}`,
        {
          FORUM_REPLY_CONTENT: FORUM_REPLY_CONTENT,
          FORUM_ID: FORUM_ID,
          USER_ID: USER_ID_,
        }
      );
      console.log(FORUM_REPLY_CONTENT);
      console.log(FORUM_ID);
      console.log(USER_ID_);

      Axios.get(
        `https://perseeption-tromagade.herokuapp.com/api/getForumReply_/${FORUM_ID}`
      ).then((response) => {
        console.log(response.data);

        setFORUM_REPLY_LIST(response.data);
      });
      document.getElementById("popUpGetMsgApprove").style.display = "block";
      setTimeout(function () {
        document.getElementById("popUpGetMsgApprove").style.display = "none";
        // document.getElementById("popUpGetMsgInCont").style.display = "none";
      }, 3000);

      // Axios.get("https://perseeption-tromagade.herokuapp.com/api/getForumTop").then((response) => {
      //   setFORUM_REPLY_LIST(response.data);
      // });
    } else {
      document.getElementById("floatYouNeedLoginBg").style.display = "block";
      document.getElementById("floatYouNeedContainer").style.display = "block";
    }
  };

  const createForum = () => {
    // Insert Announcement
    const name = JSON.parse(localStorage.getItem("Client"));
    const USER_ID_ = name[0].USER_ID;
    console.log(USER_ID_);
    Axios.post("https://perseeption-tromagade.herokuapp.com/insertForum", {
      USER_ID_: USER_ID_,
      FORUM_ID: FORUM_ID,
      FORUM_TITLE: FORUM_TITLE,
      FORUM_CONTENT: FORUM_CONTENT,
    });
    console.log(USER_ID_);
    Axios.get("https://perseeption-tromagade.herokuapp.com/api/getForum").then(
      (response) => {
        setFORUM_LIST(response.data);
        console.log(response.data[0].FORUM_ID);
        if (response.data[0].USER_TYPE === "Admin") {
          document.getElementById("iconForum_").style.display = "block";
          document.getElementById("iconForum").style.display = "none";
        } else {
          document.getElementById("iconForum_").style.display = "none";
          document.getElementById("iconForum").style.display = "block";
        }
      }
    );
    document.getElementById("popUpGetMsgApprove_").style.display = "block";
    setTimeout(function () {
      document.getElementById("popUpGetMsgApprove_").style.display = "none";
      // document.getElementById("popUpGetMsgInCont").style.display = "none";
    }, 3000);

    // setFORUM_TITLE(" sd");
    // document.getElementById("floatForumAskQuestionBg").style.display = "none";
    document.getElementById("floatForumAskQuestionBg").style.display = "none";
    document.getElementById("floatForumAskQuestion").style.display = "none";
    // window.location.reload();
    // var form = document.getElementById("inputAnnouncementTitle");
    // form.target.reset();
    // document.getElementById("inputForumContentQuestion").innerHTML = "";
  };

  const hidePopupForumAsk = () => {
    document.getElementById("floatForumAskQuestionBg").style.display = "none";
    document.getElementById("floatForumAskQuestion").style.display = "none";
    document.getElementById("inputReplyForum").value = "";
  };

  const hidefloatLogin = () => {
    document.getElementById("floatYouNeedLoginBg").style.display = "none";
    document.getElementById("floatYouNeedContainer").style.display = "none";
  };

  const askPopup = () => {
    if (localStorage.getItem("Client") !== null) {
      const name = JSON.parse(localStorage.getItem("Client"));
      setUSER_ID(name[0].USER_ID);
      document.getElementById("floatForumAskQuestionBg").style.display =
        "block";
      document.getElementById("floatForumAskQuestion").style.display = "block";
    } else {
      document.getElementById("floatYouNeedLoginBg").style.display = "block";
      document.getElementById("floatYouNeedContainer").style.display = "block";
    }
  };

  const clickInput = (FORUM_ID) => {
    if (localStorage.getItem("Client") === null) {
      document.getElementById("floatYouNeedLoginBg").style.display = "block";
      document.getElementById("floatYouNeedContainer").style.display = "block";
    }
  };

  const loadComment = (FORUM_ID) => {
    console.log(FORUM_ID);
    Axios.get(
      `https://perseeption-tromagade.herokuapp.com/api/getForumReply_/${FORUM_ID}`
    ).then((response) => {
      console.log(response);
      setFORUM_REPLY_LIST(response.data);
      //   .then(
      //   (response) => {
      //     console.log(response.data);

      //     setFORUM_REPLY_LIST(response.data);
      //   }
    });
  };

  // useEffect(() => {
  //   Axios.get("https://perseeption-tromagade.herokuapp.com/getForumReply").then((response) => {
  //     FORUM_REPLY_LIST(response.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   Axios.get("https://perseeption-tromagade.herokuapp.com/getForum").then((response) => {
  //     FORUM_LIST(response.data);
  //   });
  // }, []);

  const filterApproveMembers = () => {
    // var input, filter, table, tr, td, td1, td2, txtValue, txtValue1, txtValue2;
    // const FORUM_TITLE = document.getElementById("inputSearchForum").value;
    // console.log(FORUM_TITLE);
    // Axios.get(
    //   `https://perseeption-tromagade.herokuapp.com/api/getForum/${FORUM_TITLE}`
    // ).then((response) => {
    //   console.log(response.data);
    //   setFORUM_LIST(
    //     FORUM_LIST.filter((val) => {
    //       return val.FORUM_TITLE === FORUM_TITLE; // Filter/remove if it not equals to id
    //     })
    //   );
    // filter = input.value.toUpperCase();
    // console.log(filter);
    // table = document.getElementById("forumQuestionHead");
    // console.log(table);
    // tr = table.getElementsByTagName("p");
    // console.log(tr);
    // console.log(tr.length);
    // for (i = 0; i < tr.length; i++) {
    //   console.log(i);
    //   td = tr[i].getElementById("titleQuestion")[0];
    //   console.log(td);
    //   if (td) {
    //     txtValue = td.textContent || td.innerText;
    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //       tr[i].style.display = "";
    //     } else {
    //       tr[i].style.display = "none";
    //     }
    //   }
    // }
  };
  return (
    <div className="ForumBg">
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
            {/* <img
              src="/images/events1.jpg"
              alt="sdf"
              className="loggedInImg"
              id="loggedInImg"
              onClick={popup}
            /> */}
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
      <div id="popUpGetMsgApprove_logout">
        <div id="popUpGetMsgInApprove">
          <h2>PerSEEption Message</h2>
          <h1>Logout Successfully!</h1>
        </div>
      </div>
      <div id="popUpGetMsgApprove">
        <div id="popUpGetMsgInApprove">
          <h2>PerSEEption Message</h2>
          <h1>Forum Reply Posted Successfully!</h1>
        </div>
      </div>
      <div id="popUpGetMsgApprove_">
        <div id="popUpGetMsgInApprove">
          <h2>PerSEEption Message</h2>
          <h1>Forum Content Posted Successfully!</h1>
        </div>
      </div>
      <div id="popUpGetMsgDeleteMember_">
        <div id="popUpGetMsgInDeleteMember_">
          <h2>PerSEEption Message</h2>
          <h1>Forum Deleted Successfully</h1>
        </div>
      </div>
      <div className="floatYouNeedLoginBg" id="floatYouNeedLoginBg">
        <div className="floatYouNeedContainer" id="floatYouNeedContainer">
          <p className="youNeedLoginAlertMsg">Perseeption Message</p>
          <p
            className="fa fa-times cancelLog"
            id="cancelLogin"
            onClick={hidefloatLogin}
          ></p>
          <p className="youNeedLoginAlertMsg_content">
            You must be logged in to ask a question on Perseeption
          </p>
          <div className="forumBtns">
            <Link to="/Login" className="loginBtnForum">
              Login
            </Link>
            <Link to="/Registration" className="signupBtnForum">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className="floatForumAskQuestionBg" id="floatForumAskQuestionBg">
        <div className="floatForumAskQuestion" id="floatForumAskQuestion">
          <div className="postATitleQuestion">
            <p>Ask a Question</p>
          </div>
          <div className="inputForumField">
            <p className="titleAskQuestionPopUp">Title:</p>
            <input
              type="text"
              className="inputForumTitleQuestion"
              placeholder="Enter a Title"
              id="inputForumTitleQuestion"
              onChange={(e) => setFORUM_TITLE(e.target.value)}
            />
            <p className="contentAskQuestionPopUp">Content:</p>
            <textarea
              className="inputForumContentQuestion"
              placeholder="Enter a Content..."
              id="inputForumContentQuestion"
              onChange={(e) => setFORUM_CONTENT(e.target.value)}
            />
          </div>
          <div className="submitForumBtn">
            <p className="cancelPostForum" onClick={hidePopupForumAsk}>
              Cancel
            </p>
            <p className="submitForum" onClick={createForum}>
              Submit Question
            </p>
          </div>
        </div>
      </div>
      <div className="forumBody">
        <div className="navForum"></div>
        <div className="forumTitleList">
          <p className="mostRecentTitle">Most Recent</p>
          {FORUM_LIST_TOP.map((val, key) => {
            return (
              <p key={key} className="mostRecentPost">
                {val.FORUM_TITLE}
              </p>
            );
          })}
        </div>
        <div className="forumMainContent">
          <div className="upperForum">
            <p className="btnAskQuestion" onClick={askPopup}>
              Ask Question
            </p>
            <div className="searchFilterForum">
              <input
                type="text"
                className="inputSearchForum"
                id="inputSearchForum"
                placeholder="Search Title"
                onKeyUp={filterApproveMembers}
              />
            </div>
          </div>
          <div className="repliesForum_" id="repliesList">
            <p className="replySecTitle">Reply Section</p>
            <div className="scrollReplies">
              {FORUM_REPLY_LIST.map((val, key) => {
                return (
                  <div key={key} className="repliesList">
                    <p className="nameReply">{val.NAME}</p>

                    <p className="contentReply">{val.FORUM_REPLY_CONTENT}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="forumQuestionList">
            <div className="scrollForum">
              {FORUM_LIST.map((val, key) => {
                return (
                  <div key={key} className="questionBox" d="questionBox">
                    <div className="forumQuestionHead" id="forumQuestionHead">
                      {/* <img
                        src="/images/avatar.png"
                        alt="img"
                        className="iconForum"
                      /> */}
                      <img
                        src="/images/AvatarIcon.png"
                        alt="img"
                        className="iconForum"
                        id="iconForum"
                        // onClick={popup}
                      />
                      <Image
                        className="iconForum"
                        id="iconForum_"
                        cloudName="dlvt2lnkh"
                        alt="img"
                        publicId={val.AVATAR}
                      />
                      <p className="iconForumName">{val.NAME}</p>
                      <i
                        className="fa fa-trash"
                        id="bullets"
                        onClick={() => {
                          deletForumQuestion(val.FORUM_ID);
                        }}
                      ></i>
                    </div>
                    <div className="forumQuestionContent">
                      {/* <p className="titleQuestion">{val.FORUM_ID}</p> */}
                      <p className="titleQuestion" id="titleQuestion">
                        {val.FORUM_TITLE}
                      </p>
                      <p className="contentQuestion">{val.FORUM_CONTENT}</p>
                    </div>
                    <p
                      className="seeReply"
                      onClick={() => {
                        loadComment(val.FORUM_ID);
                      }}
                    >
                      Load comment
                    </p>

                    <div className="replyBox" id="replyBox">
                      <input
                        type="text"
                        className="replyInput"
                        placeholder="Write a comment..."
                        id="inputReplyForum"
                        onClick={clickInput}
                        onChange={(e) => setFORUM_REPLY_CONTENT(e.target.value)}
                      />
                      <p
                        className="sentBtn"
                        onClick={() => {
                          createForumReply(val.FORUM_ID);
                        }}
                      >
                        Reply
                      </p>
                    </div>
                  </div>
                );
              })}
              {/* <hr /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <h1 className="announcementTitleHead">Forum</h1>
      <div className="forumOuter">
        <div className="postForumCon">
          <div className="userForum">
            <img
              src="/images/events1.jpg"
              alt="forumIcon"
              className="forumIcon"
            />
            <p className="forumUsername">Bam Manga</p>
          </div>
          <textarea
            className="postForum"
            placeholder="Type something..."
          ></textarea>
          <button className="postBtn">Post</button>
        </div>
      </div>
      <div className="forumQuestionList">
        <div className="forumOuter">
          <div className="postForumCon1">
            <div className="userForum">
              <img
                src="/images/events2.jpg"
                alt="forumIcon"
                className="forumIcon"
              />
              <p className="forumUsername">Mary Rose Trono</p>
            </div>
            <div></div>
            <div className="contentForumList">
              <p>Thank you for creating this website :)</p>
            </div>
            <div></div>
            <div className="forumIcons">
              <input
                type="text"
                className="replyQuestions"
                placeholder="Write a comment"
              />
              <i className="fa fa-reply replyForum" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div> */}
      <Link to="/Registration" className="floatBtn1" id="floatBtn">
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
  );
}

export default MemberForum;
