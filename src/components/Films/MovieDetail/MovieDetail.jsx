import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { filmData } from "../filmSlice";
import { myLoans } from "../../../services/ApiCalls";
import { useNavigate } from "react-router-dom";
import "./MovieDetail.css";
import axios from "axios";

const URL = "http://localhost:3000";


function MovieDetail() {
  const token = localStorage.getItem("jwt");

  const [loans, setLoans] = useState([]);
       const navigate = useNavigate();


   const loanMovie = async (body, token) => {
     const config = {
       headers: { Authorization: `Bearer ${token}` },
     };
     const bodyParameters = {
       id: body.id_movie,
     };
     try {
       let res = await axios.post(`${URL}/loans/movie`, bodyParameters, config);
       navigate("/");
     } catch (error) {
       console.error(error);
     }
   };

   const returnLoan = async (body, token) => {
     const config = {
       headers: { Authorization: `Bearer ${token}` },
     };
     const bodyParameters = {
       id: body.id_movie,
     };

     try {
       let res = await axios.patch(`${URL}/loans/end`, bodyParameters, config);
       navigate("/");
     } catch (error) {
       console.error(error);
     }
   };

  useEffect(() => {
    myLoans(token).then((loans) => setLoans(loans));
  }, []);

  let myLoansIds = [];
  const getIds = () => {
    if(token){
      loans.map((loan) => {
        myLoansIds.push(loan.MovieIdMovie);
      });
    }
  };

  const selectedFilm = useSelector(filmData);
  if (selectedFilm?.id_movie !== undefined) {
    getIds();

    return (
      <div className="container-fluid" id="container">
        <div className="row d-flex justify-content-center" id="rowDesign">
          <div
            className="col-7 col-sm-5 col-lg-3 col-xl-2"
            id="cardDesignDetail"
          >
            {/* <p className="textCard">{selectedFilm.title}</p> */}
            <img
              className="imageDetail"
              src={
                "https://image.tmdb.org/t/p/w200/" + selectedFilm.poster_path
              }
              alt=""
            />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-12 col-lg-4  d-flex justify-content-center align-items-center">
            <div className="filmDetailsCard">
              <p className="filmTitle">{(selectedFilm.title).toUpperCase()}</p>
              <p className="textDetail">Directed by: {selectedFilm.director}</p>
              <p className="textDetail"> {selectedFilm.description}</p>
              {token && myLoansIds.includes(selectedFilm.id_movie) === false && (
                <div className="buttonPositioner">
                  <div
                    className="buttonDetail"
                    onClick={() => loanMovie(selectedFilm, token)}
                  >
                    Rent
                  </div>
                </div>
              )}
              {myLoansIds.includes(selectedFilm.id_movie) && (
                <div className="buttonPositioner">
                  <div
                    className="buttonDetail"
                    onClick={() => returnLoan(selectedFilm, token)}
                  >
                    Return
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
