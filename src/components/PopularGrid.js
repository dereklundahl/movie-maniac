import React from 'react';
import { connect } from 'react-redux';

class PopularGrid extends React.Component {
    render() {

        const { popular } = this.props;

        return (
         <div className="grid">
            <h1>Popular</h1>
            <figure>
              {Object.keys(popular).map(key => 
                <div key={key}>
                  <img src={`https://image.tmdb.org/t/p/w500/${popular[key].poster_path}`}
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
        popular: {...state.popularReducer.popular}
    }
  }

export default connect(mapStateToProps)(PopularGrid);



