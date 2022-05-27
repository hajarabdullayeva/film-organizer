import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { favoriteMoviesActions } from '../../store/favoriteMoviesSlice';
import './Favorites.css';


function Favorites() {
  const movies = useSelector(state => state.movies.movies);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setIsValid(!!value && !!movies.length);
  }, [movies, value])

  const onChangeHandler = (value) => {
    setValue(value)
  }

  const removeHandler = (id) => {
    dispatch(favoriteMoviesActions.removeMovie(id));
  }

  const onSubmitHandler = () => {
    if (isValid) history.push("/list");
  }

  return (
    <div className="favorites">
      <input value={value} className="favorites__name" onChange={(e) => onChangeHandler(e.target.value)} />
      <ul className="favorites__list">
        {movies && movies.map((item) => {
          const dateObj = new Date(item.release_date);
          const date = dateObj.getUTCFullYear() + "/" + (dateObj.getUTCMonth() + 1) + "/" + dateObj.getUTCDate();
          return (
            <li className="favorites__item" key={item.id}>
              <span className="favorites__item-span">
                {item.title}
                ({date})
              </span>
              <button
                onClick={() => removeHandler(item.id)}
                className="favorites__remove-button"
                type='button'
              >
                X
              </button>
            </li>
          )
        })}
      </ul>
      <button onClick={onSubmitHandler} type="button" className={`favorites__save${isValid ? " valid" : ""}`}>
        Сохранить список
      </button>
    </div>
  );

}

export default Favorites;