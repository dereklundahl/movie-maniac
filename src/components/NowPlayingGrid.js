import React from 'react';
import { connect } from 'react-redux';

import { GridStyles, StyledHeader } from './styles/GridStyles';

import NowPlayingPoster from './NowPlayingPoster';

class NowPlayingGrid extends React.Component {
   
  
  render() {

        const { nowPlaying } = this.props;

        return (
          <div>
            <StyledHeader>Now Playing</StyledHeader>
            <GridStyles>
              {Object.keys(nowPlaying).map(key => ( 
                  <NowPlayingPoster
                    key={key}
                    i={key}
                    details={nowPlaying[key]}
                    history={this.props.history} 
                  />
              ))}
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

