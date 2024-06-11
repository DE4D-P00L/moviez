const endpoint = "https://moviez-backend.onrender.com";
const imageEndpoint = "https://image.tmdb.org/t/p";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const contentId = urlParams.get("id");
const contentType = urlParams.get("type");

const banner = document.getElementById("banner");

const title = document.querySelector(".title");
const summary = document.querySelector(".summary");

const releaseDate = document.querySelector(".date");

const featureList = document.querySelector(".features");

const region = document.querySelector("#region");
const earning = document.querySelector("#earning");
const rating = document.querySelector("#rating");
const runtime = document.querySelector("#runtime");

const poster = document.querySelector("#poster");

const logoutButton = document.querySelector("#logoutButton");

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "../authentication/";
});

const fetchDetails = async () => {
  let queryEndpoint = endpoint;
  if (contentType === "movie") {
    queryEndpoint += "/api/movie/" + contentId;
  } else {
    queryEndpoint += "/api/tv/details/" + contentId;
  }

  const res = await fetch(queryEndpoint);
  const data = await res.json();

  console.log(data);
  banner.style.backgroundImage =
    "url('" + imageEndpoint + "/original" + data.movie.backdrop_path + "')";
  title.innerText = data.movie.title || data.movie.original_name;
  summary.innerText = data.movie.overview;
  const date = new Date(data.movie.release_date);

  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  releaseDate.innerText = formattedDate;
  region.innerText = data.movie.origin_country.join(",");
  earning.innerText = data.movie.revenue || 0;
  rating.innerText = data.movie.vote_average || 0;
  runtime.innerText = data.movie.runtime || 0;

  data.movie.genres.forEach((feature) => {
    const span = document.createElement("span");
    span.className = "feature";
    span.innerText = feature.name;
    featureList.appendChild(span);
  });

  const span = document.createElement("span");
  span.className = "feature";
  span.innerText = data.movie.status;
  featureList.appendChild(span);

  poster.src = imageEndpoint + "/w500" + data.movie.poster_path;
};

fetchDetails();
