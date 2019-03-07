import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header';
import SlideShow from './components/SlideShow';
import Popular from './components/Popular';
import TopRated from './components/TopRated';
import NowPlaying from './components/NowPlaying';
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
            <Header {...this.props} />
            {this.props.fetchingSlideShow ? 
              <h1>Loading...</h1> :
              <Switch>
                  <Route exact path="/" component={SlideShow}/>
                  <Route path="/popular" component={Popular}/>
                  <Route path="/top-rated" component={TopRated}/>
                  <Route path="/now-playing" component={NowPlaying}/>
                  <Route path="/search/:movieName" component={MovieSearchList} />
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
  }
}


export default connect(mapStateToProps)(App);


