import styled from 'styled-components';
import moviebg from '../images/moviebg.jpg';

export const StyledProfile = styled.div`
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

  .profile-nav {
    display: block;
  }

  .btn {
    border: 0;
    background: #191919;
    display: block;
    width: 200px;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #cc2e43;
    padding: 14px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
    font-family: 'lucida grande', 'sans-serif';
  }
  .btn:hover {
    background: #cc2e43;
  }

  a {
    text-decoration: none;
  }
`;
export default StyledProfile;
