import React from 'react';
import { connect } from 'react-redux';

import { GridStyles, StyledHeader } from './styles/GridStyles';

class PopularGrid extends React.Component {
    render() {

        const { popular } = this.props;

        return (
          <div>
            <StyledHeader>Popular</StyledHeader>
            <GridStyles>
              {Object.keys(popular).map(key => 
                <div key={key}>
                  <figure>
                    <img src={`https://image.tmdb.org/t/p/w500/${popular[key].poster_path}`}
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
        popular: {...state.popularReducer.popular}
    }
  }

export default connect(mapStateToProps)(PopularGrid);



