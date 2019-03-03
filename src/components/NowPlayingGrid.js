import React from 'react';
import { connect } from 'react-redux';

import { GridStyles, StyledHeader } from './styles/GridStyles';


class NowPlayingGrid extends React.Component {
    
  
  render() {

        const { nowPlaying } = this.props;

        return (
          <div>
            <StyledHeader>Now Playing</StyledHeader>
            <GridStyles>
              {Object.keys(nowPlaying).map(key => 
                <div key={key}>
                  <figure>
                    <img 
                       src={`https://image.tmdb.org/t/p/w500/${nowPlaying[key].poster_path}`}
                       alt="movie-poster"
                       className="flex-item"
                       id={`flex-item-${key}`}
                    />
                  </figure>
                </div>
              )}
            </GridStyles>
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

