import React from 'react';
import Nav from './Nav';
import { StyledHeader, Logo } from './styles/HeaderStyles';


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

