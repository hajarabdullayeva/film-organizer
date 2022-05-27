import React, { Component } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';

class MainPage extends Component {
  state = {
    data: {},
    inputVal: ''
  }

  searchLineChangeHandler = (e) => {
    this.setState({ searchLine: e.target.value });
  }
  onInoutChange = (e) => {
    this.setState({ inputVal: e.target.value })
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=1c7c09a65a1976f0157c5fc8f1e38744&query=${this.state.inputVal}`)
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(err => console.log(err))
  }
  searchBoxSubmitHandler = (e) => {
    e.preventDefault();
  }
  searchBoxSubmitFinder(e) {
    e.preventDefault();

  }

  render() {
    return (
      <div className="main-page">
        <Header />
        <main className="main-page__content">
          <section className="main-page__main-section">
            <div className="main-page__search-box">
              <SearchBox
                searchLineChangeHandler={this.searchLineChangeHandler}
                searchBoxSubmitFinder={this.searchBoxSubmitFinder}
                inputVal={this.inputVal}
                onInoutChange={this.onInoutChange}
              />
            </div>
            <div className="main-page__movies">
              <Movies data={this.state.data.results} />
            </div>
          </section>
          <aside className="main-page__favorites">
            <Favorites />
          </aside>
        </main>
      </div>
    );
  }
}

export default MainPage;