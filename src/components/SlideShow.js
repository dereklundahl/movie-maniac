import React from 'react';
import { connect } from 'react-redux';

import SlideStyles from './styles/SlideStyles.css';

class SlideShow extends React.Component {
  render() {
    const { slideShow } = this.props;
  
    return (
        <div className="slider">
          <figure>
            {Object.keys(slideShow).map(key => 
              
              <div className="slide" key={key}>
                <img src={`https://image.tmdb.org/t/p/w500/${slideShow[key].poster_path}`}
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
      slideShow: {...state.slideShowReducer.slideShow}
  }
}

export default connect(mapStateToProps)(SlideShow)


