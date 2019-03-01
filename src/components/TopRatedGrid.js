import React from 'react';
import { connect } from 'react-redux';

class TopRatedGrid extends React.Component {
    render() {

        const { topRated } = this.props;

        return (
         <div className="grid">
            <h1>Top Rated</h1>
            <figure>
              {Object.keys(topRated).map(key => 
                <div key={key}>
                  <img src={`https://image.tmdb.org/t/p/w500/${topRated[key].poster_path}`}
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
        topRated: {...state.topRatedReducer.topRated}
    }
  }

export default connect(mapStateToProps)(TopRatedGrid);

