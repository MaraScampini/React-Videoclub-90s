import axios from 'axios'

const URL = 'http://localhost:3000';

export const homeMovies = async () => {
  try {
    let res = await axios.get(`${URL}/movies/tr`)
    return res.data;
  } catch (error) {
    console.error(error)
  }
}

export const detailMovie = async (id) => {
  try {
    let res = await axios.get(`${URL}/movies/id/${id}`);
    return res.data;
  } catch (error) {
    
  }
}