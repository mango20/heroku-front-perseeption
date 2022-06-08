import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./AdminList.css";
import { Link, useHistory } from "react-router-dom";
import { Image } from "cloudinary-react";

function AdminAdminList() {
  Axios.defaults.withCredentials = true;
  const history = useHistory();
  const [ADMIN_LIST, setADMIN_LIST] = useState([]);
  const [ADMIN_NAME, setADMIN_NAME] = useState("");
  const [ADMIN_CONTACT, setADMIN_CONTACT] = useState("");
  const [ADMIN_EMAIL, setADMIN_EMAIL] = useState("");
  const [USER_ID, setUSER_ID] = useState("");
  const [ADMIN_ADDRESS, setADMIN_ADDRESS] = useState("");
  const [USERNAME, setUSERNAME] = useState("");
  const [USER_PASSWORD, setUSER_PASSWORD] = useState("");
  // const [ADMIN_NAME, setADMIN_NAME] = useState("");

  const [ADD_ADMIN, setADD_ADMIN] = useState("");
  const [fileInputState, setFileInputState] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const uploadImage = (base64EncodedImage) => {
    const addAdminName = document.getElementById("addAdminName").value;
    const addAdminContact = document.getElementById("addAdminContact").value;
    const addAdminAddress = document.getElementById("addAdminAddress").value;
    const addAdminEmail = document.getElementById("addAdminEmail").value;
    const addAdminUsername = document.getElementById("addAdminUsername").value;
    const addAdminPassword = document.getElementById("addAdminPassword").value;

    const addAdminName_ = document.getElementById("addAdminName");
    const addAdminContact_ = document.getElementById("addAdminContact");
    const addAdminAddress_ = document.getElementById("addAdminAddress");
    const addAdminEmail_ = document.getElementById("addAdminEmail");
    const addAdminUsername_ = document.getElementById("addAdminUsername");
    const addAdminPassword_ = document.getElementById("addAdminPassword");
    const avatarIcon_ = document.getElementById("avatarIcon_").value;
    const avatarIcon__ = document.getElementById("avatarIcon_");

    const contactus_name_regex = /^([a-zA-Z\s\.]{1,50})$/;

    if (addAdminName === "" || !contactus_name_regex.test(addAdminName)) {
      document.getElementById("addAdminName").style.borderColor = "red";
    }
    if (addAdminName !== "" && contactus_name_regex.test(addAdminName)) {
      addAdminName_.style.borderColor = "#c6c6c6";
    }

    // contact number
    const contactus_contactNum_regex = /^([0-9]{11})$/;
    if (
      addAdminContact === "" ||
      !contactus_contactNum_regex.test(addAdminContact)
    ) {
      addAdminContact_.style.borderColor = "red";
    }
    if (
      addAdminContact !== "" &&
      contactus_contactNum_regex.test(addAdminContact)
    ) {
      addAdminContact_.style.borderColor = "#c6c6c6";
    }

    var addressRegex_ = /^([a-zA-Z0-9\.-\s,#]+)$/;
    if (addAdminAddress === "" || !addressRegex_.test(addAdminAddress)) {
      addAdminAddress_.style.borderColor = "red";
    }
    if (addAdminAddress !== "" && addressRegex_.test(addAdminAddress)) {
      addAdminAddress_.style.borderColor = "#c6c6c6";
    }

    var emailRegex_ =
      /^([a-zA-Z0-9\.-]{5,})@([a-z0-9]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    if (addAdminEmail === "" || !emailRegex_.test(addAdminEmail)) {
      addAdminEmail_.style.borderColor = "red";
    }

    if (addAdminEmail !== "" && emailRegex_.test(addAdminEmail)) {
      addAdminEmail_.style.borderColor = "#c6c6c6";
    }

    var usernameReg = /^[A-Za-z][A-Za-z0-9_!@]{6,30}$/;

    if (addAdminUsername === "" || !usernameReg.test(addAdminUsername)) {
      addAdminUsername_.style.borderColor = "red";
    }

    if (usernameReg.test(addAdminUsername) || addAdminUsername !== "") {
      addAdminUsername_.style.borderColor = "#c6c6c6";
    }

    const passwordRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16}$)"
    );

    if (addAdminPassword === "" || !passwordRegex.test(addAdminPassword)) {
      addAdminPassword_.style.borderColor = "red";
    }

    if (addAdminPassword !== "" || passwordRegex.test(addAdminPassword)) {
      addAdminPassword_.style.borderColor = "#c6c6c6";
    }

    if (avatarIcon_ === "") {
      avatarIcon__.style.background = "red";
    }

    if (avatarIcon_ !== "") {
      avatarIcon__.style.background = "none";
    }

    if (
      addAdminName === "" ||
      !contactus_name_regex.test(addAdminName) ||
      addAdminContact === "" ||
      !contactus_contactNum_regex.test(addAdminContact) ||
      addAdminAddress === "" ||
      !addressRegex_.test(addAdminAddress) ||
      addAdminEmail === "" ||
      !emailRegex_.test(addAdminEmail) ||
      addAdminUsername === "" ||
      !usernameReg.test(addAdminUsername) ||
      addAdminPassword === "" ||
      !passwordRegex.test(addAdminPassword) ||
      avatarIcon_ === ""
    ) {
      document.getElementById("popUpGetMsgCont").style.display = "block";
      document.getElementById("popUpGetMsgInCont").style.display = "block";
      setTimeout(function () {
        document.getElementById("popUpGetMsgCont").style.display = "none";
        document.getElementById("popUpGetMsgInCont").style.display = "none";
      }, 3000);
    }

    if (
      addAdminName !== "" &&
      contactus_name_regex.test(addAdminName) &&
      addAdminContact !== "" &&
      contactus_contactNum_regex.test(addAdminContact) &&
      addAdminAddress !== "" &&
      addressRegex_.test(addAdminAddress) &&
      addAdminEmail !== "" &&
      emailRegex_.test(addAdminEmail) &&
      addAdminUsername !== "" &&
      usernameReg.test(addAdminUsername) &&
      addAdminPassword !== "" &&
      passwordRegex.test(addAdminPassword) &&
      avatarIcon_ !== ""
    ) {
      Axios.post("https://perseeption-tromagade.herokuapp.com/insertNewAdmin", {
        data: base64EncodedImage,
        USERNAME: USERNAME,
        ADMIN_NAME: ADD_ADMIN,
        ADMIN_CONTACT: ADMIN_CONTACT,
        ADMIN_EMAIL: ADMIN_EMAIL,
        ADMIN_ADDRESS: ADMIN_ADDRESS,
        USER_PASSWORD: USER_PASSWORD,
        // USER_ID: USER_ID,
      });

      document.getElementById("adminNewOuter").style.display = "none";
      setADD_ADMIN("");
      document.getElementById("addAdminName").value = "";
      setADMIN_CONTACT("");
      document.getElementById("addAdminContact").value = "";
      setADMIN_ADDRESS("");
      document.getElementById("addAdminAddress").value = "";
      setADMIN_EMAIL("");
      document.getElementById("addAdminEmail").value = "";
      setUSERNAME("");
      document.getElementById("addAdminUsername").value = "";
      setUSER_PASSWORD("");
      document.getElementById("addAdminPassword").value = "";
      setSelectedFile("");
      document.getElementById("avatarIcon_").value = "";

      Axios.get("https://perseeption-tromagade.herokuapp.com/AdminList").then(
        (response) => {
          setADMIN_LIST(response.data);
        }
      );
      document.getElementById("popUpGetMsgAdminAdded").style.display = "block";

      setTimeout(function () {
        document.getElementById("popUpGetMsgAdminAdded").style.display = "none";
        // document.getElementById("popUpGetMsgInCont").style.display = "none";
      }, 3000);
    }
  };

  const showAddNewAdmin = () => {
    document.getElementById("adminNewBox").style.display = "block";
    document.getElementById("adminNewOuter").style.display = "block";
  };

  const hideAddNewAdmin = () => {
    const addAdminName = document.getElementById("addAdminName").value;
    const addAdminContact = document.getElementById("addAdminContact").value;
    const addAdminAddress = document.getElementById("addAdminAddress").value;
    const addAdminEmail = document.getElementById("addAdminEmail").value;
    const addAdminUsername = document.getElementById("addAdminUsername").value;
    const addAdminPassword = document.getElementById("addAdminPassword").value;

    const addAdminName_ = document.getElementById("addAdminName");
    const addAdminContact_ = document.getElementById("addAdminContact");
    const addAdminAddress_ = document.getElementById("addAdminAddress");
    const addAdminEmail_ = document.getElementById("addAdminEmail");
    const addAdminUsername_ = document.getElementById("addAdminUsername");
    const addAdminPassword_ = document.getElementById("addAdminPassword");
    const avatarIcon_ = document.getElementById("avatarIcon_").value;
    const avatarIcon__ = document.getElementById("avatarIcon_");
    addAdminName_.style.borderColor = "#c6c6c6";
    addAdminContact_.style.borderColor = "#c6c6c6";
    addAdminAddress_.style.borderColor = "#c6c6c6";
    addAdminEmail_.style.borderColor = "#c6c6c6";
    addAdminUsername_.style.borderColor = "#c6c6c6";
    addAdminPassword_.style.borderColor = "#c6c6c6";
    avatarIcon__.style.background = "none";

    setADD_ADMIN("");
    document.getElementById("addAdminName").value = "";
    setADMIN_CONTACT("");
    document.getElementById("addAdminContact").value = "";
    setADMIN_ADDRESS("");
    document.getElementById("addAdminAddress").value = "";
    setADMIN_EMAIL("");
    document.getElementById("addAdminEmail").value = "";
    setUSERNAME("");
    document.getElementById("addAdminUsername").value = "";
    setUSER_PASSWORD("");
    document.getElementById("addAdminPassword").value = "";
    setFileInputState("");
    Axios.get("https://perseeption-tromagade.herokuapp.com/AdminList").then(
      (response) => {
        setADMIN_LIST(response.data);
      }
    );
    document.getElementById("adminNewBox").style.display = "none";
    document.getElementById("adminNewOuter").style.display = "none";
  };

  const hideEditAdmin = () => {
    document.getElementById("formEditAdminOuter").style.display = "none";
    document.getElementById("editAdminBoxContainer").style.display = "none";
    Axios.get("https://perseeption-tromagade.herokuapp.com/AdminList").then(
      (response) => {
        setADMIN_LIST(response.data);
      }
    );
  };

  const [NEW_ADMIN_ID, setNEW_ADMIN_ID] = useState("");
  const [NEW_ADMIN_NAME, setNEW_ADMIN_NAME] = useState("");
  const [NEW_ADMIN_ADDRESS, setNEW_ADMIN_ADDRESS] = useState("");
  const [NEW_ADMIN_CONTACT, setNEW_ADMIN_CONTACT] = useState("");
  const [NEW_ADMIN_EMAIL, setNEW_ADMIN_EMAIL] = useState("");

  const showEditAdmin = (USER_ID) => {
    document.getElementById("formEditAdminOuter").style.display = "block";
    document.getElementById("editAdminBoxContainer").style.display = "block";
    // console.log(USER_ID);
    Axios.get(
      `https://perseeption-tromagade.herokuapp.com/getAdminInformation_/${USER_ID}`
    ).then((response) => {
      // console.log(response.data);
      setNEW_ADMIN_NAME(response.data[0].ADMIN_NAME);
      setNEW_ADMIN_ADDRESS(response.data[0].ADMIN_ADDRESS);
      setNEW_ADMIN_CONTACT(response.data[0].ADMIN_CONTACT);
      setNEW_ADMIN_EMAIL(response.data[0].ADMIN_EMAIL);
      setNEW_ADMIN_ID(response.data[0].USER_ID);
    });
  };

  const updateAdminInformationBtn = (NEW_ADMIN_ID) => {
    var updateADMIN_NAME_ = document.getElementById("updateADMIN_NAME_").value;
    var updateADMIN_CONTACT_ = document.getElementById(
      "updateADMIN_CONTACT_"
    ).value;
    var updateADMIN_ADDRESS_ = document.getElementById(
      "updateADMIN_ADDRESS_"
    ).value;
    var updateADMIN_EMAIL_ =
      document.getElementById("updateADMIN_EMAIL_").value;

    //
    const contactus_name_regex = /^([a-zA-Z\s\.]{1,50})$/;

    if (
      updateADMIN_NAME_ === "" ||
      !contactus_name_regex.test(updateADMIN_NAME_)
    ) {
      document.getElementById("updateADMIN_NAME_").style.borderColor = "red";
    }
    if (
      updateADMIN_NAME_ !== "" &&
      contactus_name_regex.test(updateADMIN_NAME_)
    ) {
      document.getElementById("updateADMIN_NAME_").style.borderColor =
        "#c6c6c6";
    }

    const contactus_contactNum_regex = /^([0-9]{11})$/;
    if (
      updateADMIN_CONTACT_ === "" ||
      !contactus_contactNum_regex.test(updateADMIN_CONTACT_)
    ) {
      document.getElementById("updateADMIN_CONTACT_").style.borderColor = "red";
    }
    if (
      updateADMIN_CONTACT_ !== "" &&
      contactus_contactNum_regex.test(updateADMIN_CONTACT_)
    ) {
      document.getElementById("updateADMIN_CONTACT_").style.borderColor =
        "#c6c6c6";
    }

    var addressRegex_ = /^([a-zA-Z0-9\.-\s,#]+)$/;
    if (
      updateADMIN_ADDRESS_ === "" ||
      !addressRegex_.test(updateADMIN_ADDRESS_)
    ) {
      document.getElementById("updateADMIN_ADDRESS_").style.borderColor = "red";
    }
    if (
      updateADMIN_ADDRESS_ !== "" &&
      addressRegex_.test(updateADMIN_ADDRESS_)
    ) {
      document.getElementById("updateADMIN_ADDRESS_").style.borderColor =
        "#c6c6c6";
    }
    var emailRegex_ =
      /^([a-zA-Z0-9\.-]{5,})@([a-z0-9]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    if (updateADMIN_EMAIL_ === "" || !emailRegex_.test(updateADMIN_EMAIL_)) {
      document.getElementById("updateADMIN_EMAIL_").style.borderColor = "red";
    }

    if (updateADMIN_EMAIL_ !== "" && emailRegex_.test(updateADMIN_EMAIL_)) {
      document.getElementById("updateADMIN_EMAIL_").style.borderColor =
        "#c6c6c6";
    }

    if (
      updateADMIN_NAME_ === "" ||
      !contactus_name_regex.test(updateADMIN_NAME_) ||
      updateADMIN_CONTACT_ === "" ||
      !contactus_contactNum_regex.test(
        updateADMIN_CONTACT_ ||
          updateADMIN_ADDRESS_ === "" ||
          !addressRegex_.test(updateADMIN_ADDRESS_) ||
          updateADMIN_EMAIL_ === "" ||
          !emailRegex_.test(updateADMIN_EMAIL_)
      )
    ) {
      document.getElementById("popUpGetMsgCont").style.display = "block";
      document.getElementById("popUpGetMsgInCont").style.display = "block";
      setTimeout(function () {
        document.getElementById("popUpGetMsgCont").style.display = "none";
        document.getElementById("popUpGetMsgInCont").style.display = "none";
      }, 3000);
    }

    if (
      updateADMIN_NAME_ !== "" &&
      contactus_name_regex.test(updateADMIN_NAME_) &&
      updateADMIN_CONTACT_ !== "" &&
      contactus_contactNum_regex.test(updateADMIN_CONTACT_) &&
      updateADMIN_ADDRESS_ !== "" &&
      addressRegex_.test(updateADMIN_ADDRESS_) &&
      updateADMIN_EMAIL_ !== "" &&
      emailRegex_.test(updateADMIN_EMAIL_)
    ) {
      document.getElementById("popUpGetMsgAdminUpdate").style.display = "block";
      setTimeout(function () {
        document.getElementById("popUpGetMsgAdminUpdate").style.display =
          "none";
        // document.getElementById("popUpGetMsgInCont").style.display = "none";
      }, 3000);

      document.getElementById("formEditAdminOuter").style.display = "none";
      // console.log(response.data);
      Axios.put(
        `https://perseeption-tromagade.herokuapp.com/updateAdminInformation__/${NEW_ADMIN_ID}`,
        {
          ADMIN_NAME: NEW_ADMIN_NAME,
          ADMIN_ADDRESS: NEW_ADMIN_ADDRESS,
          ADMIN_CONTACT: NEW_ADMIN_CONTACT,
          ADMIN_EMAIL: NEW_ADMIN_EMAIL,
        }
      ).then((response) => {
        setADMIN_LIST(
          ADMIN_LIST.map((val) => {
            return val.NEW_ADMIN_ID === NEW_ADMIN_ID
              ? {
                  USER_ID: val.NEW_ADMIN_ID,
                  ADMIN_NAME: val.NEW_ADMIN_NAME,
                  ADMIN_CONTACT: val.NEW_ADMIN_CONTACT,
                  ADMIN_ADDRESS: val.NEW_ADMIN_ADDRESS,
                  ADMIN_EMAIL: val.NEW_ADMIN_EMAIL,
                }
              : val;
          })
        );
      });
    }
  };
  const filterAdminInfo = () => {
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
    input = document.getElementById("getFilterInput3");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableApprovedAdminList");
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

  useEffect(() => {
    Axios.get("https://perseeption-tromagade.herokuapp.com/AdminList").then(
      (response) => {
        setADMIN_LIST(response.data);
        // console.log(response.data);
      }
    );
  }, []);

  const deleteAdmin = (USER_ID) => {
    document.getElementById("popUpGetMsgDeleteAdmin").style.display = "block";
    setTimeout(function () {
      document.getElementById("popUpGetMsgDeleteAdmin").style.display = "none";
      // document.getElementById("popUpGetMsgInCont").style.display = "none";
    }, 3000);
    Axios.delete(
      `https://perseeption-tromagade.herokuapp.com/deleteAdmin/${USER_ID}`
    ).then((response) => {
      // console.log(response);
      setADMIN_LIST(
        ADMIN_LIST.filter((val) => {
          return val.USER_ID !== USER_ID; // Filter/remove if it not equals to id
        })
      );
      Axios.get("https://perseeption-tromagade.herokuapp.com/AdminList").then(
        (response) => {
          setADMIN_LIST(response.data);
        }
      );
    });
  };
  const logout = (USER_ID) => {
    const stat = "logout";
    //alert(USER_ID);
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
    }, 3000);
    localStorage.clear();
    window.location.reload();
  };
  const [AVATAR, setAVATAR] = useState("");
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
      setADMIN_NAME(name[0].ADMIN_NAME);
      setAVATAR(name[0].AVATAR);

      // setUSER_ID(name[0].USER_ID);
    }
  }, []);

  // const [fileInputState, setFileInputState] = useState("");
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

  const insertNewAdmin = (e) => {
    const addAdminName = document.getElementById("addAdminName").value;
    const addAdminContact = document.getElementById("addAdminContact").value;
    const addAdminAddress = document.getElementById("addAdminAddress").value;
    const addAdminEmail = document.getElementById("addAdminEmail").value;
    const addAdminUsername = document.getElementById("addAdminUsername").value;
    const addAdminPassword = document.getElementById("addAdminPassword").value;
    const addAdminName_ = document.getElementById("addAdminName");
    const addAdminContact_ = document.getElementById("addAdminContact");
    const addAdminAddress_ = document.getElementById("addAdminAddress");
    const addAdminEmail_ = document.getElementById("addAdminEmail");
    const addAdminUsername_ = document.getElementById("addAdminUsername");
    const addAdminPassword_ = document.getElementById("addAdminPassword");
    const avatarIcon_ = document.getElementById("avatarIcon_").value;
    const avatarIcon__ = document.getElementById("avatarIcon_");

    // name
    const contactus_name_regex = /^([a-zA-Z\s\.]{1,50})$/;

    if (addAdminName === "" || !contactus_name_regex.test(addAdminName)) {
      document.getElementById("addAdminName").style.borderColor = "red";
    }
    if (addAdminName !== "" && contactus_name_regex.test(addAdminName)) {
      addAdminName_.style.borderColor = "#c6c6c6";
    }

    // contact number
    const contactus_contactNum_regex = /^([0-9]{11})$/;
    if (
      addAdminContact === "" ||
      !contactus_contactNum_regex.test(addAdminContact)
    ) {
      addAdminContact_.style.borderColor = "red";
    }
    if (
      addAdminContact !== "" &&
      contactus_contactNum_regex.test(addAdminContact)
    ) {
      addAdminContact_.style.borderColor = "#c6c6c6";
    }

    var addressRegex_ = /^([a-zA-Z0-9\.-\s,#]+)$/;
    if (addAdminAddress === "" || !addressRegex_.test(addAdminAddress)) {
      addAdminAddress_.style.borderColor = "red";
    }
    if (addAdminAddress !== "" && addressRegex_.test(addAdminAddress)) {
      addAdminAddress_.style.borderColor = "#c6c6c6";
    }

    var emailRegex_ =
      /^([a-zA-Z0-9\.-]{5,})@([a-z0-9]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    if (addAdminEmail === "" || !emailRegex_.test(addAdminEmail)) {
      addAdminEmail_.style.borderColor = "red";
    }

    if (addAdminEmail !== "" && emailRegex_.test(addAdminEmail)) {
      addAdminEmail_.style.borderColor = "#c6c6c6";
    }

    var usernameReg = /^[A-Za-z][A-Za-z0-9_!@]{6,30}$/;

    if (addAdminUsername === "" || !usernameReg.test(addAdminUsername)) {
      addAdminUsername_.style.borderColor = "red";
    }

    if (usernameReg.test(addAdminUsername) || addAdminUsername !== "") {
      addAdminUsername_.style.borderColor = "#c6c6c6";
    }

    const passwordRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16}$)"
    );

    if (addAdminPassword === "" || !passwordRegex.test(addAdminPassword)) {
      addAdminPassword_.style.borderColor = "red";
    }

    if (addAdminPassword !== "" || passwordRegex.test(addAdminPassword)) {
      addAdminPassword_.style.borderColor = "#c6c6c6";
    }

    if (avatarIcon_ === "") {
      avatarIcon__.style.background = "red";
    }

    if (avatarIcon_ !== "") {
      avatarIcon__.style.background = "none";
    }

    if (
      addAdminName === "" ||
      !contactus_name_regex.test(addAdminName) ||
      addAdminContact === "" ||
      !contactus_contactNum_regex.test(addAdminContact) ||
      addAdminAddress === "" ||
      !addressRegex_.test(addAdminAddress) ||
      addAdminEmail === "" ||
      !emailRegex_.test(addAdminEmail) ||
      addAdminUsername === "" ||
      !usernameReg.test(addAdminUsername) ||
      addAdminPassword === "" ||
      !passwordRegex.test(addAdminPassword) ||
      avatarIcon_ === ""
    ) {
      document.getElementById("popUpGetMsgCont").style.display = "block";
      document.getElementById("popUpGetMsgInCont").style.display = "block";
      setTimeout(function () {
        document.getElementById("popUpGetMsgCont").style.display = "none";
        document.getElementById("popUpGetMsgInCont").style.display = "none";
      }, 3000);
    }

    // console.log("sub");
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      // console.error("AHHHHHHHH!!");
      // console.log("AAAAAAAAAAAAAAAAH");
    };
  };

  return (
    <div className="AdminAdminListBg">
      <div className="AdminHeader">
        <div className="imgAdminContainer">
          <p className="AdminHeaderTitle">Manage Admin</p>
        </div>
        <Link to="/AdminProfile" className="profileIcon">
          {/* {ADMIN_LIST.map((imageId, index) => {
            return ( */}
          <Image
            className="profilePicture"
            cloudName="dlvt2lnkh"
            alt="img"
            publicId={AVATAR}
          />
          {/* ); })} */}
          {/* <img src="/images/events1.jpg" alt="img" className="profilePicture" /> */}
          <p className="profileNameHeader">{ADMIN_NAME}</p>
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
          <p
            className="logout_Admin"
            onClick={() => {
              logout(USER_ID);
            }}
          >
            <i className="fa fa-sign-out"></i> Logout
          </p>
        </div>

        <div id="popUpGetMsgApprove_logout">
          <div id="popUpGetMsgInApprove">
            <h2>PerSEEption Message</h2>
            <h1>Logout Successfully!</h1>
          </div>
        </div>
        <div id="popUpGetMsgAdminUpdate">
          <div id="popUpGetMsgInAdminUpdate">
            <h2>PerSEEption Message</h2>
            <h1>Admin Updated Successfully!</h1>
          </div>
        </div>
        <div id="popUpGetMsgAdminAdded">
          <div id="popUpGetMsgInAdminAdded">
            <h2>PerSEEption Message</h2>
            <h1>Admin Added Successfully!</h1>
          </div>
        </div>
        <div id="popUpGetMsgDeleteAdmin">
          <div id="popUpGetMsgInDeleteAdmin">
            <h2>PerSEEption Message</h2>
            <h1>Admin Request Deleted</h1>
          </div>
        </div>
        <div className="formBox">
          <div className="dividerTitleFilterAdminList">
            <p className="textAdminList">Manage Admin</p>
            <div className="input-wrapperAdminList">
              <input
                type="text"
                className="inputFilterAdminList"
                placeholder="Search..."
                id="getFilterInput3"
                onKeyUp={filterAdminInfo}
              />
            </div>
          </div>
          <div className="outerTableAdminList">
            <table className=" tableAdminList" id="tableApprovedAdminList">
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Contact Number</th>
                  <th>Address</th>
                  <th>Email Address</th>
                  <th>Registration Date</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>

                {ADMIN_LIST.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.USER_ID}</td>
                      <td>{val.USERNAME}</td>
                      <td>{val.ADMIN_CONTACT}</td>
                      <td>{val.ADMIN_ADDRESS}</td>
                      <td>{val.ADMIN_EMAIL}</td>
                      <td>{val.REGISTRATION_DATE}</td>

                      <td>
                        <button
                          className="editAdminBtn"
                          onClick={() => {
                            showEditAdmin(val.USER_ID);
                          }}
                        >
                          ✏️
                        </button>
                      </td>
                      <td>
                        <button
                          className="deleteAdmin"
                          onClick={() => {
                            deleteAdmin(val.USER_ID);
                          }}
                        >
                          🗑
                        </button>
                      </td>
                      <td></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <button className="addNewAdmin" onClick={showAddNewAdmin}>
            Add New Admin
          </button>
        </div>
        {/* {ADMIN_LIST.map((val, key) => {
          return ( */}
        <div className="formEditAdmin" id="formEditAdminOuter">
          <div className="editAdminBox" id="editAdminBoxContainer">
            <p className="editAdminInfo">Edit Admin Information</p>
            {/* <label>Name: {val.USER_ID}</label> */}
            <label>Name: </label>
            <input
              type="text"
              id="updateADMIN_NAME_"
              value={NEW_ADMIN_NAME}
              // onChange={handleChange}
              // value={val.ADMIN_NAME}
              onChange={(e) => {
                setNEW_ADMIN_NAME(e.target.value);
              }}
            />
            <label>Contact: </label>
            <input
              type="text"
              id="updateADMIN_CONTACT_"
              value={NEW_ADMIN_CONTACT}
              onChange={(e) => {
                setNEW_ADMIN_CONTACT(e.target.value);
              }}
            />
            <label>Address: </label>
            <input
              type="text"
              id="updateADMIN_ADDRESS_"
              value={NEW_ADMIN_ADDRESS}
              // onChange={handleChange}
              onChange={(e) => {
                setNEW_ADMIN_ADDRESS(e.target.value);
              }}
            />
            <label>Email:</label>
            <input
              type="text"
              id="updateADMIN_EMAIL_"
              value={NEW_ADMIN_EMAIL}
              onChange={(e) => {
                setNEW_ADMIN_EMAIL(e.target.value);
              }}
            />
            <div className="editAdminBtns">
              <p className="editAdminCancelBtn" onClick={hideEditAdmin}>
                Cancel
              </p>
              <p
                className="editAdminConfirm"
                onClick={() => {
                  updateAdminInformationBtn(NEW_ADMIN_ID);
                }}
              >
                Submit
              </p>
            </div>
          </div>
        </div>
        {/* ); })} */}
        <div className="form2" id="adminNewOuter">
          <div className="AddNewAdminForm" id="adminNewBox">
            <p className="addAdminInfo">Add Admin Information</p>
            <label>Name:</label>
            <input
              type="text"
              id="addAdminName"
              onChange={(e) => setADD_ADMIN(e.target.value)}
            />
            <label>Contact:</label>
            <input
              type="text"
              id="addAdminContact"
              onChange={(e) => setADMIN_CONTACT(e.target.value)}
            />
            <label>Address:</label>
            <input
              type="text"
              id="addAdminAddress"
              onChange={(e) => setADMIN_ADDRESS(e.target.value)}
            />
            <label>Email:</label>
            <input
              type="text"
              id="addAdminEmail"
              onChange={(e) => setADMIN_EMAIL(e.target.value)}
            />
            <label>Username:</label>
            <input
              type="text"
              onChange={(e) => setUSERNAME(e.target.value)}
              id="addAdminUsername"
            />
            <label>Password:</label>
            <input
              type="password"
              id="addAdminPassword"
              onChange={(e) => setUSER_PASSWORD(e.target.value)}
            />
            <input
              type="file"
              id="avatarIcon_"
              value={fileInputState}
              onChange={handleFileInputChange}
            />
            <div className="AdminListBtns">
              <p className="adminListCancelBtn" onClick={hideAddNewAdmin}>
                Cancel
              </p>
              <p className="AddAdminNow" onClick={insertNewAdmin}>
                You're In!
              </p>
            </div>
          </div>
        </div>
        <div id="popUpGetMsgCont">
          <div id="popUpGetMsgInCont">
            <h2>Message</h2>
            <h1 id="popMsg_contactUS">Please enter a valid information!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAdminList;
