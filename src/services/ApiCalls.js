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

  export const searchMovies = async (criteria) => {
    try {
      let res = await axios.get(
        `http://localhost:3000/movies/title/${criteria}`
      );
      return res.data;
    } catch (error) {}
  };