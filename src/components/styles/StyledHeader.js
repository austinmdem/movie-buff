import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: #361967;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  flex-flow: row wrap;
  p {
    display: inline-flex;
    color: #fff;
    letter-spacing: 2px;

    font-family: 'Abel', sans-serif;
    font-size: 22px;
    padding: 5px;
  }

  .logo-center a img {
    display: flex;
    align-self: center;
    width: 250px;
  }

  img {
    width: 170px;
    margin-left: 15px;
  }
`;
