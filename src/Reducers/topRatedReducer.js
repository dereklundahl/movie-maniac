
import {
    FETCH_DATA_PENDING,
    FETCH_DATA_FULFILLED,
    FETCH_DATA_REJECTED
} from '../Actions/actionCreators';

const initialState = {
    topRated: [],
    loading: false,
    err: null
};

export default function topRated(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_DATA_PENDING': {
          return {
              ...state,
              fetching: true,
          }
          break;
        }

        
        case 'FETCH_DATA_FULFILLED': {
          return {
              ...state,
              fetching: false,
              fetched: true,
              data: action.payload
          }
          break;
        }

        case 'FETCH_DATA_REJECTED': {
          return {
              ...state,
              fetching: false,
              error: action.payload  
          }
          break;
        }
          
        default:
          return state;

    }
}