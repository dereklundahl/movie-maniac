import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header';
import SlideShow from './components/SlideShow';
import PopularGrid from './components/PopularGrid';
import TopRatedGrid from './components/TopRatedGrid';
import NowPlayingGrid from './components/NowPlayingGrid';
import MovieSearchList from './components/MovieSearchList';


import { 
  fetchSlideShowMovies, 
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchNowPlayingMovies } from './Actions/actionCreators';

import AppStyles from './components/styles/AppStyles';

class App extends Component {

  componentWillMount() {
    this.props.dispatch(fetchSlideShowMovies());
    this.props.dispatch(fetchPopularMovies());
    this.props.dispatch(fetchTopRatedMovies());
    this.props.dispatch(fetchNowPlayingMovies());
  }

  render() {
    return (
      <Router>
        <AppStyles>    
            <Header />
            {this.props.fetchingSlideShow ? 
              <h1>Loading...</h1> :
              <Switch>
                  <Route exact path="/" component={SlideShow}/>
                  <Route path="/popular" component={PopularGrid}/>
                  <Route path="/top-rated" component={TopRatedGrid}/>
                  <Route path="/now-playing" component={NowPlayingGrid}/>
                  <Route path="/search" component={MovieSearchList}/>
              </Switch> 
            }
        </AppStyles>
      </Router  >
    );
  }
}


const mapStateToProps = (state) => {
  return {
      fetchingSlideShow: state.slideShowReducer.fetchingSlideShow,
      fetchedSlideShow: state.slideShowReducer.fetchedSlideShow,
      slideShow: {...state.slideShowReducer.slideShow}
  }
}


export default connect(mapStateToProps)(App);


  //   fetch('https://api.themoviedb.org/3/movie/popular?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1', {
  
  //     fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1`, {
  
  //     fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1`, {
  