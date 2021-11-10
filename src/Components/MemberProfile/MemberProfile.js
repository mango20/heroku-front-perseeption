import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./MemberProfile.css";
import { Link, useHistory } from "react-router-dom";

function MemberProfile() {
  const history = useHistory();
  Axios.defaults.withCredentials = true;
  const [USER_ID, setUSER_ID] = useState("");
  const [NAME, setNAME] = useState("");
  const [USER_PASSWORD, setUSER_PASSWORD] = useState("");
  const [EMAIL, setEMAIL] = useState("");
  const [ADMIN_NAME, setADMIN_NAME] = useState("");
  const [USERNAME, setUSERNAME] = useState("");
  const [FATHER_SURNAME, setFATHER_SURNAME] = useState("");
  const [FATHER_GIVEN_NAME, setFATHER_GIVEN_NAME] = useState("");
  const [FATHER_MIDDLE_NAME, setFATHER_MIDDLE_NAME] = useState("");
  const [FATHER_LANDLINE, setFATHER_LANDLINE] = useState("");
  const [FATHER_CONTACT, setFATHER_CONTACT] = useState("");
  const [FATHER_EMAIL, setFATHER_EMAIL] = useState("");
  const [FATHER_BIRTHDAY, setFATHER_BIRTHDAY] = useState("");
  const [FATHER_OCCUPATION, setFATHER_OCCUPATION] = useState("");
  const [MOTHER_SURNAME, setMOTHER_SURNAME] = useState("");
  const [MOTHER_GIVEN_NAME, setMOTHER_GIVEN_NAME] = useState("");
  const [MOTHER_MIDDLE_NAME, setMOTHER_MIDDLE_NAME] = useState("");
  const [MOTHER_LANDLINE, setMOTHER_LANDLINE] = useState("");
  const [MOTHER_CONTACT, setMOTHER_CONTACT] = useState("");
  const [MOTHER_EMAIL, setMOTHER_EMAIL] = useState("");
  const [MOTHER_BIRTHDAY, setMOTHER_BIRTHDAY] = useState("");
  const [MOTHER_OCCUPATION, setMOTHER_OCCUPATION] = useState("");
  const [GUARDIAN_SURNAME, setGUARDIAN_SURNAME] = useState("");
  const [GUARDIAN_GIVEN_NAME, setGUARDIAN_GIVEN_NAME] = useState("");
  const [GUARDIAN_MIDDLE_NAME, setGUARDIAN_MIDDLE_NAME] = useState("");
  const [GUARDIAN_CONTACT, setGUARDIAN_CONTACT] = useState("");
  const [MONTHLY_INCOME, setMONTHLY_INCOME] = useState("");
  const [FIRST_SIBLING, setFIRST_SIBLING] = useState("");
  const [SECOND_SIBLING, setSECOND_SIBLING] = useState("");
  const [THIRD_SIBLING, setTHIRD_SIBLING] = useState("");
  const [CITY_ADDRESS, setCITY_ADDRESS] = useState("");
  const [REGION_ADDRESS, setREGION_ADDRESS] = useState("");
  const [PROVINCE_ADDRESS, setPROVINCE_ADDRESS] = useState("");

  const [CHILD_SURNAME, setCHILD_SURNAME] = useState("");
  const [CHILD_GIVEN_NAME, setCHILD_GIVEN_NAME] = useState("");
  const [CHILD_MIDDLE_NAME, setCHILD_MIDDLE_NAME] = useState("");
  const [CHILD_BIRTHDAY, setCHILD_BIRTHDAY] = useState("");
  const [SEX, setSEX] = useState("");
  const [SCHOOL_NAME, setSCHOOL_NAME] = useState("");
  const [SCHOOL_ADDRESS, setSCHOOL_ADDRESS] = useState("");
  const [YEAR_GRADE_LEVEL, setYEAR_GRADE_LEVEL] = useState("");
  const [CAUSE_OF_BLINDNESS, setCAUSE_OF_BLINDNESS] = useState("");
  const [TOTALY_BLIND_EYES, setTOTALY_BLIND_EYES] = useState("");
  const [TB_ADD_DISABILITY, setTB_ADD_DISABILITY] = useState("");
  const [LOW_VISION_EYES, setLOW_VISION_EYES] = useState("");
  const [LV_ADD_DISABILITY, setLV_ADD_DISABILITY] = useState("");
  const [ADAPTIVE_LENS, setADAPTIVE_LENS] = useState("");
  const [ARTIFICIAL_EYES, setARTIFICIAL_EYES] = useState("");
  const [WHITE_CANE, setWHITE_CANE] = useState("");
  const [HEARING_AID, setHEARING_AID] = useState("");
  const [WHEEL_CHAIR, setWHEEL_CHAIR] = useState("");
  const [STYLUS, setSTYLUS] = useState("");
  const [COMPUTER_SCREEN, setCOMPUTER_SCREEN] = useState("");
  const [CCTV, setCCTV] = useState("");
  const [LARGE_PRINTS, setLARGE_PRINTS] = useState("");
  const [ABACUS, setABACUS] = useState("");
  const [BRAILLER, setBRAILLER] = useState("");
  const [PHYSICAL_THERAPHY, setPHYSICAL_THERAPHY] = useState("");
  const [OCCUPATIONAL_THERAPHY, setOCCUPATIONAL_THERAPHY] = useState("");
  const [SPEECH_THERAPHY, setSPEECH_THERAPHY] = useState("");
  // const [NAME, setNAME] = useState("");

  useEffect(() => {
    if (localStorage.getItem("Client") === null) {
      history.push("/");
    } else {
      var name1 = JSON.parse(localStorage.getItem("Client"));
      if (name1[0].USER_TYPE === "Admin") {
        history.push("/");
      } else {
        var name = JSON.parse(localStorage.getItem("Client"));

        console.log(name);
        console.log(name[0].NAME);
        setUSER_ID(name[0].USER_ID);
        setNAME(name[0].NAME);
        setEMAIL(name[0].EMAIL);
        setADMIN_NAME(name[0].ADMIN_NAME);
        setUSERNAME(name[0].USERNAME);
        setFATHER_SURNAME(name[0].FATHER_SURNAME);
        setFATHER_GIVEN_NAME(name[0].FATHER_GIVEN_NAME);
        setFATHER_MIDDLE_NAME(name[0].FATHER_MIDDLE_NAME);
        setFATHER_LANDLINE(name[0].FATHER_LANDLINE);
        setFATHER_CONTACT(name[0].FATHER_CONTACT);

        setFATHER_EMAIL(name[0].FATHER_EMAIL);
        setFATHER_BIRTHDAY(name[0].FATHER_BIRTHDAY);
        setFATHER_OCCUPATION(name[0].FATHER_OCCUPATION);
        setMOTHER_SURNAME(name[0].MOTHER_SURNAME);
        setMOTHER_GIVEN_NAME(name[0].MOTHER_GIVEN_NAME);
        setMOTHER_MIDDLE_NAME(name[0].MOTHER_MIDDLE_NAME);
        setMOTHER_LANDLINE(name[0].MOTHER_LANDLINE);
        setMOTHER_CONTACT(name[0].MOTHER_CONTACT);
        setMOTHER_EMAIL(name[0].MOTHER_EMAIL);
        setMOTHER_BIRTHDAY(name[0].MOTHER_BIRTHDAY);
        setMOTHER_OCCUPATION(name[0].MOTHER_OCCUPATION);
        setGUARDIAN_SURNAME(name[0].GUARDIAN_SURNAME);
        setGUARDIAN_GIVEN_NAME(name[0].GUARDIAN_GIVEN_NAME);
        setGUARDIAN_MIDDLE_NAME(name[0].GUARDIAN_MIDDLE_NAME);
        setGUARDIAN_CONTACT(name[0].GUARDIAN_CONTACT);
        setMONTHLY_INCOME(name[0].MONTHLY_INCOME);
        setFIRST_SIBLING(name[0].FIRST_SIBLING);
        setSECOND_SIBLING(name[0].SECOND_SIBLING);
        setTHIRD_SIBLING(name[0].THIRD_SIBLING);
        setCITY_ADDRESS(name[0].CITY_ADDRESS);

        setREGION_ADDRESS(name[0].REGION_ADDRESS);
        setPROVINCE_ADDRESS(name[0].PROVINCE_ADDRESS);
        setCHILD_SURNAME(name[0].CHILD_SURNAME);
        setCHILD_GIVEN_NAME(name[0].CHILD_GIVEN_NAME);
        setCHILD_MIDDLE_NAME(name[0].CHILD_MIDDLE_NAME);

        setCHILD_BIRTHDAY(name[0].CHILD_BIRTHDAY);
        setSEX(name[0].SEX);
        setSCHOOL_NAME(name[0].SCHOOL_NAME);
        setSCHOOL_ADDRESS(name[0].SCHOOL_ADDRESS);
        setYEAR_GRADE_LEVEL(name[0].YEAR_GRADE_LEVEL);

        setCAUSE_OF_BLINDNESS(name[0].CAUSE_OF_BLINDNESS);
        setTOTALY_BLIND_EYES(name[0].TOTALY_BLIND_EYES);
        setTB_ADD_DISABILITY(name[0].TB_ADD_DISABILITY);
        setLOW_VISION_EYES(name[0].LOW_VISION_EYES);
        setLV_ADD_DISABILITY(name[0].LV_ADD_DISABILITY);

        setADAPTIVE_LENS(name[0].ADAPTIVE_LENS);
        setARTIFICIAL_EYES(name[0].ARTIFICIAL_EYES);
        setWHITE_CANE(name[0].WHITE_CANE);
        setHEARING_AID(name[0].HEARING_AID);
        setWHEEL_CHAIR(name[0].WHEEL_CHAIR);

        setSTYLUS(name[0].STYLUS);
        setCOMPUTER_SCREEN(name[0].COMPUTER_SCREEN);
        setCCTV(name[0].CCTV);
        setLARGE_PRINTS(name[0].LARGE_PRINTS);
        setABACUS(name[0].ABACUS);

        setBRAILLER(name[0].BRAILLER);
        setPHYSICAL_THERAPHY(name[0].PHYSICAL_THERAPHY);
        setOCCUPATIONAL_THERAPHY(name[0].OCCUPATIONAL_THERAPHY);
        setSPEECH_THERAPHY(name[0].SPEECH_THERAPHY);
      }
    }
  }, []);

  const showAcc = () => {
    document.getElementById("EditMemberProfile_infoBg").style.display = "block";
  };

  const hideAcc = () => {
    document.getElementById("EditMemberProfile_infoBg").style.display = "none";
  };

  const updateDet_submit = (USER_ID) => {
    console.log(USER_ID);
    console.log(NAME);
    console.log(EMAIL);
    console.log(USERNAME);
    console.log(USER_PASSWORD);
    const p = document.getElementById("password_MemberDetails").value;
    if (p === "") {
      return;
    } else {
      alert("updated");
      Axios.put(
        `https://perseeption-tromagade.herokuapp.com/updateMember_Details/${USER_ID}`,
        {
          NAME: NAME,
          EMAIL: EMAIL,
          USERNAME: USERNAME,
          USER_PASSWORD: USER_PASSWORD,
        }
      );
      localStorage.clear();
      history.push("/");
    }
  };
  return (
    <div className="proBg">
      <div id="EditMemberProfile_infoBg">
        <div id="EditMemberProfile_infoIn">
          <input
            type="text"
            value={NAME}
            onChange={(e) => {
              setNAME(e.target.value);
            }}
          />
          <input
            type="text"
            value={EMAIL}
            onChange={(e) => {
              setEMAIL(e.target.value);
            }}
          />
          <input
            type="text"
            value={USERNAME}
            onChange={(e) => {
              setUSERNAME(e.target.value);
            }}
          />
          <p>
            Enter your password or your new password if you want to change it:
          </p>
          <input
            type="password"
            id="password_MemberDetails"
            onChange={(e) => {
              setUSER_PASSWORD(e.target.value);
            }}
          />
          <div className="btnUpdateMemberProfile_det">
            <button id="btnUpdateDet_back" onClick={hideAcc}>
              Back
            </button>
            <button
              id="btnUpdateDet_submit"
              onClick={() => {
                updateDet_submit(USER_ID);
              }}
            >
              Update Account
            </button>
          </div>
        </div>
      </div>
      <div className="contPro">
        <div className="member_Profile_info_">
          <div className="memproCont">
            <div className="titleMemPro__">
              <img src="/images/logoIcon.png" alt="" id="logPro" />
              <h1 className="profileTitle_">Member Profile</h1>
            </div>
            <div className="">
              <button id="showAccDetails_" onClick={showAcc}>
                Edit Account
              </button>
              <Link to="/">
                <p className="backMemberProfile">Back</p>
              </Link>
            </div>

            <div className="accData">
              <h2>Account Details</h2>
              <p>
                Name:
                <span> {NAME}</span>
              </p>
              <p>
                Email:
                <span> {EMAIL}</span>
              </p>
              <p>
                Username:
                <span> {USERNAME}</span>
              </p>
            </div>
            <div className="fathersData_">
              <h2>Father's Information</h2>
              <p>
                Father's Name:
                <span>
                  {" "}
                  {FATHER_SURNAME} {FATHER_GIVEN_NAME} {FATHER_MIDDLE_NAME}
                </span>
              </p>

              <p>
                Landline:
                <span> {FATHER_LANDLINE}</span>
              </p>

              <p>
                Contact:
                <span> {FATHER_CONTACT}</span>
              </p>

              <p>
                Email:
                <span> {FATHER_EMAIL}</span>
              </p>

              <p>
                Date of Birth:
                <span> {FATHER_BIRTHDAY}</span>
              </p>

              <p>
                Occupation:
                <span> {FATHER_OCCUPATION}</span>
              </p>
            </div>
            <div className="mothersData_">
              <h2>Mother's Information</h2>

              <p>
                Name:
                <span>
                  {" "}
                  {MOTHER_SURNAME} {MOTHER_GIVEN_NAME} {MOTHER_MIDDLE_NAME}
                </span>
              </p>

              <p>
                Landline:
                <span> {MOTHER_LANDLINE}</span>
              </p>

              <p>
                Contact:
                <span> {MOTHER_CONTACT}</span>
              </p>

              <p>
                Email:
                <span> {MOTHER_EMAIL}</span>
              </p>

              <p>
                Date of Birth:
                <span> {MOTHER_BIRTHDAY}</span>
              </p>

              <p>
                Occupation:
                <span> {MOTHER_OCCUPATION}</span>
              </p>
            </div>
            <div className="guardianssData_">
              <h2>Guardian's Information</h2>
              <p>
                Name:
                <span>
                  {" "}
                  {GUARDIAN_SURNAME} {GUARDIAN_GIVEN_NAME}{" "}
                  {GUARDIAN_MIDDLE_NAME}
                </span>
              </p>
              <p>
                Contact:
                <span>{GUARDIAN_CONTACT}</span>
              </p>
            </div>
            <div className="monthlyIncomeData_">
              <h2>Monthly Income</h2>
              <p>
                Monthly Income:
                <span> {MONTHLY_INCOME}</span>
              </p>
            </div>
            <div className="siblingsData_">
              <h2>Siblings</h2>
              <p>
                Name:
                <span> {FIRST_SIBLING}</span>
              </p>

              <p>
                Name:
                <span> {SECOND_SIBLING}</span>
              </p>

              <p>
                Name:
                <span> {THIRD_SIBLING}</span>
              </p>
            </div>
            <div className="addressData_">
              <h2>Address</h2>
              <p>
                City:
                <span> {CITY_ADDRESS}</span>
              </p>

              <p>
                Region:
                <span> {REGION_ADDRESS}</span>
              </p>

              <p>
                Province:
                <span> {PROVINCE_ADDRESS}</span>
              </p>
            </div>
            <div className="childsData_">
              <h2>Child's Data</h2>
              <p>
                Child's Name:
                <span>
                  {" "}
                  {CHILD_SURNAME} {CHILD_GIVEN_NAME} {CHILD_MIDDLE_NAME}
                </span>
              </p>
              <p>
                Date of Birth:
                <span> {CHILD_BIRTHDAY}</span>
              </p>

              <p>
                Gender:
                <span> {SEX}</span>
              </p>

              <p>
                School Name:
                <span> {SCHOOL_NAME}</span>
              </p>

              <p>
                School Address:
                <span> {SCHOOL_ADDRESS}</span>
              </p>

              <p>
                Year/ Grade Level:
                <span> {YEAR_GRADE_LEVEL}</span>
              </p>

              <p>
                Cause of Blindness:
                <span> {CAUSE_OF_BLINDNESS}</span>
              </p>

              <p>
                Totaly Blind Eyes:
                <span> {TOTALY_BLIND_EYES}</span>
              </p>

              <p>
                Totaly Blind with Disability:
                <span> {TB_ADD_DISABILITY}</span>
              </p>

              <p>
                Low Vision Eyes:
                <span> {LOW_VISION_EYES}</span>
              </p>

              <p>
                Low Vision with Disability:
                <span> {LV_ADD_DISABILITY}</span>
              </p>
            </div>
            <div className="cNeedData_">
              <h2 className="cNeedData_T">Child Needs</h2>
              <div className="special_">
                <h4>Special Needs</h4>
                <p>
                  Adaptive Lens:
                  <span> {ADAPTIVE_LENS}</span>
                </p>

                <p>
                  Artficial Eyes:
                  <span> {ARTIFICIAL_EYES}</span>
                </p>

                <p>
                  White Cane:
                  <span> {WHITE_CANE}</span>
                </p>
                <p>
                  Hearing Aid
                  <span> {HEARING_AID}</span>
                </p>
                <p>
                  Wheel Chair
                  <span> {WHEEL_CHAIR}</span>
                </p>
              </div>

              <div className="lToolsData_">
                <h4>Learning Tools</h4>
                <p>
                  Stylus:
                  <span> {STYLUS}</span>
                </p>

                <p>
                  Computer w/ screen reading program:
                  <span> {COMPUTER_SCREEN}</span>
                </p>

                <p>
                  CCTV:
                  <span> {CCTV}</span>
                </p>
                <p>
                  Large Prints:
                  <span> {LARGE_PRINTS}</span>
                </p>
                <p>
                  Abacus:
                  <span> {ABACUS}</span>
                </p>
                <p>
                  Brailler:
                  <span> {BRAILLER}</span>
                </p>
              </div>

              <div className="tServiceData_">
                <h4>Theraphy Service</h4>
                <p>
                  Physical Theraphy:
                  <span> {PHYSICAL_THERAPHY}</span>
                </p>

                <p>
                  Occupational Theraphy:
                  <span> {OCCUPATIONAL_THERAPHY}</span>
                </p>

                <p>
                  Speech Theraphy:
                  <span> {SPEECH_THERAPHY}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberProfile;
