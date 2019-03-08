import React from 'react';
import { connect } from 'react-redux';

import DetailStyles from './styles/DetailStyles.css';


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
                <div className="container">
                  <h1 className="box1">{movie[0].title}</h1>
                  <img 
                    className="box2"
                    src={`https://image.tmdb.org/t/p/w500/${movie[0].poster_path}`} 
                    alt="movie-poster"
                  />
                  <h3 className="box3">{`Release Date: ${movie[0].release_date}`}</h3>
                  <h3 classname="box4">{`Popularity: ${movie[0].popularity}`}</h3>
                  <p className="box5">{movie[0].overview}</p>
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
