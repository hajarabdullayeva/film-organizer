import React from 'react';
import './SearchBox.css';

function SearchBox(props) {
  return (
    <div className="search-box" >
      <form className="search-box__form" onSubmit={props.searchBoxSubmitFinder}>
        <label className="search-box__form-label">
          Искать фильм по названию:
          <input
            value={props.inputVal}
            type="text"
            className="search-box__form-input"
            placeholder="Search"
            onChange={props.onInoutChange}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
        >
          Искать
        </button>
      </form>
    </div>
  );
}


export default SearchBox;

