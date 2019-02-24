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
    console.log("fetch data pending from action creators synch STEP 2"); 
    return {
    type: FETCH_DATA_PENDING,
    movies
  }
}

export const FETCH_DATA_FULFILLED = 'FETCH_DATA-FULFILLED'
export function fetchDataFulfilled(movieDatabase, json) {
  console.log("fetch data fulfilled firing from actionCreators STEP 4");
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
    console.log("Fetch movies firing from action creators STEP 1");
    dispatch(fetchDataPending(movieDatabase))
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=2`)
      .then(response => response.json())
      .then(json => dispatch(fetchDataFulfilled(movieDatabase, json)))
  }

// export function fetchMovies() {
//     return function(dispatch) {
//         console.log("about to dispatch");
//         dispatch({type: "FETCH_DATA_PENDING"})
//         axios.get(
//             "https://api.themoviedb.org/3/movie/popular?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=2")
//             .then((response) => {
//                 console.log(`this is the response ${JSON.stringify(response.data)}`);
//                 dispatch({type: "FETCH_DATA_FULFILLED", payload: response.data})
//             })
//             .catch((err) => {
//                 dispatch({type: "FETCH_DATA_REJECTED", payoad: err})
//             })
//     }
// }

