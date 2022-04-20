import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

type FetchedMovieType = {
  episode_id: number
  title: string
  opening_crawl: string
  release_date: string
}

function App() {
  const [movies, setMovies] = useState([]);
  function fetchMoviesHandler() {
    fetch('https://swapi.dev/api/films/').then(response => {
      return response.json();
    }).then(data => {
      const transformedMovies = data.results.map((movieData: FetchedMovieType) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        };
      });
      setMovies(transformedMovies);
    });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;