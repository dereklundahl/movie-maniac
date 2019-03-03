import styled from 'styled-components';

export const GridStyles = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-evenly;
   align-content: flex-end;
   flex-wrap: wrap;
   background-color: lightgray;
  
   .flex-item {
       width: 200px;
       height: 300px;
       margin: auto;
       padding: 10px;
   }
`;

export const StyledHeader = styled.h1`
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    background-color: lightgray;

`;



