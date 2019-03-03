import React from 'react';
import { connect } from 'react-redux';

import { GridStyles, StyledHeader } from './styles/GridStyles';

class TopRatedGrid extends React.Component {
    render() {

        const { topRated } = this.props;

        return (
          <div>
            <StyledHeader>Top Rated</StyledHeader>
            <GridStyles>
              {Object.keys(topRated).map(key => 
                <div key={key}>
                  <figure>
                    <img src={`https://image.tmdb.org/t/p/w500/${topRated[key].poster_path}`}
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
        topRated: {...state.topRatedReducer.topRated}
    }
  }

export default connect(mapStateToProps)(TopRatedGrid);

