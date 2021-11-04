import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Events.css";
import { Link } from "react-router-dom";

import { CloudinaryContext, Image } from "cloudinary-react";
// import { response } from "express";

function Events() {
  const [EVENT_TITLE, setEVENT_TITLE] = useState("");
  const [EVENT_CONTENT, setEVENT_CONTENT] = useState("");
  const [EVENT_LIST, setEVENT_LIST] = useState([]);
  const [NEW_EVENT_REVIEW, setNEW_EVENT_REVIEW] = useState("");
  const [NEW_EVENT_TITLE, setNEW_EVENT_TITLE] = useState("");
  const [USER_ID, setUSER_ID] = useState("");
  // const [loginStatus, setLoginStatus] = useState("");
  // const [userList, setuserList] = useState([]);
  const [USERNAME_, setUSERNAME] = useState([]);

  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get("https://perseeption-tromagade.herokuapp.com/login").then(
      (response) => {
        console.log(response.data.loggedIn);
        if (response.data.loggedIn === true) {
          setUSERNAME(response.data.user);
        } else {
          //   window.location = "/Login";
          console.log("lFalse");
        }
      }
    );
  }, []);

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

  const [eventInformation, setEventInformation] = useState({
    title: "",
    content: "",
    file: [],
    filepreview: null,
  });
  //dlvt2lnkh
  const handleInputChange = (event) => {
    setEventInformation({
      ...eventInformation,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };

  const handleInputChange_ = (event) => {
    setEventInformation({
      ...eventInformation,
      title: document.getElementById("inputEventTitle").value,
      content: document.getElementById("inputEventContent").value,
    });
  };

  // --------------------------
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState();
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
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
    console.log("sub");
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const uploadImage = async (base64EncodedImage) => {
    console.log(base64EncodedImage);
    try {
      Axios.post("https://perseeption-tromagade.herokuapp.com/api/upload", {
        data: base64EncodedImage,
        EVENT_TITLE: EVENT_TITLE,
        EVENT_CONTENT: EVENT_CONTENT,
      });
      //   console.log(EVENT_TITLE);
    } catch (error) {
      console.log(error);
    }
  };

  const [imagesIds, setImagesIds] = useState();
  const loadImages = async () => {
    try {
      Axios.get(
        "https://perseeption-tromagade.herokuapp.com/api/imagesEvent"
      ).then((response) => {
        setImagesIds(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);
  //   const submit = async () => {
  //     const formdata_ = new FormData();
  //     formdata_.append("image", eventInformation.file);
  //     console.log(eventInformation.file);
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
  //       setEVENT_LIST(response.data);
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
  //     console.log(imageSelected);
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
  //       console.log(fileName);
  //       Axios.post(
  //         "https://perseeption-tromagade.herokuapp.com/uploadEvent_Admin",
  //         {
  //           EVENT_TITLE: EVENT_TITLE,
  //           EVENT_CONTENT: EVENT_CONTENT,
  //           EVENT_IMAGE: fileName,
  //         }
  //       ).then((response) => {
  //         console.log(EVENT_TITLE);
  //       });
  //     });
  //   };
  //   const submit = () => {};

  // useEffect(() => {
  //   Axios.get("https://perseeption-tromagade.herokuapp.com/login").then((response) => {
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
    Axios.get("https://perseeption-tromagade.herokuapp.com/api/getEvent").then(
      (response) => {
        setEVENT_LIST(response.data);
      }
    );
  }, []);

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
        setEVENT_LIST(response.data);
      });
    }
  };

  // Delete Announcement
  const deleteEvent = (EVENT_ID) => {
    Axios.delete(
      `https://perseeption-tromagade.herokuapp.com/api/deleteEvent/${EVENT_ID}`
    ).then((response) => {
      console.log(response);
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
            <i className="fa fa-sign-out" id="adminLogout"></i> Logout
          </p>
        </div>

        <div className="messageEventPopUpouter" id="messageEventPopUpouter">
          <div className="messageEvent_Content" id="messageEvent_Content">
            <h4 className="EventMsgTitle">Message</h4>
            {/* <i className="fa fa-times" id="announcementX"></i> */}
            <p className="EventMsg">Event Successfully Posted</p>
          </div>
        </div>
        <div className="form">
          <form onSubmit={handleSubmitFile}>
            <input
              type="text"
              onChange={(e) => setEVENT_TITLE(e.target.value)}
            />
            <textarea
              cols="30"
              rows="10"
              onChange={(e) => setEVENT_CONTENT(e.target.value)}
            ></textarea>
            <input
              type="file"
              name="image"
              onChange={handleFileInputChange}
              value={fileInputState}
              className="form-input"
            />
            <button className="submit_Event" type="submit">
              {" "}
              Submit{" "}
            </button>
          </form>
        </div>
        <div className="container">
          {previewSource && (
            <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
          )}
          {/* {imagesIds &&
            imagesIds.map((imageId, index) => (
              <Image
                key={index}
                cloudName="dlvt2lnkh"
                publicId={imageId.EVENT_IMAGE}
              />
            ))} */}

          {imagesIds &&
            imagesIds.map((imageId, index) => {
              return (
                <div className="eventAdminRender">
                  <Image
                    key={index}
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
          {/* {EVENT_LIST.map((val, key) => {
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
