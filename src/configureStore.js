import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from './Reducers/index';

export const history = createBrowserHistory();

const defaultState = {};

export default function configureStore(defaultState) {
    const store = createStore(
        createRootReducer(history),
        defaultState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                // ..other middleware...
            ),
        ),
    )
    return store;
}

