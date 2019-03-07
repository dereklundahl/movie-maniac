import React from 'react';
import { connect } from 'react-redux';


class PopularDetails extends React.Component {

    render() {
        
        const { popular, match } = this.props;
        
        let movieArray = Object.keys(popular)
          .map(key => popular[key]);

        const movie = movieArray.filter(function(popular) {
            return popular.id == match.params.id;
        })
        console.log(`URL: ${match.params.id}`)
        console.log(`MOVIE: ${JSON.stringify(movie)}`)

          return (
              <div>
                <div>
                  <h1>{movie[0].title}</h1>
                  <img 
                    src={`https://image.tmdb.org/t/p/w500/${movie[0].poster_path}`} 
                    alt="movie-poster"
                  />
                  <h3>{`Release Date: ${movie[0].release_date}`}</h3>
                  <h3>{`Popularity: ${movie[0].popularity}`}</h3>
                  <p>{movie[0].overview}</p>
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
  
  export default connect(mapStateToProps)(PopularDetails);
