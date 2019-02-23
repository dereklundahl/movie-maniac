import axios from 'axios';
 

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
export function fetchDataFulfilled(movies, json) {
  return {
    type: FETCH_DATA_FULFILLED,
    movies: json,
    receivedAt: Date.now()
  }
}

export const FETCH_DATA_REJECTED = 'FETCH_DATA_REJECTED';
export function fetchDataRejected(error) {
    return {
        type: FETCH_DATA_REJECTED,
        error
    }
}

// use thunk and add axios and promise to minimize code in calls
export function fetchMovies() {
    console.log("FETCH MOVIES FIRING FROM actionCreators");
    return function(dispatch) {
        dispatch({type: "FETCH_DATA_PENDING"})
        axios.get(
            "https://api.themoviedb.org/3/movie/popular?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=2")
            .then((response) => {
                console.log(JSON.stringify(response));
                dispatch({type: "FETCH_DATA_FULFILLED", payload: response.data})
            })
            .catch((err) => {
                dispatch({type: "FETCH_DATA_REJECTED", payoad: err})
            })
        }
    }