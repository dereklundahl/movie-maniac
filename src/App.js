import React, { Component } from 'react';
import './assets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movie Maniac</h1>
          <input className="search" type="text" placeholder="search"></input>
        </header>
        <div className="panels">
          <div className="panel">Now Playing Component</div>
          <div className="panel">Popular Component</div>
          <div className="panel">Top Rated Component</div>
        </div>
      </div>
    );
  }
}

export default App;
