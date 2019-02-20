// a reducer takes in two things
//1. the action
// 2. a copy of current state

import {
    FETCH_DATA_START,
    RECEIVE_DATA,
    FETCH_DATA_ERROR
} from '../Actions/actionCreaters';

const initialState = {
    data: [],
    loading: false,
    error: null
};

export default function topRated(state = initialState, action) {
    switch(action.type) {
        case FETCH_DATA_START: {
          return {
              ...state,
              fetching: true,
          }
          break;
        }

        case FETCH_DATA_ERROR: {
          return {
              ...state,
              fetching: false,
              error: action.payload
          }
          break;
        }

        case RECEIVE_DATA: {
          return {
              ...state,
              fetching: false,
              fetched: true,
              data: action.payload
          }
          break;
        }
          
        default:
          return state;

    }
}