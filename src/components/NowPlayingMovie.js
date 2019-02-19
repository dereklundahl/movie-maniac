import React from "react";

class NowPlayingMovie extends React.Component {
    render() {
        return (
          <div className="single-movie">
             <img 
               src={`https://image.tmdb.org/t/p/w300/${this.props.movieDetails.poster_path}`} 
               alt="move poster" />
          </div>
        )
    }
}

export default NowPlayingMovie;
