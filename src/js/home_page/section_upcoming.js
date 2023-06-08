import Notiflix from 'notiflix';
import getUpcomingMovies from '../api/upcomingAPI';
import markupUpcomingMovies from '../markup/upcomingMarkup';

getUpcomingMovies()
  .then(data => {
    markupUpcomingMovies(data);
  })
  .catch(error => {
    console.log(error);
    Notiflix.Notify.failure('Oops! Something went wrong. Try again, please!');
  });
