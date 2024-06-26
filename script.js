const endpoint = "https://moviez-backend.onrender.com";
// const endpoint = "http://localhost:5000";

const logoutButton = document.querySelector("#logoutButton");

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "./authentication/";
});

const topRatedMoviesContainer = document.querySelector(
  "#card-container-topMovie"
);
const topRatedShowsContainer = document.querySelector(
  "#card-container-topShows"
);

const fetchMovies = () => {
  let popularMovie;
  fetch(endpoint + "/api/movie/")
    .then((response) => response.json())
    .then((response) => {
      popularMovie = response.topMovie;
      const heroSection = document.getElementById("hero");
      const heroImage = document.createElement("img");
      heroImage.src = `https://image.tmdb.org/t/p/original/${popularMovie?.backdrop_path}`;
      heroImage.className = "hero-image";
      const heroTitle = document.getElementById("hero-title");
      heroTitle.innerText = popularMovie?.title;
      const heroSummary = document.getElementById("hero-summary");
      heroSummary.innerText = popularMovie?.overview;
      const heroPoster = document.getElementById("poster");
      heroPoster.src = `https://image.tmdb.org/t/p/original/${popularMovie?.poster_path}`;
      const heroCta = document.getElementById("hero-cta");
      heroCta.href = `./details/index.html?id=${popularMovie?.id}&type=movie`;
      heroSection.appendChild(heroImage);
    })
    .catch((err) => console.error(err));
};

const fetchAllMedia = async () => {
  const res = await fetch(endpoint + "/api/");
  const data = await res.json();

  const cardContainer = document.getElementById("card-container");

  data?.all?.forEach((item) => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = `./details/index.html?id=${item?.id}&type=${item?.media_type}`;

    const cardImage = document.createElement("img");
    cardImage.className = "card-image";
    cardImage.src = `https://image.tmdb.org/t/p/w500/${item?.poster_path}`;

    const cardTitle = document.createElement("h3");
    cardTitle.className = "card-title";
    cardTitle.innerText = item?.title || item?.original_name;

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    cardContainer.appendChild(card);
  });
};

const fetchTrendingMovies = async () => {
  const res = await fetch(endpoint + "/api/trending/movies");
  const data = await res.json();

  data?.movies?.forEach((item) => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = `./details/index.html?id=${item?.id}&type=movie`;

    const cardImage = document.createElement("img");
    cardImage.className = "card-image";
    cardImage.src = `https://image.tmdb.org/t/p/w500/${item?.poster_path}`;

    const cardTitle = document.createElement("h3");
    cardTitle.className = "card-title";
    cardTitle.innerText = item?.title || item?.original_name;

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    topRatedMoviesContainer.appendChild(card);
  });
};

const fetchTrendingShows = async () => {
  const res = await fetch(endpoint + "/api/trending/tv");
  const data = await res.json();

  data?.tv?.forEach((item) => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = `./details/index.html?id=${item?.id}&type=tv`;

    const cardImage = document.createElement("img");
    cardImage.className = "card-image";
    cardImage.src = `https://image.tmdb.org/t/p/w500/${item?.poster_path}`;

    const cardTitle = document.createElement("h3");
    cardTitle.className = "card-title";
    cardTitle.innerText = item?.title || item?.original_name;

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    topRatedShowsContainer.appendChild(card);
  });
};

window.onload = async function () {
  fetchMovies();
  await fetchAllMedia();
  await fetchTrendingMovies();
  await fetchTrendingShows();
  const loaderContainer = document.querySelector(".loader-container");
  loaderContainer.classList.add("hidden");
};
