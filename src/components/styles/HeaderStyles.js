import styled from 'styled-components';

export const Logo = styled.h1`
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
export const StyledHeader = styled.header`
  .bar {
      border-bottom: 10px solid black;
      display: grid;
      grid-template-columns: auto1fr;
      justify-content: space-between;
      align-items: stretch;
      background: #282c34;

  }
  .search {
    display: flex;
    justify-content: flex-end;
    
  }
`;
