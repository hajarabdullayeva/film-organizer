import { configureStore } from '@reduxjs/toolkit'
import { favoriteMoviesReducer } from "./favoriteMoviesSlice"

const store = configureStore({
  reducer: {
    movies: favoriteMoviesReducer
  },
});

export default store;
