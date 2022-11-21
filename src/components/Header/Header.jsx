import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addSearch, filmData, addCriteria } from "../Films/filmSlice";
import { searchMovies } from "../../services/ApiCalls";


import "./Header.css";

const Header = () => {
    const [criteria, setCriteria] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const userReduxCredentials = useSelector(userData);

      const criteriaHandler = (e) => {
        setCriteria(e.target.value);
        console.log(criteria);
      };
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

    return (
      <div className="headerDesign">
        <input
          type="text"
          name="criteria"
          onChange={(e) => criteriaHandler(e)}
        />

        <div onClick={() => navigate("/login")} className="linkDesign">
          Login
        </div>
        <div onClick={() => navigate("/register")} className="linkDesign">
          Register
        </div>
      </div>
    );
  }
// };
export default Header;
