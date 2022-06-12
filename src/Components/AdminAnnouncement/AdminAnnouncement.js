import React, { useState, useEffect } from "react";
import Axios from "axios";
// import "./Events.css";
import { Link, useHistory } from "react-router-dom";
import { Image } from "cloudinary-react";
function AdminAnnouncement() {
  Axios.defaults.withCredentials = true;
  const [ANNOUNCEMENT_TITLE, setANNOUNCEMENT_TITLE] = useState("");
  const [ANNOUNCEMENT_CONTENT, setAnnouncement_Content] = useState("");
  const [ANNOUNCEMENT_IMAGE, setANNOUNCEMENT_IMAGE] = useState("");
  const [ANNOUNCEMENT_LIST, setANNOUNCEMENT_LIST] = useState([]);
  const [NEW_ANNOUNCEMENT_CONTENT, setNewCONTENT] = useState("");
  const [NEW_ANNOUNCEMENT_TITLE, setNEW_ANNOUNCEMENT_TITLE] = useState("");
  const [USER_ID, setUSER_ID] = useState("");
  const history = useHistory();

  // const submit = async () => {
  //   const formdata = new FormData();
  //   formdata.append("image", announcementInformation.file);

  //   formdata.append("title", announcementInformation.title);
  //   formdata.append("content", announcementInformation.content);
  //   if (
  //     announcementInformation.content === "" ||
  //     announcementInformation.file.length === 0 ||
  //     announcementInformation.content === ""
  //   ) {
  //     let timerId = setInterval(
  //       () =>
  //         (document.getElementById("titleAnnouncementMsg").innerHTML =
  //           "Please fill out form completely!"),
  //       0
  //     );

  //     // Timeout
  //     setTimeout(() => {
  //       clearInterval(timerId);
  //       document.getElementById("titleAnnouncementMsg").innerHTML = "";
  //     }, 3000);
  //     return false;
  //   } else
  //     Axios.post(
  //       "https://perseeption-tromagade.herokuapp.com/imageupload",
  //       formdata,
  //       {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       }
  //     );
  //   document.getElementById("messageAnnouncementPopUpouter").style.display =
  //     "block";
  //   document.getElementById("messageAnnouncement_Content").style.display =
  //     "block";

  //   setTimeout(function () {
  //     document.getElementById("messageAnnouncementPopUpouter").style.display =
  //       "none";
  //     document.getElementById("messageAnnouncement_Content").style.display =
  //       "none";
  //   }, 3000);
  //   Axios.get(
  //     "https://perseeption-tromagade.herokuapp.com/api/getAnnouncement"
  //   ).then((response) => {
  //     setANNOUNCEMENT_LIST(response.data);
  //   });
  // };

  const [fileInputState1, setFileInputState1] = useState("");
  const [selectedFile1, setSelectedFile1] = useState("");
  const [previewSource1, setPreviewSource1] = useState("");

  const handleFileInputChange1 = (e) => {
    const file = e.target.files[0];
    previewFile1(file);
    setSelectedFile1(file);
    setFileInputState1(e.target.value);
  };

  const previewFile1 = (file) => {
    const reader = new FileReader();
    // reader.readAsArrayBuffer(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource1(reader.result);
    };
  };

  const handleSubmitFile1 = (e) => {
    // console.log("submarine");

    const title = document.getElementById("inputAnnouncementTitle").value;
    const content = document.getElementById("inputAnnouncementContent").value;
    const img = document.getElementById("fileBtnAnnouncement").value;
    if (title === "" || img === 0 || content === "" || img === "") {
      // Error message
      document.getElementById("titleMessage_").style.color = "red";
      // document.getElementById("titleMessage_").style.marginLeft = "200px";
      let timerId = setInterval(
        () =>
          (document.getElementById("titleMessage_").innerHTML =
            "Please fill out form completely!"),
        0
      );

      // Timeout
      setTimeout(() => {
        clearInterval(timerId);
        document.getElementById("titleMessage_").innerHTML = "";
      }, 3000);
    }
    e.preventDefault();
    if (!selectedFile1) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile1);
    reader.onloadend = () => {
      uploadImage1(reader.result);
    };
    reader.onerror = () => {
      // console.error("AHHHHHHHH!!");
      // console.log("AAAAAAAAAAAAAAAAH");
    };
  };

  const uploadImage1 = (base64EncodedImage) => {
    try {
      const title = document.getElementById("inputAnnouncementTitle").value;
      const content = document.getElementById("inputAnnouncementContent").value;
      const img = document.getElementById("fileBtnAnnouncement").value;
      if (title === "" || img === 0 || content === "") {
        // Error message
        document.getElementById("titleMessage_").style.color = "red";
        // document.getElementById("titleMessage_").style.marginLeft = "200px";
        let timerId = setInterval(
          () =>
            (document.getElementById("titleMessage_").innerHTML =
              "Please fill out form completely!"),
          0
        );

        // Timeout
        setTimeout(() => {
          clearInterval(timerId);
          document.getElementById("titleMessage_").innerHTML = "";
        }, 3000);
        return false;
      } else {
        Axios.post(
          "https://perseeption-tromagade.herokuapp.com/api/uploadImageAnnouncement",
          {
            data: base64EncodedImage,
            ANNOUNCEMENT_TITLE: ANNOUNCEMENT_TITLE,
            ANNOUNCEMENT_CONTENT: ANNOUNCEMENT_CONTENT,
          }
        );
        document.getElementById("messageEventPopUpouter").style.display =
          "block";
        document.getElementById("messageEvent_Content").style.display = "block";

        setTimeout(function () {
          document.getElementById("messageEventPopUpouter").style.display =
            "none";
          document.getElementById("messageEvent_Content").style.display =
            "none";
        }, 3000);
        setFileInputState1("");
        setPreviewSource1("");
        setANNOUNCEMENT_TITLE("");
        setAnnouncement_Content("");
        document.getElementById("inputAnnouncementTitle").value = "";
        document.getElementById("inputAnnouncementContent").value = "";
        document.getElementById("fileBtnAnnouncement").value = "";
        document.getElementById("messageAnnouncementPopUpouter").style.display =
          "block";
        document.getElementById("messageAnnouncement_Content").style.display =
          "block";

        setTimeout(function () {
          document.getElementById(
            "messageAnnouncementPopUpouter"
          ).style.display = "none";
          document.getElementById("messageAnnouncement_Content").style.display =
            "none";
        }, 3000);
        Axios.get(
          "https://perseeption-tromagade.herokuapp.com/api/getAnnouncement"
        ).then((response) => {
          setANNOUNCEMENT_LIST(response.data);
          // console.log(response.data);
        });
      }
    } catch (error) {
      // console.error(error);
    }
  };

  // const [ANNOUNCEMENT_LIST, setANNOUNCEMENT_LIST] = useState();
  const loadImages = async () => {
    try {
      Axios.get(
        "https://perseeption-tromagade.herokuapp.com/api/imagesAnnouncement"
      ).then((response) => {
        setANNOUNCEMENT_LIST(response.data);
      });
    } catch (error) {
      // console.error(error);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  // Render
  useEffect(() => {
    Axios.get(
      "https://perseeption-tromagade.herokuapp.com/api/getAnnouncement"
    ).then((response) => {
      setANNOUNCEMENT_LIST(response.data);
      // console.log(response.data);
    });
  }, []);

  //Get User ID
  const [AVATAR, setAVATAR] = useState("");
  const [USERNAME_, setUSERNAME_] = useState("");
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
      setUSERNAME_(name[0].ADMIN_NAME);
      setUSER_ID(name[0].USER_ID);
      setAVATAR(name[0].AVATAR);
    }
  }, []);

  // Create Announcement
  const createAnnouncement = () => {
    const announcementTitleInput = document.getElementById(
      "inputAnnouncementTitle"
    ).value;

    const announcementContentInput = document.getElementById(
      "inputAnnouncementContent"
    ).value;

    if (announcementTitleInput === "" || announcementContentInput === "") {
      // if announcement is null
      // Timer
      let timerId = setInterval(
        () =>
          (document.getElementById("titleAnnouncementMsg").innerHTML =
            "Please fill out form completely!"),
        0
      );

      // Timeout
      setTimeout(() => {
        clearInterval(timerId);
        document.getElementById("titleAnnouncementMsg").innerHTML = "";
      }, 3000);
      return false;

      // Insert Announcement
    } else {
      Axios.post(
        "https://perseeption-tromagade.herokuapp.com/api/insertAnnouncement",
        {
          ANNOUNCEMENT_TITLE: ANNOUNCEMENT_TITLE,
          ANNOUNCEMENT_CONTENT: ANNOUNCEMENT_CONTENT,
          USER_ID: USER_ID,
        }
      );

      document.getElementById("messageAnnouncementPopUpouter").style.display =
        "block";
      document.getElementById("messageAnnouncement_Content").style.display =
        "block";

      setTimeout(function () {
        document.getElementById("messageAnnouncementPopUpouter").style.display =
          "none";
        document.getElementById("messageAnnouncement_Content").style.display =
          "none";
      }, 3000);
      // Making null value in input
      document.getElementById("inputAnnouncementTitle").value = "";
      document.getElementById("inputAnnouncementContent").value = "";
      setANNOUNCEMENT_TITLE("");
      setAnnouncement_Content("");
      Axios.get(
        "https://perseeption-tromagade.herokuapp.com/api/getAnnouncement"
      ).then((response) => {
        setANNOUNCEMENT_LIST(response.data);
      });
    }
  };

  const deleteAnnouncement_ = () => {
    //cancel_event_
    document.getElementById("popUpGetMsgDeleteAdmin_").style.display = "block";
  };

  const cancel_event_ = () => {
    //cancel_event_
    document.getElementById("popUpGetMsgDeleteAdmin_").style.display = "none";
  };

  // Delete Announcement
  const deletAnnouncementButton = (ANNOUNCEMENT_ID) => {
    document.getElementById("popUpGetMsgDeleteAdmin_").style.display = "none";
    Axios.delete(
      `https://perseeption-tromagade.herokuapp.com/api/delete/${ANNOUNCEMENT_ID}`
    ).then((response) => {
      // console.log(response);
      setANNOUNCEMENT_LIST(
        ANNOUNCEMENT_LIST.filter((val) => {
          return val.ANNOUNCEMENT_ID !== ANNOUNCEMENT_ID; // Filter/remove if it not equals to id
        })
      );
      document.getElementById("announcementRed").innerHTML =
        "Announcement Deleted Successfully";
      document.getElementById("popUpGetMsgDeleteAdmin").style.display = "block";
      setTimeout(function () {
        document.getElementById("popUpGetMsgDeleteAdmin").style.display =
          "none";
        // document.getElementById("popUpGetMsgInCont").style.display = "none";
      }, 3000);

      Axios.get(
        "https://perseeption-tromagade.herokuapp.com/api/getAnnouncement"
      ).then((response) => {
        setANNOUNCEMENT_LIST(response.data);
      });
    });
  };

  // Update Title
  const updateAnnouncementTitle = (ANNOUNCEMENT_ID) => {
    //#c6c6c6
    const updateAnnouncementTitle_ = document.getElementById(
      "updateAnnouncementTitle"
    ).value;

    if (updateAnnouncementTitle_ === "") {
      document.getElementById("updateAnnouncementTitle").style.borderColor =
        "red";
      document.getElementById("announcementRed").innerHTML =
        "Please Enter Title";
      document.getElementById("popUpGetMsgDeleteAdmin").style.display = "block";
      setTimeout(function () {
        document.getElementById("popUpGetMsgDeleteAdmin").style.display =
          "none";
      }, 3000);
    }

    if (updateAnnouncementTitle_ !== "") {
      document.getElementById("updateAnnouncementTitle").style.borderColor =
        "#c6c6c6";
      Axios.put(
        "https://perseeption-tromagade.herokuapp.com/api/updateAnnouncementTitle",
        {
          ANNOUNCEMENT_ID: ANNOUNCEMENT_ID,
          ANNOUNCEMENT_TITLE: NEW_ANNOUNCEMENT_TITLE,
        }
      ).then((response) => {
        setANNOUNCEMENT_LIST(
          ANNOUNCEMENT_LIST.map((val) => {
            return val.ANNOUNCEMENT_ID === ANNOUNCEMENT_ID
              ? {
                  ANNOUNCEMENT_ID: val.ANNOUNCEMENT_ID,
                  ANNOUNCEMENT_TITLE: NEW_ANNOUNCEMENT_TITLE,
                }
              : val;
          })
        );

        document.getElementById("popUpGetMsgAdminUpdate").style.display =
          "block";
        setTimeout(function () {
          document.getElementById("popUpGetMsgAdminUpdate").style.display =
            "none";
          // document.getElementById("popUpGetMsgInCont").style.display = "none";
        }, 3000);

        Axios.get(
          "https://perseeption-tromagade.herokuapp.com/api/getAnnouncement"
        ).then((response) => {
          setANNOUNCEMENT_LIST(response.data);
        });
      });
    }
  };

  // Update Content
  const updateAnnouncementContent = (ANNOUNCEMENT_ID) => {
    const updateAnnouncementContent_ = document.getElementById(
      "updateAnnouncementContent"
    ).value;

    if (updateAnnouncementContent_ === "") {
      document.getElementById("updateAnnouncementContent").style.borderColor =
        "red";
      document.getElementById("announcementRed").innerHTML =
        "Please Enter Content";
      document.getElementById("popUpGetMsgDeleteAdmin").style.display = "block";
      setTimeout(function () {
        document.getElementById("popUpGetMsgDeleteAdmin").style.display =
          "none";
      }, 3000);
    }

    if (updateAnnouncementContent_ !== "") {
      document.getElementById("updateAnnouncementContent").style.borderColor =
        "#c6c6c6";

      Axios.put(
        "https://perseeption-tromagade.herokuapp.com/api/updateAnnouncementContent",
        {
          ANNOUNCEMENT_ID: ANNOUNCEMENT_ID,
          ANNOUNCEMENT_CONTENT: NEW_ANNOUNCEMENT_CONTENT,
        }
      ).then((response) => {
        setANNOUNCEMENT_LIST(
          ANNOUNCEMENT_LIST.map((val) => {
            return val.ANNOUNCEMENT_ID === ANNOUNCEMENT_ID
              ? {
                  ANNOUNCEMENT_ID: val.ANNOUNCEMENT_ID,
                  ANNOUNCEMENT_CONTENT: NEW_ANNOUNCEMENT_CONTENT,
                }
              : val;
          })
        );

        document.getElementById("popUpGetMsgAdminUpdate").style.display =
          "block";
        setTimeout(function () {
          document.getElementById("popUpGetMsgAdminUpdate").style.display =
            "none";
          // document.getElementById("popUpGetMsgInCont").style.display = "none";
        }, 3000);

        //   setNewReview("");
        //   document.getElementById("updateAnnouncementContentID").value = "";

        Axios.get(
          "https://perseeption-tromagade.herokuapp.com/api/getAnnouncement"
        ).then((response) => {
          setANNOUNCEMENT_LIST(response.data);
        });
      });
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
  };

  return (
    <div className="EventsAdminBg">
      <div className="AdminHeader">
        <div className="imgAdminContainer">
          <p className="AdminHeaderTitle">Announcement</p>
        </div>
        <Link to="/AdminProfile" className="profileIcon">
          <Image
            className="profilePicture"
            cloudName="dlvt2lnkh"
            alt="img"
            publicId={AVATAR}
          />

          <p className="profileNameHeader">{USERNAME_}</p>
        </Link>
      </div>
      <div className="messageEventPopUpouter" id="messageEventPopUpouter">
        <div className="messageEvent_Content" id="messageEvent_Content">
          <h4 className="EventMsgTitle">Message</h4>
          {/* <i className="fa fa-times" id="announcementX"></i> */}
          <p className="EventMsg">Announcement Successfully Posted</p>
        </div>
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
            <i className="fa fa-sign-out"></i> Logout
          </p>
        </div>
        <div id="popUpGetMsgAdminUpdate">
          <div id="popUpGetMsgInAdminUpdate">
            <h2>PerSEEption Message</h2>
            <h1>Announcement Updated Successfully!</h1>
          </div>
        </div>

        <div id="popUpGetMsgDeleteAdmin">
          <div id="popUpGetMsgInDeleteAdmin">
            <h2>PerSEEption Message</h2>
            <h1 id="announcementRed">Announcement Deleted Successfully</h1>
          </div>
        </div>

        <div id="popUpGetMsgApprove_logout">
          <div id="popUpGetMsgInApprove">
            <h2>PerSEEption Message</h2>
            <h1>Logout Successfully!</h1>
          </div>
        </div>
        <div className="form1">
          <form onSubmit={handleSubmitFile1}>
            <label className="announcementTitleTxt">Title </label>
            <input
              type="text"
              id="inputAnnouncementTitle"
              className="inputAnnTitle"
              onChange={(e) => setANNOUNCEMENT_TITLE(e.target.value)}
            />
            <label className="contentTxtAnnouncement">Content</label>
            <textarea
              id="inputAnnouncementContent"
              className="announcementAdminContent"
              onChange={(e) => setAnnouncement_Content(e.target.value)}
            ></textarea>
            <div className="containerBtnAnnouncement">
              <input
                type="file"
                name="image"
                onChange={handleFileInputChange1}
                value={fileInputState1}
                className="fileBtnAnnouncement"
                id="fileBtnAnnouncement"
              />
              <button className="postAnnouncementBtn" type="submit">
                {" "}
                Submit{" "}
              </button>
            </div>
            <div id="titleAnnouncementMsg"></div>
          </form>
        </div>
        <div id="titleMessage_"></div>
        {/* {previewSource1 && (
          <img src={previewSource1} alt="chosen" style={{ height: "300px" }} />
        )} */}

        <div className="announcementListContainer">
          {/* {announcementInformation.filepreview !== null ? (
            <img
              className="previewimg"
              src={announcementInformation.filepreview}
              alt="UploadImage1"
            />
          ) : null} */}
          {/* {ANNOUNCEMENT_LIST &&
            ANNOUNCEMENT_LIST.map((imageId, index) => {
              return (
                <div className="eventAdminRender">
                  <Image
                    key={index}
                    className="eventAdImg"
                    cloudName="dlvt2lnkh"
                    publicId={imageId.ANNOUNCEMENT_IMAGE}
                  />
                  <p className="eventAdmin_Title">
                    {imageId.ANNOUNCEMENT_TITLE}
                  </p>
                  <p className="eventAdmin_Date">{imageId.ANNOUNCEMENT_DATE}</p>
                  <p className="eventAdmin_Content">
                    {imageId.ANNOUNCEMENT_CONTENT}
                  </p>

                  <div>
                    <input
                      type="text"
                      className="updateEventTitle"
                      placeholder="Enter Title"
                      onChange={(e) => {
                        setNEW_ANNOUNCEMENT_TITLE(e.target.value);
                      }}
                    />
                    <button
                      className="updateBtn"
                      onClick={() => {
                        updateAnnouncementTitle(imageId.EVENT_ID);
                      }}
                    >
                      Update
                    </button>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="updateEventContent"
                      placeholder="Enter Updated Content"
                      onChange={(e) => {
                        setNewCONTENT(e.target.value);
                      }}
                    />
                    <button
                      className="inpupdateEventContent"
                      onClick={() => {
                        updateAnnouncementContent(imageId.EVENT_ID);
                      }}
                    >
                      Update
                    </button>{" "}
                    <button
                      className="deleteAnnouncementBtn"
                      onClick={() => {
                        deletAnnouncementButton(imageId.EVENT_ID);
                      }}
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              );
            })} */}
          {ANNOUNCEMENT_LIST.map((val, key) => {
            return (
              <div key={key} className="announcementAdminRender">
                {/* <img
                  src={val.ANNOUNCEMENT_IMAGE}
                  alt="img"
                  className="announcementDummyIng"
                /> */}

                <Image
                  className="announcementDummyIng"
                  cloudName="dlvt2lnkh"
                  publicId={val.ANNOUNCEMENT_IMAGE}
                />
                <p className="announcement_title_inner">
                  {val.ANNOUNCEMENT_TITLE}
                </p>
                <p className="announcement_date_inner">
                  {val.ANNOUNCEMENT_DATE}
                </p>
                <p className="announcement_Content_Inner">
                  {val.ANNOUNCEMENT_CONTENT}
                </p>

                <div>
                  <input
                    type="text"
                    className="updateAnnouncementTitle"
                    id="updateAnnouncementTitle"
                    placeholder="Enter Title"
                    onChange={(e) => {
                      setNEW_ANNOUNCEMENT_TITLE(e.target.value);
                    }}
                  />
                  <button
                    className="updateAnnouncementBtn"
                    onClick={() => {
                      updateAnnouncementTitle(val.ANNOUNCEMENT_ID);
                    }}
                  >
                    Update
                  </button>
                </div>
                <div>
                  <input
                    type="text"
                    className="updateAnnouncementContent"
                    id="updateAnnouncementContent"
                    placeholder="Enter Updated Content"
                    onChange={(e) => {
                      setNewCONTENT(e.target.value);
                    }}
                  />
                  <button
                    className="inputUpdateContent"
                    onClick={() => {
                      updateAnnouncementContent(val.ANNOUNCEMENT_ID);
                    }}
                  >
                    Update
                  </button>{" "}
                  <button
                    className="delAdminButton"
                    onClick={deleteAnnouncement_}
                  >
                    DELETE
                  </button>
                </div>
                {/*sdas*/}
                <div id="popUpGetMsgDeleteAdmin_">
                  <div id="popUpGetMsgInDeleteAdmin_">
                    <h2>PerSEEption Message</h2>
                    <h1 id="announcementRed_">
                      Are you sure you want to delete it?
                    </h1>
                    <button id="cancel_EveBtn" onClick={cancel_event_}>
                      Cancel
                    </button>
                    <button
                      className="delAdminButton"
                      onClick={() => {
                        deletAnnouncementButton(val.ANNOUNCEMENT_ID);
                      }}
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <h1>{loginStatus}</h1> */}
      </div>
    </div>
  );
}

export default AdminAnnouncement;
