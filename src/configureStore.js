import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import createRootReducer from './Reducers/index';

export const history = createBrowserHistory();

const defaultState = {
    nowPlayingReducer: [],
    popularReducer: [],
    topRatedReducer: [],
    movieSearchReducer: {},
    router: {}
    
    // topRated: [],
    // fetchingTopRated: false,
    // fetchedTopRated: false,
    // errorTopRated: null,
  
    // popular: [],
    // fetchingPopular: false,
    // fetchedPopular: false,
    // errorPopular: null,
  
    // nowPlaying: [],  
    // fetchingNowPlaying: false,
    // fetchedNowPlaying: false,
    // errorNowPlaying: null
  

};

export default function configureStore() {
    const store = createStore(
        createRootReducer(history), defaultState,
            applyMiddleware(
                routerMiddleware(history),
                thunk,
                logger,
                
                // ..other middleware...
            )
    )
    return store;
};

