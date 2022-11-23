
import React, { useState, useEffect } from "react";
import "./Register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'react-bootstrap/Image' //esto lo añado para poder importar una imagen
import boca from '../../images/boca.png'
import rayo from '../../images/rayo.png'


const Register = () => {

  return (
    <div className="container-fluid registerDesign d-flex justify-content-center align-items-center">
      <Image className="bocaImage zoom" src={boca}></Image>
      <Image className="rayoImage zoom" src={rayo}></Image>

      <div className="row">
        <div className="col-12  text-center align-items-center" id="inputsBox">
          <p>REGISTER </p>

          <input
            className="inputDesign"
            type="Name"
            placeholder="  User name ... |"
          />
          <input
            className="inputDesign"
            type="Email"
            placeholder="  Email ... |"
          />
          <input
            className="inputDesign"
            type="Password"
            placeholder="  Password ... |"
          />
          <input
            className="inputDesign"
            type="Password"
            placeholder="  Repeat password ... |"
          />

          <div className="col text-center align-items-center">
            <button className="buttonDesign">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Register;
