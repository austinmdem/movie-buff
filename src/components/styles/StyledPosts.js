import styled from 'styled-components';
import moviebg from '../images/moviebg.jpg';

export const StyledPosts = styled.div`
  background-image: url(${moviebg});
  display: flex;
  position: relative;
  justify-content: center;
  background-size: 100% auto;
  background-repeat: repeat;
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding-right: 15px;
  font-family: 'Abel', sans-serif;
  letter-spacing: 2px;

  body {
    margin: 0;
    padding: 0;

    height: 100%;
  }
  .large {
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 1rem;
    text-align: center;
  }

  .box {
    background-color: #191919;
    padding: 20px;
    margin-bottom: 3rem;
    border-radius: 20px;
  }

  .lead {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: center;
    color: #fff;
  }

  .text-primary {
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
  }

  .container {
    max-width: 1100px;
    margin: auto;
    padding: 0 2rem;
    margin-top: 6rem;
    margin-bottom: 3rem;
  }
`;
