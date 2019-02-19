import React, { Component } from 'react';
import NowPlayingComponent from './components/NowPlayingComponent';
import TopRatedComponent from './components/TopRatedComponent';
import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import PopularComponent from './components/PopularComponent';

const StyledBody = styled.body`
  .container {
      display: flex;
      border: 10px solid goldenrod;
      height: 100vh;
      flex-wrap: wrap;
      justify-content: space-around;
  };
  `;



class BigMomma extends Component {
  constructor(props) {
    super(props);

    this.state = {
      popular: [],
      nowPlaying: [],
      topRated: [],
      loading: false
    }
  }

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
      <StyledBody>
        <div className="container">
            <p>Popular Place Holder</p>
            <TopRatedComponent topRated={this.state.topRated} />
            <p>Now Playing Place holder</p>
        </div>
      </StyledBody>
    );
  }
}

export default BigMomma;
