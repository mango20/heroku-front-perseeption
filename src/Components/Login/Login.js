import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
// import { response } from "express";
// import { useHistory } from "react-router-dom";

function Login() {
  Axios.defaults.withCredentials = true;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [loginMessage, setloginMessage] = useState("");

  const [ForgotEmail, setForgotEmail] = useState("");

  const history = useHistory();

  const login = () => {
    Axios.post("https://perseeption-tromagade.herokuapp.com/login", {
      USERNAME: username,
      USER_PASSWORD: password,
    }).then((response) => {
      alert(response.data.message);
      // setloginMessage(response.data.message);
      // document.getElementById("bgLoginStats").style.display = "block";
      // setTimeout(function () {
      //   document.getElementById("bgLoginStats").style.display = "none";
      // }, 3000);
      console.log(response.data);
      console.log(response.data.result);
      var userDetails = response.data.result;
      localStorage.setItem("Client", JSON.stringify(userDetails));
      if (response.data.result[0].USER_TYPE === "Admin") {
        history.push("/AdminDashboard");
      } else {
        history.push("/");
      }
    });
  };
  // Axios.defaults.withCredentials = true;
  // console.log((Axios.defaults.withCredentials = true));
  // const Login = ({updateUser}) => {
  //   Axios.post("https://perseeption-tromagade.herokuapp.com/login", {
  //     USERNAME: username,
  //     USER_PASSWORD: password,
  //   }).then((response) => {
  //     console.log(response);
  //     // setLoginStatus(response);
  //     if (!response.data.auth) {
  //       setLoginStatus(false);
  //       setloginMessage(response.data.message);
  //       const errorMgs = (document.getElementById("errorMsg").style.display =
  //         "block");
  //       setTimeout(function () {
  //         document.getElementById("errorMsg").style.display = "none";
  //       }, 3000);
  //       // const errorMgs =
  //       //   ((document.getElementById("errorMsg").style.display = "block"), 1000);
  //     } else {
  //       console.log(response.data);
  //       // localStorage.setItem("USER_ID", response.data.token);
  //       localStorage.setItem("USER_ID", response.data.result[0].USER_TYPE);
  //       localStorage.getItem(response.data.result);
  //       setLoginStatus(true);
  //       setloginMessage(response.data.message);
  //       const l =
  //         ((document.getElementById("bgLoginStats").style.display = "block"),
  //         10000);
  //       // document.getElementsById("bgLoginStats").style.display = "block";
  //       console.log(response.data.result[0].message);
  //       if (response.data.result[0].USER_TYPE === "Admin") {
  //         console.log(response.data.result[0].USER_TYPE);
  //         Axios.defaults.withCredentials = true;
  //         // history.pushState("")
  //         // history.push("/AdminDashboard");
  //         setTimeout(function () {
  //           // window.location = "https://perseeption.com/AdminDashboard";
  //           history.push("/AdminDashboard");
  //         }, 1800);
  //         // window.location = "/AdminDashboard";
  //       } else {
  //         Axios.defaults.withCredentials = true;
  //         // document.getElementsById("LoginHeader").style.visibility = "hidden";
  //         history.push("/");
  //       }
  //     }
  //   });
  // };

  // // const userAuthentication = () => {
  // //   Axios.get("https://perseeption-tromagade.herokuapp.com/isUserAuth", {
  // //     headers: {
  // //       "x-access-token": localStorage.getItem("token"),
  // //     },
  // //   }).then((response) => {
  // //     console.log(response);
  // //   });
  // // };

  // useEffect(() => {
  //   Axios.get("https://perseeption-tromagade.herokuapp.com/login").then(
  //     (response) => {
  //       if (response.data.loggedIn === true) {
  //         setLoginStatus(response.data.user[0].USERNAME);
  //         console.log(response.data.user[0].USERNAME);
  //       }
  //     }
  //   );
  // }, []);

  const forgotPass = () => {
    document.getElementById("popForgot").style.display = "block";
    document.getElementById("modalForgot").style.display = "grid";
  };
  const [emailmsg, setEmailMsg] = useState("");
  const submitEmail = () => {
    Axios.post("https://perseeption-tromagade.herokuapp.com/resetPassword", {
      ForgotEmail: ForgotEmail,

      // USER_ID: USER_ID,
    }).then((response) => {
      setEmailMsg(response.data.message);
      if (response.data.message == "Email not found") {
        document.getElementById("emailMsg").style.display = "block";
        setTimeout(function () {
          document.getElementById("emailMsg").style.display = "none";
        }, 3000);
        console.log(response.data);
      } else {
        document.getElementById("emailMsg").style.display = "block";
        document.getElementById("emailMsg").style.backgroundColor = "green";
        // setTimeout(function () {
        //   document.getElementById("emailMsg").style.display = "none";
        // }, 3000);
        // console.log(response.data);
      }
    });
  };

  const backToLogin = () => {
    document.getElementById("popForgot").style.display = "none";
    document.getElementById("modalForgot").style.display = "none";
  };
  return (
    <div className="LoginBg">
      <div id="popForgot">
        <div id="modalForgot">
          <h1>Forgot your password?</h1>

          <p>
            Enter your email you used to sign up to receive a link to reset your
            password
          </p>
          <h4 id="emailMsg">{emailmsg}</h4>
          <input
            type="text"
            id="emailForgot"
            placeholder="Enter Email"
            onChange={(e) => {
              setForgotEmail(e.target.value);
            }}
          />
          <button id="submitEmailForgot" onClick={submitEmail}>
            Continue
          </button>
          <h3 id="backForgot" onClick={backToLogin}>
            Back to Login
          </h3>
        </div>
      </div>
      <div className="login">
        <div className="loginOut">
          <div className="loginContainer">
            {/* <p className="titleLog">Login</p> */}
            <Link to="/" className="fa fa-times"></Link>
            <div className="inputUsernameLoginOutside">
              <h3 id="errorMsg">{loginMessage}</h3>
              <input
                type="text"
                placeholder="Enter username"
                className="inputUsernameLogin"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <input
              type="password"
              placeholder="Enter password"
              className="inputPasswordLogin"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p id="forgotPass" onClick={forgotPass}>
              Forgot password?
            </p>
            <p onClick={login} className="loginUserBtn">
              Sign In
            </p>

            <span className="dont">
              Don't have an account?
              <Link to="/Registration" className="dontHaveAcc">
                Signup
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="bgLoginStats" id="bgLoginStats">
        <div className="LoginStats">
          {/* <p className="fa fa-times" id="closeBtn"></p> */}
          <img
            src="/images/logoIcon.png"
            alt="icon"
            className="LoginstatusIcon"
          />
          <h1>{loginMessage}</h1>{" "}
        </div>
      </div>
    </div>
  );
}

export default Login;
