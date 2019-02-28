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
  
  
  export default function popularReducer(state=initialState, action) {
      switch(action.type) {
          case FETCH_MOVIE_SEARCH_PENDING: {
            console.log("STEP 4 from reducer change fetching to true !!!")
            return {
              ...state, 
              fetchingMovieSearch: true
            }
          }
  
          case FETCH_MOVIE_SEARCH_REJECTED: {
            console.log("rejected!!!");
            return {
                ...state,
                fetchingMovieSearch: false,
                error: action.payload  
            }
          }
  
          case FETCH_MOVIE_SEARCH_FULFILLED: {
            console.log("step 6, movie search FULFILLED from the reducer STEP 5")
            return {
              ...state, 
              fetchingMovieSearch: false,
              fetchedMovieSearch: true,
              movieSearch: action.results
            }
          }
  
          default:
            return state;
      }
  }
  
  
  