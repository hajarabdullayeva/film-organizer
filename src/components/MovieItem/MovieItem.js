import React from 'react';
import { favoriteMoviesActions } from '../../store/favoriteMoviesSlice';
import { useDispatch } from 'react-redux';
import './MovieItem.css';

function MovieItem({ movie }) {
  const { id, title, release_date, poster_path, vote_average} = movie;
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(favoriteMoviesActions.addMovie(movie));
    console.log(movie)
  };

  return (
    <article className="movie-item" key={id}>
      <img className="movie-item__poster" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">{title}&nbsp; {release_date}</h3>
        <p>Imdb: {vote_average}</p>
        <button onClick={onClickHandler} type="button" className="movie-item__add-button">
          Добавить в список
        </button>
      </div>
    </article>
  );
}


export default MovieItem;