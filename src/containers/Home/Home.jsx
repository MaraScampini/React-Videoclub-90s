import React, { useState, useEffect } from "react";
import { homeMovies, myLoans } from "../../services/ApiCalls";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFilm, filmData } from "../../components/Films/filmSlice";
import { useJwt } from "react-jwt";
import { Col, Container, Row } from "react-bootstrap";
import FilmCard from "../../components/FilmCard/FilmCard";
import "./Home.css";


const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("jwt");
  let { decodedToken } = useJwt(token);

  const [movies, setMovies] = useState([]);
  const [loans, setLoans] = useState([]);

  const searchedFilm = useSelector(filmData);
  const films = searchedFilm.search;
  const query = searchedFilm.query;

  const clickedMovie = (movie) => {
    dispatch(addFilm({ ...movie, details: movie }));
    navigate("/filmdetail");
  };

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
      <Container className="container homeDesign">
        <Row className="d-flex justify-content-center">
          {films.map((film, index) => {
            return (
              <Col className="col-10 col-md-2 d-flex justify-content-center">
                <FilmCard
                  key={index}
                  movie={film}
                  clickedMovie={clickedMovie}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  } else if (token && loans.length > 0) {
    return (
      <Container className="container homeDesign">
        <Row className="d-flex justify-content-center text-center">
          <div className="fw-bold fs-2">Hello, {decodedToken?.name}!</div>
          <div className="fw-bold fs-4">These are your loans</div>
        </Row>
        <Row>
          {loans.map((movie, index) => {
            return (
              <Col className="col-10 col-md-2 d-flex justify-content-center">
                <FilmCard
                  key={index}
                  movie={movie.Movie}
                  clickedMovie={clickedMovie}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  } else if (movies.length > 0) {
    return (
      <Container className="container homeDesign">
        <Row className="d-flex justify-content-center">
          {movies.map((movie, index) => {
            return (
              <Col className="col-10 col-md-2 d-flex justify-content-center">
                <FilmCard
                  key={index}
                  movie={movie}
                  clickedMovie={clickedMovie}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
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
