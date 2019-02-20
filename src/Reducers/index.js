import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import popular from './popular';
import topRated from './topRated';
import nowPlaying from './nowPlaying';

export default (history) => combineReducers({
    router: connectRouter(history), 
      popular,
      topRated,
      nowPlaying
})




