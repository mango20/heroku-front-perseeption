import React, { useState, useEffect } from "react";
import Axios from "axios";
// import "./Events.css";
import { Link } from "react-router-dom";
import { CloudinaryContext, Image } from "cloudinary-react";
function AdminAnnouncement() {
  const [ANNOUNCEMENT_TITLE, setANNOUNCEMENT_TITLE] = useState("");
  const [ANNOUNCEMENT_CONTENT, setAnnouncement_Content] = useState("");
  const [ANNOUNCEMENT_IMAGE, setANNOUNCEMENT_IMAGE] = useState("");
  const [ANNOUNCEMENT_LIST, setANNOUNCEMENT_LIST] = useState([]);
  const [NEW_ANNOUNCEMENT_CONTENT, setNewCONTENT] = useState("");
  const [NEW_ANNOUNCEMENT_TITLE, setNEW_ANNOUNCEMENT_TITLE] = useState("");
  const [USER_ID, setUSER_ID] = useState("");

  // const [loginStatus, setLoginStatus] = useState("");
  // const [userList, setuserList] = useState([]);
  const [announcementInformation, setAnnouncementInformation] = useState({
    title: "",
    content: "",
    file: [],
    filepreview: null,
  });

  const handleInputChange = (event) => {
    setAnnouncementInformation({
      ...announcementInformation,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };

  const handleInputChange_ = (event) => {
    setAnnouncementInformation({
      ...announcementInformation,
      title: document.getElementById("inputAnnouncementTitle").value,
      content: document.getElementById("inputAnnouncementContent").value,
    });
  };

  const [isSucces, setSuccess] = useState(null);

  const submit = async () => {
    const formdata = new FormData();
    formdata.append("image", announcementInformation.file);
    console.log(announcementInformation.file);
    formdata.append("title", announcementInformation.title);
    formdata.append("content", announcementInformation.content);
    if (
      announcementInformation.content === "" ||
      announcementInformation.file.length === 0 ||
      announcementInformation.content === ""
    ) {
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
    } else
      Axios.post(
        "https://perseeption-tromagade.herokuapp.com/imageupload",
        formdata,
        {
          headers: { "Content-Type": "multipart/form-data" },
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
    Axios.get(
      "https://perseeption-tromagade.herokuapp.com/api/getAnnouncement"
    ).then((response) => {
      setANNOUNCEMENT_LIST(response.data);
    });
  };

  Axios.defaults.withCredentials = true;

  const [fileInputState1, setFileInputState1] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource1, setPreviewSource1] = useState();
  const handleFileInputChange1 = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    // reader.readAsArrayBuffer(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource1(reader.result);
    };
  };

  const handleSubmitFile1 = (e) => {
    console.log("subs");
    e.preventDefault();
    if (!previewSource1) return;
    uploadImage1(previewSource1);
  };

  const uploadImage1 = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
    try {
      Axios.post(
        "https://perseeption-tromagade.herokuapp.com/api/uploadImageAnnouncement",
        {
          data: base64EncodedImage,
          ANNOUNCEMENT_TITLE: ANNOUNCEMENT_TITLE,
          EVENT_CONTENT: ANNOUNCEMENT_CONTENT,
        }
      );
      console.log(ANNOUNCEMENT_TITLE);
      console.log(ANNOUNCEMENT_CONTENT);
    } catch (error) {
      console.log(error);
    }
  };

  const [imagesIds1, setImagesIds1] = useState();
  const loadImages = async () => {
    try {
      Axios.get(
        "https://perseeption-tromagade.herokuapp.com/api/imagesAnnouncement"
      ).then((response) => {
        setImagesIds1(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  // useEffect(() => {
  //   Axios.get("https://perseeption-tromagade.herokuapp.com/api/login").then((response) => {
  //     console.log(response.data.loggedIn);
  //     if (response.data.loggedIn === true) {
  //       setUSER_ID(response.data.user[0].USER_ID);
  //     } else {
  //       window.location = "/Login";
  //     }
  //   });
  // }, []);

  // Render
  useEffect(() => {
    Axios.get(
      "https://perseeption-tromagade.herokuapp.com/api/getAnnouncement"
    ).then((response) => {
      setANNOUNCEMENT_LIST(response.data);
      console.log(response.data);
    });
  }, []);

  // useEffect(() => {
  //   Axios.get("https://perseeption-tromagade.herokuapp.com/api/getUser").then((response) => {
  //     setuserList(response.data);
  //   });
  // }, []);

  //Get User ID
  useEffect(() => {
    Axios.get("https://perseeption-tromagade.herokuapp.com/login").then(
      (response) => {
        console.log(response.data.loggedIn);
        if (response.data.loggedIn === true) {
          setUSERNAME_(response.data.user);
        } else {
          //   window.location = "/Login";
        }
      }
    );
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

  // Delete Announcement
  const deletAnnouncementButton = (ANNOUNCEMENT_ID) => {
    Axios.delete(
      `https://perseeption-tromagade.herokuapp.com/api/delete/${ANNOUNCEMENT_ID}`
    ).then((response) => {
      console.log(response);
      setANNOUNCEMENT_LIST(
        ANNOUNCEMENT_LIST.filter((val) => {
          return val.ANNOUNCEMENT_ID !== ANNOUNCEMENT_ID; // Filter/remove if it not equals to id
        })
      );
      Axios.get(
        "https://perseeption-tromagade.herokuapp.com/api/getAnnouncement"
      ).then((response) => {
        setANNOUNCEMENT_LIST(response.data);
      });
    });
  };

  // Update Title
  const updateAnnouncementTitle = (ANNOUNCEMENT_ID) => {
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

      Axios.get(
        "https://perseeption-tromagade.herokuapp.com/api/getAnnouncement"
      ).then((response) => {
        setANNOUNCEMENT_LIST(response.data);
      });
    });
  };

  // Update Content
  const updateAnnouncementContent = (ANNOUNCEMENT_ID) => {
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

      //   setNewReview("");
      //   document.getElementById("updateAnnouncementContentID").value = "";

      Axios.get(
        "https://perseeption-tromagade.herokuapp.com/api/getAnnouncement"
      ).then((response) => {
        setANNOUNCEMENT_LIST(response.data);
      });
    });
  };

  const logout = () => {
    Axios.get("https://perseeption-tromagade.herokuapp.com/logout").then(
      (response) => {
        console.log(response.data);
        if (response.data.loggedIn === false) {
          alert("logout");
          window.location = "/Login";
        } else {
          alert("not logout");
        }
      }
    );
  };

  const [USERNAME_, setUSERNAME_] = useState([]);
  // useEffect(() => {
  //   Axios.get("https://perseeption-tromagade.herokuapp.com/login").then((response) => {
  //     console.log(response.data);
  //     setUSERNAME_(response.data.user);
  //   });
  // }, []);

  return (
    <div className="EventsAdminBg">
      <div className="AdminHeader">
        <div className="imgAdminContainer">
          <p className="AdminHeaderTitle">Announcement</p>
        </div>
        <Link to="/AdminProfile" className="profileIcon">
          <img src="/images/events1.jpg" alt="img" className="profilePicture" />
          {USERNAME_.map((val, key) => {
            return (
              <p key={key} className="profileNameHeader">
                {val.USERNAME}
              </p>
            );
          })}
        </Link>
      </div>
      <div
        className="messageAnnouncementPopUpouter"
        id="messageAnnouncementPopUpouter"
      >
        <div
          className="messageAnnouncement_Content"
          id="messageAnnouncement_Content"
        >
          <h4 className="announcementMsgTitle">Message</h4>
          {/* <i className="fa fa-times" id="announcementX"></i> */}
          <p className="announcementMsg">Announcement Successfully Posted</p>
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
            <i className="fa fa-envelope"></i>Contact Us
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
          <div className="line"></div>
          <p className="logout_Admin" onClick={logout}>
            <i className="fa fa-sign-out"></i> Logout
          </p>
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
              />
              <button className="postAnnouncementBtn" type="submit">
                {" "}
                Submit{" "}
              </button>
            </div>
            <div id="titleAnnouncementMsg"></div>
          </form>
        </div>

        {previewSource1 && (
          <img src={previewSource1} alt="chosen" style={{ height: "300px" }} />
        )}

        <div className="announcementListContainer">
          {/* {announcementInformation.filepreview !== null ? (
            <img
              className="previewimg"
              src={announcementInformation.filepreview}
              alt="UploadImage1"
            />
          ) : null} */}
          {imagesIds1 &&
            imagesIds1.map((imageId, index) => {
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
            })}
          {ANNOUNCEMENT_LIST.map((val, key) => {
            return (
              <div key={key} className="announcementAdminRender">
                <img
                  src={val.ANNOUNCEMENT_IMAGE}
                  alt="img"
                  className="announcementDummyIng"
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
                    className="deleteAnnouncementBtn"
                    onClick={() => {
                      deletAnnouncementButton(val.ANNOUNCEMENT_ID);
                    }}
                  >
                    DELETE
                  </button>
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
