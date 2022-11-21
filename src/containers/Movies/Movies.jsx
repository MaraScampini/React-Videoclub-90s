import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { allMovies } from "../../services/ApiCalls";
import { useDispatch, useSelector } from "react-redux";
import { addFilm, filmData } from "../../components/Films/filmSlice";

function Movies() {
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
       console.log("2");
       allMovies().then((movies) => setMovies(movies));
     }
   });


 if(films.length !== 0 && query !== "") {
   return (
     <div className="homeDesign">
       {films.map((film, index) => {
           return (
             <div className="cardDesign" key={index}>
               <img
                 className="image"
                 src={"https://image.tmdb.org/t/p/w200/" + film.poster_path}
                 onClick={() => clickedMovie(film)}
               />
             </div>
           );
         
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
     <div className="homeError">We're sorry, the service is not available.</div>
   );
 }}





export default Movies