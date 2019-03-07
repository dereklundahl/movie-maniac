import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PopularGrid from './PopularGrid';
import PopularDetails from './PopularDetails';

class Popular extends React.Component {
    render() {
        return (
            <div>
              <div>
                <Route exact path='/popular' component={PopularGrid}/>
                <Route path='/popular/:id' component={PopularDetails}/>
              </div>
          </div>
        )
    }
} 


const mapStateToProps = (state) => {
    return {
        popular: {...state.popularReducer.popular}
    }
  }

export default connect(mapStateToProps)(Popular);
