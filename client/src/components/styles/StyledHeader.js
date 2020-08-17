import styled from 'styled-components';

export const StyledHeader = styled.div`
  * {
    box-sizing: border-box;
  }

  background: rgb(61, 22, 149);
  background: linear-gradient(
    90deg,
    rgba(61, 22, 149, 1) 0%,
    rgba(41, 10, 97, 1) 100%
  );
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
    padding-top: 5px;
  }

  .tmdb-logo {
    width: 170px;
    margin-right: 38px !important;
  }

  .small-menu-classname {
    padding-top: 0.4em;
    margin-right: 3em;
    color: #fff;
    font-size: 3em;
    margin: 0;
  }

  @media screen and (max-width: 1024px) {
    .tmdb-logo {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
  }

  @media screen and (max-width: 375px) {
  }
`;
