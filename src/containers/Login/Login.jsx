
import React, { useState, useEffect } from "react";
import "./Login.css";


const Login = () => {

    return (
      
      <div className="container-fluid loginDesign d-flex justify-content-center align-items-center"> 
      
      <div className="row">
          <div className="col inputsBox text-center align-items-center">

            <p>LOG IN </p>

            <input className="inputDesign" type="Email" placeholder="  Email ... |" />
            <input className="inputDesign" type="Password" placeholder="  Password ... |" />
            <input className="inputDesign" type="Password" placeholder="  Repeat Password ... |" />

            <div className="col text-center align-items-center">

            {/* Aquí quiero meter los botones, pero al importarlos de bootstrap me da un error */}
            
            </div>

          </div>
        </div>
       
      
      </div>

    
      

      )    
  }


export default Login;