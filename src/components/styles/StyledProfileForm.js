import styled from 'styled-components';
import moviebg from '../images/moviebg.jpg';

export const StyledProfileForm = styled.div`
  background-image: url(${moviebg});
  display: flex;
  position: relative;
  justify-content: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  font-family: 'abel', 'sans-serif';
  letter-spacing: 2px;
  color: #fff;

  .large {
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  .text-primary {
    color: #17a2b8;
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
    border-radius: 5px;
    transform: translate(-50%, -50%);
    background: #191919;
    text-align: center;
    z-index: 0;
  }

  .form .form-group {
    margin: 1.2rem 0;
  }

  small {
    color: #fff;
  }

  .form .form-text {
    display: block;
    margin-top: 0.3rem;
    color: #fff;
  }

  .form select,
  .form textarea {
    display: block;
    width: 100%;
    padding: 0.4rem;

    font-size: 1.2rem;
    border: 1px solid #ccc;
  }

  select {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    font-family: 'Raleway', sans-serif;
    text-align: center;
    border: 2px solid #cc2e43;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
  }

  input[type='submit'] {
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
    font-family: 'lucida grande', sans-serif;
    letter-spacing: 2px;
    font-size: 16px;
  }
  input[type='submit']:hover {
    background: #cc2e43;
  }

  .btn {
    border: 0;
    background: none;
    display: block;
    width: 100px;
    margin: 20px auto;
    text-align: center;
    letter-spacing: none !important;
    border: 2px solid #cc2e43;
    padding: 14px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
    text-decoration: none;
    font-family: 'lucida grande', sans-serif;
    letter-spacing: 2px;
    font-size: 16px;
  }
  .btn:hover {
    background: #cc2e43;
  }

  input[type='text'] {
    border: 0;
    background: none;
    display: block;
    margin: 20px auto;
    width: 100%;
    font-family: 'Raleway', sans-serif;
    text-align: center;
    border: 2px solid #cc2e43;
    padding: 14px 10px;
    width: 200px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    font-family: 'lucida grande', 'sans-serif';
    letter-spacing: 2px;
    font-size: 16px;
  }

  input[type='text']:focus {
    width: 280px;
    border-color: #361967;
  }
`;

export default StyledProfileForm;
