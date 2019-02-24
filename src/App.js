import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import Main from './components/Main';

import { fetchMovies } from './Actions/actionCreators';


connect((store) => {
  return {
    popular: store.popular
  };
});

class App extends Component {

  componentWillMount() {
    this.props.dispatch(fetchMovies());
  }

  render() {
    const { fetchingPopular, fetchedPopular, errorPopular, popular } = this.props
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { popular,
    fetchingPopular,
    fetchedPopular,
    errorPopular } = state
  return {
    popular,
    fetchingPopular,
    fetchedPopular,
    errorPopular,
  }
}

export default connect(mapStateToProps)(App);



  //   fetch('https://api.themoviedb.org/3/movie/popular?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1', {
  
  //     fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1`, {
  
  //     fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1`, {
  