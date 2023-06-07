import Notiflix from 'notiflix';
import Pagination from 'tui-pagination'; 
import axios from 'axios';
import initRatings from '../utils/initRating';
import { API_KEY } from '../api/catalogAPI';
import { URL } from '../api/catalogAPI';
import { buildGallery } from './catalog_gallery_markup';
import { noMovie } from './catalog_gallery_markup';
import { refs } from './catalog-refs';
//import Pagination from '../utils/pagination';

const Pagination = require('tui-pagination');

let currentPage = 1;

function scrollToAnchor() {
    refs.gallery.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
}

async function fetchMoviesOfweek() {
    try {
        const {data} = await axios.get(`${URL}trending/all/week?language=en-US&page=${currentPage}`, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                accept: 'application/json',
            },
        });
        console.log(data);
        return data;
    } catch (error) {
        Notiflix.Notify.failure('Sorry, there are no movies matching your search query. Please try again.');
    }
}

export async function galleryOfWeek() {
    try {
        let result = await fetchMoviesOfweek();
        const addingMovies = buildGallery(result.results);
        refs.gallery.innerHTML = addingMovies;
        initRatings();
        if (result.total_results === 0) {
            return noMovie();
        }
        paginationWeek(result);
    } catch (error) {
        console.log(error);
    }
}

galleryOfWeek();

// function paginationWeek(props) {
//   const pageCount = props.total_pages;
//   let pageIndex = index.pageIndex;
//   const page = new Pagination({
//     container: refs.paginationContainer,
//     count: pageCount,
//     index: pageIndex,
//   })
// }

function paginationWeek(props) {
  const instance = new Pagination(refs.pageContainer, {
      page: currentPage,
      totalItems: props.total_pages,
      visiblePages: 4,
      targetPage: props.total_pages,
      template: {
        page: '<a href="#" class="tui-page-btn">{{page}}J</a>',
            currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
            moveButton:
                '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
                    '<span class="tui-ico-{{type}}">{{type}}</span>' +
                '</a>',
            disabledMoveButton:
                '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
                    '<span class="tui-ico-{{type}}">{{type}}</span>' +
                '</span>',
            moreButton:
                '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
                    '<span class="tui-ico-ellip">...</span>' +
                '</a>'
      }
  });
  instance.on("beforeMove", (eventData) => {
      const perPage = eventData;
      console.log(eventData);
      currentPage = perPage.page;
      galleryOfWeek();
      scrollToAnchor();
  });
  instance.getCurrentPage();
}