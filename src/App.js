import React, { Component } from 'react';
import './assets/css/App.css';
import NowPlaying from './components/NowPlaying';
import Popular from './components/Popular';
import TopRated from './components/TopRated';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Maniac</h1>
          <input className="search" type="text" placeholder="search"></input>
        </header>
        <div className="panels">
          <NowPlaying className="panel" />
          <Popular className="panel" />
          <TopRated className="pannel" />
        </div>
      </div>
    );
  }
}

export default App;
