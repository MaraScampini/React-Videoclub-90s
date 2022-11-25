import React from "react";
import { useSelector } from "react-redux";
import { userData } from "../../../containers/User/userSlice";
import { filmData } from "../filmSlice";
import { useJwt } from "react-jwt";
import { loanMovie } from "../../../services/ApiCalls";

function MovieDetail() {
  const token = localStorage.getItem("jwt")
  
  const selectedFilm = useSelector(filmData);
  if (selectedFilm?.id_movie !== undefined) {
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
        {token && <div onClick={()=>loanMovie(selectedFilm, token)}>Rent</div>}
      </div>
    );
  }
}

export default MovieDetail;
