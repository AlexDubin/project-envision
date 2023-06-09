!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=e.parcelRequire34ff;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){i[t]=e},e.parcelRequire34ff=a),a("i8Q71");var s=a("6JpON"),r=a("dIxxU"),o=a("14Rx2"),c=a("6sNo0");class l{pageCount=0;pageIndex=0;container=null;constructor({container:t,count:e,index:n,callback:i}){this.pageCount=e,this.pageIndex=n,this.container=t,this.callBack=i,this.render=this.render.bind(this),this.handlePaginationItemClick=this.handlePaginationItemClick.bind(this),this.render(),document.addEventListener("click",this.handlePaginationItemClick)}render(){let t="",e=this.pageIndex-1,n=this.pageIndex+1;if(this.pageCount>1&&(t+='<li class="btn prev list-item"><span><i class="fas fa-angle-left"></i>&lsaquo;</span></li>'),!(this.pageIndex<1)&&!(this.pageIndex>this.pageCount)){this.pageIndex>2&&this.pageCount>4&&(t+='<li data-index="1" class="first list-item"><span>1</span></li>',this.pageIndex>3&&this.pageCount>5&&(t+='<li class="dots"><span>...</span></li>')),this.pageIndex===this.pageCount?e-=2:this.pageIndex===this.pageCount-1&&(e-=1),1===this.pageIndex?n+=2:2===this.pageIndex&&(n+=1),console.log({pageIndex:this.pageIndex,pageCount:this.pageCount,beforePage:e,afterPage:n});for(let i=e;i<=n;i++)i>this.pageCount||(console.log({plength:i}),i<0&&(i=0),0===i&&(i+=1),t+=`<li data-index="${i}" class="list-item ${this.pageIndex===i?"active":""}"><span>${i}</span></li>`);this.pageIndex<this.pageCount-1&&(this.pageIndex<this.pageCount-2&&this.pageCount>5&&(t+='<li class="dots"><span>...</span></li>'),this.pageCount>4&&(t+=`<li data-index="${this.pageCount}" class="last list-item"><span>${this.pageCount}</span></li>`)),this.pageCount>1&&(t+='<li class="btn next list-item"><span>&rsaquo;<i class="fas fa-angle-right"></i></span></li>'),this.container&&(this.container.innerHTML=t)}}async handlePaginationItemClick(t){t.stopPropagation();let e=t.target,n=e.closest(".list-item"),i=n?.classList.contains("btn")||!1,a=n?.classList.contains("prev")||!1;if(i){this.pageIndex<this.pageCount&&!a?this.setPageIndex(this.pageIndex+1):this.pageIndex>1&&a?this.setPageIndex(this.pageIndex-1):this.pageIndex!==this.pageCount||a||(n.disabled=!0),console.log(this.callBack),this.callBack(this.pageIndex),p();return}if(n){let t=parseInt(n.dataset.index,10);this.setPageIndex(t),this.callBack(t),p()}}setPageIndex(t){this.pageIndex=t,this.render()}}let u=document.querySelector(".gallery");function p(){u.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})}let h="https://api.themoviedb.org/3/",d="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWQzY2MzZDA1Nzk2OGE0YWJlZGY1MzVkOGNiZDIwMiIsInN1YiI6IjY0N2EzNjI3Y2FlZjJkMDExOWJmMDc3ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vnk9Mx4FCU9-aMju8ubwqMt0iiZWjWxQo-T3KlsNAWg",f={form:document.querySelector("#search-form"),searchInput:document.querySelector('[name="searchQuery"]'),gallery:document.querySelector(".gallery"),clearBtn:document.querySelector(".clear-btn"),yearSelectEl:document.getElementById("year-select"),paginationContainer:document.querySelector(".pagination ul"),genreSelectEl:document.getElementById("genres-select")};var g=a("16wVm");async function _(e){try{let{data:t}=await (0,r.default).get(`${h}trending/all/week?language=en-US&page=${e}`,{headers:{Authorization:`Bearer ${d}`,accept:"application/json"}});return console.log(t),t}catch(e){t(s).Notify.failure("Sorry, there are no movies matching your search query. Please try again.")}}function v(t){return t.map(t=>t.release_date?(0,c.default)(t):"").join("")}async function m(t){try{let e=await _(t),n=v(e.results);if(f.gallery.innerHTML=n,(0,o.default)(),0===e.total_results)return noMovie()}catch(t){console.log(t)}}!async function(){try{let t=await _(1),e=v(t.results);f.gallery.innerHTML=e;let n=document.querySelector("#anchor");if(n.addEventListener("click",t=>{let e=t.target.parentNode.dataset.id;(0,g.onOpenModalFilmById)(e)}),(0,o.default)(),0===t.total_results)return noMovie();new l({container:f.paginationContainer,count:Math.min(t.total_pages,197),index:1,callback:m})}catch(t){console.log(t)}}();var y=a("8yl2Y"),x=a("faU4B"),b=a("6U7c4"),g=a("16wVm");let I=async()=>{let t="",e="background-size: cover";try{let{results:n}=await (0,y.fetchTrendingMoviesByDay)(),{id:i,title:a,overview:s,backdrop_path:r,vote_average:o}=n[Math.floor(20*Math.random())+0],c=`https://image.tmdb.org/t/p/original/${r}`;window.innerWidth<768&&(e="background-size: 768px; background-position: center"),t=`
      <div class="hero__wrap" style="background: linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(${c}); ${e}; background-repeat: no-repeat;">
        <div class="container">
          <div class="hero__inner" >
            <h1 class="hero__title">${a}</h1>
            <div class="hrating">
              <div class="hrating__body">
                <div class="hrating__active" style="width: ${10*o}%;"></div>
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
              ${s}
            </p>
            <div class="hero__btns" id="${i}">
              <button id="watch-trailer" class="hero__btn hero__btn--primary hero__btn--watch-trailer" data-movie-id="${i}">Watch trailer</button>
              <button class="hero__btn hero__btn--secondary m-modal data-movie-id="${i}" data-id="${i}">More details</button>
            </div>
          </div>
        </div>
      </div>`,b.heroRefs.heroContainer.innerHTML=t;let l=document.getElementById("watch-trailer");l.addEventListener("click",t=>(0,x.onTrailerBtnClick)(t));let u=document.querySelector(".hero__btn.m-modal");u.addEventListener("click",t=>(0,g.onOpenModalFilmById)(u.dataset.id))}catch(e){(0,b.heroRefs).heroContainer.classList.toggle("hero--bg"),t=`
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
      </div>`,b.heroRefs.heroContainer.innerHTML=t}};I();var s=a("6JpON");window,function(t){var e={};function n(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e||4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,(function(e){return t[e]}).bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,i,a,s,r=Object.prototype.hasOwnProperty;for(a=1,s=arguments.length;a<s;a+=1)for(i in n=arguments[a])r.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var i=n(2),a=n(17),s=n(6);t.exports=function(t,e,n){i(t)?a(t,e,n):s(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){"use strict";var i=n(18),a=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(a(n,e.static),delete e.static),a(n.prototype,e),n}},function(t,e,n){"use strict";var i=n(2);t.exports=function(t,e,n){var a,s;if(n=n||0,!i(e))return -1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(s=e.length,a=n;n>=0&&a<s;a+=1)if(e[a]===t)return a;return -1}},function(t,e,n){"use strict";var i=n(29),a=n(30),s=n(5);t.exports={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),a=s(t)?t(e):i(t,e);return n.innerHTML=a,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){a("pagination","UA-129987462-1")}}},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var i=n(13),a=n(7),s=n(0),r=n(1),o=n(20),c=n(9),l={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=a({init:function(t,e){this._options=s({},l,e),this._currentPage=0,this._view=new o(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){return Math.ceil(this._options.totalItems/this._options.itemsPerPage)||1},_getPageIndex:function(t){return this._options.centerAlign?Math.min(Math.max(t-Math.floor(this._options.visiblePages/2),1),this._getLastPage()-this._options.visiblePages+1):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e=this.getCurrentPage();return"prev"===t?e-1:e+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.min(t=Math.max(t,1),e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),a=this._getPageIndex(n),s=this._getEdge(t);return e.leftPageNumber=s.left,e.rightPageNumber=s.right,e.prevMore=i>1,e.nextMore=i<a,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i=this._getLastPage(),a=this._options.visiblePages,s=this._getPageIndex(t);return this._options.centerAlign?(n=(e=Math.max(t-Math.floor(a/2),1))+a-1)>i&&(e=Math.max(i-a+1,1),n=i):(e=(s-1)*a+1,n=Math.min(n=s*a,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){r(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),t.exports=u},function(t,e,n){"use strict";var i=n(0),a=n(14),s=n(4),r=n(16),o=n(2),c=n(5),l=n(3),u=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return -1},p.prototype._memorizeContext=function(t){var e,n;a(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;a(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;s(t)?l(t=t.split(u),function(t){i._bindEvent(t,e,n)}):r(t)&&(n=e,l(t,function(t,e){i.on(e,t,n)}))},p.prototype.once=function(t,e,n){var i=this;if(r(t)){n=e,l(t,function(t,e){i.once(e,t,n)});return}this.on(t,function a(){e.apply(n,arguments),i.off(t,a,n)},n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(o(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var a=t===i.handler,s=e===i.context,r=a&&s;return r&&n._forgetContext(i.context),r}},p.prototype._offByEventName=function(t,e){var n=this,i=c(e),a=n._matchHandler(e);l(t=t.split(u),function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,a):(l(e,function(t){n._forgetContext(t.context)}),n.events[t]=[])})},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);l(this._safeEvent(),function(t){e._spliceMatches(t,n)})},p.prototype._offByObject=function(t,e){var n,i=this;0>this._indexOfContext(t)?l(t,function(t,e){i.off(e,t)}):s(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),l(this._safeEvent(),function(t){i._spliceMatches(t,n)})):(n=this._matchContext(t),l(this._safeEvent(),function(t){i._spliceMatches(t,n)}))},p.prototype.off=function(t,e){s(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):r(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,a;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(a=e[i]).handler.apply(a.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){"use strict";var i=n(1),a=n(15);t.exports=function(t){return!i(t)&&!a(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i=0,a=t.length;for(n=n||null;i<a&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){"use strict";var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var i=n(3),a=n(7),s=n(21),r=n(22),o=n(24),c=n(25),l=n(0),u=n(4),p=n(28),h=n(9),d={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},f=["first","prev","next","last"],g=["prev","next"],_=a({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=l({},d,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(u(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(f,function(t){this._buttons[t]=h.createElementByTemplate(this._template.moveButton,{type:t})},this)},_setDisabledMoveButtons:function(){i(f,function(t){var e="disabled"+h.capitalizeFirstLetter(t);this._buttons[e]=h.createElementByTemplate(this._template.disabledMoveButton,{type:t})},this)},_setMoreButtons:function(){i(g,function(t){this._buttons[t+"More"]=h.createElementByTemplate(this._template.moreButton,{type:t})},this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(c(e=this._buttons.prevMore,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(c(e=this._buttons.nextMore,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,a=t.rightPageNumber;for(n=i;n<=a;n+=1)n===t.page?e=h.createElementByTemplate(this._template.currentPage,{page:n}):(e=h.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||c(e,this._firstItemClassName),n!==a||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){r(this._getContainerElement(),"click",function(e){var n,i,a=s(e);o(e),(i=this._getButtonType(a))||(n=this._getPageNumber(a)),t(i,n)},this)},_getButtonType:function(t){var e;return i(this._buttons,function(n,i){return!h.isContained(t,n)||(e=i,!1)},this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],h.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,function(t,e){this._buttons[e]=t.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=_},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var i=n(4),a=n(3),s=n(23);function r(t,e,n,i){var r,o;function c(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,c):"attachEvent"in t&&t.attachEvent("on"+e,c),r=s(t,e),o=!1,a(r,function(t){return t.handler!==n||(o=!0,!1)}),o||r.push({handler:n,wrappedHandler:c})}t.exports=function(t,e,n,s){if(i(e)){a(e.split(/\s+/g),function(e){r(t,e,n,s)});return}a(e,function(e,i){r(t,i,e,n)})}},function(t,e,n){"use strict";var i="_feEventKey";t.exports=function(t,e){var n,a=t[i];return a||(a=t[i]={}),(n=a[e])||(n=a[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){if(t.preventDefault){t.preventDefault();return}t.returnValue=!1}},function(t,e,n){"use strict";var i=n(3),a=n(8),s=n(26),r=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),o=t.classList,c=[];if(o){i(n,function(e){t.classList.add(e)});return}(e=s(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,function(t){0>a(t,c)&&c.push(t)}),r(t,c)}},function(t,e,n){"use strict";var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var i=n(2),a=n(1);t.exports=function(t,e){if(e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),a(t.className.baseVal)){t.className=e;return}t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!!(t&&t.nodeType)}},function(t,e,n){"use strict";var i=n(8),a=n(3),s=n(2),r=n(4),o=n(0),c=/{{\s?|\s?}}/g,l=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,h=/\./,d=/^["']\w+["']$/,f=/"|'/g,g=/^-?\d+\.?\d*$/,_={if:function(t,e,n){var i,s,r,o,c=(i=[t],s=[],r=0,o=0,a(e,function(t,n){0===t.indexOf("if")?r+=1:"/if"===t?r-=1:r||0!==t.indexOf("elseif")&&"else"!==t||(i.push("else"===t?["true"]:t.split(" ").slice(1)),s.push(e.slice(o,n)),o=n+1)}),s.push(e.slice(o)),{exps:i,sourcesInsideIf:s}),l=!1,u="";return a(c.exps,function(t,e){return(l=y(t,n))&&(u=x(c.sourcesInsideIf[e],n)),!l}),u},each:function(t,e,n){var i=y(t,n),r=s(i)?"@index":"@key",c={},l="";return a(i,function(t,i){c[r]=i,c["@this"]=t,o(n,c),l+=x(e.slice(),n)}),l},with:function(t,e,n){var a=i("as",t),s=t[a+1],r=y(t.slice(0,a),n),c={};return c[s]=r,x(e,o(n,c))||""}},v=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,a=[],s=0;for(e.global||(e=RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,a.push(t.slice(s,i)),s=i+n[0].length,n=e.exec(t);return a.push(t.slice(s)),a};function m(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:d.test(t)?i=t.replace(f,""):l.test(t)?i=m((n=t.split(u))[0],e)[m(n[1],e)]:p.test(t)?i=m((n=t.split(h))[0],e)[n[1]]:g.test(t)&&(i=parseFloat(t)),i}function y(t,e){var n,i,s=m(t[0],e);return s instanceof Function?(n=t.slice(1),i=[],a(n,function(t){i.push(m(t,e))}),s.apply(null,i)):s}function x(t,e){for(var n,i,a,s=1,o=t[1];r(o);)_[i=(n=o.split(" "))[0]]?(a=function(t,e,n){for(var i,a,s,o=_[t],c=1,l=2,u=e[2];c&&r(u);)0===u.indexOf(t)?c+=1:0===u.indexOf("/"+t)&&(c-=1,s=l),l+=2,u=e[l];if(c)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=o(e[0].split(" ").slice(1),(i=s,(a=e.splice(1,i-0)).pop(),a),n),e}(i,t.splice(s,t.length-s),e),t=t.concat(a)):t[s]=y(n,e),s+=2,o=t[s];return t.join("")}t.exports=function(t,e){return x(v(t,c),e)}},function(t,e,n){"use strict";var i=n(1),a=n(31);t.exports=function(t,e){var n=location.hostname,s="TOAST UI "+t+" for "+n+": Statistics",r=window.localStorage.getItem(s);(i(window.tui)||!1!==window.tui.usageStatistics)&&(!r||new Date().getTime()-r>6048e5)&&(window.localStorage.setItem(s,new Date().getTime()),setTimeout(function(){("interactive"===document.readyState||"complete"===document.readyState)&&a("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})},1e3))}},function(t,e,n){"use strict";var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),a="";return i(e,function(t,e){a+="&"+e+"="+t}),a=a.substring(1),n.src=t+"?"+a,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}]);var C=a("4DnXZ"),r=a("dIxxU"),o=a("14Rx2"),P=a("kV76N"),E=a("XcJ0g");let M="",w="",B=[];for(let t=2023;t>=1895;t-=1)B.push({id:t,name:t});(0,P.default)(B,f.yearSelectEl);let L=t(C)(f.yearSelectEl)[0];L.select.addEventListener("change",function(t){console.log(w=`&primary_release_year=${t.target.value}`)}),(0,P.default)(t(E).genres,f.genreSelectEl);let N=t(C)(f.genreSelectEl)[0];function k(){f.paginationContainer.innerHTML="",f.gallery.innerHTML=`
    <div class="gallery-empty"
        <p class="text-empty">OOPS...<br>
        We are very sorry!<br>
        We don’t have any results matching your search.
        </p>
    </div>   
    `}async function T(e){try{let{data:t}=await (0,r.default).get(`${h}search/movie?query=${M}&page=${e}${w}`,{headers:{Authorization:`Bearer ${d}`,accept:"application/json"}});return console.log(t),t}catch(e){t(s).Notify.failure("Sorry, there are no images matching your search query. Please try again.")}}async function O(t){try{let e=await T(t),n=v(e.results);if(0===e.total_results)return k();f.gallery.innerHTML=n,(0,o.default)()}catch(t){console.log(t)}}async function S(){try{let t=await T(1),e=v(t.results);if(0===t.total_results)return k();new l({container:f.paginationContainer,count:Math.min(t.total_pages,197),index:1,callback:O}),f.gallery.innerHTML=e,(0,o.default)()}catch(t){console.log(t)}}N.select.addEventListener("change",function(t){let e=f.gallery.childNodes,n=t.target.value;"-1"===n?e.forEach(t=>t.classList.remove("is-hidden")):e.forEach(t=>{t.dataset.genres.split(",").includes(n)?t.classList.remove("is-hidden"):t.classList.add("is-hidden")})}),f.searchInput.addEventListener("input",function(){f.searchInput.value&&f.clearBtn.classList.add("is-active"),(""===f.searchInput.value||" "===f.searchInput.value)&&(f.clearBtn.classList.remove("is-active"),currentPage=1,m())}),f.clearBtn.addEventListener("click",function(){f.searchInput.value="",f.clearBtn.classList.remove("is-active"),f.gallery.innerHTML="",currentPage=1,m()}),f.form.addEventListener("submit",function(e){if(e.preventDefault(),f.gallery.innerHTML="",""===(M=f.searchInput.value.trim())||" "===M)return m(),t(s).Notify.failure("Type something, please.");currentPage=1,S()}),a("bf8lc"),a("7hKzD"),a("cs2b8")}();
//# sourceMappingURL=catalog.716c26ae.js.map