import { fetchTrendingMoviesByDay } from '../api/fetch-api.js';
import { onTrailerBtnClick } from '../modals/modal_trailer.js';
import { heroRefs } from '../refs/hero-refs.js';
// import { onOpenModalFilm } from '../modals/modal_film.js';
import { onOpenModalFilmById } from '../modals/modal_film.js';

export const markupRandomTrendingMovie = async () => {
  let markup = '';
  let posterStyle = 'background-size: cover';
  const randomNum = Math.floor(Math.random() * 20) + 0;

  try {
    const { results } = await fetchTrendingMoviesByDay();
    const { id, title, overview, backdrop_path, vote_average } =
      results[randomNum];
    const ratingValue = vote_average * 10;
    const posterUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`;

    if (window.innerWidth < 768) {
      posterStyle = 'background-size: 768px; background-position: center';
    }

    markup = `
      <div class="hero__wrap" style="background: linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(${posterUrl}); ${posterStyle}; background-repeat: no-repeat;">
        <div class="container">
          <div class="hero__inner" >
            <h1 class="hero__title">${title}</h1>
            <div class="hrating">
              <div class="hrating__body">
                <div class="hrating__active" style="width: ${ratingValue}%;"></div>
                <div class="hrating__items">
                  <input type="radio" class="hrating__item" value="1" name="rating" />
                  <input type="radio" class="hrating__item" value="2" name="rating" />
                  <input type="radio" class="hrating__item" value="3" name="rating" />
                  <input type="radio" class="hrating__item" value="4" name="rating" />
                  <input type="radio" class="hrating__item" value="5" name="rating" />
                </div>
              </div>
            </div>
            <p class="hero__text hero__text--trunc">
              ${overview}
            </p>
            <div class="hero__btns" id="${id}">
              <button id="watch-trailer" class="hero__btn hero__btn--primary hero__btn--watch-trailer" data-movie-id="${id}">Watch trailer</button>
              <button class="hero__btn hero__btn--secondary m-modal data-movie-id="${id}" data-id="${id}">More details</button>
            </div>
          </div>
        </div>
      </div>`;

    heroRefs.heroContainer.innerHTML = markup;

    const trailerBtn = document.getElementById('watch-trailer');
    trailerBtn.addEventListener('click', e => onTrailerBtnClick(e));

    const movieInfoBtn = document.querySelector('.hero__btn.m-modal');
    // movieInfoBtn.addEventListener('click', e => onOpenModalFilm(e));
    movieInfoBtn.addEventListener('click', e =>
      onOpenModalFilmById(movieInfoBtn.dataset.id)
    );
  } catch (error) {
    heroRefs.heroContainer.classList.toggle('hero--bg');
    markup = `
      <div class="hero__wrap">
        <div class="container">
          <div class="hero__inner">
            <h1 class="hero__title hero__title--default">Let’s Make Your Own Cinema</h1>
            <p class="hero__text">
              Is a guide to creating a personalized movie theater experience.
              You'll need a projector, screen, and speakers.
              <span class="hero__text--add">Decorate your space, choose your films, and stock up on snacks for the full experience.</span>
            </p>

            <div class="hero__btns">
              <a href="./catalog.html">
                <button class="hero__btn hero__btn--primary">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>`;

    heroRefs.heroContainer.innerHTML = markup;
  }
};

markupRandomTrendingMovie();
