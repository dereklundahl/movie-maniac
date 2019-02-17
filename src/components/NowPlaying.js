import React from "react";
import '../assets/css/NowPlaying.css';
import NowPlayingMovie from './NowPlayingMovie';

class NowPlaying extends React.Component {
    render() {
        return (
            <div className="panel">
              <h1 className="component-header">Now Playing</h1>
              {Object.keys(this.props.nowPlaying).map(key => 
                <NowPlayingMovie 
                  key={key} 
                  movieDetails={this.props.nowPlaying[key]}
                />
              )}
            </div>
        );
    }
}

export default NowPlaying;
