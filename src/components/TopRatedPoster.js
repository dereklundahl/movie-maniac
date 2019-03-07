import React from "react";
import { Link } from 'react-router-dom';


class TopRatedPoster extends React.Component {

  render() {
        return (
            <figure className="single-movie">
              <div className="single-movie">
                <Link to={`/top-rated/${this.props.details.id}`}> 
                    <img 
                      src={`https://image.tmdb.org/t/p/w500/${this.props.details.poster_path}`}
                      className="flex-item"
                      alt="movie-poster"
                      history={this.props.history}
                     />
                </Link>
              </div>
            </figure>
           
        )
    }
}

export default TopRatedPoster;
