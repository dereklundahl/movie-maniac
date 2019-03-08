import React from 'react';
import { connect } from 'react-redux';

import SearchStyles from './styles/SearchStyles';


class MovieSearchList extends React.Component {
    render() {
       
        const { movieSearch } = this.props;

        return (
          <SearchStyles>
            <figure>
              {Object.keys(movieSearch).map(key => 
                <div key={key}>
                  <img src={`https://image.tmdb.org/t/p/w500/${movieSearch[key].poster_path}`}
                       alt="movie-poster"
                       className="movie"
                       id={`movie-${key}`}
                  />
                  <p className="overview">{movieSearch[key].overview}</p>
                </div>
              )}
            </figure>
          </SearchStyles>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movieSearch: {...state.movieSearchReducer.movieSearch}
    }
  }
  
export default connect(mapStateToProps)(MovieSearchList)
  






