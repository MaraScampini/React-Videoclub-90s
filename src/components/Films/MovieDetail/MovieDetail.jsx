import React from "react";
import { useSelector } from "react-redux";
import { userData } from "../../../containers/User/userSlice";
import { filmData } from "../filmSlice";

function MovieDetail() {
  const userCredentials = useSelector(userData);

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
        {userCredentials?.credentials?.token !== undefined && <div>Rent</div>}
      </div>
    );
  }
}

export default MovieDetail;
