
import React, { useState, useEffect } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { errorCheck } from "../../services/usefull";
import mouth from "../../assets/mouth.png";
import ray from "../../assets/ray.png";
import mouse from "../../assets/mouse.png"
import smile from "../../assets/smile.png"



const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = async (body) => {
    let res = await axios.post("http://localhost:3000/auth/login", body)

    let jwt = res.data.jwt;
    let credentials = {
      token: jwt
    }

    localStorage.setItem("jwt", credentials.token)
    navigate("/")
  }

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const [userError, setUserError] = useState({
    emailError: "",
    passwordError: "",
    empty: ""
  })

<<<<<<< HEAD
  let body = {
    email: user.email,
    password: user.password
  }
=======
const [userError, setUserError] = useState({
  emailError: "",
  passwordError: "",
  empty: "",
  wrongCredentials: ""
})
>>>>>>> 47d61217b55ae102f687dfe12bef161598ecb5ea

  const validateBody = (body) => {
    if (body.email !== "" && body.password !== "") { return true }
  }

  const submitLogin = (e) => {
    e.preventDefault();
    if (validateBody(body)) {
      userLogin(body)
    } else {
      setUserError((prevState) => ({
        ...prevState,
        empty: "Check all fields are filled"
      }))
    }
  }

<<<<<<< HEAD
  const inputHandler = (e) => {
    setUser((prevState) => ({
=======
const submitLogin = (e) => {
  e.preventDefault();
  if(validateBody(body)){
    userLogin(body)
      .then((created) => console.log(created))
      .catch((error) => {
        console.log(error.response.data)
        setUserError((prevState) => ({
          ...prevState,
          wrongCredentials: error.response.data.message,
        }));
      });
  } else {
    setUserError((prevState) => ({
>>>>>>> 47d61217b55ae102f687dfe12bef161598ecb5ea
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const errorHandler = (field, value, type, password) => {
    let error = "";
    error = errorCheck(value, type, password);
    setUserError((prevState) => ({
      ...prevState,
      [field + "Error"]: error
    }))
  }

  return (

    <form
      onSubmit={(e) => submitLogin(e)}
      className="container-fluid loginDesign d-flex justify-content-center align-items-center"
    >

      {/* <Image className="mouthImage zoom" src={mouth}></Image> */}
      {/* <Image className="rayImage zoom" src={ray}></Image> */}
      {/* <Image className="mouseImage zoom" src={mouse}></Image> */}
      {/* <Image className="smileImage zoom" src={smile}></Image> */}

      <div className="row">
        <div className="col text-center align-items-center" id="inputsBox">

          <div>{userError.empty}</div>
<<<<<<< HEAD

          <h3 id="loginText">LOG IN </h3>
          <hr id="line"></hr>
=======
          <div>{userError.wrongCredentials}</div>
            <p>LOG IN </p>
            <hr id="line"></hr>

            <input
              className="inputDesign"
              type="email"
              name="email"
              placeholder="  Email ... |"
              onChange={(e) => inputHandler(e)}
              onBlur={(e) =>
                errorHandler(e.target.name, e.target.value, "email")
              }
            />
            <div>{userError.emailError}</div>
            <input
              className="inputDesign"
              type="password"
              name="password"
              placeholder="  Password ... |"
              onChange={(e) => inputHandler(e)}
              onBlur={(e) =>
                errorHandler(e.target.name, e.target.value, "password")
              }
            />
            <div>{userError.passwordError}</div>
            
>>>>>>> 47d61217b55ae102f687dfe12bef161598ecb5ea

          <input className="inputDesign" type="email" name="email" placeholder="  Email ... |" onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "email")} />
          <div>{userError.emailError}</div>
          <input className="inputDesign" type="password" name="password" placeholder="  Password ... |" onChange={(e) => inputHandler(e)} onBlur={(e) => errorHandler(e.target.name, e.target.value, "password")} />
          <div>{userError.passwordError}</div>


          <div className="col text-center align-items-center">

            <button className="buttonDesign">Log In</button>

          </div>
        </div>
      </div>

    </form>


  )
}


export default Login;