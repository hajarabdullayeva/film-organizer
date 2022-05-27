import React from 'react';

import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';


function Movies(props) {
  return (
    <>
      <ul className="movies">
        {props.data && props.data.map((movie) => (
          <li className="movies__item" key={movie.id}>
            <MovieItem movie={movie} />
          </li>
        )
        )}
      </ul>
    </>
  );
}


export default Movies;