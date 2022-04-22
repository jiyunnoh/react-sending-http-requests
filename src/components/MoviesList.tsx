import React from 'react';
import { MovieType } from '../App';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props: { movies: MovieType[]; }) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
