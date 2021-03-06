import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import popularReducer from './popularReducer';
import topRatedReducer from './topRatedReducer';
import nowPlayingReducer from './nowPlayingReducer';
import movieSearchReducer from './movieSearchReducer';
import slideShowReducer from './slideShowReducer';


export default (history) => combineReducers({
    router: connectRouter(history), 
      popularReducer,
      topRatedReducer,
      nowPlayingReducer,
      movieSearchReducer,
      slideShowReducer
})




