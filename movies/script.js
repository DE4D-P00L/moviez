const endpoint = "https://moviez-backend.onrender.com";
const imageEndpoint = "https://image.tmdb.org/t/p";
const cardContainer = document.getElementById("card-container");
const logoutButton = document.querySelector("#logoutButton");

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "../authentication/";
});

function debounce(fn, delay = 500) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const searchInput = document.getElementById("search-input");

const handleSearch = async (searchTerm) => {
  const res = await fetch(endpoint + "/api/movies/" + searchTerm);
  const movieList = await res.json();

  movieList?.movies?.forEach((item) => {
    const card = document.createElement("a");
    card.className = "card";
    let mediaType;
    if (item.media_type) {
      mediaType = item.media_type;
    } else {
      mediaType = "movie";
    }
    card.href = `../details/index.html?id=${item?.id}&type=${mediaType}`;
    const cardImage = document.createElement("img");
    cardImage.className = "card-image";
    const posterPath =
      item.poster_path === null
        ? "https://placehold.co/170x270"
        : `https://image.tmdb.org/t/p/w500/${item?.poster_path}`;
    cardImage.src = posterPath;

    const cardTitle = document.createElement("p");
    cardTitle.className = "card-title";
    cardTitle.innerText = item?.title || item?.original_name;

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    cardContainer.appendChild(card);
  });
};

const debouncedSearch = debounce(handleSearch, 300);

searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value;
  cardContainer.innerHTML = "";
  if (searchTerm?.trim !== "") {
    debouncedSearch(searchTerm);
  } else {
    fetchAllMovies();
  }
});

const fetchAllMovies = async () => {
  const res = await fetch(endpoint + "/api/movies");
  const data = await res.json();
  data?.movies?.forEach((item) => {
    const card = document.createElement("a");
    card.className = "card";
    let mediaType;
    if (item.media_type) {
      mediaType = item.media_type;
    } else {
      mediaType = "movie";
    }

    card.href = `../details/index.html?id=${item?.id}&type=${mediaType}`;

    const cardImage = document.createElement("img");
    cardImage.className = "card-image";

    const posterPath =
      item.poster_path === null
        ? "https://placehold.co/170x270"
        : `https://image.tmdb.org/t/p/w500/${item?.poster_path}`;
    cardImage.src = posterPath;

    const cardTitle = document.createElement("h3");
    cardTitle.className = "card-title";
    cardTitle.innerText = item?.title || item?.original_name;

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    cardContainer.appendChild(card);
  });
};

window.onload = () => {
  searchInput.value = "";
  fetchAllMovies();
};
