import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { filmData } from "../filmSlice";
import { loanMovie, returnLoan } from "../../../services/ApiCalls";
import { myLoans } from "../../../services/ApiCalls";

function MovieDetail() {
  const token = localStorage.getItem("jwt");

  const [loans, setLoans] = useState([]);

  useEffect(() => {
    myLoans(token).then((loans) => setLoans(loans));
  }, []);

  let myLoansIds = [];
  const getIds = () => {
    loans.map((loan) => {
      myLoansIds.push(loan.MovieIdMovie);
    });
  };

  const selectedFilm = useSelector(filmData);
  if (selectedFilm?.id_movie !== undefined) {
    getIds();

    return (
      <div>
        <p>{selectedFilm.title}</p>
        <div>
          <img
            className="image"
            src={"https://image.tmdb.org/t/p/w200/" + selectedFilm.poster_path}
            alt=""
          />
          <p> {selectedFilm.description}</p>
        </div>
        {token && myLoansIds.includes(selectedFilm.id_movie) === false && (
          <div onClick={() => loanMovie(selectedFilm, token)}>Rent</div>
        )}
        {myLoansIds.includes(selectedFilm.id_movie) && (
          <div onClick={() => returnLoan(selectedFilm, token)}>Return</div>
        )}
      </div>
    );
  }
}

export default MovieDetail;
