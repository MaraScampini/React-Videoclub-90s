import React, { useState, useEffect } from "react";
import "./Home.css";
import { homeMovies, myLoans } from "../../services/ApiCalls";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFilm, filmData } from "../../components/Films/filmSlice";
import FilmCard from "../../components/FilmCard/FilmCard";
import {useJwt} from 'react-jwt'

const Home = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("jwt");
  let { decodedToken } = useJwt(token);
  if (decodedToken === null) {
    decodedToken = { name: "" };
  }
  const [loans, setLoans] = useState([]);

  const clickedMovie = (movie) => {
    dispatch(addFilm({ ...movie, details: movie }));
    navigate("/filmdetail");
  };

  const searchedFilm = useSelector(filmData);
  console.log(searchedFilm);
  const films = searchedFilm.search;
  const query = searchedFilm.query;

  useEffect(() => {
    if (movies.length === 0) {
      homeMovies().then((movies) => setMovies(movies));
    }
  });

  useEffect(() => {
    if (token) {
      myLoans(token).then((loans) => setLoans(loans));
    }
  }, []);

  if (films.length !== 0 && query !== "") {
    return (
      <div className="container-fluid homeDesign">
        <div className="row d-flex justify-content-center">
          <div className="col-10 rowDesign">
            {films.map((film, index) => {
              return (
                <FilmCard
                  key={index}
                  movie={film}
                  clickedMovie={clickedMovie}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  } else if (token && loans.length > 0) {
    return (
      <div className="container-fluid homeDesign">
        <div className="row d-flex justify-content-center text-center">
          <div className="fw-bold fs-2">Hello, {decodedToken.name}!</div>
          <div className="fw-bold fs-4">These are your loans</div>
          <div className="col-10 rowDesign">
            {loans.map((movie, index) => {
              return (
                <FilmCard
                  key={index}
                  movie={movie.Movie}
                  clickedMovie={clickedMovie}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  } else if (movies.length > 0) {
    return (
      <div className="container-fluid homeDesign">
        <div className="row d-flex justify-content-center">
          <div className="col-10 rowDesign">
            {movies.map((movie, index) => {
              return (
                <FilmCard
                  key={index}
                  movie={movie}
                  clickedMovie={clickedMovie}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="homeDesignEmpty">
        We're sorry, the service is not available.
      </div>
    );
  }
};

export default Home;
