import React from 'react';
import { connect } from 'react-redux';

import PopularPoster from './PopularPoster';

import { GridStyles, StyledHeader } from './styles/GridStyles';

class PopularGrid extends React.Component {
    render() {

        const { popular } = this.props;

        return (
          <div>
            <StyledHeader>Popular</StyledHeader>
            <GridStyles>
              {Object.keys(popular).map(key => ( 
                  <div>
                    <PopularPoster
                      key={key}
                      i={key}
                      details={popular[key]} 
                    />
                  </div>
                ))}
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

