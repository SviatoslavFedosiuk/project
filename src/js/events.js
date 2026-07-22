import countries from "../../contries.json";
import { setCurrentEvents, addCurrentEvents } from "./store";

const URL = "https://app.ticketmaster.com/discovery/v2/events.json";
const API_KEY = "ezWc074ZK650GLmxX6jhWkiy8pziLAGk";

let search = "";
let countryCode = "";
let page = 0;
const limit = 12;

const galleryRef = document.querySelector(".events__gallery");
const formRef = document.querySelector(".events__form");
const divRef = document.querySelector(".events__elements");

formRef.addEventListener("submit", async (e) => {
  e.preventDefault();

  search = e.currentTarget.elements.search.value.trim();

  const countryName = e.currentTarget.elements.country.value.trim();

  const country = countries.find(
    ({ code }) => code.toLowerCase() === countryName.toLowerCase()
  );

  if (!country) {
    alert("Country not found");
    return;
  }

  countryCode = country.code;

  page = 0;
  galleryRef.innerHTML = "";

  const events = await getEvents();

  setCurrentEvents(events);

  render(events);
});

async function getEvents() {
  const res = await fetch(
    `${URL}?apikey=${API_KEY}&keyword=${encodeURIComponent(
      search
    )}&countryCode=${countryCode}&page=${page}&size=${limit}`
  );

  const data = await res.json();

  console.log(data);

  return data._embedded?.events || [];
}

function render(events) {
  const markup = events
    .map((event) => {
      const city = event._embedded?.venues?.[0]?.city?.name ?? "";

      return `
        <li class="events__part" data-id="${event.id}">
          <img
            src="${event.images[0].url}"
            alt="${event.name}"
            class="events__img"
          />

          <div class="stats">
            <h2 class="events__names">${event.name}</h2>

            <p class="events__date">
              ${event.dates.start.localDate}
            </p>

            <p class="events__locate">
              ${city}
            </p>
          </div>
        </li>
      `;
    })
    .join("");

  galleryRef.insertAdjacentHTML("beforeend", markup);
}

const observer = new IntersectionObserver(
  async (entries) => {
    const entry = entries[0];

    if (!entry.isIntersecting || !search || !countryCode) return;

    page++;

    const events = await getEvents();

    if (events.length === 0) return;

    addCurrentEvents(events);

    render(events);
  },
  {
    rootMargin: "300px",
  }
);

observer.observe(divRef);