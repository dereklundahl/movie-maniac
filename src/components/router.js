import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from '../configureStore';


import App from "../App";
import NotFound from './NotFound';
import MovieDetails from './MovieDetails';

const store = configureStore();



const Router = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={App} />
            </Switch>
        </ConnectedRouter>
    </Provider>
);

export default Router;