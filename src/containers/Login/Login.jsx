
import React, { useState, useEffect } from "react";
import "./Login.css";


const Login = () => {

    return (
      
      <div className="loginDesign"> Soy Login
      
      
            <div className="inputsContainer">
                <input type="text" name="email" placeholder= "Email ... |"  />
                <input type="password" name="password" placeholder= "Password ... |" />
                <Button variant="light">Light</Button>{' '}
            </div>
      
      
      </div>

    
            // <div className="inputsContainer">
            // <input type="text" name="email" placeholder= "Email ... |" onChange={(e) => inputHandler(e)} />
            // <input type="password" name="password" placeholder= "Password ... |" onChange={(e) => inputHandler(e)} />
            // <Button variant="light">Light</Button>{' '}
            // </div>

      

      )    
  }


export default Login;