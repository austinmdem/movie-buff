import styled from 'styled-components';
import moviebg from '../images/moviebg.jpg';

export const StyledDashboard = styled.div`
  background-image: url(${moviebg});
  display: flex;
  position: relative;
  justify-content: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  font-family: 'Abel', sans-serif;
  color: #fff;
  letter-spacing: 2px;

  .container {
    min-height: 100%;
    width: 100%;
  }
  .large {
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  .large .text-primary {
    font-family: Arial, Helvetica, sans-serif;

    color: #fff;
  }

  .lead {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #fff;
  }

  .box {
    width: 450px;
    padding: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 20px;
    transform: translate(-50%, -50%);
    background: #191919;
    text-align: center;
    z-index: 0;
  }

  button {
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
    font-family: 'lucida grande', 'sans-serif';
    letter-spacing: 2px;
    font-size: 16px;
  }
  button:hover {
    background: #cc2e43;
  }
`;
export default StyledDashboard;
