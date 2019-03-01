import {
  FETCH_POPULAR_PENDING,
  FETCH_POPULAR_FULFILLED,
  FETCH_POPULAR_REJECTED
} from '../Actions/actionCreators';

const initialState = {
  fetchingPopular: false,
  fetchedPopular: false,
  popular: [],
  errorPopular: null
};


export default function popularReducer(state=initialState, action) {
    switch(action.type) {
        case FETCH_POPULAR_PENDING: {
          return {
            ...state, 
            fetchingPopular: true
          }
        }

        case FETCH_POPULAR_REJECTED: {
          return {
              ...state,
              fetchingPopular: false,
              errorPopular: action.payload  
          }
        }

        case FETCH_POPULAR_FULFILLED: {
          return {
            ...state, 
            fetchingPopular: false,
            fetchedPopular: true,
            popular: action.popular.results
          }
        }

        default:
          return state;
    }
}


