import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Registration.css";
import { Link, useHistory } from "react-router-dom";

function Registration() {
  Axios.defaults.withCredentials = true;
  const history = useHistory();
  const [LastMember, setLastMember] = useState([]);
  const [UsernameReg_Name, setUsernameReg_Name] = useState("");
  const [UsernameReg_Email, setUsernameReg_Email] = useState("");
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [CHILD_SURNAME, setCHILD_SURNAME] = useState("");
  const [CHILD_GIVEN_NAME, setCHILD_GIVEN_NAME] = useState("");
  const [CHILD_MIDDLE_NAME, setCHILD_MIDDLE_NAME] = useState("");

  const [FATHER_SURNAME, setFATHER_SURNAME] = useState("");
  const [FATHER_GIVEN_NAME, setFATHER_GIVEN_NAME] = useState("");
  const [FATHER_MIDDLE_NAME, setFATHER_MIDDLE_NAME] = useState("");
  const [FATHER_BIRTHDAY, setFATHER_BIRTHDAY] = useState("");
  //

  const [MOTHER_SURNAME, setMOTHER_SURNAME] = useState("");
  const [MOTHER_GIVEN_NAME, setMOTHER_GIVEN_NAME] = useState("");
  const [MOTHER_MIDDLE_NAME, setMOTHER_MIDDLE_NAME] = useState("");
  const [MOTHER_BIRTHDAY, setMOTHER_BIRTHDAY] = useState("");
  //

  const [GUARDIAN_SURNAME, setGUARDIAN_SURNAME] = useState("");
  const [GUARDIAN_GIVEN_NAME, setGUARDIAN_GIVEN_NAME] = useState("");
  const [GUARDIAN_MIDDLE_NAME, setGUARDIAN_MIDDLE_NAME] = useState("");
  const [GUARDIAN_CONTACT, setGUARDIAN_CONTACT] = useState("");
  //

  const [FIRST_SIBLING, setFIRST_SIBLING] = useState("");
  const [SECOND_SIBLING, setSECOND_SIBLING] = useState("");
  const [THIRD_SIBLING, setTHIRD_SIBLING] = useState("");
  //

  const [CITY_ADDRESS, setCITY_ADDRESS] = useState("");
  const [REGION_ADDRESS, setREGION_ADDRESS] = useState("");
  const [PROVINCE_ADDRESS, setPROVINCE_ADDRESS] = useState("");
  //

  const [FATHER_CONTACT, setFATHER_CONTACT] = useState("");
  const [MOTHER_CONTACT, setMOTHER_CONTACT] = useState("");

  const [FATHER_LANDLINE, setFATHER_LANDLINE] = useState("");
  const [MOTHER_LANDLINE, setMOTHER_LANDLINE] = useState("");

  const [FATHER_EMAIL, setFATHER_EMAIL] = useState("");
  const [MOTHER_EMAIL, setMOTHER_EMAIL] = useState("");
  //
  const [MONTHLY_INCOME, setMONTHLY_INCOME] = useState("");

  const [FATHER_OCCUPATION, setFATHER_OCCUPATION] = useState("");
  const [MOTHER_OCCUPATION, setMOTHER_OCCUPATION] = useState("");

  const [CHILD_BIRTHDAY, setCHILD_BIRTHDAY] = useState("");

  //
  const [SEX, setSEX] = useState("");

  const [SCHOOL_NAME, setSCHOOL_NAME] = useState("");
  const [YEAR_GRADE_LEVEL, setYEAR_GRADE_LEVEL] = useState("");
  const [SCHOOL_ADDRESS, setSCHOOL_ADDRESS] = useState("");

  //

  const [CAUSE_OF_BLINDNESS, setCAUSE_OF_BLINDNESS] = useState("");

  const [TOTALY_BLIND_EYES, setTOTALY_BLIND_EYES] = useState("");
  const [TB_ADD_DISABILITY, setTB_ADD_DISABILITY] = useState("");

  const [LOW_VISION_EYES, setLOW_VISION_EYES] = useState("");
  const [LV_ADD_DISABILITY, setLV_ADD_DISABILITY] = useState("");

  const [ADAPTIVE_LENS, setADAPTIVE_LENS] = useState("");
  const [STYLUS, setSTYLUS] = useState("");

  const [ARTIFICIAL_EYES, setARTIFICIAL_EYES] = useState("");
  const [COMPUTER_SCREEN, setCOMPUTER_SCREEN] = useState("");
  //
  const [WHITE_CANE, setWHITE_CANE] = useState("");
  const [CCTV, setCCTV] = useState("");

  const [WHEEL_CHAIR, setWHEEL_CHAIR] = useState("");
  const [LARGE_PRINTS, setLARGE_PRINTS] = useState("");

  const [HEARING_AID, setHEARING_AID] = useState("");
  const [ABACUS, setABACUS] = useState("");

  const [BRAILLER, setBRAILLER] = useState("");

  const [PHYSICAL_THERAPHY, setPHYSICAL_THERAPHY] = useState("");
  const [OCCUPATIONAL_THERAPHY, setOCCUPATIONAL_THERAPHY] = useState("");
  const [SPEECH_THERAPHY, setSPEECH_THERAPHY] = useState("");

  const [OTHER_CONDITION, setOTHER_CONDITION] = useState("");

  const [Msg, setMsg] = useState("");

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

  const Register = (e) => {
    var emailAcc_user = document.getElementById("emailAcc_user").value;
    var regUsername_user = document.getElementById("regUsername_user").value;
    var emailAcc_user_ = document.getElementById("emailAcc_user");
    var regUsername_user_ = document.getElementById("regUsername_user");
    ///
    // console.log(base64EncodedImage);
    var borderUserName = document.getElementById("regUsername");
    var borderRegUserId = document.getElementById("regPass");
    var letters = /^[A-Za-z]+$/;
    // Username Regex
    const inputUsername = document.getElementById("regUsername").value;

    const usernameRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,30}$)"
    );

    // Password Regex
    const inputPassword = document.getElementById("regPass").value;
    const passwordRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16}$)"
    );

    //
    const FatherSurname = document.getElementById("inputFatherSurname").value;
    const FatherSurname1 = document.getElementById("inputFatherSurname");

    //inputFatherGivenName
    const FatherGivenName = document.getElementById(
      "inputFatherGivenName"
    ).value;
    const FatherGivenName1 = document.getElementById("inputFatherGivenName");

    //inputFatherMiddleName
    const FatherMiddleName = document.getElementById(
      "inputFatherMiddleName"
    ).value;
    const FatherMiddleName1 = document.getElementById("inputFatherMiddleName");

    //inputMotherSurname
    const MotherSurname = document.getElementById("inputMotherSurname").value;
    const MotherSurname1 = document.getElementById("inputMotherSurname");

    //inputMotherfirst
    const Motherfirst = document.getElementById("inputMotherfirst").value;
    const Motherfirst1 = document.getElementById("inputMotherfirst");

    //inputMotherMiddle
    const MotherMiddle = document.getElementById("inputMotherMiddle").value;
    const MotherMiddle1 = document.getElementById("inputMotherMiddle");

    //guardianFam
    const guardianFam = document.getElementById("guardianFam").value;
    const guardianFam1 = document.getElementById("guardianFam");

    //guardianGivenName
    const guardianGivenName =
      document.getElementById("guardianGivenName").value;
    const guardianGivenName1 = document.getElementById("guardianGivenName");

    //guardianMiddle
    const guardianMiddle = document.getElementById("guardianMiddle").value;
    const guardianMiddle1 = document.getElementById("guardianMiddle");

    //guardianContact
    const guardianContact = document.getElementById("guardianContact").value;
    const guardianContact1 = document.getElementById("guardianContact");

    //firstSib
    const firstSib = document.getElementById("firstSib").value;
    const firstSib1 = document.getElementById("firstSib");

    //secSib
    const secSib = document.getElementById("secSib").value;
    const secSib1 = document.getElementById("secSib");

    //thirdSib
    const thirdSib = document.getElementById("thirdSib").value;
    const thirdSib1 = document.getElementById("thirdSib");

    // fcontact
    const fcontact = document.getElementById("fcontact").value;
    const fcontact1 = document.getElementById("fcontact");

    // mcontact
    const mcontact = document.getElementById("mcontact").value;
    const mcontact1 = document.getElementById("mcontact");

    //fland
    const fland = document.getElementById("fland").value;
    const fland1 = document.getElementById("fland");

    //mland
    const mland = document.getElementById("mland").value;
    const mland1 = document.getElementById("mland");

    //femail
    const femail = document.getElementById("femail").value;
    const femail1 = document.getElementById("femail");

    //memail
    const memail = document.getElementById("memail").value;
    const memail1 = document.getElementById("memail");

    //mocc
    const mocc = document.getElementById("mocc").value;
    const mocc1 = document.getElementById("mocc");

    //focc
    const focc = document.getElementById("focc").value;
    const focc1 = document.getElementById("focc");

    //inpYGL
    const inpYGL = document.getElementById("inpYGL").value;
    const inpYGL1 = document.getElementById("inpYGL");

    // inpuSchAdd
    const inpuSchAdd = document.getElementById("inpuSchAdd").value;
    const inpuSchAdd1 = document.getElementById("inpuSchAdd");

    //inpSch
    const inpSch = document.getElementById("inpSch").value;
    const inpSch1 = document.getElementById("inpSch");

    //inpDisTb
    const inpDisTb = document.getElementById("inpDisTb").value;
    const inpDisTb1 = document.getElementById("inpDisTb");

    //inpAddDislv
    const inpAddDislv = document.getElementById("inpAddDislv").value;
    const inpAddDislv1 = document.getElementById("inpAddDislv");

    //conditionTxtArea
    const conditionTxtArea = document.getElementById("conditionTxtArea").value;
    const conditionTxtArea1 = document.getElementById("conditionTxtArea");

    //gcashImg
    const gcashImg = document.getElementById("gcashImg").value;
    const gcashImg1 = document.getElementById("gcashImg");

    //totally blind
    var tb_option = document.getElementsByName("tb_option");

    //var lv_option = document.getElementsByName("lv_option");
    var lv_option = document.getElementsByName("lv_option");

    //----

    //
    const Childsurname = document.getElementById("inputChildSurname").value;
    const Childsurname1 = document.getElementById("inputChildSurname");

    //
    var childName = document.getElementById("inputChildGivenNameId").value;
    var childName1 = document.getElementById("inputChildGivenNameId");

    //
    var ChildMiddlename = document.getElementById("inputChildMiddleName").value;
    var ChildMiddlename1 = document.getElementById("inputChildMiddleName");
    //
    var city = document.getElementById("city").value;
    var city1 = document.getElementById("city");

    //
    var region = document.getElementById("region").value;
    var region1 = document.getElementById("region");

    //
    var province = document.getElementById("province").value;
    var province1 = document.getElementById("province");

    //
    var income = document.getElementsByName("income");

    //
    var childsDOB = document.getElementById("childsDOB").value;
    var childsDOB1 = document.getElementById("childsDOB");

    //
    var sex = document.getElementsByName("sex");

    //
    var causeBlindness = document.getElementById("causeBlindness").value;
    var causeBlindness1 = document.getElementById("causeBlindness");

    // console.log(surnameChild);

    //
    var adaptiveLens = document.getElementsByName("adaptiveLens");
    var stylus = document.getElementsByName("stylus");
    var artificialEyes = document.getElementsByName("artificialEyes");
    var computerScreen = document.getElementsByName("computerScreen");

    var whiteCane = document.getElementsByName("whiteCane");
    var cctvs = document.getElementsByName("CCTV");
    var wheelChair = document.getElementsByName("wheelChair");
    var largePrints = document.getElementsByName("largePrints");
    var hearingAid = document.getElementsByName("hearingAid");
    var abacus = document.getElementsByName("abacus");
    var brailler = document.getElementsByName("brailler");

    var physicalTheraphy = document.getElementsByName("physicalTheraphy");
    var ocupationalTheraphy = document.getElementsByName("ocupationalTheraphy");
    var speechTherapy = document.getElementsByName("speechTherapy");
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //Letter only
    var nameRegex = /^([a-zA-Z\s]{1,50})$/;
    var numberRegex = /^([0-9]{1,11})$/;
    var landRegex = /^([0-9 \-()]{9,20})$/;
    var nameNumRegex = /^([a-zA-Z0-9\s]{1,50})$/;
    var nameNumComRegex = /^([a-zA-Z\,0-9\s]{1,50})$/;
    var emailRegex_ =
      /^([a-zA-Z0-9\.-]+)@([a-z0-9]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;

    // Done validating
    if (regUsername_user === "" || !nameRegex.test(regUsername_user)) {
      regUsername_user_.style.borderColor = "red";
    } else {
      regUsername_user_.style.borderColor = "#dddddd";
    }

    if (emailAcc_user === "" || !emailAcc_user.match(emailRegex_)) {
      emailAcc_user_.style.borderColor = "red";
    } else {
      emailAcc_user_.style.borderColor = "#dddddd";
    }

    // Validation Username
    if (inputUsername === "" || !usernameRegex.test(inputUsername)) {
      borderUserName.style.borderColor = "red";
    } else {
      borderUserName.style.borderColor = "#dddddd";
    }

    // Validation Pass
    if (inputPassword === "" || !passwordRegex.test(inputPassword)) {
      borderRegUserId.style.borderColor = "red";
    } else {
      borderRegUserId.style.borderColor = "#dddddd";
    }

    // Done validating
    if (
      Childsurname === "" ||
      !Childsurname.match(letters) ||
      !nameRegex.test(Childsurname)
    ) {
      Childsurname1.style.borderColor = "red";
      document.getElementById("invalidchildSurname").style.display = "block";
    } else {
      Childsurname1.style.borderColor = "#dddddd";
      document.getElementById("invalidchildSurname").style.display = "none";
    }

    //Done Validating
    if (
      childName === "" ||
      !childName.match(letters) ||
      !nameRegex.test(childName)
    ) {
      childName1.style.borderColor = "red";
    } else {
      childName1.style.borderColor = "#dddddd";
    }

    // middlename not empty and regex
    if (ChildMiddlename !== "" && nameRegex.test(ChildMiddlename)) {
      ChildMiddlename1.style.borderColor = "#dddddd";
    } else {
      var p = (document.getElementById("inputChildMiddleName").value = "none");
    }

    //-----------

    // FatherSurname not empty and regex
    if (FatherSurname !== "" && nameRegex.test(FatherSurname)) {
      FatherSurname1.style.borderColor = "#dddddd";
    }
    if (FatherSurname !== "" && !nameRegex.test(FatherSurname)) {
      FatherSurname1.style.borderColor = "red";
    }

    if (FatherSurname === "") {
      document.getElementById("inputFatherSurname").value = "none";
    }

    // FatherGivenName not empty and regex
    if (FatherGivenName !== "" && nameRegex.test(FatherGivenName)) {
      FatherGivenName1.style.borderColor = "#dddddd";
    }
    if (FatherGivenName !== "" && !nameRegex.test(FatherGivenName)) {
      FatherGivenName1.style.borderColor = "red";
    }

    if (FatherGivenName === "") {
      document.getElementById("inputFatherGivenName").value = "none";
    }

    // FatherMiddleName not empty and regex
    if (FatherMiddleName !== "" && nameRegex.test(FatherMiddleName)) {
      FatherMiddleName1.style.borderColor = "#dddddd";
    }
    if (FatherMiddleName !== "" && !nameRegex.test(FatherMiddleName)) {
      FatherMiddleName1.style.borderColor = "red";
    }

    if (FatherMiddleName === "") {
      document.getElementById("inputFatherMiddleName").value = "none";
    }

    // inputMotherSurname not empty and regex
    if (MotherSurname !== "" && nameRegex.test(MotherSurname)) {
      MotherSurname1.style.borderColor = "#dddddd";
    }
    if (MotherSurname !== "" && !nameRegex.test(MotherSurname)) {
      MotherSurname1.style.borderColor = "red";
    }

    if (MotherSurname === "") {
      document.getElementById("inputMotherSurname").value = "none";
    }

    // inputMotherfirst not empty and regex
    if (Motherfirst !== "" && nameRegex.test(Motherfirst)) {
      Motherfirst1.style.borderColor = "#dddddd";
    }
    if (Motherfirst !== "" && !nameRegex.test(Motherfirst)) {
      Motherfirst1.style.borderColor = "red";
    }

    if (Motherfirst === "") {
      document.getElementById("inputMotherfirst").value = "none";
    }

    // MotherMiddle not empty and regex
    if (MotherMiddle !== "" && nameRegex.test(MotherMiddle)) {
      MotherMiddle1.style.borderColor = "#dddddd";
    }
    if (MotherMiddle !== "" && !nameRegex.test(MotherMiddle)) {
      MotherMiddle1.style.borderColor = "red";
    }

    if (MotherMiddle === "") {
      document.getElementById("inputMotherMiddle").value = "none";
    }

    // guardianFam not empty and regex
    if (guardianFam !== "" && nameRegex.test(guardianFam)) {
      guardianFam1.style.borderColor = "#dddddd";
    }
    if (guardianFam !== "" && !nameRegex.test(guardianFam)) {
      guardianFam1.style.borderColor = "red";
    }

    if (guardianFam === "") {
      document.getElementById("guardianFam").value = "none";
    }

    // guardianGivenName not empty and regex
    if (guardianGivenName !== "" && nameRegex.test(guardianGivenName)) {
      guardianGivenName1.style.borderColor = "#dddddd";
    }
    if (guardianGivenName !== "" && !nameRegex.test(guardianGivenName)) {
      guardianGivenName1.style.borderColor = "red";
    }
    if (guardianGivenName === "") {
      document.getElementById("guardianGivenName").value = "none";
    }

    // guardianGivenName not empty and regex
    if (guardianMiddle !== "" && nameRegex.test(guardianMiddle)) {
      guardianMiddle1.style.borderColor = "#dddddd";
    }
    if (guardianMiddle !== "" && !nameRegex.test(guardianMiddle)) {
      guardianMiddle1.style.borderColor = "red";
    }
    if (guardianMiddle === "") {
      document.getElementById("guardianMiddle").value = "none";
    }

    // guardianContact not empty and regex
    if (guardianContact !== "" && numberRegex.test(guardianContact)) {
      guardianContact1.style.borderColor = "#dddddd";
    }
    if (guardianContact !== "" && !numberRegex.test(guardianContact)) {
      guardianContact1.style.borderColor = "red";
    }
    if (guardianContact === "") {
      document.getElementById("guardianContact").value = "00000000000";
    }

    // guardianGivenName not empty and regex
    if (firstSib !== "" && nameRegex.test(firstSib)) {
      firstSib1.style.borderColor = "#dddddd";
    }
    if (firstSib !== "" && !nameRegex.test(firstSib)) {
      firstSib1.style.borderColor = "red";
    }
    if (firstSib === "") {
      document.getElementById("firstSib").value = "none";
    }

    // secSib not empty and regex
    if (secSib !== "" && nameRegex.test(secSib)) {
      secSib1.style.borderColor = "#dddddd";
    }
    if (secSib !== "" && !nameRegex.test(secSib)) {
      secSib1.style.borderColor = "red";
    }
    if (secSib === "") {
      document.getElementById("secSib").value = "none";
    }

    // secSib not empty and regex
    if (thirdSib !== "" && nameRegex.test(thirdSib)) {
      thirdSib1.style.borderColor = "#dddddd";
    }
    if (thirdSib !== "" && !nameRegex.test(thirdSib)) {
      thirdSib1.style.borderColor = "red";
    }
    if (thirdSib === "") {
      document.getElementById("thirdSib").value = "none";
    }

    // fcontact not empty and regex
    if (fcontact !== "" && numberRegex.test(fcontact)) {
      fcontact1.style.borderColor = "#dddddd";
    }
    if (fcontact !== "" && !numberRegex.test(fcontact)) {
      fcontact1.style.borderColor = "red";
    }
    if (fcontact === "") {
      document.getElementById("fcontact").value = "00000000000";
    }

    // mcontact not empty and regex
    if (mcontact !== "" && numberRegex.test(mcontact)) {
      mcontact1.style.borderColor = "#dddddd";
    }
    if (mcontact !== "" && !numberRegex.test(mcontact)) {
      mcontact1.style.borderColor = "red";
    }
    if (mcontact === "") {
      document.getElementById("mcontact").value = "00000000000";
    }

    // fland not empty and regex
    if (fland !== "" && landRegex.test(fland)) {
      fland1.style.borderColor = "#dddddd";
    }
    if (fland !== "" && !landRegex.test(fland)) {
      fland1.style.borderColor = "red";
    }
    if (fland === "") {
      document.getElementById("fland").value = "00000000000";
    }

    // mland not empty and regex
    if (mland !== "" && landRegex.test(mland)) {
      mland1.style.borderColor = "#dddddd";
    }
    if (mland !== "" && !landRegex.test(mland)) {
      mland1.style.borderColor = "red";
    }
    if (mland === "") {
      document.getElementById("mland").value = "00000000000";
    }

    // femail not empty and regex
    if ((femail !== "" && emailRegex_.test(femail)) || femail === "none") {
      femail1.style.borderColor = "#dddddd";
    }
    if (femail !== "" && !emailRegex_.test(femail) && femail !== "none") {
      femail1.style.borderColor = "red";
    }
    if (memail === "") {
      document.getElementById("femail").value = "none";
    }

    // memail not empty and regex
    if ((memail !== "" && emailRegex_.test(memail)) || memail === "none") {
      memail1.style.borderColor = "#dddddd";
    }
    if (memail !== "" && !emailRegex_.test(memail) && memail !== "none") {
      memail1.style.borderColor = "red";
    }
    if (memail === "") {
      document.getElementById("memail").value = "none";
    }

    // mocc not empty and regex
    if (mocc !== "" && nameRegex.test(mocc)) {
      mocc1.style.borderColor = "#dddddd";
    }
    if (mocc !== "" && !nameRegex.test(mocc)) {
      mocc1.style.borderColor = "red";
    }
    if (mocc === "") {
      document.getElementById("mocc").value = "none";
    }

    // focc not empty and regex
    if (focc !== "" && nameRegex.test(focc)) {
      focc1.style.borderColor = "#dddddd";
    }
    if (focc !== "" && !nameRegex.test(focc)) {
      focc1.style.borderColor = "red";
    }
    if (focc === "") {
      document.getElementById("focc").value = "none";
    }

    // inpYGL not empty and regex
    if (nameNumRegex.test(inpYGL)) {
      inpYGL1.style.borderColor = "#dddddd";
    }
    if (!nameNumRegex.test(inpYGL)) {
      inpYGL1.style.borderColor = "red";
    }
    if (inpYGL === "") {
      document.getElementById("inpYGL").value = "none";
    }

    // inpuSchAdd not empty and regex
    if (inpuSchAdd !== "" && nameNumComRegex.test(inpuSchAdd)) {
      inpuSchAdd1.style.borderColor = "#dddddd";
    }
    if (inpuSchAdd !== "" && !nameNumComRegex.test(inpuSchAdd)) {
      inpYGL1.style.borderColor = "red";
    }
    if (inpuSchAdd === "") {
      document.getElementById("inpuSchAdd").value = "none";
    }

    // inpSch not empty and regex
    if (inpSch !== "" && nameRegex.test(inpSch)) {
      inpSch1.style.borderColor = "#dddddd";
    }
    if (inpSch !== "" && !nameRegex.test(inpSch)) {
      inpSch1.style.borderColor = "red";
    }
    if (inpSch === "") {
      document.getElementById("inpSch").value = "none";
    }

    // inpDisTb not empty and regex
    if (inpDisTb !== "" && nameRegex.test(inpDisTb)) {
      inpSch1.style.borderColor = "#dddddd";
    }
    if (inpDisTb !== "" && !nameRegex.test(inpDisTb)) {
      inpDisTb1.style.borderColor = "red";
    }
    if (inpDisTb === "") {
      document.getElementById("inpDisTb").value = "none";
    }

    // inpAddDislv not empty and regex
    if (inpAddDislv !== "" && nameRegex.test(inpAddDislv)) {
      inpAddDislv1.style.borderColor = "#dddddd";
    }
    if (inpAddDislv !== "" && !nameRegex.test(inpAddDislv)) {
      inpAddDislv1.style.borderColor = "red";
    }
    if (inpAddDislv === "") {
      document.getElementById("inpAddDislv").value = "none";
    }

    // conditionTxtArea not empty and regex
    if (conditionTxtArea !== "" && nameRegex.test(conditionTxtArea)) {
      conditionTxtArea1.style.borderColor = "#dddddd";
    }
    if (conditionTxtArea !== "" && !nameRegex.test(conditionTxtArea)) {
      conditionTxtArea1.style.borderColor = "red";
    }
    if (conditionTxtArea === "") {
      document.getElementById("conditionTxtArea").value = "none";
    }

    if (gcashImg === "") {
      gcashImg1.style.background = "red";
    } else {
      gcashImg1.style.background = "white";
    }

    if (
      !(
        tb_option[0].checked === true ||
        tb_option[1].checked === true ||
        tb_option[2].checked === true ||
        tb_option[3].checked === true
      )
    ) {
      document.getElementById("visionLabel").style.color = "red";
    } else {
      document.getElementById("visionLabel").style.color = "black";
    }

    if (
      !(
        lv_option[0].checked === true ||
        lv_option[1].checked === true ||
        lv_option[2].checked === true ||
        lv_option[3].checked === true
      )
    ) {
      document.getElementById("visionLabel1").style.color = "red";
    } else {
      document.getElementById("visionLabel1").style.color = "black";
    }

    //-----------

    // city not empty and regex
    if (city !== "" && nameNumRegex.test(city)) {
      city1.style.borderColor = "#dddddd";
    } else {
      city1.style.borderColor = "red";
    }

    if (city === "") {
      city1.style.borderColor = "red";
    }

    // region not empty and regex
    if (region !== "" && nameNumRegex.test(region)) {
      region1.style.borderColor = "#dddddd";
    } else {
      region1.style.borderColor = "red";
    }

    if (region === "") {
      region1.style.borderColor = "red";
    }

    // province not empty and regex
    if (province !== "" && nameNumRegex.test(province)) {
      province1.style.borderColor = "#dddddd";
    } else {
      province1.style.borderColor = "red";
    }
    if (province === "") {
      province1.style.borderColor = "red";
    }

    //DOB
    if (childsDOB === "") {
      childsDOB1.style.borderColor = "red";
      // document.getElementById("childBdayMsg").style.display = "block";
    } else {
      childsDOB1.style.borderColor = "#dddddd";
      // document.getElementById("childBdayMsg").style.display = "none";
    }

    // province not empty and regex

    if (causeBlindness !== "" && nameNumRegex.test(causeBlindness)) {
      causeBlindness1.style.borderColor = "#dddddd";
    } else {
      causeBlindness1.style.borderColor = "red";
    }

    if (causeBlindness === "") {
      causeBlindness1.style.borderColor = "red";
      // document.getElementById("invalidchildSurname").style.display = "block";
    }

    if (!(sex[0].checked === true || sex[1].checked === true)) {
      document.getElementById("sexMsg").style.display = "block";
    } else {
      document.getElementById("sexMsg").style.display = "none";
    }

    if (
      !(
        income[0].checked === true ||
        income[1].checked === true ||
        income[2].checked === true ||
        income[3].checked === true
      )
    ) {
      document.getElementById("monthlyIncomeTitle").style.color = "red";
      document.getElementById("monthlyIncomeTitle").style.display = "block";
    } else {
      document.getElementById("monthlyIncomeTitle").style.display = "none";
    }

    if (
      !(
        physicalTheraphy[0].checked === true ||
        physicalTheraphy[1].checked === true ||
        physicalTheraphy[2].checked === true
      ) ||
      !(
        ocupationalTheraphy[0].checked === true ||
        ocupationalTheraphy[1].checked === true ||
        ocupationalTheraphy[2].checked === true
      ) ||
      !(
        speechTherapy[0].checked === true ||
        speechTherapy[1].checked === true ||
        speechTherapy[2].checked === true
      )
    ) {
      document.getElementById("tableMessageTheraphy").style.display = "block";
      document.getElementById("tableService").style.borderStyle = "solid";
      document.getElementById("tableService").style.borderColor = "red";
    } else {
      document.getElementById("tableMessageTheraphy").style.display = "none";
      document.getElementById("tableService").style.borderStyle = "none";
    }

    if (
      !(adaptiveLens[0].checked === true || adaptiveLens[1].checked === true) ||
      !(stylus[0].checked === true || stylus[1].checked === true) ||
      !(
        artificialEyes[0].checked === true || artificialEyes[1].checked === true
      ) ||
      !(
        computerScreen[0].checked === true || computerScreen[1].checked === true
      ) ||
      !(whiteCane[0].checked === true || whiteCane[1].checked === true) ||
      !(cctvs[0].checked === true || cctvs[1].checked === true) ||
      !(wheelChair[0].checked === true || wheelChair[1].checked === true) ||
      !(largePrints[0].checked === true || largePrints[1].checked === true) ||
      !(hearingAid[0].checked === true || hearingAid[1].checked === true) ||
      !(abacus[0].checked === true || abacus[1].checked === true) ||
      !(brailler[0].checked === true || brailler[1].checked === true)
    ) {
      document.getElementById("tableMessage").style.display = "block";
      document.getElementById("tableNeed").style.borderStyle = "solid";
      document.getElementById("tableNeed").style.borderColor = "red";
    } else {
      document.getElementById("tableMessage").style.display = "none";
      document.getElementById("tableNeed").style.borderStyle = "none";
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

  // REGISTER
  const uploadImage = (base64EncodedImage) => {
    var emailAcc_user = document.getElementById("emailAcc_user").value;
    var regUsername_user = document.getElementById("regUsername_user").value;
    var emailAcc_user_ = document.getElementById("emailAcc_user");
    var regUsername_user_ = document.getElementById("regUsername_user");
    ///
    // console.log(base64EncodedImage);
    var borderUserName = document.getElementById("regUsername");
    var borderRegUserId = document.getElementById("regPass");
    var letters = /^[A-Za-z]+$/;
    // Username Regex
    const inputUsername = document.getElementById("regUsername").value;

    const usernameRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,30}$)"
    );

    // Password Regex
    const inputPassword = document.getElementById("regPass").value;
    const passwordRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16}$)"
    );

    //
    const FatherSurname = document.getElementById("inputFatherSurname").value;
    const FatherSurname1 = document.getElementById("inputFatherSurname");

    //inputFatherGivenName
    const FatherGivenName = document.getElementById(
      "inputFatherGivenName"
    ).value;
    const FatherGivenName1 = document.getElementById("inputFatherGivenName");

    //inputFatherMiddleName
    const FatherMiddleName = document.getElementById(
      "inputFatherMiddleName"
    ).value;
    const FatherMiddleName1 = document.getElementById("inputFatherMiddleName");

    //inputMotherSurname
    const MotherSurname = document.getElementById("inputMotherSurname").value;
    const MotherSurname1 = document.getElementById("inputMotherSurname");

    //inputMotherfirst
    const Motherfirst = document.getElementById("inputMotherfirst").value;
    const Motherfirst1 = document.getElementById("inputMotherfirst");

    //inputMotherMiddle
    const MotherMiddle = document.getElementById("inputMotherMiddle").value;
    const MotherMiddle1 = document.getElementById("inputMotherMiddle");

    //guardianFam
    const guardianFam = document.getElementById("guardianFam").value;
    const guardianFam1 = document.getElementById("guardianFam");

    //guardianGivenName
    const guardianGivenName =
      document.getElementById("guardianGivenName").value;
    const guardianGivenName1 = document.getElementById("guardianGivenName");

    //guardianMiddle
    const guardianMiddle = document.getElementById("guardianMiddle").value;
    const guardianMiddle1 = document.getElementById("guardianMiddle");

    //guardianContact
    const guardianContact = document.getElementById("guardianContact").value;
    const guardianContact1 = document.getElementById("guardianContact");

    //firstSib
    const firstSib = document.getElementById("firstSib").value;
    const firstSib1 = document.getElementById("firstSib");

    //secSib
    const secSib = document.getElementById("secSib").value;
    const secSib1 = document.getElementById("secSib");

    //thirdSib
    const thirdSib = document.getElementById("thirdSib").value;
    const thirdSib1 = document.getElementById("thirdSib");

    // fcontact
    const fcontact = document.getElementById("fcontact").value;
    const fcontact1 = document.getElementById("fcontact");

    // mcontact
    const mcontact = document.getElementById("mcontact").value;
    const mcontact1 = document.getElementById("mcontact");

    //fland
    const fland = document.getElementById("fland").value;
    const fland1 = document.getElementById("fland");

    //mland
    const mland = document.getElementById("mland").value;
    const mland1 = document.getElementById("mland");

    //femail
    const femail = document.getElementById("femail").value;
    const femail1 = document.getElementById("femail");

    //memail
    const memail = document.getElementById("memail").value;
    const memail1 = document.getElementById("memail");

    //mocc
    const mocc = document.getElementById("mocc").value;
    const mocc1 = document.getElementById("mocc");

    //focc
    const focc = document.getElementById("focc").value;
    const focc1 = document.getElementById("focc");

    //inpYGL
    const inpYGL = document.getElementById("inpYGL").value;
    const inpYGL1 = document.getElementById("inpYGL");

    // inpuSchAdd
    const inpuSchAdd = document.getElementById("inpuSchAdd").value;
    const inpuSchAdd1 = document.getElementById("inpuSchAdd");

    //inpSch
    const inpSch = document.getElementById("inpSch").value;
    const inpSch1 = document.getElementById("inpSch");

    //inpDisTb
    const inpDisTb = document.getElementById("inpDisTb").value;
    const inpDisTb1 = document.getElementById("inpDisTb");

    //inpAddDislv
    const inpAddDislv = document.getElementById("inpAddDislv").value;
    const inpAddDislv1 = document.getElementById("inpAddDislv");

    //conditionTxtArea
    const conditionTxtArea = document.getElementById("conditionTxtArea").value;
    const conditionTxtArea1 = document.getElementById("conditionTxtArea");

    //gcashImg
    const gcashImg = document.getElementById("gcashImg").value;
    const gcashImg1 = document.getElementById("gcashImg");

    //----

    //
    const Childsurname = document.getElementById("inputChildSurname").value;
    const Childsurname1 = document.getElementById("inputChildSurname");

    //
    var childName = document.getElementById("inputChildGivenNameId").value;
    var childName1 = document.getElementById("inputChildGivenNameId");

    //
    var ChildMiddlename = document.getElementById("inputChildMiddleName").value;
    var ChildMiddlename1 = document.getElementById("inputChildMiddleName");
    //
    var city = document.getElementById("city").value;
    var city1 = document.getElementById("city");

    //
    var region = document.getElementById("region").value;
    var region1 = document.getElementById("region");

    //
    var province = document.getElementById("province").value;
    var province1 = document.getElementById("province");

    //
    var income = document.getElementsByName("income");

    //
    var childsDOB = document.getElementById("childsDOB").value;
    var childsDOB1 = document.getElementById("childsDOB");

    //
    var sex = document.getElementsByName("sex");

    //
    var causeBlindness = document.getElementById("causeBlindness").value;
    var causeBlindness1 = document.getElementById("causeBlindness");

    // console.log(surnameChild);

    //
    var adaptiveLens = document.getElementsByName("adaptiveLens");
    var stylus = document.getElementsByName("stylus");
    var artificialEyes = document.getElementsByName("artificialEyes");
    var computerScreen = document.getElementsByName("computerScreen");

    var whiteCane = document.getElementsByName("whiteCane");
    var cctvs = document.getElementsByName("CCTV");
    var wheelChair = document.getElementsByName("wheelChair");
    var largePrints = document.getElementsByName("largePrints");
    var hearingAid = document.getElementsByName("hearingAid");
    var abacus = document.getElementsByName("abacus");
    var brailler = document.getElementsByName("brailler");

    //totally blind
    var tb_option = document.getElementsByName("tb_option");

    //var lv_option = document.getElementsByName("lv_option");
    var lv_option = document.getElementsByName("lv_option");

    var physicalTheraphy = document.getElementsByName("physicalTheraphy");
    var ocupationalTheraphy = document.getElementsByName("ocupationalTheraphy");
    var speechTherapy = document.getElementsByName("speechTherapy");
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    //Letter only
    var nameRegex = /^([a-zA-Z\s]{1,50})$/;
    var numberRegex = /^([0-9]{11})$/;
    var landRegex = /^([0-9 \-()]{9,20})$/;
    var nameNumRegex = /^([a-zA-Z0-9\s]{1,50})$/;
    var nameNumComRegex = /^([a-zA-Z\,0-9\s]{1,50})$/;
    var emailRegex_ =
      /^([a-zA-Z0-9\.-]+)@([a-z0-9]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;

    // Done validating
    if (regUsername_user === "" || !nameRegex.test(regUsername_user)) {
      regUsername_user_.style.borderColor = "red";
    } else {
      regUsername_user_.style.borderColor = "#dddddd";
    }

    if (emailAcc_user === "" || !emailAcc_user.match(validRegex)) {
      emailAcc_user_.style.borderColor = "red";
    } else {
      emailAcc_user_.style.borderColor = "#dddddd";
    }

    // Validation Username
    if (inputUsername === "" || !usernameRegex.test(inputUsername)) {
      borderUserName.style.borderColor = "red";
    } else {
      borderUserName.style.borderColor = "#dddddd";
    }

    // Validation Pass
    if (inputPassword === "" || !passwordRegex.test(inputPassword)) {
      borderRegUserId.style.borderColor = "red";
    } else {
      borderRegUserId.style.borderColor = "#dddddd";
    }

    // Done validating
    if (
      Childsurname === "" ||
      !Childsurname.match(letters) ||
      !nameRegex.test(Childsurname)
    ) {
      Childsurname1.style.borderColor = "red";
      document.getElementById("invalidchildSurname").style.display = "block";
    } else {
      Childsurname1.style.borderColor = "#dddddd";
      document.getElementById("invalidchildSurname").style.display = "none";
    }

    //Done Validating
    if (
      childName === "" ||
      !childName.match(letters) ||
      !nameRegex.test(childName)
    ) {
      childName1.style.borderColor = "red";
    } else {
      childName1.style.borderColor = "#dddddd";
    }

    // middlename not empty and regex
    if (ChildMiddlename !== "" && nameRegex.test(ChildMiddlename)) {
      ChildMiddlename1.style.borderColor = "#dddddd";
    } else {
      document.getElementById("inputChildMiddleName").value = "none";
    }

    //-----------

    // FatherSurname not empty and regex
    if (FatherSurname !== "" && nameRegex.test(FatherSurname)) {
      FatherSurname1.style.borderColor = "#dddddd";
    }
    if (FatherSurname !== "" && !nameRegex.test(FatherSurname)) {
      FatherSurname1.style.borderColor = "red";
    }

    if (FatherSurname === "") {
      document.getElementById("inputFatherSurname").value = "none";
    }

    // FatherGivenName not empty and regex
    if (FatherGivenName !== "" && nameRegex.test(FatherGivenName)) {
      FatherGivenName1.style.borderColor = "#dddddd";
    }
    if (FatherGivenName !== "" && !nameRegex.test(FatherGivenName)) {
      FatherGivenName1.style.borderColor = "red";
    }

    if (FatherGivenName === "") {
      document.getElementById("inputFatherGivenName").value = "none";
    }

    // FatherMiddleName not empty and regex
    if (FatherMiddleName !== "" && nameRegex.test(FatherMiddleName)) {
      FatherMiddleName1.style.borderColor = "#dddddd";
    }
    if (FatherMiddleName !== "" && !nameRegex.test(FatherMiddleName)) {
      FatherMiddleName1.style.borderColor = "red";
    }

    if (FatherMiddleName === "") {
      document.getElementById("inputFatherMiddleName").value = "none";
    }

    // inputMotherSurname not empty and regex
    if (MotherSurname !== "" && nameRegex.test(MotherSurname)) {
      MotherSurname1.style.borderColor = "#dddddd";
    }
    if (MotherSurname !== "" && !nameRegex.test(MotherSurname)) {
      MotherSurname1.style.borderColor = "red";
    }

    if (MotherSurname === "") {
      document.getElementById("inputMotherSurname").value = "none";
    }

    // inputMotherfirst not empty and regex
    if (Motherfirst !== "" && nameRegex.test(Motherfirst)) {
      Motherfirst1.style.borderColor = "#dddddd";
    }
    if (Motherfirst !== "" && !nameRegex.test(Motherfirst)) {
      Motherfirst1.style.borderColor = "red";
    }

    if (Motherfirst === "") {
      document.getElementById("inputMotherfirst").value = "none";
    }

    // MotherMiddle not empty and regex
    if (MotherMiddle !== "" && nameRegex.test(MotherMiddle)) {
      MotherMiddle1.style.borderColor = "#dddddd";
    }
    if (MotherMiddle !== "" && !nameRegex.test(MotherMiddle)) {
      MotherMiddle1.style.borderColor = "red";
    }

    if (MotherMiddle === "") {
      document.getElementById("inputMotherMiddle").value = "none";
    }

    // guardianFam not empty and regex
    if (guardianFam !== "" && nameRegex.test(guardianFam)) {
      guardianFam1.style.borderColor = "#dddddd";
    }
    if (guardianFam !== "" && !nameRegex.test(guardianFam)) {
      guardianFam1.style.borderColor = "red";
    }

    if (guardianFam === "") {
      document.getElementById("guardianFam").value = "none";
    }

    // guardianGivenName not empty and regex
    if (guardianGivenName !== "" && nameRegex.test(guardianGivenName)) {
      guardianGivenName1.style.borderColor = "#dddddd";
    }
    if (guardianGivenName !== "" && !nameRegex.test(guardianGivenName)) {
      guardianGivenName1.style.borderColor = "red";
    }
    if (guardianGivenName === "") {
      document.getElementById("guardianGivenName").value = "none";
    }

    // guardianGivenName not empty and regex
    if (guardianMiddle !== "" && nameRegex.test(guardianMiddle)) {
      guardianMiddle1.style.borderColor = "#dddddd";
    }
    if (guardianMiddle !== "" && !nameRegex.test(guardianMiddle)) {
      guardianMiddle1.style.borderColor = "red";
    }
    if (guardianMiddle === "") {
      document.getElementById("guardianMiddle").value = "none";
    }

    // guardianContact not empty and regex
    if (guardianContact !== "" && numberRegex.test(guardianContact)) {
      guardianContact1.style.borderColor = "#dddddd";
    }
    if (guardianContact !== "" && !numberRegex.test(guardianContact)) {
      guardianContact1.style.borderColor = "red";
    }
    if (guardianContact === "") {
      document.getElementById("guardianContact").value = "00000000000";
    }

    // guardianGivenName not empty and regex
    if (firstSib !== "" && nameRegex.test(firstSib)) {
      firstSib1.style.borderColor = "#dddddd";
    }
    if (firstSib !== "" && !nameRegex.test(firstSib)) {
      firstSib1.style.borderColor = "red";
    }
    if (firstSib === "") {
      document.getElementById("firstSib").value = "none";
    }

    // secSib not empty and regex
    if (secSib !== "" && nameRegex.test(secSib)) {
      secSib1.style.borderColor = "#dddddd";
    }
    if (secSib !== "" && !nameRegex.test(secSib)) {
      secSib1.style.borderColor = "red";
    }
    if (secSib === "") {
      document.getElementById("secSib").value = "none";
    }

    // secSib not empty and regex
    if (thirdSib !== "" && nameRegex.test(thirdSib)) {
      thirdSib1.style.borderColor = "#dddddd";
    }
    if (thirdSib !== "" && !nameRegex.test(thirdSib)) {
      thirdSib1.style.borderColor = "red";
    }
    if (thirdSib === "") {
      document.getElementById("thirdSib").value = "none";
    }

    // fcontact not empty and regex
    if (fcontact !== "" && numberRegex.test(fcontact)) {
      fcontact1.style.borderColor = "#dddddd";
    }
    if (fcontact !== "" && !numberRegex.test(fcontact)) {
      fcontact1.style.borderColor = "red";
    }
    if (fcontact === "") {
      document.getElementById("fcontact").value = "00000000000";
    }

    // mcontact not empty and regex
    if (mcontact !== "" && numberRegex.test(mcontact)) {
      mcontact1.style.borderColor = "#dddddd";
    }
    if (mcontact !== "" && !numberRegex.test(mcontact)) {
      mcontact1.style.borderColor = "red";
    }
    if (mcontact === "") {
      document.getElementById("mcontact").value = "00000000000";
    }

    // fland not empty and regex
    if (fland !== "" && landRegex.test(fland)) {
      fland1.style.borderColor = "#dddddd";
    }
    if (fland !== "" && !landRegex.test(fland)) {
      fland1.style.borderColor = "red";
    }
    if (fland === "") {
      document.getElementById("fland").value = "00000000000";
    }

    // mland not empty and regex
    if (mland !== "" && landRegex.test(mland)) {
      mland1.style.borderColor = "#dddddd";
    }
    if (mland !== "" && !landRegex.test(mland)) {
      mland1.style.borderColor = "red";
    }
    if (mland === "") {
      document.getElementById("mland").value = "00000000000";
    }

    // femail not empty and regex
    if ((femail !== "" && emailRegex_.test(femail)) || femail === "none") {
      femail1.style.borderColor = "#dddddd";
    }
    if (femail !== "" && !emailRegex_.test(femail) && femail !== "none") {
      femail1.style.borderColor = "red";
    }
    if (memail === "") {
      document.getElementById("femail").value = "none";
    }

    // memail not empty and regex
    if ((memail !== "" && emailRegex_.test(memail)) || memail === "none") {
      memail1.style.borderColor = "#dddddd";
    }
    if (memail !== "" && !emailRegex_.test(memail) && memail !== "none") {
      memail1.style.borderColor = "red";
    }
    if (memail === "") {
      document.getElementById("memail").value = "none";
    }

    // mocc not empty and regex
    if (mocc !== "" && nameRegex.test(mocc)) {
      mocc1.style.borderColor = "#dddddd";
    }
    if (mocc !== "" && !nameRegex.test(mocc)) {
      mocc1.style.borderColor = "red";
    }
    if (mocc === "") {
      document.getElementById("mocc").value = "none";
    }

    // focc not empty and regex
    if (focc !== "" && nameRegex.test(focc)) {
      focc1.style.borderColor = "#dddddd";
    }
    if (focc !== "" && !nameRegex.test(focc)) {
      focc1.style.borderColor = "red";
    }
    if (focc === "") {
      document.getElementById("focc").value = "none";
    }

    // inpYGL not empty and regex
    if (nameNumRegex.test(inpYGL)) {
      inpYGL1.style.borderColor = "#dddddd";
    }
    if (!nameNumRegex.test(inpYGL)) {
      inpYGL1.style.borderColor = "red";
    }
    if (inpYGL === "") {
      document.getElementById("inpYGL").value = "none";
    }

    // inpuSchAdd not empty and regex
    if (inpuSchAdd !== "" && nameNumComRegex.test(inpuSchAdd)) {
      inpuSchAdd1.style.borderColor = "#dddddd";
    }
    if (inpuSchAdd !== "" && !nameNumComRegex.test(inpuSchAdd)) {
      inpYGL1.style.borderColor = "red";
    }
    if (inpuSchAdd === "") {
      document.getElementById("inpuSchAdd").value = "none";
    }

    // inpSch not empty and regex
    if (inpSch !== "" && nameRegex.test(inpSch)) {
      inpSch1.style.borderColor = "#dddddd";
    }
    if (inpSch !== "" && !nameRegex.test(inpSch)) {
      inpSch1.style.borderColor = "red";
    }
    if (inpSch === "") {
      document.getElementById("inpSch").value = "none";
    }

    // inpDisTb not empty and regex
    if (inpDisTb !== "" && nameRegex.test(inpDisTb)) {
      inpSch1.style.borderColor = "#dddddd";
    }
    if (inpDisTb !== "" && !nameRegex.test(inpDisTb)) {
      inpDisTb1.style.borderColor = "red";
    }
    if (inpDisTb === "") {
      document.getElementById("inpDisTb").value = "none";
    }

    // inpAddDislv not empty and regex
    if (inpAddDislv !== "" && nameRegex.test(inpAddDislv)) {
      inpAddDislv1.style.borderColor = "#dddddd";
    }
    if (inpAddDislv !== "" && !nameRegex.test(inpAddDislv)) {
      inpAddDislv1.style.borderColor = "red";
    }
    if (inpAddDislv === "") {
      document.getElementById("inpAddDislv").value = "none";
    }

    // conditionTxtArea not empty and regex
    if (conditionTxtArea !== "" && nameRegex.test(conditionTxtArea)) {
      conditionTxtArea1.style.borderColor = "#dddddd";
    }
    if (conditionTxtArea !== "" && !nameRegex.test(conditionTxtArea)) {
      conditionTxtArea1.style.borderColor = "red";
    }
    if (conditionTxtArea === "") {
      document.getElementById("conditionTxtArea").value = "none";
    }

    if (gcashImg === "") {
      gcashImg1.style.background = "red";
    } else {
      gcashImg1.style.background = "white";
    }

    //-----------

    // city not empty and regex
    if (city !== "" && nameNumRegex.test(city)) {
      city1.style.borderColor = "#dddddd";
    } else {
      city1.style.borderColor = "red";
    }

    if (city === "") {
      city1.style.borderColor = "red";
    }

    // region not empty and regex
    if (region !== "" && nameNumRegex.test(region)) {
      region1.style.borderColor = "#dddddd";
    } else {
      region1.style.borderColor = "red";
    }

    if (region === "") {
      region1.style.borderColor = "red";
    }

    // province not empty and regex
    if (province !== "" && nameNumRegex.test(province)) {
      province1.style.borderColor = "#dddddd";
    } else {
      province1.style.borderColor = "red";
    }
    if (province === "") {
      province1.style.borderColor = "red";
    }

    //DOB
    if (childsDOB === "") {
      childsDOB1.style.borderColor = "red";
      // document.getElementById("childBdayMsg").style.display = "block";
    } else {
      childsDOB1.style.borderColor = "#dddddd";
      // document.getElementById("childBdayMsg").style.display = "none";
    }

    // province not empty and regex

    if (causeBlindness !== "" && nameNumRegex.test(causeBlindness)) {
      causeBlindness1.style.borderColor = "#dddddd";
    } else {
      causeBlindness1.style.borderColor = "red";
    }

    if (causeBlindness === "") {
      causeBlindness1.style.borderColor = "red";
      // document.getElementById("invalidchildSurname").style.display = "block";
    }

    if (
      !(
        tb_option[0].checked === true ||
        tb_option[1].checked === true ||
        tb_option[2].checked === true ||
        tb_option[3].checked === true
      )
    ) {
      document.getElementById("visionLabel").style.color = "red";
    } else {
      document.getElementById("visionLabel").style.color = "black";
    }

    if (
      !(
        lv_option[0].checked === true ||
        lv_option[1].checked === true ||
        lv_option[2].checked === true ||
        lv_option[3].checked === true
      )
    ) {
      document.getElementById("visionLabel1").style.color = "red";
    } else {
      document.getElementById("visionLabel1").style.color = "black";
    }

    if (!(sex[0].checked === true || sex[1].checked === true)) {
      document.getElementById("sexMsg").style.display = "block";
    } else {
      document.getElementById("sexMsg").style.display = "none";
    }

    if (
      !(
        income[0].checked === true ||
        income[1].checked === true ||
        income[2].checked === true ||
        income[3].checked === true
      )
    ) {
      document.getElementById("monthlyIncomeTitle").style.color = "red";
      document.getElementById("monthlyIncomeTitle").style.display = "block";
    } else {
      document.getElementById("monthlyIncomeTitle").style.display = "none";
    }

    if (
      !(
        physicalTheraphy[0].checked === true ||
        physicalTheraphy[1].checked === true ||
        physicalTheraphy[2].checked === true
      ) ||
      !(
        ocupationalTheraphy[0].checked === true ||
        ocupationalTheraphy[1].checked === true ||
        ocupationalTheraphy[2].checked === true
      ) ||
      !(
        speechTherapy[0].checked === true ||
        speechTherapy[1].checked === true ||
        speechTherapy[2].checked === true
      )
    ) {
      document.getElementById("tableMessageTheraphy").style.display = "block";
      document.getElementById("tableService").style.borderStyle = "solid";
      document.getElementById("tableService").style.borderColor = "red";
    } else {
      document.getElementById("tableMessageTheraphy").style.display = "none";
      document.getElementById("tableService").style.borderStyle = "none";
    }

    if (
      !(adaptiveLens[0].checked === true || adaptiveLens[1].checked === true) ||
      !(stylus[0].checked === true || stylus[1].checked === true) ||
      !(
        artificialEyes[0].checked === true || artificialEyes[1].checked === true
      ) ||
      !(
        computerScreen[0].checked === true || computerScreen[1].checked === true
      ) ||
      !(whiteCane[0].checked === true || whiteCane[1].checked === true) ||
      !(cctvs[0].checked === true || cctvs[1].checked === true) ||
      !(wheelChair[0].checked === true || wheelChair[1].checked === true) ||
      !(largePrints[0].checked === true || largePrints[1].checked === true) ||
      !(hearingAid[0].checked === true || hearingAid[1].checked === true) ||
      !(abacus[0].checked === true || abacus[1].checked === true) ||
      !(brailler[0].checked === true || brailler[1].checked === true)
    ) {
      document.getElementById("tableMessage").style.display = "block";
      document.getElementById("tableNeed").style.borderStyle = "solid";
      document.getElementById("tableNeed").style.borderColor = "red";
    } else {
      document.getElementById("tableMessage").style.display = "none";
      document.getElementById("tableNeed").style.borderStyle = "none";
    }

    //  Get condition
    if (
      (tb_option[0].checked === true ||
        tb_option[1].checked === true ||
        tb_option[2].checked === true ||
        tb_option[3].checked === true) &&
      (lv_option[0].checked === true ||
        lv_option[1].checked === true ||
        lv_option[2].checked === true ||
        lv_option[3].checked === true) &&
      ChildMiddlename !== "" &&
      nameRegex.test(ChildMiddlename) &&
      FatherSurname !== "" &&
      nameRegex.test(FatherSurname) &&
      FatherGivenName !== "" &&
      nameRegex.test(FatherGivenName) &&
      FatherMiddleName !== "" &&
      nameRegex.test(FatherMiddleName) &&
      MotherSurname !== "" &&
      nameRegex.test(MotherSurname) &&
      Motherfirst !== "" &&
      nameRegex.test(Motherfirst) &&
      MotherMiddle !== "" &&
      nameRegex.test(MotherMiddle) &&
      guardianFam !== "" &&
      nameRegex.test(guardianFam) &&
      guardianGivenName !== "" &&
      nameRegex.test(guardianGivenName) &&
      guardianMiddle !== "" &&
      nameRegex.test(guardianMiddle) &&
      guardianContact !== "" &&
      numberRegex.test(guardianContact) &&
      firstSib !== "" &&
      nameRegex.test(firstSib) &&
      secSib !== "" &&
      nameRegex.test(secSib) &&
      thirdSib !== "" &&
      nameRegex.test(thirdSib) &&
      fcontact !== "" &&
      numberRegex.test(fcontact) &&
      mcontact !== "" &&
      numberRegex.test(mcontact) &&
      fland !== "" &&
      landRegex.test(fland) &&
      mland !== "" &&
      landRegex.test(mland) &&
      ((femail !== "" && emailRegex_.test(femail)) || femail === "none") &&
      ((memail !== "" && emailRegex_.test(memail)) || memail === "none") &&
      mocc !== "" &&
      nameRegex.test(mocc) &&
      focc !== "" &&
      nameRegex.test(focc) &&
      nameNumRegex.test(inpYGL) &&
      inpuSchAdd !== "" &&
      nameNumComRegex.test(inpuSchAdd) &&
      inpSch !== "" &&
      nameRegex.test(inpSch) &&
      inpDisTb !== "" &&
      nameRegex.test(inpDisTb) &&
      inpAddDislv !== "" &&
      nameRegex.test(inpAddDislv) &&
      conditionTxtArea !== "" &&
      nameRegex.test(conditionTxtArea) &&
      emailAcc_user.match(emailRegex_) &&
      passwordRegex.test(inputPassword) &&
      usernameRegex.test(inputUsername) &&
      (!Childsurname === "" || Childsurname.match(letters)) &&
      (!childName === "" || childName.match(letters)) &&
      !(city === "") &&
      !(region === "") &&
      !(province === "") &&
      !(childsDOB === "") &&
      (!causeBlindness === "" || causeBlindness.match(letters)) &&
      (sex[0].checked === true || sex[1].checked === true) &&
      (income[0].checked === true ||
        income[1].checked === true ||
        income[2].checked === true ||
        income[3].checked === true) &&
      (physicalTheraphy[0].checked === true ||
        physicalTheraphy[1].checked === true ||
        physicalTheraphy[2].checked === true) &&
      (ocupationalTheraphy[0].checked === true ||
        ocupationalTheraphy[1].checked === true ||
        ocupationalTheraphy[2].checked === true) &&
      (speechTherapy[0].checked === true ||
        speechTherapy[1].checked === true ||
        speechTherapy[2].checked === true) &&
      (adaptiveLens[0].checked === true || adaptiveLens[1].checked === true) &&
      (stylus[0].checked === true || stylus[1].checked === true) &&
      (artificialEyes[0].checked === true ||
        artificialEyes[1].checked === true) &&
      (computerScreen[0].checked === true ||
        computerScreen[1].checked === true) &&
      (whiteCane[0].checked === true || whiteCane[1].checked === true) &&
      (cctvs[0].checked === true || cctvs[1].checked === true) &&
      (wheelChair[0].checked === true || wheelChair[1].checked === true) &&
      (largePrints[0].checked === true || largePrints[1].checked === true) &&
      (hearingAid[0].checked === true || hearingAid[1].checked === true) &&
      (abacus[0].checked === true || abacus[1].checked === true) &&
      (brailler[0].checked === true || brailler[1].checked === true)
    ) {
      Axios.post("https://perseeption-tromagade.herokuapp.com/register", {
        data: base64EncodedImage,
        UsernameReg_Name: UsernameReg_Name,
        UsernameReg_Email: UsernameReg_Email,
        USERNAME: usernameReg,
        USER_PASSWORD: passwordReg,

        CHILD_SURNAME: CHILD_SURNAME,
        CHILD_GIVEN_NAME: CHILD_GIVEN_NAME,
        CHILD_MIDDLE_NAME: ChildMiddlename,

        FATHER_SURNAME: FatherSurname,
        FATHER_GIVEN_NAME: FatherGivenName,
        FATHER_MIDDLE_NAME: FatherMiddleName,
        FATHER_BIRTHDAY: FATHER_BIRTHDAY,

        MOTHER_SURNAME: MotherSurname,
        MOTHER_GIVEN_NAME: Motherfirst,
        MOTHER_MIDDLE_NAME: MotherMiddle,
        MOTHER_BIRTHDAY: MOTHER_BIRTHDAY,

        GUARDIAN_SURNAME: guardianFam,
        GUARDIAN_GIVEN_NAME: guardianGivenName,
        GUARDIAN_MIDDLE_NAME: guardianMiddle,
        GUARDIAN_CONTACT: guardianContact,
        //Guardian Num

        FIRST_SIBLING: firstSib,
        SECOND_SIBLING: secSib,
        THIRD_SIBLING: thirdSib,

        CITY_ADDRESS: CITY_ADDRESS,
        REGION_ADDRESS: REGION_ADDRESS,
        PROVINCE_ADDRESS: PROVINCE_ADDRESS,

        FATHER_CONTACT: fcontact,
        MOTHER_CONTACT: mcontact,
        FATHER_LANDLINE: fland,
        MOTHER_LANDLINE: mland,

        FATHER_EMAIL: femail,
        MOTHER_EMAIL: memail,

        MONTHLY_INCOME: MONTHLY_INCOME,

        FATHER_OCCUPATION: focc,
        MOTHER_OCCUPATION: mocc,

        CHILD_BIRTHDAY: CHILD_BIRTHDAY,
        SEX: SEX,

        SCHOOL_NAME: inpSch,
        YEAR_GRADE_LEVEL: inpYGL,
        SCHOOL_ADDRESS: inpuSchAdd,

        CAUSE_OF_BLINDNESS: CAUSE_OF_BLINDNESS,

        TOTALY_BLIND_EYES: TOTALY_BLIND_EYES,
        TB_ADD_DISABILITY: inpDisTb,

        LOW_VISION_EYES: LOW_VISION_EYES,
        LV_ADD_DISABILITY: inpAddDislv,

        ADAPTIVE_LENS: ADAPTIVE_LENS,
        STYLUS: STYLUS,

        ARTIFICIAL_EYES: ARTIFICIAL_EYES,
        COMPUTER_SCREEN: COMPUTER_SCREEN,

        WHITE_CANE: WHITE_CANE,
        CCTV: CCTV,

        WHEEL_CHAIR: WHEEL_CHAIR,
        LARGE_PRINTS: LARGE_PRINTS,

        HEARING_AID: HEARING_AID,
        ABACUS: ABACUS,

        BRAILLER: BRAILLER,

        PHYSICAL_THERAPHY: PHYSICAL_THERAPHY,
        OCCUPATIONAL_THERAPHY: OCCUPATIONAL_THERAPHY,
        SPEECH_THERAPHY: SPEECH_THERAPHY,

        OTHER_CONDITION: conditionTxtArea,
      });

      document.getElementById("Registered_MemberOuter").style.display = "block";
      document.getElementById("Registered_Member").style.display = "block";
    } else {
      document.getElementById("InvalidOuter").style.display = "block";
      document.getElementById("Invalid_Content").style.display = "block";

      setTimeout(function () {
        document.getElementById("InvalidOuter").style.display = "none";
      }, 2000);

      setTimeout(function () {
        document.getElementById("Invalid_Content").style.display = "none";
      }, 2000);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // Validation Typing
  const passKeyUp = () => {
    const inputRegPass = document.getElementById("regPass").value;

    const passwordRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,16}$)"
    );

    // const specialChar = /[!@#$%^&*]/g;
    if (passwordRegex.test(inputRegPass)) {
      document.getElementById("strongPass").style.display = "block";
      document.getElementById("weakPass").style.display = "none";
      document.getElementById("regPass").style.borderColor = "#dddddd";
    } else {
      document.getElementById("strongPass").style.display = "none";
      document.getElementById("weakPass").style.display = "block";
    }
  };

  // When Password is Click

  const usernameKeyUp = () => {
    const inputUsernamePass = document.getElementById("regUsername").value;
    const usernameRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,30}$)"
    );
    if (usernameRegex.test(inputUsernamePass)) {
      document.getElementById("validUsername").style.display = "block";
      document.getElementById("invalidUserName").style.display = "none";
      document.getElementById("regUsername").style.borderColor = "#dddddd";
    } else {
      document.getElementById("validUsername").style.display = "none";
      document.getElementById("invalidUserName").style.display = "block";
    }
  };

  // When Password is Click

  const passChildSur = () => {
    const Childsurname = document.getElementById("inputChildSurname").value;
    var letters = /^[A-Za-z]+$/;
    // var numbers = /^[0-9]+$/;
    if (Childsurname === "" || !Childsurname.match(letters)) {
      document.getElementById("inputChildSurname").style.borderColor = "red";
      // document.getElementById("validUsername").style.display = "block";
      // document.getElementById("invalidUserName").style.display = "none";
      document.getElementById("usernameMsg").style.display = "block";
    } else {
      document.getElementById("inputChildSurname").style.borderColor =
        "#dddddd";
      document.getElementById("usernameMsg").style.display = "none";
      // document.getElementById("validUsername").style.display = "none";
    }
  };

  const childNameKey = () => {
    const ChildName = document.getElementById("inputChildGivenNameId").value;
    var letters = /^[A-Za-z]+$/;
    // var numbers = /^[0-9]+$/;
    if (ChildName === "" || !ChildName.match(letters)) {
      document.getElementById("inputChildGivenNameId").style.borderColor =
        "red";
      // document.getElementById("validUsername").style.display = "block";
      // document.getElementById("invalidUserName").style.display = "none";
      // document.getElementById("usernameMsg").style.display = "block";
    } else {
      document.getElementById("inputChildGivenNameId").style.borderColor =
        "#dddddd";
      // document.getElementById("usernameMsg").style.display = "none";
      // document.getElementById("validUsername").style.display = "none";
    }
  };

  const cityKey = () => {
    const id = document.getElementById("city").value;
    // var letters = /^[A-Za-z]+$/;
    // var numbers = /^[0-9]+$/;
    if (id === "") {
      document.getElementById("city").style.borderColor = "red";
      // document.getElementById("validUsername").style.display = "block";
      // document.getElementById("invalidUserName").style.display = "none";
      // document.getElementById("usernameMsg").style.display = "block";
    } else {
      document.getElementById("city").style.borderColor = "#dddddd";
      // document.getElementById("usernameMsg").style.display = "none";
      // document.getElementById("validUsername").style.display = "none";
    }
  };

  const specialNeedKey = () => {
    var adaptiveLens = document.getElementsByName("adaptiveLens");
    var stylus = document.getElementsByName("stylus");
    var artificialEyes = document.getElementsByName("artificialEyes");
    var computerScreen = document.getElementsByName("computerScreen");

    var whiteCane = document.getElementsByName("whiteCane");
    var cctvs = document.getElementsByName("CCTV");
    var wheelChair = document.getElementsByName("wheelChair");
    var largePrints = document.getElementsByName("largePrints");
    var hearingAid = document.getElementsByName("hearingAid");
    var abacus = document.getElementsByName("abacus");
    var brailler = document.getElementsByName("brailler");

    // var letters = /^[A-Za-z]+$/;
    // var numbers = /^[0-9]+$/;
    if (
      !(adaptiveLens[0].checked === true || adaptiveLens[1].checked === true) ||
      !(stylus[0].checked === true || stylus[1].checked === true) ||
      !(
        artificialEyes[0].checked === true || artificialEyes[1].checked === true
      ) ||
      !(
        computerScreen[0].checked === true || computerScreen[1].checked === true
      ) ||
      !(whiteCane[0].checked === true || whiteCane[1].checked === true) ||
      !(cctvs[0].checked === true || cctvs[1].checked === true) ||
      !(wheelChair[0].checked === true || wheelChair[1].checked === true) ||
      !(largePrints[0].checked === true || largePrints[1].checked === true) ||
      !(hearingAid[0].checked === true || hearingAid[1].checked === true) ||
      !(abacus[0].checked === true || abacus[1].checked === true) ||
      !(brailler[0].checked === true || brailler[1].checked === true)
    ) {
      // document.getElementById("tableMessage").style.display = "block";
      // document.getElementById("tableNeed").style.borderStyle = "solid";
      // document.getElementById("tableNeed").style.borderColor = "red";
    } else {
      document.getElementById("tableMessage").style.display = "none";
      document.getElementById("tableNeed").style.borderStyle = "none";
    }
  };

  const TheraphyKey = () => {
    var physicalTheraphy = document.getElementsByName("physicalTheraphy");
    var ocupationalTheraphy = document.getElementsByName("ocupationalTheraphy");
    var speechTherapy = document.getElementsByName("speechTherapy");

    if (
      !(
        physicalTheraphy[0].checked === true ||
        physicalTheraphy[1].checked === true ||
        physicalTheraphy[2].checked === true
      ) ||
      !(
        ocupationalTheraphy[0].checked === true ||
        ocupationalTheraphy[1].checked === true ||
        ocupationalTheraphy[2].checked === true
      ) ||
      !(
        speechTherapy[0].checked === true ||
        speechTherapy[1].checked === true ||
        speechTherapy[2].checked === true
      )
    ) {
      // document.getElementById("tableMessageTheraphy").style.display = "block";
      // document.getElementById("tableService").style.borderStyle = "solid";
      // document.getElementById("tableService").style.borderColor = "red";
    } else {
      document.getElementById("tableMessageTheraphy").style.display = "none";
      document.getElementById("tableService").style.borderStyle = "none";
    }
  };

  const regionKey = () => {
    const ids = document.getElementById("region").value;
    // var letters = /^[A-Za-z]+$/;
    // var numbers = /^[0-9]+$/;
    if (ids === "") {
      document.getElementById("region").style.borderColor = "red";
      // document.getElementById("validUsername").style.display = "block";
      // document.getElementById("invalidUserName").style.display = "none";
      // document.getElementById("usernameMsg").style.display = "block";
    } else {
      document.getElementById("region").style.borderColor = "#dddddd";
      // document.getElementById("usernameMsg").style.display = "none";
      // document.getElementById("validUsername").style.display = "none";
    }
  };

  const provinceKey = () => {
    const ids = document.getElementById("province").value;
    // var letters = /^[A-Za-z]+$/;
    // var numbers = /^[0-9]+$/;
    if (ids === "") {
      document.getElementById("province").style.borderColor = "red";
      // document.getElementById("validUsername").style.display = "block";
      // document.getElementById("invalidUserName").style.display = "none";
      // document.getElementById("usernameMsg").style.display = "block";
    } else {
      document.getElementById("province").style.borderColor = "#dddddd";
      // document.getElementById("usernameMsg").style.display = "none";
      // document.getElementById("validUsername").style.display = "none";
    }
  };

  const causeBlindness = () => {
    const ids = document.getElementById("causeBlindness").value;
    // var letters = /^[A-Za-z]+$/;
    // var numbers = /^[0-9]+$/;
    if (ids === "") {
      document.getElementById("causeBlindness").style.borderColor = "red";
      // document.getElementById("validUsername").style.display = "block";
      // document.getElementById("invalidUserName").style.display = "none";
      // document.getElementById("usernameMsg").style.display = "block";
    } else {
      document.getElementById("causeBlindness").style.borderColor = "#dddddd";
      // document.getElementById("usernameMsg").style.display = "none";
      // document.getElementById("validUsername").style.display = "none";
    }
  };

  const DOBKey = () => {
    const ids = document.getElementById("childsDOB").value;
    // var letters = /^[A-Za-z]+$/;
    // var numbers = /^[0-9]+$/;
    if (ids === "") {
      document.getElementById("childsDOB").style.borderColor = "red";
      // document.getElementById("validUsername").style.display = "block";
      // document.getElementById("invalidUserName").style.display = "none";
      // document.getElementById("usernameMsg").style.display = "block";
    } else {
      document.getElementById("childsDOB").style.borderColor = "#dddddd";
      // document.getElementById("usernameMsg").style.display = "none";
      // document.getElementById("validUsername").style.display = "none";
    }
  };

  const back_reg_btn = () => {
    history.push("/");
  };

  const scrollCreateAcc = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollChildFam = () => {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  };

  const scrollChildData = () => {
    // window.scrollTo(0, 1335);
    window.scrollTo({
      top: 2100,
      behavior: "smooth",
    });
  };

  const scrollChildNeed = () => {
    // window.scrollTo(0, 1745);
    window.scrollTo({
      top: 2780,
      behavior: "smooth",
    });
  };

  const scrollSubmit = () => {
    // window.scrollTo(0, 2545);
    window.scrollTo({
      top: 3500,
      behavior: "smooth",
    });
  };

  const hideDisclaimer = () => {
    document.getElementById("disclaimer").style.display = "none";
    document.getElementById("disclaimerOuter").style.display = "none";
    document.getElementById("beforeCont").style.display = "block";
  };

  return (
    <div className="registrationBg" id="registrationBg">
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
          <Link className="signinHeader" to="/Login">
            Log in
          </Link>
        </div>
      </div>
      <div className="floatDisclaimer" id="disclaimerOuter">
        <div className="disclaimerContent" id="disclaimer">
          <p className="dTitle">Disclaimer</p>
          <p>
            By proceeding with accomplishing this Form, you give consent to the
            processing of your personal information. All of the given data will
            not be shared to anyone. PLEASE REMEMBER that accomplishing this
            online form DOES NOT mean that you are already a member of
            Perseeption please wait to approve your request within 24hrs.
          </p>
          <button className="disclaimerBtn" onClick={hideDisclaimer}>
            Proceed
          </button>
        </div>
      </div>

      <div className="floatRegistered_Member" id="Registered_MemberOuter">
        <div className="RegisteredMember_Content" id="Registered_Member">
          <p className="RegisteredMember_Title">You Submitted Your Form!</p>
          <p>
            Thank you for signing up in our organization! PLEASE REMEMBER that
            accomplishing this online form DOES NOT mean that you are already a
            member of Perseeption please wait to approve your request within
            24hrs.
          </p>
          <div className="btn_display">
            <Link to="/" className="back_reg_form_Btn">
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>

      <div className="floatInvalid" id="InvalidOuter">
        <div className="Invalid_Content" id="Invalid_Content">
          <p className="Invalid_Title">Alert!</p>
          <p className="invalid_reg_msg">Please Complete the Form!</p>
          {/* <div className="btn_display">
            <p className="invalid_Btn" onClick={checkForm}>
              Check my form
            </p>
          </div> */}
        </div>
      </div>

      <div className="beforeCont" id="beforeCont">
        <div className="regOuter">
          <div className="formRegContent">
            <div className="regBox">
              <div id="bk_reg_">
                <button id="bk_reg_btn" onClick={back_reg_btn}>
                  back
                </button>
              </div>
              <div className="regCont">
                {/* <p className="regTitle">Registration</p> */}
                <div className="regUserData" id="regUserId">
                  <p className="registrationTitleAccount">Create Account</p>
                  <p className="registrationSubtitleAccount">
                    (Gumawa ng account)
                  </p>
                  <div className="userInpPassUser">
                    <div className="inputNameBox">
                      <p className="usernameTxt_name">Name:</p>
                      <input
                        type="text"
                        id="regUsername_user"
                        className="regInputName"
                        placeholder="Enter Name"
                        onChange={(e) => {
                          setUsernameReg_Name(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="inputEmailBox">
                      <p className="usernameTxt">Email:</p>
                      <input
                        type="text"
                        // id="regUsername"
                        id="emailAcc_user"
                        className="regInputEmail"
                        placeholder="Enter Email"
                        // onKeyUp={usernameKeyUp}
                        onChange={(e) => {
                          setUsernameReg_Email(e.target.value);
                        }}
                        required
                      />
                    </div>
                    <div className="inputUsernameBox">
                      <p className="usernameTxt">Username:</p>
                      <input
                        type="text"
                        id="regUsername"
                        className="regInputUsername"
                        placeholder="Enter username"
                        onKeyUp={usernameKeyUp}
                        onChange={(e) => {
                          setUsernameReg(e.target.value);
                        }}
                        required
                      />
                      <p className="instructions">
                        (Consist of letters, big letters, special characters and
                        numbers)
                      </p>
                      <div className="usernameMessages">
                        <p id="validUsername" className="validUsername">
                          Valid Username
                        </p>
                        <p id="invalidUserName" className="invalidUserName">
                          Sorry, your username must be between 6-30 characters
                          long
                        </p>
                      </div>
                    </div>
                    <div className="inputPassBox">
                      <p className="passwordTxt">Password:</p>
                      <input
                        type="password"
                        id="regPass"
                        className="inputRegPass"
                        placeholder="Enter password"
                        onKeyUp={passKeyUp}
                        onChange={(e) => {
                          setPasswordReg(e.target.value);
                        }}
                      />
                      <p className="passInstructions">
                        (Consist of letters, numbers, and special characters
                        (!@#$%^&*) 8 to 16 characters only)
                      </p>
                      <div className="regPassMessages">
                        <p id="weakPass" className="invalidPass">
                          Weak Password
                        </p>
                        <p id="strongPass" className="validPass">
                          Strong Password
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* --------------------------------------------------- */}
                <div className="ChildFamilyBox" id="childFamId">
                  <div className="ChildDataCont">
                    <p className="registrationTitleAccount">
                      Family Personal Data
                    </p>
                    <p className="registrationSubtitleAccount">
                      (Personal na Datos ng Pamilya)
                    </p>
                    <div className="childFamOuter"></div>
                    <div className="fatherSec">
                      <div className="fatherSurnameBox">
                        <p className="fatherLabel">Father's Surname: </p>
                        <input
                          type="text"
                          placeholder="Enter Family Name"
                          className="inputFatherSurname"
                          id="inputFatherSurname"
                          onChange={(e) => {
                            setFATHER_SURNAME(e.target.value);
                          }}
                        />
                      </div>
                      <div className="fatherNameBox">
                        <p className="fatherLabel">Father's Name: </p>
                        <input
                          type="text"
                          placeholder="Enter Given Name"
                          className="inputFatherGivenName"
                          id="inputFatherGivenName"
                          onChange={(e) => {
                            setFATHER_GIVEN_NAME(e.target.value);
                          }}
                        />
                      </div>
                      <div className="fatherMiddlenameBox">
                        <p className="fatherLabel">Father's Middlename: </p>
                        <input
                          type="text"
                          placeholder="Enter Middle Name"
                          className="inputFatherMiddleName"
                          id="inputFatherMiddleName"
                          onChange={(e) => {
                            setFATHER_MIDDLE_NAME(e.target.value);
                          }}
                        />
                      </div>
                      <div className="fatherBirthdayBox">
                        <p className="fatherLabel">Father's Birthday: </p>
                        <input
                          type="date"
                          className="inputFatherBirthday"
                          id="fBirthday"
                          onChange={(e) => {
                            setFATHER_BIRTHDAY(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="motherCont">
                      <div className="motherSurnameBox">
                        <p className="motherLabel">Mother's Surname: </p>
                        <input
                          type="text"
                          placeholder="Enter Family Name"
                          className="inputMotherSurname"
                          id="inputMotherSurname"
                          onChange={(e) => {
                            setMOTHER_SURNAME(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mothernameBox">
                        <p className="motherLabel">Mother's Name: </p>
                        <input
                          type="text"
                          placeholder="Enter Given Name"
                          className="inputMotherfirst"
                          id="inputMotherfirst"
                          onChange={(e) => {
                            setMOTHER_GIVEN_NAME(e.target.value);
                          }}
                        />
                      </div>
                      <div className="motherMiddlenameBox">
                        <p className="motherLabel">Mother's Middlename: </p>
                        <input
                          type="text"
                          placeholder="Enter Middle Name"
                          className="inputMotherMiddle"
                          id="inputMotherMiddle"
                          onChange={(e) => {
                            setMOTHER_MIDDLE_NAME(e.target.value);
                          }}
                        />
                      </div>
                      <div className="motherBirthdayBox">
                        <p className="motherLabel">Mother's Birthday: </p>
                        <input
                          type="date"
                          id="mBirthday"
                          className="inputMotherBday"
                          onChange={(e) => {
                            setMOTHER_BIRTHDAY(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="guardianInfo">
                      <div className="guardianSurnameBox">
                        <p className="guardianLabel">Guardian Surname</p>
                        <input
                          type="text"
                          placeholder="Enter Family Name"
                          className="guardianFam"
                          id="guardianFam"
                          onChange={(e) => {
                            setGUARDIAN_SURNAME(e.target.value);
                          }}
                        />
                      </div>

                      <div className="guardiannameBox">
                        <p className="guardianLabel">Guardian Name</p>
                        <input
                          type="text"
                          placeholder="Enter Given Name"
                          className="guardianGivenName"
                          id="guardianGivenName"
                          onChange={(e) => {
                            setGUARDIAN_GIVEN_NAME(e.target.value);
                          }}
                        />
                      </div>

                      <div className="guardianMiddlenameBox">
                        <p className="guardianLabel">Guardian Middlename</p>
                        <input
                          type="text"
                          placeholder="Enter Middle Name"
                          className="guardianMiddle"
                          id="guardianMiddle"
                          onChange={(e) => {
                            setGUARDIAN_MIDDLE_NAME(e.target.value);
                          }}
                        />
                      </div>
                      <div className="guardianContactBox">
                        <p className="guardianLabel">Guardian Number</p>
                        <input
                          type="tel"
                          placeholder="Enter Contact Number"
                          className="guardianContact"
                          id="guardianContact"
                          pattern="[0-9]{11}"
                          onChange={(e) => {
                            setGUARDIAN_CONTACT(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="siblingContainer">
                      <div className="firstSibBox">
                        <p className="sibLabel">Sibling Name</p>
                        <input
                          type="text"
                          className="firstSib"
                          id="firstSib"
                          placeholder="Enter Full Name"
                          onChange={(e) => {
                            setFIRST_SIBLING(e.target.value);
                          }}
                        />
                      </div>

                      <div className="secSibBox">
                        <p className="sibLabel">Sibling Name</p>
                        <input
                          type="text"
                          className="secSib"
                          id="secSib"
                          placeholder="Enter Full Name"
                          onChange={(e) => {
                            setSECOND_SIBLING(e.target.value);
                          }}
                        />
                      </div>
                      <div className="thirdSibBox">
                        <p className="sibLabel">Sibling Name</p>
                        <input
                          type="text"
                          className="thirdSib"
                          id="thirdSib"
                          placeholder="Enter Full Name"
                          onChange={(e) => {
                            setTHIRD_SIBLING(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="addressCont">
                      <div className="cityBox">
                        <p className="addressLable">City</p>
                        <input
                          type="text"
                          className="city"
                          id="city"
                          onKeyUp={cityKey}
                          placeholder="Enter City"
                          onChange={(e) => {
                            setCITY_ADDRESS(e.target.value);
                          }}
                        />
                      </div>
                      <div className="regionBox">
                        <p className="addressLable">Region</p>
                        <input
                          type="text"
                          className="region"
                          id="region"
                          onKeyUp={regionKey}
                          placeholder="Enter Region"
                          onChange={(e) => {
                            setREGION_ADDRESS(e.target.value);
                          }}
                        />
                      </div>
                      <div className="provinceBox">
                        <p className="addressLable">Province</p>
                        <input
                          type="text"
                          className="province"
                          id="province"
                          onKeyUp={provinceKey}
                          placeholder="Enter Province"
                          onChange={(e) => {
                            setPROVINCE_ADDRESS(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="contactDetails">
                      <div className="fContactNumBox">
                        <p className="contactLable">Father's Contact: </p>
                        <input
                          type="tel"
                          className="fcontact"
                          id="fcontact"
                          placeholder="Father's Contact Number"
                          onChange={(e) => {
                            setFATHER_CONTACT(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mContactNumBox">
                        <p className="contactLable">Mother's Contact: </p>
                        <input
                          type="tel"
                          className="mcontact"
                          id="mcontact"
                          placeholder="Mother's Contact Number"
                          onChange={(e) => {
                            setMOTHER_CONTACT(e.target.value);
                          }}
                        />
                      </div>
                      <div className="flContactNumBox">
                        <p className="contactLable">Father's Landline: </p>
                        <input
                          type="tel"
                          className="fland"
                          id="fland"
                          placeholder="Father's Landline Number"
                          onChange={(e) => {
                            setFATHER_LANDLINE(e.target.value);
                          }}
                        />{" "}
                      </div>
                      <div className="mlContactNumBox">
                        <p className="contactLable">Mother's Landline: </p>
                        <input
                          type="tel"
                          className="mland"
                          id="mland"
                          placeholder="Mother's Landline Number"
                          onChange={(e) => {
                            setMOTHER_LANDLINE(e.target.value);
                          }}
                        />
                      </div>
                      <div className="fEmailBox">
                        <p className="contactLable">Father's Email: </p>
                        <input
                          className="femail"
                          id="femail"
                          type="email"
                          placeholder="Father's Email Address"
                          onChange={(e) => {
                            setFATHER_EMAIL(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mEmailBox">
                        <p className="contactLable">Mother's Email: </p>
                        <input
                          className="memail"
                          id="memail"
                          type="email"
                          placeholder="Mother's Email Address"
                          onChange={(e) => {
                            setMOTHER_EMAIL(e.target.value);
                          }}
                        />
                      </div>
                    </div>{" "}
                    <p className="monthlyIncomeTitle">
                      Combined Monthly Income of Father and Mother
                    </p>
                    <div className="monthlyInfo">
                      <input
                        type="radio"
                        name="income"
                        className="below12"
                        value="Below Ph12,000"
                        onChange={(e) => {
                          setMONTHLY_INCOME(e.target.value);
                        }}
                      />
                      <label className="monthlyIncome">Below Ph12,000</label>
                      <input
                        type="radio"
                        className="thirty"
                        name="income"
                        value="Ph12,000-30,000"
                        onChange={(e) => {
                          setMONTHLY_INCOME(e.target.value);
                        }}
                      />
                      <label className="monthlyIncome">Ph12,000-30,000</label>
                      <input
                        type="radio"
                        name="income"
                        className="fifty"
                        value="Ph30,000-50,000"
                        onChange={(e) => {
                          setMONTHLY_INCOME(e.target.value);
                        }}
                      />
                      <label className="monthlyIncome">Ph30,000-50,000</label>
                      <input
                        type="radio"
                        name="income"
                        className="above"
                        value="Above Ph50,000"
                        onChange={(e) => {
                          setMONTHLY_INCOME(e.target.value);
                        }}
                      />
                      <label className="monthlyIncome">Above Ph50,000</label>
                    </div>
                    <div id="monthlyIncomeTitle">
                      Please fill out this field!
                    </div>
                    <div className="occupation">
                      <div className="fOccuBox">
                        <p className="occuLabel">Father's Occupation:</p>
                        <input
                          type="text"
                          className="focc"
                          id="focc"
                          placeholder="Father's Occupation"
                          onChange={(e) => {
                            setFATHER_OCCUPATION(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mOccuBox">
                        <p className="occuLabel">Mother's Occupation:</p>
                        <input
                          type="text"
                          className="mocc"
                          id="mocc"
                          placeholder="Mother's Occupation"
                          onChange={(e) => {
                            setMOTHER_OCCUPATION(e.target.value);
                          }}
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Childs Data */}
                <div className="childsDataBox">
                  <p className="registrationTitleChildsData">Child's Data</p>
                  <p className="registrationSubtitleChildsData">
                    (Datos ng Bata)
                  </p>
                  <div className="childsName">
                    <div className="childSurnameBox">
                      <p className="childNameLabel">Child's Surname: </p>
                      <input
                        type="text"
                        placeholder="Enter Family Name"
                        className="inputChildSurname"
                        id="inputChildSurname"
                        onKeyUp={passChildSur}
                        onChange={(e) => {
                          setCHILD_SURNAME(e.target.value);
                        }}
                      />

                      <div className="usernameMsg" id="usernameMsg">
                        <p
                          id="invalidchildSurname"
                          className="invalidchildSurname"
                        >
                          Please enter surname
                        </p>
                      </div>
                    </div>

                    <div className="childNameBox">
                      <p className="childNameLabel">Child's Name: </p>
                      <input
                        type="text"
                        placeholder="Enter Given Name"
                        className="inputChildGivenName"
                        id="inputChildGivenNameId"
                        onKeyUp={childNameKey}
                        onChange={(e) => {
                          setCHILD_GIVEN_NAME(e.target.value);
                        }}
                      />
                      <div className="usernameNameMsg">
                        <p id="invalidchildName" className="invalidchildName">
                          Please enter name
                        </p>
                      </div>
                    </div>

                    <div className="childMiddleNameBox">
                      <p className="childNameLabel">Child's Middlename: </p>
                      <input
                        type="text"
                        placeholder="Enter Middle Name"
                        className="inputChildMiddleName"
                        id="inputChildMiddleName"
                        onChange={(e) => {
                          setCHILD_MIDDLE_NAME(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="cont9">
                    <div className="childBirthdayBox">
                      <p className="childDataLabel">Date of Birth</p>
                      <input
                        type="date"
                        id="childsDOB"
                        onInput={DOBKey}
                        className="inputDobChild"
                        onChange={(e) => {
                          setCHILD_BIRTHDAY(e.target.value);
                        }}
                      />
                    </div>
                    {/* <div id="childBdayMsg">Please fill out this field</div> */}
                    <div className="childSex">
                      <p className="childDataLabel1">Sex:</p>
                      <input
                        type="radio"
                        name="sex"
                        value="Male"
                        className="inputMale"
                        onChange={(e) => {
                          setSEX(e.target.value);
                        }}
                      />

                      <label className="maleTxt">Male</label>
                      <input
                        type="radio"
                        className="inpFem"
                        name="sex"
                        value="Female"
                        onChange={(e) => {
                          setSEX(e.target.value);
                        }}
                      />
                      <label className="femTxt">Female</label>
                    </div>
                    <div id="sexMsg">Please fill out this field</div>
                    <div className="cont10">
                      <div className="schoolBoc">
                        <p className="childDataLabel">School</p>
                        <input
                          className="inpSch"
                          id="inpSch"
                          type="text"
                          placeholder="Enter School"
                          onChange={(e) => {
                            setSCHOOL_NAME(e.target.value);
                          }}
                        />
                      </div>
                      <div className="yrLevelBox">
                        <p className="childDataLabel">Year/ Grade Level:</p>
                        <input
                          className="inpYGL"
                          id="inpYGL"
                          type="text"
                          placeholder="Enter Yr/Grade Level"
                          onChange={(e) => {
                            setYEAR_GRADE_LEVEL(e.target.value);
                          }}
                        />
                      </div>
                      <div className="schoolAddressBox">
                        <p className="childDataLabel">Schoold Address</p>
                        <input
                          type="text"
                          className="inpuSchAdd"
                          id="inpuSchAdd"
                          placeholder="Enter School Address"
                          onChange={(e) => {
                            setSCHOOL_ADDRESS(e.target.value);
                          }}
                        />
                      </div>
                      <div className="causeBlindnessBox">
                        <p className="childDataLabel">Cause of Blindness</p>
                        <input
                          type="text"
                          className="inpCause"
                          id="causeBlindness"
                          placeholder="Enter Cause of Blindness"
                          onKeyUp={causeBlindness}
                          onChange={(e) => {
                            setCAUSE_OF_BLINDNESS(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="vTitle">Vision</p>
                  <div className="cont12">
                    <p className="visionLabel" id="visionLabel">
                      Totally Blind
                    </p>
                    <div className="tbOptionBox">
                      <input
                        type="radio"
                        name="tb_option"
                        className=" tbLeft"
                        value="Left"
                        onChange={(e) => {
                          setTOTALY_BLIND_EYES(e.target.value);
                        }}
                      />
                      <label className="leftTbTxt">Left</label>
                      <input
                        type="radio"
                        className="tbRight"
                        name="tb_option"
                        value="Right"
                        onChange={(e) => {
                          setTOTALY_BLIND_EYES(e.target.value);
                        }}
                      />
                      <label className="rightTbTxt">Right</label>
                      <input
                        type="radio"
                        className="bothEyeTb"
                        name="tb_option"
                        value="Both"
                        onChange={(e) => {
                          setTOTALY_BLIND_EYES(e.target.value);
                        }}
                      />
                      <label className="bothTxt">Both: left and Right</label>
                      <input
                        type="radio"
                        className="bothEyeTb"
                        name="tb_option"
                        value="none"
                        onChange={(e) => {
                          setTOTALY_BLIND_EYES(e.target.value);
                        }}
                      />
                      <label> None</label>
                    </div>

                    <p className="visionLabel">
                      Totally Blind with Additional Disabilities:
                    </p>
                    <input
                      type="text"
                      className="inpDisTb"
                      id="inpDisTb"
                      placeholder="Enter Additional Disabilities"
                      onChange={(e) => {
                        setTB_ADD_DISABILITY(e.target.value);
                      }}
                    />
                  </div>
                  <div className="lvBox">
                    <label className="visionLabel" id="visionLabel1">
                      Low Vision
                    </label>
                    <div className="lbOptionBox">
                      <input
                        type="radio"
                        className="lvLeft"
                        name="lv_option"
                        value="Left"
                        onChange={(e) => {
                          setLOW_VISION_EYES(e.target.value);
                        }}
                      />
                      <label className="lvLeftTxt">Left</label>
                      <input
                        type="radio"
                        name="lv_option"
                        className="lvRight"
                        value="Right"
                        onChange={(e) => {
                          setLOW_VISION_EYES(e.target.value);
                        }}
                      />
                      <label className="lvRightTxt">Right</label>
                      <input
                        type="radio"
                        name="lv_option"
                        className="lvBoth"
                        value="Both"
                        onChange={(e) => {
                          setLOW_VISION_EYES(e.target.value);
                        }}
                      />
                      <label className="lvBothTxt">Both: left and Right</label>

                      <input
                        type="radio"
                        name="lv_option"
                        className="lvBoth"
                        value="none"
                        onChange={(e) => {
                          setLOW_VISION_EYES(e.target.value);
                        }}
                      />
                      <label className="lvBothTxt">None</label>
                    </div>

                    <label className="visionLabel">
                      Low Vision with Additional Disabilities
                    </label>
                    <input
                      type="text"
                      className="inpAddDislv"
                      id="inpAddDislv"
                      placeholder="Enter Additional Disabilities"
                      onChange={(e) => {
                        setLV_ADD_DISABILITY(e.target.value);
                      }}
                    />
                  </div>
                </div>
                {/* Needs of the child */}
                <div className="needsChildBox" id="needChildId">
                  <div className="NeedsOftheChild">
                    <p className="registrationTitleNeeds ">Child Needs</p>
                    <p className="registrationSubtitleNeeds ">
                      (Pangangailangan ng bata)
                    </p>
                    <div className="arrange">
                      <table
                        className="table1"
                        id="tableNeed"
                        onInput={specialNeedKey}
                      >
                        <tbody>
                          <tr>
                            <th className="NeedsTitle">Special Needs</th>
                            <th className="NeedsTitle">Yes</th>
                            <th className="NeedsTitle">No</th>
                            <th className="NeedsTitle">Learning Tools</th>
                            <th className="NeedsTitle">Yes</th>
                            <th className="NeedsTitle">No</th>
                          </tr>
                          <tr>
                            <td>Adaptive Lens</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="adaptiveLens"
                                onChange={(e) => {
                                  setADAPTIVE_LENS(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="adaptiveLens"
                                onChange={(e) => {
                                  setADAPTIVE_LENS(e.target.value);
                                }}
                              />
                            </td>
                            <td>Stylus</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="stylus"
                                onChange={(e) => {
                                  setSTYLUS(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="stylus"
                                onChange={(e) => {
                                  setSTYLUS(e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Artficial Eyes</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="artificialEyes"
                                onChange={(e) => {
                                  setARTIFICIAL_EYES(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="artificialEyes"
                                onChange={(e) => {
                                  setARTIFICIAL_EYES(e.target.value);
                                }}
                              />
                            </td>
                            <td>Computer w/ screen reading program</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="computerScreen"
                                onChange={(e) => {
                                  setCOMPUTER_SCREEN(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="computerScreen"
                                onChange={(e) => {
                                  setCOMPUTER_SCREEN(e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>White Cane</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="whiteCane"
                                onChange={(e) => {
                                  setWHITE_CANE(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="whiteCane"
                                onChange={(e) => {
                                  setWHITE_CANE(e.target.value);
                                }}
                              />
                            </td>
                            <td>CCTV</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="CCTV"
                                onChange={(e) => {
                                  setCCTV(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="CCTV"
                                onChange={(e) => {
                                  setCCTV(e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Wheel Chair</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="wheelChair"
                                onChange={(e) => {
                                  setWHEEL_CHAIR(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="wheelChair"
                                onChange={(e) => {
                                  setWHEEL_CHAIR(e.target.value);
                                }}
                              />
                            </td>
                            <td>Large Prints</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="largePrints"
                                onChange={(e) => {
                                  setLARGE_PRINTS(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="largePrints"
                                onChange={(e) => {
                                  setLARGE_PRINTS(e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Hearing Aid</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="hearingAid"
                                onChange={(e) => {
                                  setHEARING_AID(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="hearingAid"
                                onChange={(e) => {
                                  setHEARING_AID(e.target.value);
                                }}
                              />
                            </td>
                            <td>Abacus</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="abacus"
                                onChange={(e) => {
                                  setABACUS(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="abacus"
                                onChange={(e) => {
                                  setABACUS(e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Brailler</td>
                            <td>
                              <input
                                type="radio"
                                value="Yes"
                                name="brailler"
                                onChange={(e) => {
                                  setBRAILLER(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No"
                                name="brailler"
                                onChange={(e) => {
                                  setBRAILLER(e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p id="tableMessage">Please check the form</p>
                      <table
                        className="tableService"
                        id="tableService"
                        onInput={TheraphyKey}
                      >
                        <tbody>
                          <tr>
                            <th className="theraphyService">
                              Theraphy Service
                            </th>
                            <th className="theraphyService">PAVIC Program</th>
                            <th className="theraphyService">Self Pay</th>
                            <th className="theraphyService">No Theraphy</th>
                          </tr>
                          <tr>
                            <td>Physical Theraphy</td>
                            <td>
                              <input
                                type="radio"
                                value="Pavic Program"
                                name="physicalTheraphy"
                                onChange={(e) => {
                                  setPHYSICAL_THERAPHY(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="Self Pay"
                                name="physicalTheraphy"
                                onChange={(e) => {
                                  setPHYSICAL_THERAPHY(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No Theraphy"
                                name="physicalTheraphy"
                                onChange={(e) => {
                                  setPHYSICAL_THERAPHY(e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Occupational Theraphy</td>
                            <td>
                              <input
                                type="radio"
                                value="Pavic Program"
                                name="ocupationalTheraphy"
                                onChange={(e) => {
                                  setOCCUPATIONAL_THERAPHY(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="Self Pay"
                                name="ocupationalTheraphy"
                                onChange={(e) => {
                                  setOCCUPATIONAL_THERAPHY(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No Theraphy"
                                name="ocupationalTheraphy"
                                onChange={(e) => {
                                  setOCCUPATIONAL_THERAPHY(e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Speech Theraphy</td>
                            <td>
                              <input
                                type="radio"
                                value="Pavic Program"
                                name="speechTherapy"
                                onChange={(e) => {
                                  setSPEECH_THERAPHY(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="Self Pay"
                                name="speechTherapy"
                                onChange={(e) => {
                                  setSPEECH_THERAPHY(e.target.value);
                                }}
                              />
                            </td>
                            <td>
                              <input
                                type="radio"
                                value="No Theraphy"
                                name="speechTherapy"
                                onChange={(e) => {
                                  setSPEECH_THERAPHY(e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <p id="tableMessageTheraphy">Please check the form</p>
                      <div className="row">
                        <p className="otherConNeeds">
                          Other Conditions and Needs
                        </p>
                        <textarea
                          className="conditionTxtArea"
                          id="conditionTxtArea"
                          placeholder="Please Type Here"
                          onChange={(e) => {
                            setOTHER_CONDITION(e.target.value);
                          }}
                        ></textarea>
                        <p className="proofPaymentTxt">
                          Upload proof of Payment
                        </p>
                        <input
                          type="file"
                          className="uploadPayment"
                          onChange={handleFileInputChange}
                          value={fileInputState}
                          id="gcashImg"
                        />
                        <p className="uploadMessage">
                          Please Upload a Proof of Payment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="registrationBox">
                  <p className="registrationTitleB">
                    Submit Your Registration Form
                  </p>
                  <p className="registrationSubtitle">
                    (Isumite ang Iyong Form sa Pagrehistro)
                  </p>

                  <p onClick={Register} className="RegBtnReg">
                    Register
                  </p>
                  <p className="signinBtn">
                    Have an account?
                    <Link to="/Login" className="loginLink">
                      {" "}
                      Signin
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="fixedRegNav">
            <div className="regNavCont">
              <p className="titleNavReg">Registration Content</p>
              <p id="regUserIdBtn" onClick={scrollCreateAcc}>
                {/* Child & Family Personal Data */}
                Create Account
              </p>
              <p onClick={scrollChildFam}>Family Personal Data</p>
              <p onClick={scrollChildData}>Child's Data</p>
              <p onClick={scrollChildNeed}>Child Needs</p>
              <p onClick={scrollSubmit}>Submit Form</p>
            </div>
          </div>
        </div>
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

export default Registration;
