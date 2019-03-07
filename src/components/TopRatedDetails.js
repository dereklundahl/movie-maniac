import React from 'react';
import { connect } from 'react-redux';


class TopRatedDetails extends React.Component {

    render() {
        
        const { topRated, match } = this.props;
        let movieArray = Object.keys(topRated)
          .map(key => topRated[key]);

        const movie = movieArray.filter(function(topRated) {
            return topRated.id === match.params.id;
        })

        console.log(`the url is: ${match.params.id}
          the movie is ${JSON.stringify(movie)}`)

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
        topRated: {...state.topRatedReducer.topRated}
    }
  }
  
  export default connect(mapStateToProps)(TopRatedDetails);
