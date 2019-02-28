import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import Nav from './Nav';
import { searchMovies } from '../Actions/actionCreators';
 

import styled from 'styled-components';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
      padding: 0.5rem 1rem;
      background: red;
      color: white;
      text-transform: uppercase;
      text-decoration: none;
  }
  @media (max-width: 1300px) {
      margin: 0;
      text-align: center;
  }
`;

const StyledHeader = styled.header`
  .bar {
      border-bottom: 10px solid black;
      display: grid;
      grid-template-columns: auto1fr;
      justify-content: space-between;
      align-items: stretch;
      background: #282c34;

  }
  .bar .search {
    display: grid;
  }
`;

class Header extends React.Component {
  movieSearch = React.createRef();

  findAndReplace = (string, target, replacement) => {
    for(let i = 0; i < string.length; i++) {
      string = string.replace(target, replacement);
    }
    return string;
  }


  handleSubmit = (event) => {
    event.preventDefault();
    let value = this.movieSearch.current.value;
    let formattedValue = value.replace(/\s/g, '+');
    console.log(`Step 1, button clicked with value of ${formattedValue}`);
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