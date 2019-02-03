import React from "react";
import '../assets/css/NowPlaying.css';

class NowPlaying extends React.Component {
    render() {
        return (
            <div className="panel">
              <h1 className="component-header">Now Playing</h1>
              {/* this will be the fetch info to list movie data */}
              <div className="movie-list">
                <p1>Cool movie 1</p1>
                <p2>Cool movie 2</p2>
                <p3>Cool movie 3</p3>
              </div>
            </div>
        );
    }
}

export default NowPlaying;
