import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from './containers/Home/Home';
import MovieDetail from './components/Films/MovieDetail/MovieDetail';


function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmdetail" element={<MovieDetail/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
