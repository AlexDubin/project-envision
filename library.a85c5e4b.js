!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},a={},n=t.parcelRequire34ff;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},t.parcelRequire34ff=n),n("i8Q71");var l=n("8yl2Y"),r=n("faU4B"),d=n("6U7c4"),s=n("16wVm");let o=async()=>{let e="",t="background-size: cover";try{let{results:i}=await (0,l.fetchTrendingMoviesByDay)(),{id:a,title:n,overview:o,backdrop_path:c,vote_average:u}=i[Math.floor(20*Math.random())+0],h=`https://image.tmdb.org/t/p/original/${c}`;window.innerWidth<768&&(t="background-size: 768px; background-position: center"),e=`
      <div class="hero__wrap" style="background: linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(${h}); ${t}; background-repeat: no-repeat;">
        <div class="container">
          <div class="hero__inner" >
            <h1 class="hero__title">${n}</h1>
            <div class="hrating">
              <div class="hrating__body">
                <div class="hrating__active" style="width: ${10*u}%;"></div>
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
              ${o}
            </p>
            <div class="hero__btns" id="${a}">
              <button id="watch-trailer" class="hero__btn hero__btn--primary hero__btn--watch-trailer" data-movie-id="${a}">Watch trailer</button>
              <button class="hero__btn hero__btn--secondary m-modal data-movie-id="${a}" data-id="${a}" >More details</button>
            </div>
          </div>
        </div>
      </div>`,d.heroRefs.heroContainer.innerHTML=e;let v=document.getElementById("watch-trailer");v.addEventListener("click",e=>(0,r.onTrailerBtnClick)(e));let g=document.querySelector(".hero__btn.m-modal");g.addEventListener("click",e=>(0,s.onOpenModalFilm)(e))}catch(t){(0,d.heroRefs).heroContainer.classList.toggle("hero--bg-lib"),e=`
      <div class="container">
        <div class="lib-hero__wrap">
          <h1 class="lib-hero__title">Create Your Dream Cinema</h1>
          <p class="lib-hero__text">
            Is a guide to designing a personalized movie theater experience with the
            right equipment, customized decor, and favorite films. This guide helps
            you bring the cinema experience into your own home with cozy seating,
            dim lighting, and movie theater snacks.
          </p>
        </div>
      </div>`,d.heroRefs.heroContainer.innerHTML=e}finally{}};o();var c=n("6sNo0"),u=n("kV76N"),h=n("14Rx2"),v=n("aBmqH"),s=n("16wVm"),g=n("lbGsy"),f=n("4DnXZ"),m=n("XcJ0g"),_=n("kvC6y");let p=1;function b(e){(0,g.default).moviesListEl.insertAdjacentHTML("beforeend",e.map(c.default).join("")),g.default.moviesListEl.dataset.page=p,(0,h.default)()}async function y(){let e=await (0,_.default)((0,v.loadMovies)(9));if(0===e.length){(0,g.default).emptyLibEl.classList.remove("is-hidden"),(0,g.default).libCatalogEl.classList.add("is-hidden");return}e.length<9&&(0,g.default).loadMoreBtnEl.classList.add("is-hidden"),b(e);let t=document.querySelector(".list-movie-card.js-gallery");t.addEventListener("click",e=>{let t=e.target.closest(".m-modal");if(!t)return;let i=t.dataset.id;(0,s.onOpenModalFilmById)(i)})}function w(e){let t=g.default.moviesListEl.childNodes,i=e.target.value;"-1"===i?t.forEach(e=>e.classList.remove("is-hidden")):t.forEach(e=>{e.dataset.genres.split(",").includes(i)?e.classList.remove("is-hidden"):e.classList.add("is-hidden")})}async function E(){!function(){g.default.genresSelectEl.customSelect.value="-1";let e=new Event("change");(0,g.default).genresSelectEl.dispatchEvent(e)}();let e=await (0,_.default)((0,v.loadMovies)(9,p));e.length<9&&(0,g.default).loadMoreBtnEl.classList.add("is-hidden"),p+=1,b(e)}window.addEventListener("DOMContentLoaded",function(){(0,u.default)(e(m).genres,g.default.genresSelectEl),y();let t=e(f)(g.default.genresSelectEl)[0];t.select.addEventListener("change",w),(0,g.default).loadMoreBtnEl.addEventListener("click",E)}),n("bf8lc"),n("cs2b8")}();
//# sourceMappingURL=library.a85c5e4b.js.map
