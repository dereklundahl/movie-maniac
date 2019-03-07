import React from 'react';
import { connect } from 'react-redux';

import SlideStyles from './styles/SlideStyles.css';

class SlideShow extends React.Component {
  render() {
    const { slideShow } = this.props;
  
    return (
        <div className="slider">
            {Object.keys(slideShow).map(key => 
              <div key={key}>
                <figure>
                <img src={`https://image.tmdb.org/t/p/w500/${slideShow[key].poster_path}`}
                     alt="movie-poster"
                     className="slide"
                     id={`slide-${key}`}
                />
                </figure>
              </div>
            )}
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


