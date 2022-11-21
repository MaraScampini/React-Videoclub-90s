import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { addSearch, filmData, addCriteria } from "../Films/filmSlice";
import { logout, login, userData } from "../../containers/User/userSlice";
import { searchMovies } from "../../services/ApiCalls";

import "./Header.css";

const Header = () => {
  // Hooks
  const [criteria, setCriteria] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userCredentials = useSelector(userData);

  // Handlers

  const criteriaHandler = (e) => {
    setCriteria(e.target.value);
    console.log(criteria);
  };

  // Functions

  const logUserOut = () => {
    dispatch(logout({}));
    return navigate("/");
  };

  // Life-cycle
  useEffect(() => {
    dispatch(addCriteria(criteria));

    if (criteria !== "") {
      searchMovies(criteria)
        .then((result) => {
          console.log(result);
          dispatch(addSearch(result));
        })
        .catch((error) => console.error(error));
    }
    console.log(filmData);
  }, [criteria]);

  if (userCredentials?.credentials.token !== undefined) {
    return (
      <div className="headerDesign">
        <div onclick={() => navigate("/movies")} className="linkDesign">
          Movies
        </div>
        <div onclick={() => navigate("/about")} className="linkDesign">
          About Us
        </div>

        <div className="logoSearchDesign">
          <div onClick={() => navigate("/")}>LOGO</div>
          <input
            className="inputDesign"
            type="text"
            name="criteria"
            placeholder="search a film"
            onChange={(e) => criteriaHandler(e)}
          />
        </div>
        <div onClick={() => navigate("/profile")} className="linkDesign">
          Hi, {userCredentials?.credentials?.name}!
        </div>
        <div onClick={() => logout()} className="linkDesign">
          Logout
        </div>
      </div>
    );
  } else {
    return (
      <div className="headerDesign">
        <div onclick={() => navigate("/movies")} className="linkDesign">
          Movies
        </div>
        <div onclick={() => navigate("/about")} className="linkDesign">
          About Us
        </div>
        <div className="logoSearchDesign">
          <div onClick={() => navigate("/")}>LOGO</div>
          <input
            className="inputDesign"
            type="text"
            name="criteria"
            placeholder="search a film"
            onChange={(e) => criteriaHandler(e)}
          />
        </div>

        <div onClick={() => navigate("/login")} className="linkDesign">
          Login
        </div>
        <div onClick={() => navigate("/register")} className="linkDesign">
          Register
        </div>
      </div>
    );
  }
};

export default Header;
