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
  overflow: scroll;

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
  }

  .lead {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    text-align: center;
    color: #fff;
  }

  .text-primary {
    color: #17a2b8;
  }

  .container {
    max-width: 1100px;
    margin: auto;
    overflow: visible;
    padding: 0 2rem;
    margin-top: 6rem;
    margin-bottom: 3rem;
  }
`;
