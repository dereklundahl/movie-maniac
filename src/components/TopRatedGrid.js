import React from 'react';
import { connect } from 'react-redux';

import { GridStyles, StyledHeader } from './styles/GridStyles';

import TopRatedPoster from './TopRatedPoster';

class TopRatedGrid extends React.Component {
    render() {

        const { topRated } = this.props;

        return (
          <div>
            <StyledHeader>Top Rated</StyledHeader>
            <GridStyles>
              {Object.keys(topRated).map(key => ( 
                  <TopRatedPoster
                    key={key}
                    i={key}
                    details={topRated[key]}
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
        topRated: {...state.topRatedReducer.topRated}
    }
  }

export default connect(mapStateToProps)(TopRatedGrid);

