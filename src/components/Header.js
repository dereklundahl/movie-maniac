import React from 'react';
import Nav from './Nav';
import { StyledHeader, Logo } from './styles/HeaderStyles';
import { withRouter } from 'react-router-dom';


class Header extends React.Component {

  render () {

    return (
      <StyledHeader>
        <div className="bar">
            <Logo>
              <a href="/">Movie Maniac</a>
            </Logo>
            <Nav history={this.props.history}/>
        </div>
      </StyledHeader>

    )
  }
}


export default withRouter(Header);

