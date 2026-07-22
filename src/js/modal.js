import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";

import { currentEvents } from "./store";

const galleryRef = document.querySelector(".events__gallery");

let instance = null;

galleryRef.addEventListener("click", openModal);

function openModal(e) {
  const card = e.target.closest(".events__part");

  if (!card) return;

  const event = currentEvents.find(
    item => item.id === card.dataset.id
  );

  if (!event) return;

  const image = event.images[0].url;
  const name = event.name;
  const description = event.info ||  event.pleaseNote ||"No information";

  const date = event.dates.start.localDate;
  const time = event.dates.start.localTime || "";

  const city =
    event._embedded?.venues?.[0]?.city?.name || "";

  const venue =
    event._embedded?.venues?.[0]?.name || "";

  const url = event.url;

  let prices = "";

  if (event.priceRanges) {
    prices = event.priceRanges
      .map(
        item => `
          <p>
            ${item.type}: ${item.min}-${item.max} ${item.currency}
          </p>

          <a
            class="modal__btn"
            href="${url}"
            target="_blank"
          >
            BUY TICKETS
          </a>
        `
      )
      .join("");
  } else {
    prices = `
      <p>Price unavailable</p>

      <a
        class="modal__btn"
        href="${url}"
        target="_blank"
      >
        BUY TICKETS
      </a>
    `;
  }

  instance = basicLightbox.create(`
    <div class="modal">

      <button class="modal__close">
        &times;
      </button>

      <img
        class="modal__logo"
        src="${image}"
        alt="${name}"
      >

      <div class="modal__content">

        <img
          class="modal__poster"
          src="${image}"
          alt="${name}"
        >

        <div class="modal__info">

          <div class="modal__item">
            <h3>INFO</h3>
            <p>${description}</p>
          </div>

          <div class="modal__item">
            <h3>WHEN</h3>
            <p>${date}</p>
            <p>${time}</p>
          </div>

          <div class="modal__item">
            <h3>WHERE</h3>
            <p>${city}</p>
            <p>${venue}</p>
          </div>

          <div class="modal__item">
            <h3>WHO</h3>
            <p>${name}</p>
          </div>

          <div class="modal__item">
            <h3>PRICES</h3>
            ${prices}
          </div>

        </div>

      </div>

    </div>
  `);

  instance.show();

  document
    .querySelector(".modal__close")
    .addEventListener("click", closeModal);

  window.addEventListener("keydown", onEsc);
}

function closeModal() {
  if (!instance) return;

  instance.close();
  instance = null;

  window.removeEventListener("keydown", onEsc);
}

function onEsc(e) {
  if (e.key === "Escape") {
    closeModal();
  }
}