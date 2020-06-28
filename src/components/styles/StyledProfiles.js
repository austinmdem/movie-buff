import styled from 'styled-components';
import moviebg from '../images/moviebg.jpg';

export const StyledProfiles = styled.div`
  background-image: url(${moviebg});
  justify-content: center;
  background-size: 100% auto;
  background-repeat: repeat;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  color: #fff;

  .container {
    max-width: 1100px;
    margin: auto;
    overflow: visible;
    padding: 0 2rem;
    margin-top: 6rem;
    margin-bottom: 3rem;
  }

  .text-primary {
    color: #17a2b8;
  }

  .profiles {
    align-items: center;
    grid-gap: 2rem;
    padding: 1rem;
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  .box {
    padding-top: 35px;
    padding-bottom: 35px;
    border-radius: 20px;
    width: 50%;
    margin: 0 auto;
    display: block;
    background: #191919;
    text-align: center;
    z-index: 0;
  }

  .large {
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  .lead {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;
