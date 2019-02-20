import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import axios from 'axios';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import createRootReducer from './Reducers/index';

export const history = createBrowserHistory();

const defaultState = {
    data: [],
    fetching: false,
    fetched: false,
    error: null
};

export default function configureStore(defaultState) {
    const store = createStore(
        createRootReducer(history),
        defaultState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunk,
                logger
                // ..other middleware...
            ),
        ),
    )
    return store;
    // store.dispatch((dispatch) => {
    //     dispatch({type: "FETCH_DATA_START"})
    //     axios.get(
    //         "https://api.themoviedb.org/3/movie/popular?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1")
    //           .then((response) => {
    //               dispatch({type: "RECEIVE_DATA", payload: response.data})
    //           })
    //           .catch((err) => {
    //               dispatch({type: "FETCH_DATA_ERROR", payload: err})
    //           })
    // })
    
};

