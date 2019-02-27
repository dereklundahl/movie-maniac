import React from 'react';
import { connect } from 'react-redux';

import Slide from './Slide';

import SlideStyles from './styles/SlideStyles.css';

class SlideShow extends React.Component {
  render() {
    const { popular } = this.props;
  
    
    return (
        <div className="slider">
          <figure>
            {Object.keys(popular).map(key => 
              <div key={key}>
                <img src={`https://image.tmdb.org/t/p/w500/${popular[key].poster_path}`}
                     alt="movie-poster"
                     className="slide"
                     id={`slide-${key}`}
                />
              </div>
            )}
          </figure>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      popular: {...state.popularReducer.popular}
  }
}



export default connect(mapStateToProps)(SlideShow)


{/* <h1>Slide Show</h1>
{this.props.popular ?
 Object.keys(this.props.popular).map(key => 
  <Slide 
    key={key}
    i={key} 
    movieDetails={this.props.popular[key]}/>)
    : <p>something went wrong</p>} */}
