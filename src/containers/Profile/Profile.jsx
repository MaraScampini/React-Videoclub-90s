import React, { useState, useEffect } from "react";
import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import axios from "axios";
// import { errorCheck } from "../../services/usefull";
import Image from "react-bootstrap/Image"; //esto lo añado para poder importar una imagen
import userCard from "../../assets/userCardImage.png";
import pattern1 from "../../assets/pattern1.png";




const Profile = () => {

    return (
        <form
            className="container-fluid profileDesign "
        >
            <div className="row ">

                <div className="col editData d-flex justify-content-center align-items-center">

                    <div className="infoContainer-fluid text-center justify-content-center align-items-center">


                        <h3>Edit your user data.</h3>
                        <br />


                        <input
                            className="inputDesign"
                            type="text"
                            name="username"
                            placeholder="  New user name ... |"
                        // onChange={(e) => inputHandler(e)}
                        // onBlur={(e) =>
                        //     errorHandler(e.target.name, e.target.value, "email")
                        // }
                        />

                        {/* <input
                            className="inputDesign"
                            type="text"
                            name="city"
                            placeholder="  City ... |"
                            onChange={(e) => inputHandler(e)}
                            onBlur={(e) =>
                                errorHandler(e.target.name, e.target.value, "email")
                            }
                        /> */}

                        <input
                            className="inputDesign"
                            type="Email"
                            name="email"
                            placeholder="  New email ... |"
                        // onChange={(e) => inputHandler(e)}
                        // onBlur={(e) =>
                        //     errorHandler(e.target.name, e.target.value, "email")
                        // }
                        />
                        <input
                            className="inputDesign"
                            type="Password"
                            name="password"
                            placeholder="  New password ... |"
                        // onChange={(e) => inputHandler(e)}
                        // onBlur={(e) =>
                        //     errorHandler(e.target.name, e.target.value, "email")
                        // }
                        />
                        <input
                            className="inputDesign"
                            type="Passwords"
                            name="passwords"
                            placeholder="  Repeat password ... |"
                        // onChange={(e) => inputHandler(e)}
                        // onBlur={(e) =>
                        //     errorHandler(e.target.name, e.target.value, "email")
                        // }
                        />

                        <div className="container-fluid p-2">
                            <button className="buttonDesign">Update</button>
                            <button className="buttonDesign">Back</button>

                        </div>
                    </div>
                </div>



                <div className="col editTarget d-flex justify-content-center align-items-center">

                {/* <Image className="pattern1" src={pattern1}></Image> */}
                    <div className="userCard text-center justify-content-center align-items-center">
                        
                        <p>User Card</p>
                        <Image className="userCardImage" src={userCard}></Image>
                        



                    </div>


                </div>



            </div>



            <div></div>




        </form>
    )
}


export default Profile;