import styled from 'styled-components';
import moviebg from '../images/moviebg.jpg';

export const StyledPost = styled.div`
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

  .container {
    max-width: 1100px;
    margin: auto;
    margin-bottom: 3rem;
  }

  .box {
    background-color: #191919;
    padding: 20px;
    margin-top: 6rem;
    margin-bottom: 3rem;
    border-radius: 20px;
    text-align: center;
  }

  .btn-back {
    border: 0;
    background: none;
    display: inline-block;
    margin: 20px auto;
    white-space: nowrap;
    text-align: center;
    border: 2px solid #cc2e43;
    padding: 14px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
    font-family: 'Abel', sans-serif;
    letter-spacing: 2px;
    font-size: 16px;
  }

  .btn-back:hover {
    background: #cc2e43;
  }
`;
