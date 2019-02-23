import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// will be doing a lot of async so promis will shorten code
import promise from 'redux-promise-middleware';

import createRootReducer from './Reducers/index';

export const history = createBrowserHistory();

const defaultState = {
    topRated: [],
    fetchingTopRated: false,
    fetchedTopRated: false,
    errorTopRated: null,
  
    popular: [],
    fetchingPopular: false,
    fetchedPopular: false,
    errorPopular: null,
  
    nowPlaying: [],  
    fetchingNowPlaying: false,
    fetchedNowPlaying: false,
    errorNowPlaying: null
  

};

export default function configureStore(defaultState) {
    const store = createStore(
        createRootReducer(history),
        //defaultState,
            applyMiddleware(
                routerMiddleware(history),
                thunk,
                logger,
                
                // ..other middleware...
            )
    )
    return store;
};

