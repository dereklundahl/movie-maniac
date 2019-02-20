import React from 'react';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <a>Home</a>
    <a>Popular</a>
    <a>Now Playing</a>
    <a>Top Rated</a>
    <form>
        <input type="text" placeholder="Search Movie Titles"></input>
    </form>
  </NavStyles>
)

export default Nav;