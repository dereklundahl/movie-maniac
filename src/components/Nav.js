import React from 'react';
import NavStyles from './styles/NavStyles';
import { Link } from 'react-router-dom';

const Nav = () => (
  <NavStyles>
    <Link to="/">Home</Link>
    <Link to="/popular">Popular</Link>
    <a>Now Playing</a>
    <a>Top Rated</a>
    <form>
        <input type="text" placeholder="Search Movie Titles"></input>
    </form>
  </NavStyles>
)

export default Nav;