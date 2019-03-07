import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { searchMovies } from '../Actions/actionCreators';
import NavStyles from './styles/NavStyles';

class Nav extends React.Component {
    state = {
      movieSearch: ''
    }
  
    movieSearch = React.createRef();

    handleChange = (event) => {
      let value = this.movieSearch.current.value;
      let formattedValue = value.replace(/\s/g, '+');
      console.log(`this is the formated value: ${formattedValue}`);
      this.setState({ movieSearch: formattedValue });
    }

    handleSubmit = (event) => {
      console.log("handle submit clicked");
      event.preventDefault();
      this.props.dispatch(searchMovies(this.state.movieSearch));
      this.props.history.push(`/search/${this.state.movieSearch}`);
    }

    render() {
      return (
          <NavStyles>
              <Link to="/">Home</Link>
              <Link to="/popular">Popular</Link>
              <Link to="/now-playing">Now Playing</Link>
              <Link to="/top-rated">Top Rated</Link>
              <form className="search" onSubmit={this.handleSubmit}>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Search for Movies" 
                  ref={this.movieSearch}
                  onChange={this.handleChange}>
                </input>
                <button  className="search-button">Go</button>
              </form>
        </NavStyles>
      )
    }

}


export default connect()(Nav);

