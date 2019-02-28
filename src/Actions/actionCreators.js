import axios from 'axios';
import { isPending } from 'q';

// Synchronous Action Creaters
export const SELECT_MOVIE = 'SELECT_MOVIE';
export function selectMovie(movie) {
    return {
        type: SELECT_MOVIE,
        movie
    }
} 

// Asynch Action Creaters

export const FETCH_DATA_PENDING = 'FETCH_DATA_PENDING'
export function fetchDataPending(movies) {
    return {
    type: FETCH_DATA_PENDING,
    movies
  }
}

export const FETCH_DATA_FULFILLED = 'FETCH_DATA-FULFILLED'
export function fetchDataFulfilled(movieDatabase, json) {
  return {
    type: FETCH_DATA_FULFILLED,
    popular: json,
    movieDatabase
  }
}

export const FETCH_DATA_REJECTED = 'FETCH_DATA_REJECTED';
export function fetchDataRejected(error) {
    return {
        type: FETCH_DATA_REJECTED,
        error
    }
}

// use thunk for async
export const fetchMovies = movieDatabase => dispatch => {
    dispatch(fetchDataPending(movieDatabase))
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=2`)
      .then(response => response.json())
      .then(json => dispatch(fetchDataFulfilled(movieDatabase, json)))
  }
  
  //consider using redux form
  export const searchMovies = formattedValue => dispatch => {
      console.log(`Step 2: https//api.themoviedb.org/3/search/movie?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&query=${formattedValue}`);
      dispatch(fetchMovieSearchPending())
      return fetch(`https://api.themoviedb.org/3/search/movie?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&query=${formattedValue}`)
        .then(response => response.json())
        .then(json => dispatch(fetchMovieSearchFulfilled(formattedValue, json)))
  }

  export const FETCH_MOVIE_SEARCH_PENDING = "FETCH_MOVIE_SEARCH_PENDING";
  export function fetchMovieSearchPending(movies) {
    console.log(`Step 3, movie search fetch pending action creator`);
    return {
    type: FETCH_MOVIE_SEARCH_PENDING,
    
  }
}

  export const FETCH_MOVIE_SEARCH_REJECTED = "FETCH_MOVIE_SEARCH_REJECTED";
  export function fetchMovieSearchRejected(error) {
    return {
        type: FETCH_MOVIE_SEARCH_REJECTED,
        error
    }
}

  export const FETCH_MOVIE_SEARCH_FULFILLED = "FETCH_MOVIE_SEARCH_FULFILLED";
  export function fetchMovieSearchFulfilled(movieDatabase, json) {
    console.log(`step 5, movie search fetch fulfilled`);
    return {
      type: FETCH_MOVIE_SEARCH_FULFILLED,
      movieSearch: json,
      
    }
  }
  
