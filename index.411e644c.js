var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},a={},n=e.parcelRequire34ff;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in a){var n=a[e];delete a[e];var t={id:e,exports:{}};return i[e]=t,n.call(t.exports,t,t.exports),t.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,i){a[e]=i},e.parcelRequire34ff=n),n("bUb57"),n("dvHux");var t={};t=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}');var r=n("2shzp");const o={headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmFhZDQ4MjlkYjI1ZWQ1Mjc0NmY0NmY4YzQ1NzRlYSIsInN1YiI6IjY0NzIzZDc3OWFlNjEzMDBjNGM3NmY1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v_Pd0M6hpO0qy1_8-nNBGtFxbeHjE8i8mgfszlHvjZc",accept:"application/json"}};async function l(e=1){try{let i=await (0,r.default).get(`https://api.themoviedb.org/3/trending/movie/week?language=en-US&page=${e}`,o);return console.log(i.data),i.data}catch(e){console.log(e)}}const s=document.querySelector(".list-movie-card");if(s){let e={};(function(e){return e&&e.__esModule?e.default:e})(t).genres.forEach(i=>{e[i.id]=i.name}),l().then(i=>{console.log(i),function({results:i}){console.log({results:i});let a=[];for(;a.length<3;){let e=Math.floor(Math.random()*i.length);a.includes(e)||a.push(e)}let n=a.map(e=>i[e]);s.innerHTML=n.map(({poster_path:i,title:a,vote_average:n,genre_ids:t,release_date:r})=>{console.log(5,n,r);let o="";return t.length>0&&(o=1===t.length||t.join(", ").length<=20?e[t[0]]:`${e[t[0]]}, ${e[t[1]]}`),`<li class='item-movie-card'>
          <img class='poster-movie-card' src='https://image.tmdb.org/t/p/original${i}' alt='${a}'>
          <div class='overlay-movie-card'></div>
          <div class='info-movie-card'>
            <h4 class='title-movie-card'>${a}</h4>
            <div class='wrapper-movie-card'>
              <div class='genre-year-movie-card'>
                <p class='genre-movie-card span'>${o}</p>
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
        </li>`}).join(""),function(){console.log(4);let e=document.querySelectorAll(".rating");e.forEach(e=>{(function(e){var i;let a=e.querySelector(".rating-active"),n=e.querySelector(".rating-value");console.log(n,a),n&&(i=n.innerHTML,console.log(4),a.style.width=`${i/10*100}%`,console.log(4))})(e)})}()}(i)}).catch(e=>console.log(e))}n("1Hrz4"),n("epHO8"),n("gjiCh"),n("5kw5v");
//# sourceMappingURL=index.411e644c.js.map
