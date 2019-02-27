import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/Header';
import SlideShow from './components/SlideShow';
import PopularGrid from './components/PopularGrid';
import TopRatedGrid from './components/TopRatedGrid';
import NowPlayingGrid from './components/NowPlayingGrid';


import { fetchMovies } from './Actions/actionCreators';

import AppStyles from './components/styles/AppStyles';

class App extends Component {

  componentWillMount() {
    this.props.dispatch(fetchMovies());
  }

  render() {
    const { fetchingPopular, fetchedPopular, errorPopular, popular } = this.props

    return (
      <Router>
        <AppStyles>    
            <Header />
            {this.props.fetchingPopular ? 
              <h1>Loading...</h1> :
              fetchedPopular && popular !== 'undefined' ?
              <Switch>
                  <Route exact path="/" component={SlideShow}/>
                  <Route path="/popular" component={PopularGrid}/>
                  <Route path="/top-rated" component={TopRatedGrid}/>
                  <Route path="/now-playing" component={NowPlayingGrid}/>
              </Switch> : 
            <h1>OOOOOOPS!</h1>}
        </AppStyles>
      </Router  >
    );
  }
}


const mapStateToProps = (state) => {
  return {
      fetchingPopular: state.popularReducer.fetchingPopular,
      fetchedPopular: state.popularReducer.fetchedPopular,
      popular: {...state.popularReducer.popular}
  }
}


export default connect(mapStateToProps)(App);


  //   fetch('https://api.themoviedb.org/3/movie/popular?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1', {
  
  //     fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1`, {
  
  //     fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1`, {
  