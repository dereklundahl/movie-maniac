import React from 'react';
import Nav from './Nav';
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
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <a href="/">Movie Maniac</a>
      </Logo>
      <Nav />
    </div>
  </StyledHeader>
)

export default Header;