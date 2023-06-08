import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie/upcoming';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2FhN2IzMjk5NmM0N2RhMTQxZWI1N2IwZTVjZTQ3NiIsInN1YiI6IjY0N2M5OTdkZTMyM2YzMDEyNzUyM2IzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Blrs7t4WoJ6-3sy6A_Vz3twkTCmEg9nM0JyuAHg88WM',
  },
};

export default async function getUpcomingMovies() {
  try {
    const response = await axios.get(BASE_URL, options);
    return response.data;
  } catch (error) {
    console.log(error);
    Notiflix.Notify.failure('Oops! Something went wrong. Try again, please!');
  }
}
