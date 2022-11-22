
import React, { useState, useEffect } from "react";
import "./Register.css";
import "bootstrap/dist/css/bootstrap.min.css";


const Register = () => {

  return (

    <div className="container-fluid registerDesign  d-flex justify-content-center align-items-center">

        <div className="row">
          <div className="col inputsBox text-center align-items-center">

            <p>REGISTER </p>

            <input className="inputDesign" type="Name" placeholder="  User name ... |" />
            <input className="inputDesign" type="Email" placeholder="  Email ... |" />
            <input className="inputDesign" type="Password" placeholder="  Password ... |" />
            <input className="inputDesign" type="Password" placeholder="  Repeat password ... |" />

            <div className="col text-center align-items-center">

            {/* Aquí quiero meter los botones, pero al importarlos de bootstrap me da un error */}
            </div>




          </div>
        </div>
    </div>

  )
}


export default Register;
