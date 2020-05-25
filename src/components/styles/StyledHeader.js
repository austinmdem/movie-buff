import styled from 'styled-components';

export const StyledHeader = styled.div`
  * {
    box-sizing: border-box;
  }

  background: #361967;
  display: flex;
  justify-content: space-around;
  padding: 15px;
  flex-wrap: wrap;

  .navigation-links {
    margin: 0;
    padding: 10px 15px;
    text-align: center;
    display: block;
    margin-right: 25px !important;
  }

  p {
    display: inline-flex;
    color: #fff;
    letter-spacing: 2px;
    font-family: 'Abel', sans-serif;
    font-size: 22px;
    padding: 5px;
    margin-right: 20px !important;
  }

  .logo-center a img {
    margin: 0;
    width: 250px;
  }

  .tmdb-logo {
    width: 170px;
    margin-right: 38px !important;
  }
`;
