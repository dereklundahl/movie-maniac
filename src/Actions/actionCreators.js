// Movie Search
export const FETCH_MOVIE_SEARCH_PENDING = "FETCH_MOVIE_SEARCH_PENDING";
export function fetchMovieSearchPending(movies) {
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
  return {
    type: FETCH_MOVIE_SEARCH_FULFILLED,
    movieSearch: json,
    
  }
}

export const searchMovies = formattedValue => dispatch => {
  dispatch(fetchMovieSearchPending())
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&query=${formattedValue}`)
    .then(response => response.json())
    .then(json => dispatch(fetchMovieSearchFulfilled(formattedValue, json)))
}

//Slide Show

export const FETCH_SLIDESHOW_PENDING = 'FETCH_SLIDESHOW_PENDING';
export function fetchSlideShowPending(movies) {
  return {
  type: FETCH_SLIDESHOW_PENDING,
  movies
}
}

export const FETCH_SLIDESHOW_FULFILLED = 'FETCH_SLIDESHOW_FULFILLED';
export function fetchSlideShowFulfilled(movieDatabase, json) {
return {
  type: FETCH_SLIDESHOW_FULFILLED,
  slideShow: json,
  movieDatabase
}
}

export const FETCH_SLIDESHOW_REJECTED = 'FETCH_SLIDESHOW_REJECTED';
export function fetchSlideShowRejected(error) {
  return {
      type: FETCH_SLIDESHOW_REJECTED,
      error
  }
}

export const fetchSlideShowMovies = movieDatabase => dispatch => {
  dispatch(fetchSlideShowPending(movieDatabase))
  return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=2`)
    .then(response => response.json())
    .then(json => dispatch(fetchSlideShowFulfilled(movieDatabase, json)))
}

//Popular

export const FETCH_POPULAR_PENDING = 'FETCH_POPULAR_PENDING';
export function fetchPopularPending(movies) {
  return {
  type: FETCH_POPULAR_PENDING,
  movies
}
}

export const FETCH_POPULAR_FULFILLED = 'FETCH_POPULAR_FULFILLED';
export function fetchPopularFulfilled(movieDatabase, json) {
return {
  type: FETCH_POPULAR_FULFILLED,
  popular: json,
  movieDatabase
}
}

export const FETCH_POPULAR_REJECTED = 'FETCH_POPULAR_REJECTED';
export function fetchPopularRejected(error) {
  return {
      type: FETCH_POPULAR_REJECTED,
      error
  }
}

export const fetchPopularMovies = movieDatabase => dispatch => {
  dispatch(fetchPopularPending(movieDatabase))
  return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1`)
    .then(response => response.json())
    .then(json => dispatch(fetchPopularFulfilled(movieDatabase, json)))
}


//Top Rated

export const FETCH_TOP_RATED_PENDING = 'FETCH_TOP_RATED_PENDING';
export function fetchTopRatedPending(movies) {
  return {
  type: FETCH_TOP_RATED_PENDING,
  movies
}
}

export const FETCH_TOP_RATED_FULFILLED = 'FETCH_TOP_RATED_FULFILLED';
export function fetchTopRatedFulfilled(movieDatabase, json) {
return {
  type: FETCH_TOP_RATED_FULFILLED,
  topRated: json,
  movieDatabase
}
}

export const FETCH_TOP_RATED_REJECTED = 'FETCH_TOP_RATED_REJECTED';
export function fetchTopRatedRejected(error) {
  return {
      type: FETCH_TOP_RATED_REJECTED,
      error
  }
}

export const fetchTopRatedMovies = movieDatabase => dispatch => {
  dispatch(fetchTopRatedPending(movieDatabase))
  return fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1`)
    .then(response => response.json())
    .then(json => dispatch(fetchTopRatedFulfilled(movieDatabase, json)))
}


//Now Playing

export const FETCH_NOW_PLAYING_PENDING = 'FETCH_NOW_PLAYING_PENDING';
export function fetchNowPlayingPending(movies) {
  return {
  type: FETCH_NOW_PLAYING_PENDING,
  movies
}
}

export const FETCH_NOW_PLAYING_FULFILLED = 'FETCH_NOW_PLAYING_FULFILLED';
export function fetchNowPlayingFulfilled(movieDatabase, json) {
return {
  type: FETCH_NOW_PLAYING_FULFILLED,
  nowPlaying: json,
  movieDatabase
}
}

export const FETCH_NOW_PLAYING_REJECTED = 'FETCH_NOW_PLAYING_REJECTED';
export function fetchNowPlayingRejected(error) {
  return {
      type: FETCH_NOW_PLAYING_REJECTED,
      error
  }
}

export const fetchNowPlayingMovies = movieDatabase => dispatch => {
  dispatch(fetchNowPlayingPending(movieDatabase))
  return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=2`)
    .then(response => response.json())
    .then(json => dispatch(fetchNowPlayingFulfilled(movieDatabase, json)))
}



//   fetch('https://api.themoviedb.org/3/movie/popular?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1', {

//     fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1`, {

//     fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1`, {
