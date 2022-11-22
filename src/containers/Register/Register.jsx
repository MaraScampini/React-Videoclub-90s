
import React, { useState, useEffect } from "react";
import "./Register.css";


const Register = () => {

  return (

    <div className=" container-fluid registerDesign">

      <div className=" container inputsBox"> 

        <div className="row" >

          <div className="col">

            <p>REGISTER </p>

            <input className="inputDesign" type="Email" placeholder="Email ... |" />
            <input className="inputDesign" type="Password" placeholder="Email ... |" />



          </div>




        </div>


      </div>



      {/* <input type="text" name="email" placeholder= "Email ... |"  />
                <input type="password" name="password" placeholder= "Password ... |" /> */}





    </div>





  )
}


export default Register;
