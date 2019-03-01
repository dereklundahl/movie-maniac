import React from 'react';
import { connect } from 'react-redux';

class NowPlayingGrid extends React.Component {
    render() {

        const { nowPlaying } = this.props;

        return (
          <div className="grid">
            <h1>Now Playing</h1>
            <figure>
              {Object.keys(nowPlaying).map(key => 
                <div key={key}>
                  <img src={`https://image.tmdb.org/t/p/w500/${nowPlaying[key].poster_path}`}
                       alt="movie-poster"
                       className="grid-item"
                       id={`grid-item-${key}`}
                  />
                </div>
              )}
            </figure>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        nowPlaying: {...state.nowPlayingReducer.nowPlaying}
    }
  }

export default connect(mapStateToProps)(NowPlayingGrid);

