import axios from 'axios';

const upcoming = document.querySelector('.upcoming');

const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2FhN2IzMjk5NmM0N2RhMTQxZWI1N2IwZTVjZTQ3NiIsInN1YiI6IjY0N2M5OTdkZTMyM2YzMDEyNzUyM2IzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Blrs7t4WoJ6-3sy6A_Vz3twkTCmEg9nM0JyuAHg88WM';
const API_KEY = 'ccaa7b32996c47da141eb57b0e5ce476';

// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/movie/upcoming',
//   params: { language: '', page: '1' },
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2FhN2IzMjk5NmM0N2RhMTQxZWI1N2IwZTVjZTQ3NiIsInN1YiI6IjY0N2M5OTdkZTMyM2YzMDEyNzUyM2IzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Blrs7t4WoJ6-3sy6A_Vz3twkTCmEg9nM0JyuAHg88WM',
//   },
// };

// axios
//   .request(options)
//   .then(response => {
//     console.log(response.data);
//     console.log(response.data.results[0]);
//     upcoming.innerHTML = `${response.data.results[0].overview}`;
//   })
//   .catch(error => {
//     console.error(error);
//   });

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

const BASE_URL = 'https://api.themoviedb.org/3/movie/upcoming';
const options = {
  method: 'GET',
  // url: 'https://api.themoviedb.org/3/movie/upcoming',
  // params: { language: '', page: '1' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2FhN2IzMjk5NmM0N2RhMTQxZWI1N2IwZTVjZTQ3NiIsInN1YiI6IjY0N2M5OTdkZTMyM2YzMDEyNzUyM2IzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Blrs7t4WoJ6-3sy6A_Vz3twkTCmEg9nM0JyuAHg88WM',
  },
};

async function getUpcomingMovies() {
  try {
    const response = await axios.get(BASE_URL, options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

getUpcomingMovies()
  .then(data => {
    console.log(data);
    markupUpcomingMovies(data);
  })
  .catch(err => console.log(err));

function markupUpcomingMovies({ results }) {
  console.log(results);
  const randomIndex = Math.floor(Math.random() * results.length);
  console.log(randomIndex);
  console.log(results[randomIndex]);
  const {
    adult,
    backdrop_path,
    genre_ids,
    id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    video,
    vote_average,
    vote_count,
  } = results[randomIndex];

  // console.log(results.release_date);
  upcoming.innerHTML = title + ' sssssss      ' + overview;
  // const randomIndex = [];
  // while (randomIndexes.length < 3) {
  //   const randomIndex = Math.floor(Math.random() * results.length);
  //   if (!randomIndexes.includes(randomIndex)) {
  //     randomIndexes.push(randomIndex);
  //   }
}
