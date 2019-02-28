import React from 'react';
import NavStyles from './styles/NavStyles';
import { Link } from 'react-router-dom';

const Nav = () => (
  <NavStyles>
    <Link to="/">Home</Link>
    <Link to="/popular">Popular</Link>
    <Link to="/now-playing">Now Playing</Link>
    <Link to="/top-rated">Top Rated</Link>
  </NavStyles>
)

export default Nav;