import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FilmCard from "../../components/FilmCard/FilmCard";
import { myLoans } from "../../services/ApiCalls";
import {addFilm} from "../../components/Films/filmSlice"

function Loans() {
  const token = localStorage.getItem("jwt");
  const [loans, setLoans] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const clickedMovie = (movie) => {
      dispatch(addFilm({ ...movie, details: movie }));
      navigate("/filmdetail");
    };

  useEffect(() => {
    if (loans.length === 0) {
      myLoans(token).then((loans) => setLoans(loans));
    }
  });

  if (loans.length > 0) {
    return (
      <div className="container-fluid homeDesign">
        <div className="row d-flex justify-content-center">
          <div className="col-10 rowDesign">
            {" "}
            {loans.map((loan, index) => {
              return <FilmCard key={index} movie={loan.Movie} clickedMovie={clickedMovie}/>;
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>a</div>;
  }
}

export default Loans;
