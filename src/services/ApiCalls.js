import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const URL = "http://localhost:3000";

export const homeMovies = async () => {
  try {
    let res = await axios.get(`${URL}/movies/tr`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const allMovies = async () => {
  try {
    let res = await axios.get(`${URL}/movies/`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const searchMovies = async (criteria) => {
  try {
    let res = await axios.get(`http://localhost:3000/movies/title/${criteria}`);
    return res.data;
  } catch (error) {}
};


export const myLoans = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    let res = await axios.get(`${URL}/loans/myloans`, config);
        console.log(res);

    return res.data.resp
  } catch (error) {
    console.error(error);
  }
};


