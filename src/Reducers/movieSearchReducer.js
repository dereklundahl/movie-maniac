import {
    FETCH_MOVIE_SEARCH_PENDING,
    FETCH_MOVIE_SEARCH_FULFILLED,
    FETCH_MOVIE_SEARCH_REJECTED
  } from '../Actions/actionCreators';
  
  const initialState = {
    fetchingMovieSearch: false,
    fetchedMovieSearch: false,
    movieSearch: [],
    errorMovieSearch: null
  };
  
  
  export default function movieSearchReducer(state=initialState, action) {
      switch(action.type) {
          case FETCH_MOVIE_SEARCH_PENDING: {
            console.log("movie search pending fired from reducer");
            return {
              ...state, 
              fetchingMovieSearch: true
            }
          }
  
          case FETCH_MOVIE_SEARCH_REJECTED: {
            return {
                ...state,
                fetchingMovieSearch: false,
                error: action.payload  
            }
          }
  
          case FETCH_MOVIE_SEARCH_FULFILLED: {
            console.log("move search fulfilled fired from reducer");
            return {
              ...state, 
              fetchingMovieSearch: false,
              fetchedMovieSearch: true,
              movieSearch: action.movieSearch.results
            }
          }
  
          default:
            return state;
      }
  }
  
  
  