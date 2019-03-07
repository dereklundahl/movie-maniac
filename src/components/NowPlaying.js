import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NowPlayingGrid from './NowPlayingGrid';
import NowPlayingDetails from './NowPlayingDetails';

class NowPlaying extends React.Component {
    render() {
        return (
            <div>
              <div>
                <Route exact path='/now-playing' component={NowPlayingGrid}/>
                <Route path='/now-playing/:id' component={NowPlayingDetails}/>
              </div>
          </div>
        )
    }
} 


const mapStateToProps = (state) => {
    return {
        nowPlaying: {...state.nowPlayingReducer.nowPlaying}
    }
  }

export default connect(mapStateToProps)(NowPlaying);
