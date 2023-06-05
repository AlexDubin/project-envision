var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},i=e.parcelRequire34ff;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in t){var i=t[e];delete t[e];var n={id:e,exports:{}};return a[e]=n,i.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,a){t[e]=a},e.parcelRequire34ff=i),i("bUb57");var n=i("2shzp");const s={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWYwYzIyMWE2YTRjMTZkOTRjZTUwMDIzYjU4MzMzYiIsInN1YiI6IjY0NGZiYzBhMjNhMzE0MDJlNTdjM2Q0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kZBqemQQaP5AfqtlQ7E69qa116O60SNbbfSuHzK1gjU",accept:"application/json"}},r=document.querySelector(".hero"),o=async()=>{try{let e=await (0,n.default).get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",s);return e.data}catch(e){console.log(e)}};(()=>{let e="";o().then(({results:a})=>{let{id:t,title:i,overview:n,poster_path:s,backdrop_path:r,vote_average:o}=a[Math.floor(20*Math.random())+0];e=`
        <div class="hero__wrap" style="background: linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(${window.innerWidth>320?`https://image.tmdb.org/t/p/original/${r}`:`https://image.tmdb.org/t/p/w400/${s}`}); background-size: cover; background-repeat: no-repeat;">
          <div class="container">
            <div class="hero__inner" >
              <h1 class="hero__title">${i}</h1>
              <div class="rating">
                <div class="rating__body">
                  <div class="rating__active" style="width: ${10*o}%;"></div>
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
        </div>`}).catch(()=>{r.classList.toggle("hero--bg"),e=`
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
      </div>`}).finally(()=>r.innerHTML=e)})();var n=i("2shzp"),l={};l=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}');const c=document.querySelector(".upcoming"),d={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2FhN2IzMjk5NmM0N2RhMTQxZWI1N2IwZTVjZTQ3NiIsInN1YiI6IjY0N2M5OTdkZTMyM2YzMDEyNzUyM2IzNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Blrs7t4WoJ6-3sy6A_Vz3twkTCmEg9nM0JyuAHg88WM"}};(async function(){try{let e=await (0,n.default).get("https://api.themoviedb.org/3/movie/upcoming",d);return console.log(e.data),e.data}catch(e){console.log(e)}})().then(e=>{console.log(e),function({results:e}){let a=Math.floor(Math.random()*e.length),{adult:t,backdrop_path:i,genre_ids:n,id:s,original_language:r,original_title:o,overview:l,popularity:d,poster_path:p,release_date:v,title:g,video:h,vote_average:u,vote_count:m}=e[a];c.innerHTML=`<div class="container">
  
  <h2 class="title-weekly-trends">UPCOMING THIS MONTH</h2>
  <div class="">
    <div class="">
    <img class="" src='https://image.tmdb.org/t/p/original${i}' alt='${g}'>
         </div>
    <div class="">
      <h3 class="">${g}</h3>
      <ul class="list">
        <li class="">
          <div class="">
            <p class="">Release date</p>
            <p class="">${v}</p>
          </div>
          <div class="">
            <p class="">Vote / Votes</p>
            <p class="">
              <span class="">${u}</span> /
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
      <p class="">${l}</p>
      <button class="xbutton" type="button" id="addToMyLibrary"><p>Add to my library</p></button>
      </div>
  </div>
</div>`}(e)}).catch(e=>console.log(e));var n=i("2shzp");const p={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc",accept:"application/json"}};async function v(e=1){try{let a=await (0,n.default).get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${e}`,p);return console.log(a.data),a.data}catch(e){console.log(e)}}const g=document.querySelector(".list-movie-card");if(g){let e={};(function(e){return e&&e.__esModule?e.default:e})(l).genres.forEach(a=>{e[a.id]=a.name}),v().then(a=>{console.log(a),function({results:a}){console.log({results:a});let t=[];for(;t.length<3;){let e=Math.floor(Math.random()*a.length);t.includes(e)||t.push(e)}let i=t.map(e=>a[e]);g.innerHTML=i.map(({poster_path:a,title:t,vote_average:i,genre_ids:n,release_date:s})=>{console.log(5,i,s);let r="";return n.length>0&&(r=1===n.length||n.join(", ").length<=20?e[n[0]]:`${e[n[0]]}, ${e[n[1]]}`),`<li class='item-movie-card'>
          <img class='poster-movie-card' src='https://image.tmdb.org/t/p/original${a}' alt='${t}'>
          <div class='overlay-movie-card'></div>
          <div class='info-movie-card'>
            <h4 class='title-movie-card'>${t}</h4>
            <div class='wrapper-movie-card'>
              <div class='genre-year-movie-card'>
                <p class='genre-movie-card span'>${r}</p>
                <span class='divider-movie-card'>&#124</span>
                <p class='year-movie-card span'>${s.slice(0,4)}</p>
              </div>
              <div class="form-item">
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
          </div>
        </li>`}).join(""),function(){console.log(4);let e=document.querySelectorAll(".rating");e.forEach(e=>{(function(e){var a;let t=e.querySelector(".rating-active"),i=e.querySelector(".rating-value");console.log(i,t),i&&(a=i.innerHTML,console.log(4),t.style.width=`${a/10*100}%`,console.log(4))})(e)})}()}(a)}).catch(e=>console.log(e))}i("1Hrz4"),i("epHO8"),i("gjiCh"),i("5kw5v");
//# sourceMappingURL=index.79482d68.js.map
