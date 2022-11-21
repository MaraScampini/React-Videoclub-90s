import React, { useState, useEffect } from "react";
import "./Home.css";
import { homeMovies, detailMovie } from "../../services/ApiCalls";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFilm } from "../../components/Films/filmSlice";


const Home = () => {

  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickedMovie = (movie) => {
    dispatch(addFilm({...movie, details: movie}))
    navigate("/filmdetail")
  }

  useEffect(()=> {
    if(movies.length === 0){
      homeMovies()
      .then((movies) => setMovies(movies))
    }
  })

if (movies.length > 0) {
  return (
   <div className="homeDesign">
    {movies.map((movie, index) => {
      return (
        <div className="cardDesign" key={index}>
          <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} 
          onClick={()=> clickedMovie(movie)} />
        </div>
      );
    })}
   </div>
  )
}



}


export default Home;
