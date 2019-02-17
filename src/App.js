import React, { Component } from 'react';
import './assets/css/App.css';
import NowPlaying from './components/NowPlaying';
import Popular from './components/Popular';
import TopRated from './components/TopRated';
import fetch from 'isomorphic-fetch';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popular: [],
      nowPlaying: [],
      topRated: [],
      loading: false
    }
  }

  // 1. Take a copy of the existing state:
  // const popular = {...this.state.popular};
  // 2. Add new data to the copy of state
  // Wes uses Date.now as his index like:
  // popular[`fish${Date.now()}`] = fish;
  // 3. Set the updated copy into the state
  // this.setState({
  //   popular: popular  sets the state to the copy
  //}) and can just be written as popular since propery and value are the same


  componentDidMount() {
    //Show that the data is loading
    this.setState({loading: true})
    //Use fetch api to get data to load into state for popular
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(response => response.json())
      .then(json => {
        this.setState({ popular: json.results })
      });
    // Use fetch api to get now playing data and load in state
      fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(response => response.json())
        .then(json => {
          this.setState({ nowPlaying: json.results })
        });
      // Use fetch to get top rated data to load in state
      fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=3da005d30d2e2f9a87b62f6b0bbe7072&language=en-US&page=1`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }).then(response => response.json())
        .then(json => {
          this.setState({ topRated: json.results })
        });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Maniac</h1>
          <input className="search" type="text" placeholder="search"></input>
        </header>
        <div className="panels">
          <NowPlaying nowPlaying={this.state.nowPlaying} className="panel" />
          <Popular popular={this.state.popular} className="panel" />
          <TopRated topRated={this.state.topRated} className="pannel" />
        </div>
      </div>
    );
  }
}

export default App;
