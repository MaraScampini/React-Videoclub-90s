import React, { useState, useEffect } from "react";
import "./Home.css";
import { homeMovies } from "../../services/ApiCalls";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFilm, filmData } from "../../components/Films/filmSlice";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickedMovie = (movie) => {
    dispatch(addFilm({ ...movie, details: movie }));
    navigate("/filmdetail");
  };

  const searchedFilm = useSelector(filmData);
  const films = searchedFilm.search;
  const query = searchedFilm.query;

  useEffect(() => {
    if (movies.length === 0) {
      homeMovies().then((movies) => setMovies(movies));
    }
  });

  if (films.length !== 0 && query !== "") {
    return (
      <div className="homeDesign">
        {films.map((film, index) => {
          if (film.poster_path !== null) {
            return (
              <div className="cardDesign" key={index}>
                <img
                  className="image"
                  src={"https://image.tmdb.org/t/p/w200/" + film.poster_path}
                  onClick={() => clickedMovie(film)}
                />
              </div>
            );
          }
        })}
      </div>
    );
  } else if (movies.length > 0) {
    return (
      <div className="homeDesign">
        {movies.map((movie, index) => {
          return (
            <div className="cardDesign" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                onClick={() => clickedMovie(movie)}
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="homeError">
        We're sorry, the service is not available.
      </div>
    )
  }



};

export default Home;
