import React from 'react'
import { useSelector } from "react-redux";
import { filmData } from "../filmSlice";

function MovieDetail() {

  const selectedFilm = useSelector(filmData);
  if(selectedFilm?.id_movie !== undefined){
    return (
      <div>
        <p>{selectedFilm.title}</p>
        <img
          className="image"
          src={"https://image.tmdb.org/t/p/w200/" + selectedFilm.poster_path}
          alt=""
        />
        <p> {selectedFilm.description}</p>
      </div>
    );
  }
}

export default MovieDetail