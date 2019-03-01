import {
    FETCH_SLIDESHOW_PENDING,
    FETCH_SLIDESHOW_FULFILLED,
    FETCH_SLIDESHOW_REJECTED
  } from '../Actions/actionCreators';
  
  const initialState = {
    fetchingSlideShow: false,
    fetchedSlideShow: false,
    slideShow: [],
    errorSlideShow: null
  };
  
  
  export default function slideShowReducer(state=initialState, action) {
      switch(action.type) {
          case FETCH_SLIDESHOW_PENDING: {
            return {
              ...state, 
              fetchingSlideShow: true
            }
          }
  
          case FETCH_SLIDESHOW_REJECTED: {
            return {
                ...state,
                fetchingSlideShow: false,
                errorSlideShow: action.payload  
            }
          }
  
          case FETCH_SLIDESHOW_FULFILLED: {
            return {
              ...state, 
              fetchingSlideShow: false,
              fetchedSlideShow: true,
              slideShow: action.slideShow.results
            }
          }
  
          default:
            return state;
      }
  }
  
  
  