import styled from 'styled-components';
import moviebg from '../images/moviebg.jpg';

export const StyledRegister = styled.div`
  background-image: url(${moviebg});
  display: flex;
  position: relative;
  justify-content: center;
  background-size: cover;
  width: 100%;
  height: 100vh;

  .box h1 {
    font-family: 'Abel', sans-serif;
    color: #fff;
    letter-spacing: 2px;
  }

  .box p {
    font-family: 'Abel', sans-serif;
    color: #fff;
    letter-spacing: 2px;
  }

  .box {
    width: 300px;
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

  .box input[type='text'],
  .box input[type='email'],
  .box input[type='password'] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #cc2e43;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
  }
  .box input[type='text']:focus,
  .box input[type='email']:focus,
  .box input[type='password']:focus {
    width: 280px;
    border-color: #361967;
  }
  .box input[type='submit'] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #cc2e43;
    padding: 14px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
  }
  .box input[type='submit']:hover {
    background: #cc2e43;
  }
`;

export default StyledRegister;
