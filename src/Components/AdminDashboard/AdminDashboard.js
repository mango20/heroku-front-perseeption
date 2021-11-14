import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./AdminDashboard.css";
import { Link, useHistory } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { Image } from "cloudinary-react";
function AdminDashboard() {
  Axios.defaults.withCredentials = true;
  const [NumCountReq, seNumCountReq] = useState([]);
  const [numCountApprove, setnumCountApprove] = useState([]);

  const [numCountApprove1, setnumCountApprove1] = useState([]);
  const [AVATAR, setAVATAR] = useState("");
  const [USER_ID, setUSER_ID] = useState("");
  const [USERNAME_, setUSERNAME] = useState("");

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

      console.log(name);
      console.log(name[0].ADMIN_NAME);
      setUSERNAME(name[0].ADMIN_NAME);
      setAVATAR(name[0].AVATAR);
    }
  }, []);
  // useEffect(() => {
  //   Axios.get("https://perseeption-tromagade.herokuapp.com/login").then(
  //     (response) => {
  //       console.log(response.data);
  //       console.log(response.data.loggedIn);
  //       if (response.data.loggedIn === true) {
  //         setUSERNAME(response.data.user);
  //       } else {
  //         // history.push("/Login");
  //         console.log("lfalse");
  //       }
  //     }
  //   );
  // }, []);

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

  // useEffect(() => {
  //   Axios.get("https://perseeption-tromagade.herokuapp.com/countGenderFemale").then((response) => {
  //     setcountFemale(response.data);
  //     console.log(response.data);
  //   });
  // }, []);

  useEffect(() => {
    Axios.get(
      "https://perseeption-tromagade.herokuapp.com/api/countReqMember"
    ).then((response) => {
      seNumCountReq(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.get(
      "https://perseeption-tromagade.herokuapp.com/api/countApproveMember"
    ).then((response) => {
      setnumCountApprove(response.data);
    });
  }, []);

  // const [USERNAME, setUSERNAME] = useState("");

  const state = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Member",

        backgroundColor: ["#ABDEE6"],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [0, 0, 0, 0, 0, 0, 0, 17, 5, 1, 4, 3],
      },
    ],
  };

  // const stateMember = {
  //   labels: ["Male", "Female"],
  //   datasets: [
  //     {
  //       label: "Gender",
  //       backgroundColor: ["rgb(255, 152, 67)", "rgb(0, 217, 255)"],
  //       borderColor: "rgba(0,0,0,1)",
  //       borderWidth: 0,
  //       data: [65],
  //     },
  //   ],
  // };

  const stateMember = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Gender",
        backgroundColor: ["rgb(255, 152, 67)", "rgb(0, 217, 255)"],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 0,
        data: [65, 20],
      },
    ],
  };

  return (
    <>
      <div className="adminDash">
        <div className="AdminHeader">
          <div className="imgAdminContainer">
            <p className="AdminHeaderTitle">Dashboard</p>
          </div>
          <Link to="/AdminProfile" className="profileIcon">
            <Image
              className="profilePicture"
              cloudName="dlvt2lnkh"
              alt="img"
              publicId={AVATAR}
            />
            {/* {USERNAME.map((val, key) => {
              return <p className="profileNameHeader">{val.ADMIN_NAME}</p>;
            })} */}

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
          <div id="popUpGetMsgApprove_logout">
            <div id="popUpGetMsgInApprove">
              <h2>PerSEEption Message</h2>
              <h1>Logout Successfully!</h1>
            </div>
          </div>
          <div className="boxes">
            {NumCountReq.map((val, key) => {
              return (
                <Link to="/AdminMemberList" key={key} className="adminReqDiv">
                  <div className="numOfMem">
                    {/* <i className="fa fa-users"></i> */}
                    <p>Number of Member Request</p>
                    <p className="numTxt">{val.Mem}</p>
                  </div>
                </Link>
              );
            })}
            {numCountApprove.map((val, key) => {
              return (
                <Link to="/AdminMemberList" key={key} className="adminMemDiv">
                  <div className="numOfMemPavic">
                    <p>Member of PAVIC</p>
                    <p className="numTxt2">{val.Approve}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div>
            <div className="barCharts">
              <div className="barCont">
                <p className="memberStatsSub">Member Subscription</p>
                <hr />
                <Line
                  className="bar"
                  data={state}
                  options={{
                    title: {
                      display: true,
                      text: "Average Rainfall per month",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </div>
              <div className="bar2Cont">
                <p className="statsGender">Member Gender</p>
                <hr />

                <Doughnut
                  id="bar2"
                  data={stateMember}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    title: {
                      display: true,
                      text: "Average Rainfall per month",
                      fontSize: 20,
                    },
                    legend: {
                      display: true,
                      position: "right",
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
