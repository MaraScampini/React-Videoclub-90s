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

    return res.data.resp;
  } catch (error) {
    console.error(error);
  }
};

export const editUser = async (body, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = {
    username: body.username,
    password: body.password,
  };
  try {
    let res = await axios.patch(`${URL}/users/edit`, bodyParameters, config);
    return res.data.resp;
  } catch (error) {
    console.error(error);
  }
};

export const getAllLoans = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    let res = await axios.get(`${URL}/loans/`, config);
    return res.data.resp;
  } catch (error) {
    console.error(error);
  }
}

export const getAllUsers = async (token) => {
   const config = {
     headers: { Authorization: `Bearer ${token}` },
   };
   try {
     let res = await axios.get(`${URL}/users/all`, config);
          console.log(res);

     return res.data;
   } catch (error) {
     console.error(error);
   }
}

export const getAllDeletedUsers = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    let res = await axios.get(`${URL}/users/deleted`, config);
    console.log(res);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (body, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = {
    email: body.email,
  };
  try {
    let res = await axios.patch(`${URL}/users/delete`, bodyParameters, config)
    console.log(body)
    return res;
  } catch (error) {
    
  }
}