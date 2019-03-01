import {
  FETCH_TOP_RATED_PENDING,
  FETCH_TOP_RATED_FULFILLED,
  FETCH_TOP_RATED_REJECTED
} from '../Actions/actionCreators';

const initialState = {
  fetchingTopRated: false,
  fetchedTopRated: false,
  topRated: [],
  errorTopRated: null
};


export default function topRatedReducer(state=initialState, action) {
    switch(action.type) {
        case FETCH_TOP_RATED_PENDING: {
          return {
            ...state, 
            fetchingTopRated: true
          }
        }

        case FETCH_TOP_RATED_REJECTED: {
          return {
              ...state,
              fetchingTopRated: false,
              errorTopRated: action.payload  
          }
        }

        case FETCH_TOP_RATED_FULFILLED: {
          return {
            ...state, 
            fetchingTopRated: false,
            fetchedTopRated: true,
            topRated: action.topRated.results
          }
        }

        default:
          return state;
    }
}


