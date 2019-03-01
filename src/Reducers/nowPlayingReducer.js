import {
    FETCH_NOW_PLAYING_PENDING,
    FETCH_NOW_PLAYING_FULFILLED,
    FETCH_NOW_PLAYING_REJECTED
  } from '../Actions/actionCreators';
  
  const initialState = {
    fetchingNowPlaying: false,
    fetchedNowPlaying: false,
    nowPlaying: [],
    errorNowPlaying: null
  };
  
  
  export default function nowPlayingReducer(state=initialState, action) {
      switch(action.type) {
          case FETCH_NOW_PLAYING_PENDING: {
            return {
              ...state, 
              fetchingNowPlaying: true
            }
          }
  
          case FETCH_NOW_PLAYING_REJECTED: {
            return {
                ...state,
                fetchingNowPlaying: false,
                errorNowPlaying: action.payload  
            }
          }
  
          case FETCH_NOW_PLAYING_FULFILLED: {
            return {
              ...state, 
              fetchingNowPlaying: false,
              fetchedNowPlaying: true,
              nowPlaying: action.nowPlaying.results
            }
          }
  
          default:
            return state;
      }
  }
  
  