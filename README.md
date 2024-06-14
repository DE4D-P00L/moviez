# Moviez: OTT Clone website

[Live Demo](https://de4d-p00l.github.io/moviez/)

[NodeJS Backend Code](https://github.com/DE4D-P00L/moviez-backend)

## Description:

Moviez is a fully responsive website built with HTML, CSS, and JavaScript that lets you explore the world of movies and shows. Utilize login/signup functionality to personalize your experience and discover trending, popular, and top-rated content through secure Node.js server-side interactions with The Movie Database (TMDb) API.

## Features:

- **Authentication**: Secure login and signup using server-side API hosted on Render.com (https://render.com) for a safe browsing experience.
- **Navigation**: Seamlessly navigate between home, movies, and shows pages after successful authentication.
- **Home Page**:
  Eye-catching hero section showcasing the trending movie.
  Dedicated sections for popular movies and shows to keep you in the loop.
  Top-rated movies and shows sections to explore critically acclaimed picks.
- **Movies and Shows Pages**:
  Integrated search bar with debouncing for real-time suggestions as you type.
  Recent movies/shows list for quick access to recent releases.
  Technologies:

## Tech Stack

- **Front-end**: HTML, CSS, JavaScript
- **Back-end**: Node.js (server hosted on Render.com)
- **Data Source**: The Movie Database API (https://developer.themoviedb.org/docs/getting-started)

## Getting Started:

1. Clone backend:

```bash
    git clone https://github.com/DE4D-P00L/moviez-backend.git
```

2. Install dependencies

```bash
    cd moviez-backend
    npm install
```

3. Add `.env` file to root of backend and configure environment variables

```
    TMDB_API_KEY=YOUR_API_KEY
    TMDB_API_TOKEN=YOUR_API_TOKEN
    MONGO_URI=YOUR_MONGODB_URI
```

4. Clone frontend Repository:

```bash
    git clone https://github.com/DE4D-P00L/moviez.git
```

5. Open `index.html` file

## Deployment:

- Build your front-end production assets (if applicable).
- Deploy both your front-end and back-end to appropriate hosting providers.
- Configure your front-end to point to the correct back-end API endpoints.

## Usage:

- Access the deployed front-end URL in your web browser.
- Login or sign up using the provided forms.
- Once authenticated, explore movies and shows on the dedicated pages.

## Note:

- This README provides a high-level overview. Refer to the code itself for specific implementation details.
- Back-end development instructions are intentionally omitted, as the focus is on the front-end repository.
