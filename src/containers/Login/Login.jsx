
import React, { useState, useEffect } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";



const Login = () => {

  return (

    <form
      className="container-fluid loginDesign d-flex justify-content-center align-items-center"
    >

      <div className="row">
        <div className="col inputsBox text-center align-items-center">

          <div className="row">
          <div className="col text-center align-items-center" id="inputsBox">

          <h3>LOG IN </h3>
          <hr id="line"></hr>

            <input className="inputDesign" type="Email" placeholder="  Email ... |" />
            <input className="inputDesign" type="Password" placeholder="  Password ... |" />


<div className="col text-center align-items-center">

  <button className="buttonDesign">Log In</button>


          </div>



          </div>

         

          </div>

        </div>
      </div>


    </form>

    // <div className="container-fluid loginDesign d-flex justify-content-center align-items-center"> 




    // </div>




  )
}


export default Login;