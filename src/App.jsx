import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './containers/Home/Home';
import MovieDetail from './components/Films/MovieDetail/MovieDetail';
import Movies from './containers/Movies/Movies';
import { allMovies, homeMovies } from './services/ApiCalls';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import Loans from './containers/Loans/Loans'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/filmdetail" element={<MovieDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loans" element={<Loans />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
