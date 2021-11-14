import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Events.css";
import { Link, useHistory } from "react-router-dom";

import { Image } from "cloudinary-react";

function Events() {
  Axios.defaults.withCredentials = true;
  const [AVATAR, setAVATAR] = useState("");
  const [EVENT_TITLE, setEVENT_TITLE] = useState("");
  const [EVENT_CONTENT, setEVENT_CONTENT] = useState("");
  const [EVENT_LIST, setEVENT_LIST] = useState([]);
  // const [imagesIds, setImagesIds] = useState([]);
  const [NEW_EVENT_REVIEW, setNEW_EVENT_REVIEW] = useState("");
  const [NEW_EVENT_TITLE, setNEW_EVENT_TITLE] = useState("");
  const [USER_ID, setUSER_ID] = useState("");
  // const [loginStatus, setLoginStatus] = useState("");
  // const [userList, setuserList] = useState([]);
  const [USERNAME_, setUSERNAME] = useState([]);
  const history = useHistory();

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
      setUSERNAME(name[0].ADMIN_NAME);
      setUSER_ID(name[0].USER_ID);
      setAVATAR(name[0].AVATAR);
    }
  }, []);

  const logout = () => {
    document.getElementById("popUpGetMsgApprove_logout").style.display =
      "block";
    setTimeout(function () {
      document.getElementById("popUpGetMsgApprove_logout").style.display =
        "none";
    }, 3000);
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    Axios.get("https://perseeption-tromagade.herokuapp.com/api/getEvent").then(
      (response) => {
        setEVENT_LIST(response.data);
      }
    );
  }, []);
  // --------------------------
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState("");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    // reader.readAsArrayBuffer(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    // console.log("sub");
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
      Axios.get(
        "https://perseeption-tromagade.herokuapp.com/api/getEvent"
      ).then((response) => {
        console.log(response.data);
        setEVENT_LIST(response.data);
      });
    };
    reader.onerror = () => {
      // console.error("AHHHHHHHH!!");
      // console.log("AAAAAAAAAAAAAAAAH");
    };
  };

  const uploadImage = (base64EncodedImage) => {
    // console.log(base64EncodedImage);

    try {
      const title = document.getElementById("inputEventTitle").value;
      const content = document.getElementById("inputEventContent").value;
      const img = document.getElementById("fileBtnId").value;
      if (title === "" || img === 0 || content === "") {
        document.getElementById("titleMessage").style.color = "red";
        let timerId = setInterval(
          () =>
            (document.getElementById("titleMessage").innerHTML =
              "Please fill out form completely!"),
          0
        );

        // Timeout
        setTimeout(() => {
          clearInterval(timerId);
          document.getElementById("titleMessage").innerHTML = "";
        }, 3000);
        return false;
      } else {
        Axios.post("https://perseeption-tromagade.herokuapp.com/api/upload", {
          data: base64EncodedImage,
          EVENT_TITLE: EVENT_TITLE,
          EVENT_CONTENT: EVENT_CONTENT,
        });
        document.getElementById("messageEventPopUpouter").style.display =
          "block";
        document.getElementById("messageEvent_Content").style.display = "block";

        setTimeout(function () {
          document.getElementById("messageEventPopUpouter").style.display =
            "none";
          document.getElementById("messageEvent_Content").style.display =
            "none";
        }, 3000);
        // alert("posted!" + EVENT_TITLE + EVENT_CONTENT);
        setFileInputState("");
        setPreviewSource("");
        setEVENT_TITLE("");
        setEVENT_CONTENT("");
        document.getElementById("fileBtnId").value = "";
        document.getElementById("inputEventTitle").value = "";
        document.getElementById("inputEventContent").value = "";
        Axios.get(
          "https://perseeption-tromagade.herokuapp.com/api/getEvent"
        ).then((response) => {
          setEVENT_LIST(response.data);
          // console.log(response.data);
        });
      }
      console.log(EVENT_TITLE);
    } catch (error) {
      // console.error(error);
    }
  };

  // useEffect(() => {
  //   Axios.get(
  //     "https://perseeption-tromagade.herokuapp.com/api/imagesEvent"
  //   ).then((response) => {
  //     setImagesIds(response.data);
  //   });
  // });
  const [imagesIds, setImagesIds] = useState([]);
  const loadImages = async () => {
    try {
      Axios.get(
        "https://perseeption-tromagade.herokuapp.com/api/getEvent"
      ).then((response) => {
        console.log(response.data);
        setEVENT_LIST(response.data);
      });
    } catch (error) {
      // console.error(error);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  useEffect(() => {
    Axios.get("https://perseeption-tromagade.herokuapp.com/api/getEvent").then(
      (response) => {
        // console.log(response.data);
        setEVENT_LIST(response.data);
      }
    );
  }, []);
  //   const submit = async () => {
  //     const formdata_ = new FormData();
  //     formdata_.append("image", eventInformation.file);
  console.log(eventInformation.file);
  //     formdata_.append("title", eventInformation.title);
  //     formdata_.append("content", eventInformation.content);
  //     if (
  //       eventInformation.content === "" ||
  //       eventInformation.file.length === 0 ||
  //       eventInformation.content === ""
  //     ) {
  //       let timerId = setInterval(
  //         () =>
  //           (document.getElementById("titleMessage").innerHTML =
  //             "Please fill out form completely!"),
  //         0
  //       );

  //       // Timeout
  //       setTimeout(() => {
  //         clearInterval(timerId);
  //         document.getElementById("titleMessage").innerHTML = "";
  //       }, 3000);
  //       return false;
  //     } else
  //       Axios.post(
  //         "https://perseeption-tromagade.herokuapp.com/uploadEvent",
  //         formdata_,
  //         {
  //           headers: { "Content-Type": "multipart/form-data" },
  //         }
  //       );
  //     document.getElementById("messageEventPopUpouter").style.display = "block";
  //     document.getElementById("messageEvent_Content").style.display = "block";

  //     setTimeout(function () {
  //       document.getElementById("messageEventPopUpouter").style.display = "none";
  //       document.getElementById("messageEvent_Content").style.display = "none";
  //     }, 3000);
  //     Axios.get(
  //       "https://perseeption-tromagade.herokuapp.com/api/getAnnouncement"
  //     ).then((response) => {
  //       setImagesIds(response.data);
  //     });
  //   };
  //   const [data, setData] = useState({ name: "", image: "" });
  //   const handleChange = (name) => (e) => {
  //     const value = name === "image" ? e.target.files[0] : e.target.value;
  //     setData({ ...data, [name]: value });
  //   };
  //   const [imageSelected, setImageSelected] = useState("");
  //   const submit = () => {
  //     const config = {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         "Access-Control-Allow-Methods": "POST",
  //       },
  //     };
  //     const formData = new FormData();
  //     formData.append("file", imageSelected);
  //     formData.append("upload_preset", "jogvnb1m");
  console.log(imageSelected);
  //     Axios.post(
  //       "https://api.cloudinary.com/v1_1/dlvt2lnkh/image/upload",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           "Access-Control-Allow-Methods": "POST",
  //           "Access-Control-Allow-Origin": ["*"],
  //         },
  //       }
  //     ).then((response) => {
  //       const fileName = response.data;
  console.log(fileName);
  //       Axios.post(
  //         "https://perseeption-tromagade.herokuapp.com/uploadEvent_Admin",
  //         {
  //           EVENT_TITLE: EVENT_TITLE,
  //           EVENT_CONTENT: EVENT_CONTENT,
  //           EVENT_IMAGE: fileName,
  //         }
  //       ).then((response) => {
  console.log(EVENT_TITLE);
  //       });
  //     });
  //   };
  //   const submit = () => {};

  // useEffect(() => {
  //   Axios.get("https://perseeption-tromagade.herokuapp.com/login").then((response) => {
  console.log(response.data.loggedIn);
  //     if (response.data.loggedIn === true) {
  //       setUSER_ID(response.data.user[0].USER_ID);
  //     } else {
  //       window.location = "/Login";
  //     }
  //   });
  // }, []);
  // Render

  // useEffect(() => {
  //   Axios.get("https://perseeption-tromagade.herokuapp.com/api/getUser").then((response) => {
  //     setuserList(response.data);
  //   });
  // }, []);

  //Get User ID
  // useEffect(() => {
  //   Axios.get("https://perseeption-tromagade.herokuapp.com/login").then((response) => {
  //     if (response.data.loggedIn === true) {
  //       setUSER_ID(response.data.user[0].USER_ID);
  //     }
  //   });
  // }, []);

  // Create Announcement
  const createEvent = () => {
    Axios.post("https://perseeption-tromagade.herokuapp.com/upload", {});
    const announcementTitleInput =
      document.getElementById("inputEventTitle").value;

    const announcementContentInput =
      document.getElementById("inputEventContent").value;

    if (announcementTitleInput === "" || announcementContentInput === "") {
      // if announcement is null
      // Timer
      let timerId = setInterval(
        () =>
          (document.getElementById("titleMessage").innerHTML =
            "Please fill out form completely!"),
        0
      );

      // Timeout
      setTimeout(() => {
        clearInterval(timerId);
        document.getElementById("titleMessage").innerHTML = "";
      }, 3000);
      return false;

      // Insert Announcement
    } else {
      Axios.post(
        "https://perseeption-tromagade.herokuapp.com/api/insertEvents",
        {
          EVENT_TITLE: EVENT_TITLE,
          EVENT_CONTENT: EVENT_CONTENT,
          USER_ID: USER_ID,
        }
      );

      document.getElementById("messageEventPopUpouter").style.display = "block";
      document.getElementById("messageEvent_Content").style.display = "block";

      setTimeout(function () {
        document.getElementById("messageEventPopUpouter").style.display =
          "none";
        document.getElementById("messageEvent_Content").style.display = "none";
      }, 3000);
      // Making null value in input
      document.getElementById("inputEventTitle").value = "";
      document.getElementById("inputEventContent").value = "";
      setEVENT_TITLE("");
      setEVENT_CONTENT("");
      Axios.get(
        "https://perseeption-tromagade.herokuapp.com/api/getAdminEvent"
      ).then((response) => {
        setImagesIds(response.data);
      });
    }
  };

  // Delete Announcement
  const deleteEvent = (EVENT_ID) => {
    Axios.delete(
      `https://perseeption-tromagade.herokuapp.com/api/deleteEvent/${EVENT_ID}`
    ).then((response) => {
      // console.log(response);
      setEVENT_LIST(
        EVENT_LIST.filter((val) => {
          return val.EVENT_ID !== EVENT_ID; // Filter/remove if it not equals to id
        })
      );
      Axios.get(
        "https://perseeption-tromagade.herokuapp.com/api/getEvent"
      ).then((response) => {
        setEVENT_LIST(response.data);
      });
    });
  };

  // Update Title
  const updateEventTitle = (EVENT_ID) => {
    Axios.put(
      "https://perseeption-tromagade.herokuapp.com/api/updateEventTitle",
      {
        EVENT_ID: EVENT_ID,
        EVENT_TITLE: NEW_EVENT_TITLE,
      }
    ).then((response) => {
      setEVENT_LIST(
        EVENT_LIST.map((val) => {
          return val.EVENT_ID === EVENT_ID
            ? {
                EVENT_ID: val.EVENT_ID,
                EVENT_TITLE: NEW_EVENT_TITLE,
              }
            : val;
        })
      );

      Axios.get(
        "https://perseeption-tromagade.herokuapp.com/api/getEvent"
      ).then((response) => {
        setEVENT_LIST(response.data);
      });
    });
  };

  // Update Content
  const updateEventContent = (EVENT_ID) => {
    Axios.put(
      "https://perseeption-tromagade.herokuapp.com/api/updateEventContent",
      {
        EVENT_ID: EVENT_ID,
        EVENT_CONTENT: NEW_EVENT_REVIEW,
      }
    ).then((response) => {
      setEVENT_LIST(
        EVENT_LIST.map((val) => {
          return val.EVENT_ID === EVENT_ID
            ? {
                EVENT_ID: val.EVENT_ID,
                EVENT_CONTENT: NEW_EVENT_REVIEW,
              }
            : val;
        })
      );

      //   setNewReview("");
      //   document.getElementById("updateAnnouncementContentID").value = "";

      Axios.get(
        "https://perseeption-tromagade.herokuapp.com/api/getEvent"
      ).then((response) => {
        setEVENT_LIST(response.data);
      });
    });
  };

  return (
    <div className="EventsAdminBg">
      <div className="AdminHeader">
        <div className="imgAdminContainer">
          <p className="AdminHeaderTitle">Events</p>
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
          <Link to="/MemberForum" className="dash">
            <i className="fa fa-comments"></i>Forum
          </Link>
          <div className="line"></div>
          <p className="logout_Admin" onClick={logout}>
            <i className="fa fa-sign-out" id="adminLogout"></i> Logout
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
            <h1>Announcement Deleted Successfully</h1>
          </div>
        </div>
        <div className="messageEventPopUpouter" id="messageEventPopUpouter">
          <div className="messageEvent_Content" id="messageEvent_Content">
            <h4 className="EventMsgTitle">Message</h4>
            {/* <i className="fa fa-times" id="announcementX"></i> */}
            <p className="EventMsg">Event Successfully Posted</p>
          </div>
        </div>
        <div className="form">
          <form onSubmit={handleSubmitFile} encType="multipart/form-data">
            <label className="eventAdminTitleTxt">Title </label>
            <input
              type="text"
              id="inputEventTitle"
              className="inputeventTitle"
              onChange={(e) => setEVENT_TITLE(e.target.value)}
            />
            <label className="contentEventAdminTxt">Content</label>
            <textarea
              id="inputEventContent"
              className="eventAdminContent"
              onChange={(e) => setEVENT_CONTENT(e.target.value)}
            ></textarea>
            <div className="containerBtnAnnouncement">
              <input
                type="file"
                name="image"
                onChange={handleFileInputChange}
                value={fileInputState}
                className="fileBtn"
                id="fileBtnId"
              />
              <button className="postEventBtn" type="submit">
                {" "}
                Submit{" "}
              </button>
            </div>
            <div id="titleMessage"></div>
          </form>
        </div>
        <div id="popUpGetMsgApprove_logout">
          <div id="popUpGetMsgInApprove">
            <h2>PerSEEption Message</h2>
            <h1>Logout Successfully!</h1>
          </div>
        </div>
        <div className="container">
          {/* {previewSource && (
            <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
          )} */}
          {/* {imagesIds &&
            imagesIds.map((imageId, index) => (
              <Image
                key={index}
                cloudName="dlvt2lnkh"
                publicId={imageId.EVENT_IMAGE}
              />
            ))} */}

          {EVENT_LIST.map((imageId, index) => {
            return (
              <div key={index} className="eventAdminRender">
                <Image
                  className="eventAdImg"
                  cloudName="dlvt2lnkh"
                  publicId={imageId.EVENT_IMAGE}
                />
                <p className="eventAdmin_Title">{imageId.EVENT_TITLE}</p>
                <p className="eventAdmin_Date">{imageId.EVENT_DATE}</p>
                <p className="eventAdmin_Content">{imageId.EVENT_CONTENT}</p>

                <div>
                  <input
                    type="text"
                    className="updateEventTitle"
                    placeholder="Enter Title"
                    onChange={(e) => {
                      setNEW_EVENT_TITLE(e.target.value);
                    }}
                  />
                  <button
                    className="updateBtn"
                    onClick={() => {
                      updateEventTitle(imageId.EVENT_ID);
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
                      setNEW_EVENT_REVIEW(e.target.value);
                    }}
                  />
                  <button
                    className="inpupdateEventContent"
                    onClick={() => {
                      updateEventContent(imageId.EVENT_ID);
                    }}
                  >
                    Update
                  </button>{" "}
                  <button
                    className="delAdminButton"
                    onClick={() => {
                      deleteEvent(imageId.EVENT_ID);
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          })}

          {/* <CloudinaryContext cloudName="dlvt2lnkh">
            <div>
              <Image
                publicId="https://res.cloudinary.com/dlvt2lnkh/image/upload/v1636006027/tautp2n5oq1i4o2frn7x.png"
                width="50"
              />
            </div>
            <Image publicId="sample" width="0.5" />
          </CloudinaryContext> */}
          {/* {imagesIds.map((val, key) => {
            return (
              <div key={key} className="eventAdminRender">
                <img src={val.EVENT_IMAGE} alt="img" className="eventAdImg" />
                <p className="eventAdmin_Title">{val.EVENT_TITLE}</p>
                <p className="eventAdmin_Date">{val.EVENT_DATE}</p>
                <p className="eventAdmin_Content">{val.EVENT_CONTENT}</p>

                <div>
                  <input
                    type="text"
                    className="updateEventTitle"
                    placeholder="Enter Title"
                    onChange={(e) => {
                      setNEW_EVENT_TITLE(e.target.value);
                    }}
                  />
                  <button
                    className="updateBtn"
                    onClick={() => {
                      updateEventTitle(val.EVENT_ID);
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
                      setNEW_EVENT_REVIEW(e.target.value);
                    }}
                  />
                  <button
                    className="inpupdateEventContent"
                    onClick={() => {
                      updateEventContent(val.EVENT_ID);
                    }}
                  >
                    Update
                  </button>{" "}
                  <button
                    className="delAdminButton"
                    onClick={() => {
                      deleteEvent(val.EVENT_ID);
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          })} */}
        </div>
        {/* <h1>{loginStatus}</h1> */}
      </div>
    </div>
  );
}

export default Events;
