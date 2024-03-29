import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./AdminContactUs.css";
// import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Image } from "cloudinary-react";
function AdminContactUs() {
  Axios.defaults.withCredentials = true;
  const history = useHistory();
  const [USER_ID, setUSER_ID] = useState("");
  const [contact_id, setcontact_id] = useState("");
  const [Subject, setSubject] = useState("");
  const [EmailContact, setEmailContact] = useState("");
  const [ContactUsMsg, setContactUsMsg] = useState("");
  const [contact_usList, setcontact_usList] = useState([]);
  const [AVATAR, setAVATAR] = useState("");
  const [contact_status, setcontact_status] = useState("");

  useEffect(() => {
    Axios.get(
      "https://perseeption-tromagade.herokuapp.com/getContactUsMsg"
    ).then((response) => {
      setcontact_usList(response.data);
    });
  }, []);

  const delete_msg__ = (contact_id) => {
    document.getElementById("popUpGetMsgDeleteAdmin__").style.display = "block";
    Axios.get(
      "https://perseeption-tromagade.herokuapp.com/getContactUsMsg"
    ).then((response) => {
      setcontact_usList(
        contact_usList.filter((val) => {
          return val.contact_id === contact_id; // Filter/remove if it not equals to id
        })
      );
    });
    //cancel_event_
  };

  const cancel_del__ = () => {
    //cancel_event_
    document.getElementById("popUpGetMsgDeleteAdmin__").style.display = "none";
    Axios.get(
      "https://perseeption-tromagade.herokuapp.com/getContactUsMsg"
    ).then((response) => {
      setcontact_usList(response.data);
    });
  };

  // Delete Announcement
  const deleteContactMessage = (contact_id) => {
    document.getElementById("popUpGetMsgDeleteAdmin__").style.display = "none";
    // console.log(contact_id);
    Axios.delete(
      `https://perseeption-tromagade.herokuapp.com/deleteContactUsMsgt/${contact_id}`
    ).then((response) => {
      // console.log(response);
      setcontact_usList(
        contact_usList.filter((val) => {
          return val.contact_id !== contact_id; // Filter/remove if it not equals to id
        })
      );
      Axios.get(
        "https://perseeption-tromagade.herokuapp.com/getContactUsMsg"
      ).then((response) => {
        setcontact_usList(response.data);
      });
    });
    document.getElementById("popUpGetMsgDelete").style.display = "block";
    document.getElementById("warningMsg").innerHTML =
      "Message Deleted Successfully!";
    setTimeout(function () {
      document.getElementById("popUpGetMsgDelete").style.display = "none";
      // document.getElementById("popUpGetMsgInCont").style.display = "none";
    }, 3000);
  };

  // const showDetails = (contact_id) => {
  console.log(contact_id);
  // };
  const replyBtn = (contact_id) => {
    // console.log(contact_id);
    document.getElementById("floatContactUsMessage_bg").style.display = "block";
    document.getElementById("floatContactUsMessage").style.display = "block";
    Axios.get(
      `https://perseeption-tromagade.herokuapp.com/getAdminInformations_/${contact_id}`
    ).then((response) => {
      // console.log(response);
      setcontact_usList(
        contact_usList.filter((val) => {
          return val.contact_id === contact_id;
        })
      );
    });
  };

  const sendEmail = (contact_id) => {
    // console.log(contact_id);
    const p = document.getElementById("email-id").value;
    const subjectInput = document.getElementById("nameAdmin-id").value;
    const messageInput = document.getElementById("messagesText").value;
    if (messageInput === "" || subjectInput === "") {
      document.getElementById("popUpGetMsgDelete").style.display = "block";
      document.getElementById("warningMsg").innerHTML =
        "Please fill out the form!";

      setTimeout(function () {
        document.getElementById("popUpGetMsgDelete").style.display = "none";
        // document.getElementById("popUpGetMsgInCont").style.display = "none";
      }, 3000);
    }

    if (messageInput !== "" && subjectInput !== "") {
      const contact_stat = "#90EE90";

      Axios.get(
        `https://perseeption-tromagade.herokuapp.com/getContactUsMsg/${contact_id}`
      ).then((response) => {
        const getEmail = response.data[0].contact_email;

        // console.log(getEmail);
        Axios.post("https://perseeption-tromagade.herokuapp.com/sendtoEmail", {
          EmailContact: p,
          Subject: Subject,
          ContactUsMsg: ContactUsMsg,
          // USER_ID: USER_ID,
        });
        Axios.put(
          `https://perseeption-tromagade.herokuapp.com/updateColor/${contact_id}`,
          {
            contact_status: contact_stat,
          }
        );
      });
      document.getElementById("nameAdmin-id").value = "";
      // document.getElementById("email-id").value = "";
      document.getElementById("messagesText").value = "";
      document.getElementById("popUpGetMsgSent").style.display = "block";
      setTimeout(function () {
        document.getElementById("popUpGetMsgSent").style.display = "none";
        // document.getElementById("popUpGetMsgInCont").style.display = "none";
      }, 3000);
    }
  };
  const hideReplyModal = () => {
    document.getElementById("nameAdmin-id").value = "";
    const p = (document.getElementById("email-id").value = "");
    // console.log(p);
    document.getElementById("messagesText").value = "";
    document.getElementById("floatContactUsMessage_bg").style.display = "none";
    document.getElementById("floatContactUsMessage").style.display = "none";
    Axios.get(
      "https://perseeption-tromagade.herokuapp.com/getContactUsMsg"
    ).then((response) => {
      setcontact_usList(response.data);
    });
  };

  const filterInboxMessages = () => {
    var input,
      filter,
      table,
      tr,
      td,
      td1,
      td2,
      i,
      txtValue,
      txtValue1,
      txtValue2;
    input = document.getElementById("getFilterInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableContactUs");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      td1 = tr[i].getElementsByTagName("td")[0];
      td2 = tr[i].getElementsByTagName("td")[2];
      if (td || td1) {
        txtValue = td.textContent || td.innerText;
        txtValue1 = td1.textContent || td1.innerText;
        txtValue2 = td2.textContent || td2.innerText;
        if (
          txtValue.toUpperCase().indexOf(filter) > -1 ||
          txtValue1.toUpperCase().indexOf(filter) > -1 ||
          txtValue2.toUpperCase().indexOf(filter) > -1
        ) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };
  const [USERNAME_, setUSERNAME] = useState([]);

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
      setUSER_ID(name[0].USER_ID);
      setUSERNAME(name[0].ADMIN_NAME);
      setAVATAR(name[0].AVATAR);
    }
  }, []);

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
    <div className="AdminContactUsBg">
      <div className="AdminHeader">
        <div className="imgAdminContainer">
          <p className="AdminHeaderTitle">Messages</p>
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
      <div className="adminContactUsCont">
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
          <p className="logout_Admin" onClick={logout}>
            <i className="fa fa-sign-out" id="adminLogout"></i> Logout
          </p>
        </div>

        <div id="popUpGetMsgSent">
          <div id="popUpGetMsgInSent">
            <h2>PerSEEption Message</h2>
            <h1>Message Sent!</h1>
          </div>
        </div>

        <div id="popUpGetMsgDelete">
          <div id="popUpGetMsgInSentDelete">
            <h2>PerSEEption Message</h2>
            <h1 id="warningMsg">Message Deleted!</h1>
          </div>
        </div>
        <div id="popUpGetMsgApprove_logout">
          <div id="popUpGetMsgInApprove">
            <h2>PerSEEption Message</h2>
            <h1>Logout Successfully!</h1>
          </div>
        </div>
        <div className="inboxContent">
          <div className="input-wrapperContactUs">
            <input
              type="text"
              className="inputFilterContactUs"
              placeholder="Search"
              id="getFilterInput"
              onKeyUp={filterInboxMessages}
            />
          </div>

          <table className="inboxList" id="tableContactUs">
            <tbody className="inboxListBody">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                {/* <th>Date</th> */}
                <th>Message</th>
                <th>Date</th>
                <th>Reply</th>
                <th>Delete</th>
              </tr>
              {contact_usList.map((val, key) => {
                return (
                  <tr key={key} style={{ backgroundColor: val.contact_status }}>
                    <td>
                      <div className="messageComp">{val.contact_id}</div>
                    </td>
                    <td>
                      <div className="messageComp">{val.contact_name}</div>
                    </td>
                    <td>
                      <div className="messageComp">{val.contact_number}</div>
                    </td>
                    <td>
                      <div className="messageComp">{val.contact_email}</div>
                    </td>
                    <td>
                      <div className="messageComp">{val.contact_message}</div>
                    </td>
                    <td>
                      <div className="messageComp">{val.contact_date}</div>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          replyBtn(val.contact_id);
                        }}
                      >
                        ✏️
                      </button>
                    </td>
                    <td>
                      <i
                        className="fa fa-trash deleteContactMessages"
                        onClick={() => {
                          delete_msg__(val.contact_id);
                        }}
                      ></i>
                      <div id="popUpGetMsgDeleteAdmin__">
                        <div id="popUpGetMsgInDeleteAdmin__">
                          <h2>PerSEEption Message </h2>
                          <h1 id="announcementRed__">
                            Are you sure you want to delete it?
                          </h1>
                          <button id="cancel_MemList_" onClick={cancel_del__}>
                            Cancel
                          </button>
                          <button
                            className="delAdminButton"
                            onClick={() => {
                              deleteContactMessage(val.contact_id);
                            }}
                          >
                            DELETE
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {contact_usList.map((val, key) => {
            return (
              <div
                className="floatContactUsMessage_bg"
                id="floatContactUsMessage_bg"
                key={key}
              >
                <div
                  className="floatContactUsMessage"
                  id="floatContactUsMessage"
                >
                  <ul>
                    <li className="xBtn" onClick={hideReplyModal}>
                      x
                    </li>
                    <li className="replyTo">
                      <p>Name: {val.contact_name} </p>
                    </li>
                    <li className="replyTo">
                      <p>Reply to: {val.contact_email} </p>
                    </li>
                    <li className="replyTo">
                      <p>Contact Number: {val.contact_number} </p>
                    </li>
                    <li className="replyTomess">
                      <p>Message: {val.contact_message}</p>
                    </li>
                    <li>
                      <input
                        type="text"
                        className="nameAdmin"
                        id="nameAdmin-id"
                        placeholder="Subject"
                        onChange={(e) => {
                          setSubject(e.target.value);
                        }}
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        className="email"
                        id="email-id"
                        placeholder="Email"
                        readOnly={true}
                        value={val.contact_email}
                      />
                    </li>
                    <li>
                      <textarea
                        name=""
                        id="messagesText"
                        cols="30"
                        rows="10"
                        placeholder="Enter messages ..."
                        onChange={(e) => {
                          setContactUsMsg(e.target.value);
                        }}
                      ></textarea>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          sendEmail(val.contact_id);
                        }}
                      >
                        Send
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AdminContactUs;
