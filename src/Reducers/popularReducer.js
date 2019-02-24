import {
  FETCH_DATA_PENDING,
  FETCH_DATA_FULFILLED,
  FETCH_DATA_REJECTED
} from '../Actions/actionCreators';

const initialState = {
  fetching: false,
  fetched: false,
  popular: {},
  error: null
};


export default function popularReducer(state=initialState, action) {
    switch(action.type) {
        case FETCH_DATA_PENDING: {
          console.log("STEP 3, change fetching to TRUE !!!")
          return {
            ...state, 
            fetching: true
          }
        }

        case FETCH_DATA_REJECTED: {
          console.log("rejected!!!");
          return {
              ...state,
              fetching: false,
              error: action.payload  
          }
        }

        case FETCH_DATA_FULFILLED: {
          console.log("FETCH DATA FULFILLED from the reducer STEP 5")
          return {
            ...state, 
            fetching: false,
            fetched: true,
            popular: {...action.popular}
          }
        }

        default:
          return state;
    }
}


