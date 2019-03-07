import React from 'react';
import { connect } from 'react-redux';


class NowPlayingDetails extends React.Component {

    render() {
        
        const { nowPlaying, match } = this.props;
        
        let movieArray = Object.keys(nowPlaying)
          .map(key => nowPlaying[key]);

        const movie = movieArray.filter(function(movieArray) {
            return movieArray.id == match.params.id;
        })

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
        nowPlaying: {...state.nowPlayingReducer.nowPlaying}
    }
  }
  
  export default connect(mapStateToProps)(NowPlayingDetails);
