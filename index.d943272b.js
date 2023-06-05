function e(e){return e&&e.__esModule?e.default:e}var a,t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},r=t.parcelRequire34ff;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in n){var a=n[e];delete n[e];var t={id:e,exports:{}};return i[e]=t,a.call(t.exports,t,t.exports),t.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,a){n[e]=a},t.parcelRequire34ff=r),r("bUb57");var s=r("2shzp");const l={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWYwYzIyMWE2YTRjMTZkOTRjZTUwMDIzYjU4MzMzYiIsInN1YiI6IjY0NGZiYzBhMjNhMzE0MDJlNTdjM2Q0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kZBqemQQaP5AfqtlQ7E69qa116O60SNbbfSuHzK1gjU",accept:"application/json"}},o=document.querySelector(".hero"),d=async()=>{try{let e=await (0,s.default).get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",l);return e.data}catch(e){console.log(e)}};(()=>{let e="";d().then(({results:a})=>{let{id:t,title:i,overview:n,poster_path:r,backdrop_path:s,vote_average:l}=a[Math.floor(20*Math.random())+0];e=`
        <div class="hero__wrap" style="background: linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(${window.innerWidth>320?`https://image.tmdb.org/t/p/original/${s}`:`https://image.tmdb.org/t/p/w400/${r}`}); background-size: cover; background-repeat: no-repeat;">
          <div class="container">
            <div class="hero__inner" >
              <h1 class="hero__title">${i}</h1>
              <div class="rating">
                <div class="rating__body">
                  <div class="rating__active" style="width: ${10*l}%;"></div>
                  <div class="rating__items">
                    <input type="radio" class="rating__item" value="1" name="rating" />
                    <input type="radio" class="rating__item" value="2" name="rating" />
                    <input type="radio" class="rating__item" value="3" name="rating" />
                    <input type="radio" class="rating__item" value="4" name="rating" />
                    <input type="radio" class="rating__item" value="5" name="rating" />
                  </div>
                </div>
              </div>
              <p class="hero__text hero__text--trunc">
                ${n}
              </p>
              <div class="hero__btns" id="${t}">
                <button class="hero__btn hero__btn--primary">Watch trailer</button>
                <button class="hero__btn hero__btn--secondary">More details</button>
              </div>
            </div>
          </div>
        </div>`}).catch(()=>{o.classList.toggle("hero--bg"),e=`
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
      </div>`}).finally(()=>o.innerHTML=e)})();var s=r("2shzp"),c={};c=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}');const p=document.querySelector(".upcoming"),v={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2FhN2IzMjk5NmM0N2RhMTQxZWI1N2IwZTVjZTQ3NiIsInN1YiI6IjY0N2M5OTdkZTMyM2YzMDEyNzUyM2IzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Blrs7t4WoJ6-3sy6A_Vz3twkTCmEg9nM0JyuAHg88WM"}};(async function(){try{let e=await (0,s.default).get("https://api.themoviedb.org/3/movie/upcoming",v);return console.log(e.data),e.data}catch(e){console.log(e)}})().then(e=>{console.log(e),function({results:e}){let a=Math.floor(Math.random()*e.length),{adult:t,backdrop_path:i,genre_ids:n,id:r,original_language:s,original_title:l,overview:o,popularity:d,poster_path:c,release_date:v,title:h,video:u,vote_average:g,vote_count:m}=e[a];p.innerHTML=`<div class="container">
  
  <h2 class="title-weekly-trends">UPCOMING THIS MONTH</h2>
  <div class="">
    <div class="">
    <img class="" src='https://image.tmdb.org/t/p/original${i}' alt='${h}'>
         </div>
    <div class="">
      <h3 class="">${h}</h3>
      <ul class="list">
        <li class="">
          <div class="">
            <p class="">Release date</p>
            <p class="">${v}</p>
          </div>
          <div class="">
            <p class="">Vote / Votes</p>
            <p class="">
              <span class="">${g}</span> /
              <span class="">${m}</span>
            </p>
          </div>
        </li>
        <li class="">
          <div class="">
            <p class="">Popularity</p>
            <p class="">${d}</p>
          </div>
          <div class="">
            <p class="">Genre</p>
            <p class="">${n}</p>
          </div>
        </li>
      </ul>
      <h4 class="">About</h4>
      <p class="">${o}</p>
      <button class="xbutton" type="button" id="addToMyLibrary"><p>Add to my library</p></button>
      </div>
  </div>
</div>`}(e)}).catch(e=>console.log(e));var s=r("2shzp"),h=({poster_path:a,title:t,vote_average:i,genre_ids:n,release_date:r,id:s})=>{let l={},o="";return e(c).genres.forEach(e=>{l[e.id]=e.name}),n.length>0&&(o=1===n.length||n.join(", ").length<=20?l[n[0]]:`${l[n[0]]}, ${l[n[1]]}`),`<li class='item-movie-card' data-genres='${n}' data-id='${s}'>
  <img class='poster-movie-card' src='https://image.tmdb.org/t/p/original${a}' alt='${t}'>
  <div class='overlay-movie-card'></div>
  <div class='info-movie-card'>
    <h4 class='title-movie-card'>${t}</h4>
    <div class='wrapper-movie-card'>
      <div class='genre-year-movie-card'>
        <p class='genre-movie-card span'>${o}</p>
        <span class='divider-movie-card'>&#124</span>
        <p class='year-movie-card span'>${r.slice(0,4)}</p>
      </div>
        <div class="rating">
          <div class="rating-body">
            <div class="rating-active"></div>
            <div class="rating-items">
              <input type="radio" class="rating-item" value="1" name="rating" />
              <input type="radio" class="rating-item" value="2" name="rating" />
              <input type="radio" class="rating-item" value="3" name="rating" />
              <input type="radio" class="rating-item" value="4" name="rating" />
              <input type="radio" class="rating-item" value="5" name="rating" />
            </div>
          </div>
        <div class="rating-value">${i}</div>
    </div>
  </div>
</li>`};const u={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc",accept:"application/json"}};async function g(e=1){try{let a=await (0,s.default).get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${e}`,u);return a.data}catch(e){console.log(e)}}const m=document.querySelector(".list-movie-card");if(m){let t={};e(c).genres.forEach(e=>{t[e.id]=e.name}),a=t,g().then(e=>{(function({results:e},a){let t=function(e){let a=[];for(;a.length<3;){let t=Math.floor(Math.random()*e.length);a.includes(t)||a.push(t)}return a}(e),i=t.map(a=>e[a]);m.innerHTML=i.map(h).join(""),function(){let e=document.querySelectorAll(".rating");e.forEach(e=>{!function(e){var a;let t=e.querySelector(".rating-active"),i=e.querySelector(".rating-value");i&&(a=i.innerHTML,t.style.width=`${a/10*100}%`)}(e)})}()})(e,0)}).catch(e=>console.log(e))}r("1Hrz4"),r("epHO8"),r("gjiCh"),r("5kw5v");
//# sourceMappingURL=index.d943272b.js.map
