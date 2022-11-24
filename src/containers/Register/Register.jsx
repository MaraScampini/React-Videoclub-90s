import React, { useState, useEffect } from "react";
import "./Register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image"; //esto lo añado para poder importar una imagen
import boca from "../../images/boca.png";
import rayo from "../../images/rayo.png";
import { userData } from "../User/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { errorCheck } from "../../services/usefull";
import axios from "axios";

const Register = () => {
  //Nos traemos las credenciales
  const credentials = useSelector(userData);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    name: "",
    address: "",
    city: "",
    email: "",
    password: "",
    password2: "",
  });

  const [userError, setUserError] = useState({
    usernameerror: "",
    nameerror: "",
    addresserror: "",
    cityerror: "",
    emailerror: "",
    passworderror: "",
    password2error: "",
    incompleteerror: "",
    emailAlreadyInBBDD: "",
  });

  const registerUser = async (body) => {
    let res = await axios.post("http://localhost:3000/auth/register", body);
    console.log(res);
    if (res) {
      navigate("/login");
    } 
    else {
      setUserError((prevState) => ({
        ...prevState,
        emailAlreadyInBBDD: "That email is already registered.",
      }));
    }
  };

  //Handlers//

  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const errorHandler = (field, value, type, password1) => {
    let error = "";
    error = errorCheck(value, type, password1);
    setUserError((prevState) => ({
      ...prevState,
      [field + "error"]: error,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateBody(body)) {
      setUserError((prevState) => ({
        ...prevState,
        incompleteerror: "",
      }));
      registerUser(body);
    } else {
      setUserError((prevState) => ({
        ...prevState,
        incompleteerror: "You must complete every field",
      }));
    }
  };

  const body = {
    username: user.username,
    name: user.name,
    address: user.address,
    city: user.city,
    email: user.email,
    password: user.password,
    password2: user.password2,
  };

  const validateBody = (body) => {
    if (
      body.username !== "" &&
      body.name !== "" &&
      body.address !== "" &&
      body.city !== "" &&
      body.email !== "" &&
      body.password !== "" &&
      body.password2 !== ""
    ) {
      return true;
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="container-fluid registerDesign d-flex justify-content-center align-items-center"
    >
      <Image className="bocaImage zoom" src={boca}></Image>
      <Image className="rayoImage zoom" src={rayo}></Image>

      <div className="row">
        <div className="col-12 inputsBox text-center align-items-center">
          <div>{userError.incompleteerror}</div>
          <div>{userError.emailAlreadyInBBDD}</div>

          <p>REGISTER </p>

          <input
            onBlur={(e) => errorHandler(e.target.name, e.target.value, "text")}
            onChange={inputHandler}
            className="inputRegDesign"
            type="text"
            placeholder="  User name ... |"
            name="username"
          />
          <div className="errorInput">{userError.usernameerror}</div>
          <input
            onBlur={(e) => errorHandler(e.target.name, e.target.value, "text")}
            onChange={inputHandler}
            className="inputRegDesign"
            type="text"
            placeholder="  Name ... |"
            name="name"
          />
          <div className="errorInput">{userError.nameerror}</div>
          <input
            onBlur={(e) => errorHandler(e.target.name, e.target.value, "text")}
            onChange={inputHandler}
            className="inputRegDesign"
            type="text"
            placeholder="  Address ... |"
            name="address"
          />
          <div className="errorInput">{userError.addresserror}</div>
          <input
            onBlur={(e) => errorHandler(e.target.name, e.target.value, "text")}
            onChange={inputHandler}
            className="inputRegDesign"
            type="text"
            placeholder="  City ... |"
            name="city"
          />
          <div className="errorInput">{userError.cityerror}</div>
          <input
            onBlur={(e) => errorHandler(e.target.name, e.target.value, "email")}
            onChange={inputHandler}
            className="inputRegDesign"
            type="Email"
            placeholder="  Email ... | "
            name="email"
          />
          <div className="errorInput">{userError.emailerror}</div>
          <input
            onBlur={(e) =>
              errorHandler(e.target.name, e.target.value, "password")
            }
            onChange={inputHandler}
            className="inputRegDesign"
            type="Password"
            placeholder="  Password ... |"
            name="password"
          />
          <div className="errorInput">{userError.passworderror}</div>
          <input
            onBlur={(e) =>
              errorHandler(
                e.target.name,
                e.target.value,
                "password2",
                user.password
              )
            }
            onChange={inputHandler}
            className="inputRegDesign"
            type="Password"
            placeholder="  Repeat password ... |"
            name="password2"
          />
          <div className="errorInput">{userError.password2error}</div>

          <div className="col text-center align-items-center">
            <button className="buttonDesign">Register</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
