import React from "react";
import PopularMovie from './PopularMovie';

class PopularComponent extends React.Component {
    render() {
        return (
          <div className="panel">
            <h1 className="component-header">Popular</h1>
            {Object.keys(this.props.popular).map(key => 
              <PopularMovie
                key={key}
                movieDetails={this.props.popular[key]}
               />
             )}
          </div>

        );
    }
}

export default PopularComponent;


