!function(){var e,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},t=i.parcelRequire34ff;null==t&&((t=function(e){if(e in a)return a[e].exports;if(e in n){var i=n[e];delete n[e];var t={id:e,exports:{}};return a[e]=t,i.call(t.exports,t,t.exports),t.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,i){n[e]=i},i.parcelRequire34ff=t),t("i8Q71"),t("7WT0m");var r={};r=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}');var l=t("dIxxU");let o={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc",accept:"application/json"}};async function s(e=1){try{let i=await (0,l.default).get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${e}`,o);return console.log(i.data),i.data}catch(e){console.log(e)}}let d=document.querySelector(".list-movie-card");if(d){let i={};((e=r)&&e.__esModule?e.default:e).genres.forEach(e=>{i[e.id]=e.name}),s().then(e=>{console.log(e),function({results:e}){console.log({results:e});let a=[];for(;a.length<3;){let i=Math.floor(Math.random()*e.length);a.includes(i)||a.push(i)}let n=a.map(i=>e[i]);d.innerHTML=n.map(({poster_path:e,title:a,vote_average:n,genre_ids:t,release_date:r})=>{console.log(5,n,r);let l="";return t.length>0&&(l=1===t.length||t.join(", ").length<=20?i[t[0]]:`${i[t[0]]}, ${i[t[1]]}`),`<li class='item-movie-card'>
          <img class='poster-movie-card' src='https://image.tmdb.org/t/p/original${e}' alt='${a}'>
          <div class='overlay-movie-card'></div>
          <div class='info-movie-card'>
            <h4 class='title-movie-card'>${a}</h4>
            <div class='wrapper-movie-card'>
              <div class='genre-year-movie-card'>
                <p class='genre-movie-card span'>${l}</p>
                <span class='divider-movie-card'>&#124</span>
                <p class='year-movie-card span'>${r.slice(0,4)}</p>
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
                <div class="rating-value">${n}</div>
              </div>
            </div>
          </div>
        </li>`}).join(""),function(){console.log(4);let e=document.querySelectorAll(".rating");e.forEach(e=>{(function(e){var i;let a=e.querySelector(".rating-active"),n=e.querySelector(".rating-value");console.log(n,a),n&&(i=n.innerHTML,console.log(4),a.style.width=`${i/10*100}%`,console.log(4))})(e)})}()}(e)}).catch(e=>console.log(e))}t("bf8lc"),t("7hKzD"),t("kvC6y"),t("cs2b8")}();
//# sourceMappingURL=index.b942da45.js.map
