!function(){function e(e){return e&&e.__esModule?e.default:e}var t,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},n=i.parcelRequire34ff;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},i.parcelRequire34ff=n),n("i8Q71");var r=n("8yl2Y"),l=n("faU4B"),s=n("6U7c4"),c=n("16wVm");let d=async()=>{let e="",t="background-size: cover";try{let{results:i}=await (0,r.fetchTrendingMoviesByDay)(),{id:a,title:o,overview:n,backdrop_path:d,vote_average:p}=i[Math.floor(20*Math.random())+0],u=`https://image.tmdb.org/t/p/original/${d}`;window.innerWidth<768&&(t="background-size: 768px; background-position: center"),e=`
      <div class="hero__wrap" style="background: linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(${u}); ${t}; background-repeat: no-repeat;">
        <div class="container">
          <div class="hero__inner" >
            <h1 class="hero__title">${o}</h1>
            <div class="hrating">
              <div class="hrating__body">
                <div class="hrating__active" style="width: ${10*p}%;"></div>
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
              ${n}
            </p>
            <div class="hero__btns">
              <button id="watch-trailer" class="hero__btn hero__btn--primary hero__btn--watch-trailer" data-movie-id="${a}">Watch trailer</button>
              <button class="hero__btn hero__btn--secondary m-modal data-movie-id="${a}" data-id="${a}">More details</button>
            </div>
          </div>
        </div>
      </div>`,s.heroRefs.heroContainer.innerHTML=e;let _=document.getElementById("watch-trailer");_.addEventListener("click",e=>(0,l.onTrailerBtnClick)(e));let h=document.querySelector(".hero__btn.m-modal");h.addEventListener("click",e=>(0,c.onOpenModalFilm)(e))}catch(t){(0,s.heroRefs).heroContainer.classList.toggle("hero--bg"),e=`
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
      </div>`,s.heroRefs.heroContainer.innerHTML=e}};d();var p=n("6JpON"),u=n("dIxxU");let _={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2FhN2IzMjk5NmM0N2RhMTQxZWI1N2IwZTVjZTQ3NiIsInN1YiI6IjY0N2M5OTdkZTMyM2YzMDEyNzUyM2IzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Blrs7t4WoJ6-3sy6A_Vz3twkTCmEg9nM0JyuAHg88WM"}};async function h(){try{let e=await (0,u.default).get("https://api.themoviedb.org/3/movie/upcoming",_);return e.data}catch(e){console.log(e),Notiflix.Notify.failure("Oops! Something went wrong. Try again, please!")}}var g=n("XcJ0g");let v="",m=e(g).genres,f=document.querySelector(".upcoming");h().then(e=>{!function({results:e}){let t;let i=Math.floor(Math.random()*e.length),{adult:a,backdrop_path:o,genre_ids:n,id:r,original_language:l,original_title:s,overview:c,popularity:d,poster_path:p,release_date:u,title:_,video:h,vote_average:g,vote_count:y}=e[i];t=[],n.forEach(e=>{m.forEach(i=>{e===i.id&&t.push(i.name)})}),v=t.length>2?`${t[0]} and others...`:2===t.length?`${t[0]}, ${t[1]}`:`${t[0]}`,f.innerHTML=`<div class="container">
    <h2 class="upcoming__section-title">UPCOMING THIS MONTH</h2>
    <div class="upcoming__block">
      <div class="upcoming__poster">
        <img
          class="upcoming__picture"
          src="https://image.tmdb.org/t/p/original${o}"
          alt="${_}"
        />
      </div>
      <div class="upcoming__info">
        <h3 class="upcoming__title">${_}</h3>
        <ul class="list upcoming__list-info">
          <li class="upcoming__list-info--left">
            <div class="upcoming__release-date">
              <p class="upcoming__release-date--title">Release date</p>
              <p class="upcoming__release-date--value">${u}</p>
            </div>
            <div class="upcoming__vote">
              <p class="upcoming__vote--title">Vote / Votes</p>
              <p class="upcoming__vote--value">
                <span class="upcoming__vote--value-average">${g}</span> /
                <span class="upcoming__vote--value-count">${y}</span>
              </p>
            </div>
          </li>
          <li class="upcoming__list-info--right">
            <div class="upcoming__popularity">
              <p class="upcoming__popularity--title">Popularity</p>
              <p class="upcoming__popularity--value">${d}</p>
            </div>
            <div class="upcoming__genre">
              <p class="upcoming__genre--title">Genre</p>
              <p class="upcoming__genre--value">${v}</p>
            </div>
          </li>
        </ul>
        <h4 class="upcoming__about">About</h4>
        <p class="upcoming__overview">${c}</p>
        <button class="upcoming__addToLibrary-button" type="button" id="addToMyLibrary">
        <p>Add to my library</p>
        </button>
        </div>
      </div>
    </div>`,document.querySelector("#addToMyLibrary")}(e)}).catch(t=>{console.log(t),e(p).Notify.failure("Oops! Something went wrong. Try again, please!")});var g=n("XcJ0g"),y=n("6sNo0"),b=n("14Rx2");let M={movieList:document.querySelector(".list-movie-card")};var u=n("dIxxU");let I={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc",accept:"application/json"}};async function N(e=1){try{let t=await (0,u.default).get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${e}`,I);return t.data}catch(e){console.log(e)}}if(M.movieList){let i={};e(g).genres.forEach(e=>{i[e.id]=e.name}),t=i,N().then(e=>{(function({results:e},t){let i=function(e){let t=[];for(;t.length<3;){let i=Math.floor(Math.random()*e.length);t.includes(i)||t.push(i)}return t}(e),a=i.map(t=>e[t]);M.movieList.innerHTML=a.map(y.default).join(""),(0,b.default)(),M.movieList.addEventListener("click",onOpenModalFilm),window.addEventListener("keydown",onEscKeyPress)})(e,0)}).catch(e=>console.log(e))}n("bf8lc"),n("7hKzD"),n("cs2b8")}();
//# sourceMappingURL=index.5b37c5b4.js.map
