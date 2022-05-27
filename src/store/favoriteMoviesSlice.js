import { createSlice } from '@reduxjs/toolkit';

export const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState: {
    movies: [],
  },
  reducers: {
    addMovie: (state, action) => {
      const movie = action.payload;
      const adOrNot = state.movies.find((item) => item.id === movie.id);
      if (!adOrNot) state.movies = [movie, ...state.movies]
    },
    removeMovie: (state, action) => {
      const movieID = action.payload;
      state.movies = state.movies.filter((movie) => movie.id !== movieID);
    },
    setTitle: (state, action) => {
      const title = action.payload;
      state.title = title;
    }
  }
})

export const favoriteMoviesActions = favoriteMoviesSlice.actions;
export const favoriteMoviesReducer = favoriteMoviesSlice.reducer;