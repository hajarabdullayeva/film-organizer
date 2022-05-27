import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './ListPage.css';


function ListPage() {
  const movies = useSelector(state => state.movies.movies);
  const history = useHistory();

  useEffect(() => {
    if (!movies.length) history.push("/");
  }, [movies])

  return (
    <div className="list-page">
      <h1 className="list-page__title">Мой список</h1>
      <ul>
        {movies.map((item) => {
          const dateObj = new Date(item.release_date);
          const date = dateObj.getUTCFullYear() + "/" + (dateObj.getUTCMonth() + 1) + "/" + dateObj.getUTCDate();
          return <li key={item.id}>
            <a href="https://www.imdb.com/title/tt0068646/" rel="noopener">
              {item.title}
              ({date})
            </a>
          </li>
        })}
      </ul>
    </div>
  );
}



export default ListPage;

