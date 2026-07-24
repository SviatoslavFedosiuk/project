var e={};e=(function e(n,t,a){function o(i,s){if(!t[i]){if(!n[i]){var c=void 0;if(!s&&c)return c(i,!0);if(r)return r(i,!0);var l=Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var d=t[i]={exports:{}};n[i][0].call(d.exports,function(e){return o(n[i][1][e]||e)},d,d.exports,e,n,t,a)}return t[i].exports}for(var r=void 0,i=0;i<a.length;i++)o(a[i]);return o})({1:[function(e,n,t){Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var a=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=e.trim(),!0===n?t.children:t.firstChild},o=function(e,n){var t=e.children;return 1===t.length&&t[0].tagName===n},r=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};t.visible=r,t.create=function(e,n){var t,i,s,c,l,d,u,m=(t=e=function(e){var n="string"==typeof e,t=e instanceof HTMLElement==1;if(!1===n&&!1===t)throw Error("Content must be a DOM element/node or string");return!0===n?Array.from(a(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),i=n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw Error("Property `onClose` must be a function");return e}(n),c=(s=a('\n		<div class="basicLightbox '.concat(i.className,'">\n			<div class="basicLightbox__placeholder" role="dialog"></div>\n		</div>\n	'))).querySelector(".basicLightbox__placeholder"),t.forEach(function(e){return c.appendChild(e)}),l=o(c,"IMG"),d=o(c,"VIDEO"),u=o(c,"IFRAME"),!0===l&&s.classList.add("basicLightbox--img"),!0===d&&s.classList.add("basicLightbox--video"),!0===u&&s.classList.add("basicLightbox--iframe"),s),v=function(e){var t;return!1!==n.onClose(f)&&(t=function(){if("function"==typeof e)return e(f)},m.classList.remove("basicLightbox--visible"),setTimeout(function(){return!1===r(m)||m.parentElement.removeChild(m),t()},410),!0)};!0===n.closable&&m.addEventListener("click",function(e){e.target===m&&v()});var f={element:function(){return m},visible:function(){return r(m)},show:function(e){var t;return!1!==n.onShow(f)&&(t=function(){if("function"==typeof e)return e(f)},document.body.appendChild(m),setTimeout(function(){requestAnimationFrame(function(){return m.classList.add("basicLightbox--visible"),t()})},10),!0)},close:v};return f}},{}]},{},[1])(1);var n={};n=JSON.parse('[{"name":"Ukraine","code":"UA"},{"name":"United States","code":"US"},{"name":"Canada","code":"CA"},{"name":"United Kingdom","code":"GB"},{"name":"Germany","code":"DE"},{"name":"France","code":"FR"},{"name":"Spain","code":"ES"},{"name":"Italy","code":"IT"},{"name":"Poland","code":"PL"},{"name":"Netherlands","code":"NL"},{"name":"Belgium","code":"BE"},{"name":"Austria","code":"AT"},{"name":"Switzerland","code":"CH"},{"name":"Denmark","code":"DK"},{"name":"Sweden","code":"SE"},{"name":"Norway","code":"NO"},{"name":"Finland","code":"FI"},{"name":"Ireland","code":"IE"},{"name":"Portugal","code":"PT"},{"name":"Australia","code":"AU"},{"name":"New Zealand","code":"NZ"},{"name":"Japan","code":"JP"}]');let t=[],a="",o="",r=0,i=document.querySelector(".events__gallery"),s=document.querySelector(".events__form"),c=document.querySelector(".events__elements");async function l(){let e=new URLSearchParams({apikey:"ezWc074ZK650GLmxX6jhWkiy8pziLAGk",keyword:a,page:r,size:12});o&&e.append("countryCode",o);let n=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${e}`),t=await n.json();return t._embedded?.events||[]}function d(e){let n=e.map(e=>{let n=e._embedded?.venues?.[0]?.city?.name??"";return`
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
              ${n}
            </p>
          </div>
        </li>
      `}).join("");i.insertAdjacentHTML("beforeend",n)}s.addEventListener("submit",async e=>{e.preventDefault(),a=e.currentTarget.elements.search.value.trim();let s=e.currentTarget.elements.country.value.trim().toLowerCase();if(o="",s){var c;let e=((c=n)&&c.__esModule?c.default:c).find(({name:e,code:n})=>e.toLowerCase()===s||n.toLowerCase()===s);if(!e)return void alert("Country not found");o=e.code}r=0,i.innerHTML="";let u=await l();t=[...u],d(u)}),new IntersectionObserver(async e=>{if(!e[0].isIntersecting||!a||!o)return;r++;let n=await l();0!==n.length&&(t.push(...n),d(n))},{rootMargin:"300px"}).observe(c);let u=document.querySelector(".events__gallery"),m=null;function v(){m&&(m.close(),m=null,window.removeEventListener("keydown",f))}function f(e){"Escape"===e.key&&v()}u.addEventListener("click",function(n){let a=n.target.closest(".events__part");if(!a)return;let o=t.find(e=>e.id===a.dataset.id);if(!o)return;let r=o.images[0].url,i=o.name,s=o.info||o.pleaseNote||"No information",c=o.dates.start.localDate,l=o.dates.start.localTime||"",d=o._embedded?.venues?.[0]?.city?.name||"",u=o._embedded?.venues?.[0]?.name||"",p=o.url,_="";_=o.priceRanges?o.priceRanges.map(e=>`
          <p>
            ${e.type}: ${e.min}-${e.max} ${e.currency}
          </p>

          <a
            class="modal__btn"
            href="${p}"
            target="_blank"
          >
            BUY TICKETS
          </a>
        `).join(""):`
      <p>Price unavailable</p>

      <a
        class="modal__btn"
        href="${p}"
        target="_blank"
      >
        BUY TICKETS
      </a>
    `,(m=e.create(`
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

          <div class="modal__item">
            <h3>INFO</h3>
            <p>${s}</p>
          </div>

          <div class="modal__item">
            <h3>WHEN</h3>
            <p>${c}</p>
            <p>${l}</p>
          </div>

          <div class="modal__item">
            <h3>WHERE</h3>
            <p>${d}</p>
            <p>${u}</p>
          </div>

          <div class="modal__item">
            <h3>WHO</h3>
            <p>${i}</p>
          </div>

          <div class="modal__item">
            <h3>PRICES</h3>
            ${_}
          </div>

        </div>

      </div>

    </div>
  `)).show(),document.querySelector(".modal__close").addEventListener("click",v),window.addEventListener("keydown",f)});
//# sourceMappingURL=project.e29304f5.js.map
