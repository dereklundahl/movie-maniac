import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import TopRatedGrid from './TopRatedGrid';
import TopRatedDetails from './TopRatedDetails';

class TopRated extends React.Component {
    render() {
        return (
            <div>
              <div>
                <Route exact path='/top-rated' component={TopRatedGrid}/>
                <Route path='/top-rated/:id' component={TopRatedDetails}/>
              </div>
          </div>
        )
    }
} 


const mapStateToProps = (state) => {
    return {
        topRated: {...state.topRatedReducer.topRated}
    }
  }

export default connect(mapStateToProps)(TopRated);
