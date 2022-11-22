
import React, { useState, useEffect } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";



const Login = () => {

    return (
      
      <div className="container-fluid loginDesign d-flex justify-content-center align-items-center"> 
      
      <div className="row">
          <div className="col inputsBox text-center align-items-center">

            <p>LOG IN </p>

            <input className="inputDesign" type="Email" placeholder="  Email ... |" />
            <input className="inputDesign" type="Password" placeholder="  Password ... |" />
            

            <div className="col text-center align-items-center">

            <button className="buttonDesign">Log In</button>

            </div>

          </div>
        </div>
       
      
      </div>

    
      

      )    
  }


export default Login;