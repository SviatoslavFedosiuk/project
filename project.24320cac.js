var e={};e=(function e(t,n,a){function o(i,s){if(!n[i]){if(!t[i]){var l=void 0;if(!s&&l)return l(i,!0);if(r)return r(i,!0);var c=Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var d=n[i]={exports:{}};t[i][0].call(d.exports,function(e){return o(t[i][1][e]||e)},d,d.exports,e,t,n,a)}return n[i].exports}for(var r=void 0,i=0;i<a.length;i++)o(a[i]);return o})({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},o=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},r=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=r,n.create=function(e,t){var n,i,s,l,c,d,m,u=(n=e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw Error("Content must be a DOM element/node or string");return!0===t?Array.from(a(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),i=t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw Error("Property `onClose` must be a function");return e}(t),l=(s=a('\n		<div class="basicLightbox '.concat(i.className,'">\n			<div class="basicLightbox__placeholder" role="dialog"></div>\n		</div>\n	'))).querySelector(".basicLightbox__placeholder"),n.forEach(function(e){return l.appendChild(e)}),c=o(l,"IMG"),d=o(l,"VIDEO"),m=o(l,"IFRAME"),!0===c&&s.classList.add("basicLightbox--img"),!0===d&&s.classList.add("basicLightbox--video"),!0===m&&s.classList.add("basicLightbox--iframe"),s),v=function(e){var n;return!1!==t.onClose(_)&&(n=function(){if("function"==typeof e)return e(_)},u.classList.remove("basicLightbox--visible"),setTimeout(function(){return!1===r(u)||u.parentElement.removeChild(u),n()},410),!0)};!0===t.closable&&u.addEventListener("click",function(e){e.target===u&&v()});var _={element:function(){return u},visible:function(){return r(u)},show:function(e){var n;return!1!==t.onShow(_)&&(n=function(){if("function"==typeof e)return e(_)},document.body.appendChild(u),setTimeout(function(){requestAnimationFrame(function(){return u.classList.add("basicLightbox--visible"),n()})},10),!0)},close:v};return _}},{}]},{},[1])(1);var t={};t=JSON.parse('[{"name":"Ukraine","code":"UA"},{"name":"United States","code":"US"},{"name":"Canada","code":"CA"},{"name":"United Kingdom","code":"GB"},{"name":"Germany","code":"DE"},{"name":"France","code":"FR"},{"name":"Spain","code":"ES"},{"name":"Italy","code":"IT"},{"name":"Poland","code":"PL"},{"name":"Netherlands","code":"NL"},{"name":"Belgium","code":"BE"},{"name":"Austria","code":"AT"},{"name":"Switzerland","code":"CH"},{"name":"Denmark","code":"DK"},{"name":"Sweden","code":"SE"},{"name":"Norway","code":"NO"},{"name":"Finland","code":"FI"},{"name":"Ireland","code":"IE"},{"name":"Portugal","code":"PT"},{"name":"Australia","code":"AU"},{"name":"New Zealand","code":"NZ"},{"name":"Japan","code":"JP"}]');let n=[],a="",o="",r=0,i=document.querySelector(".events__gallery"),s=document.querySelector(".events__form"),l=document.querySelector(".events__elements");async function c(){let e=new URLSearchParams({apikey:"ezWc074ZK650GLmxX6jhWkiy8pziLAGk",keyword:a,page:r,size:12});o&&e.append("countryCode",o);let t=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${e}`),n=await t.json();return n._embedded?.events||[]}function d(e){let t=e.map(e=>{let t=e._embedded?.venues?.[0]?.city?.name??"";return`
        <li class="events__part" data-id="${e.id}">
          <img
            src="${e.images[0].url}"
            alt="${e.name}"
            class="events__img"
          />

          <div class="stats">
            <h2 class="events__names">${e.name}</h2>

            <p class="events__date">
              ${e.dates.start.localDate}
            </p>

            <p class="events__locate">
              ${t}
            </p>
          </div>
        </li>
      `}).join("");i.insertAdjacentHTML("beforeend",t)}(async function(){try{let e=await c();n=[...e],d(e)}catch(e){console.error(e)}})(),s.addEventListener("submit",async e=>{e.preventDefault(),a=e.currentTarget.elements.search.value.trim();let s=e.currentTarget.elements.country.value.trim().toLowerCase();if(o="",s){var l;let e=((l=t)&&l.__esModule?l.default:l).find(({name:e,code:t})=>e.toLowerCase()===s||t.toLowerCase()===s);if(!e)return void alert("Country not found");o=e.code}r=0,i.innerHTML="";let m=await c();n=[...m],d(m)}),new IntersectionObserver(async e=>{if(!e[0].isIntersecting)return;r++;let t=await c();0!==t.length&&(n.push(...t),d(t))},{rootMargin:"300px"}).observe(l);let m=document.querySelector(".events__gallery"),u=null;function v(){u&&(u.close(),u=null,window.removeEventListener("keydown",_))}function _(e){"Escape"===e.key&&v()}m.addEventListener("click",function(t){let a=t.target.closest(".events__part");if(!a)return;let o=n.find(e=>e.id===a.dataset.id);if(!o)return;let r=o.images[0].url,i=o.name,s=o.info||o.pleaseNote||"No information",l=o.dates.start.localDate,c=o.dates.start.localTime||"",d=o._embedded?.venues?.[0]?.city?.name||"",m=o._embedded?.venues?.[0]?.name||"",f=o.url,p="";p=o.priceRanges?o.priceRanges.map(e=>`
          <p>
            ${e.type}: ${e.min}-${e.max} ${e.currency}
          </p>

          <a
            class="modal__btn"
            href="${f}"
            target="_blank"
          >
            BUY TICKETS
          </a>
        `).join(""):`
      <p>Price unavailable</p>

      <a
        class="modal__btn"
        href="${f}"
        target="_blank"
      >
        BUY TICKETS
      </a>
    `,(u=e.create(`
    <div class="modal">

      <button class="modal__close">
        &times;
      </button>

      <img
        class="modal__logo"
        src="${r}"
        alt="${i}"
      >

      <div class="modal__content">

        <img
          class="modal__poster"
          src="${r}"
          alt="${i}"
        >

        <div class="modal__info">

          <div class="modal__items">
            <h3 class="modal__title">INFO</h3>
            <p modal__texts>${s}</p>
          </div>

          <div class="modal__item">
            <h3 class="modal__title">WHEN</h3>
            <p class="modal__text">${l}</p>
            <p class="modal__text">${c}</p>
          </div>

          <div class="modal__item">
            <h3 class="modal__title">WHERE</h3>
            <p class="modal__text">${d}</p>
            <p class="modal__text">${m}</p>
          </div>

          <div class="modal__item">
            <h3 class="modal__title">WHO</h3>
            <p class="modal__text">${i}</p>
          </div>

          <div class="modal__item">
            <h3 class="modal__title">PRICES</h3>
            ${p}
          </div>

        </div>

      </div>

    </div>
  `)).show(),document.querySelector(".modal__close").addEventListener("click",v),window.addEventListener("keydown",_)});
//# sourceMappingURL=project.24320cac.js.map
