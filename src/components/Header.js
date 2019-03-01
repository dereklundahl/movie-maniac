import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Nav from './Nav';
import { searchMovies } from '../Actions/actionCreators';
 
import { StyledHeader, Logo } from './styles/HeaderStyles';


class Header extends React.Component {
  movieSearch = React.createRef();

  handleSubmit = (event) => {
    console.log("handle submit clicked");
    event.preventDefault();
    let value = this.movieSearch.current.value;
    let formattedValue = value.replace(/\s/g, '+');
    this.props.dispatch(searchMovies(formattedValue));
  }

  render() {
    return (
      <StyledHeader>
        <div className="bar">
            <Logo>
              <a href="/">Movie Maniac</a>
            </Logo>
            <Nav />
            <form className="search" onSubmit={this.handleSubmit}>
              <input type="text" name="name" placeholder="Search for Movies" ref={this.movieSearch}></input>
              <button  className="button">Go</button>
            </form>
        </div>
      </StyledHeader>
  
    )
  }
}

export default connect()(Header);

//<Link to="/search">