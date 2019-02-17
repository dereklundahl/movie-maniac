import React from "react";
import TopRatedMovie from './TopRatedMovie';
import '../assets/css/TopRated.css';

class TopRated extends React.Component {
    render() {
        return (
            <div className="panel">
              <h1 className="component-header">Top Rated</h1>
              {Object.keys(this.props.topRated).map(key => 
                <TopRatedMovie
                  key={key}
                  movieDetails={this.props.topRated[key]}
                 />
              )}
            </div>
        );
    }
}

export default TopRated;
