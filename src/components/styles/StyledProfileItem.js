import styled from 'styled-components';

export const StyledProfileItem = styled.div`
  .btn {
    border: 0;
    background: none;
    display: block;
    width: 220px;
    margin: 20px auto;
    text-align: center;
    border: 2px solid #cc2e43;
    letter-spacing: 2px;
    padding: 14px 40px;
    outline: none;
    color: white;
    border-radius: 24px;
    transition: 0.25s;
    cursor: pointer;
    font-family: 'lucida grande', 'sans-serif';
    text-decoration: none;
  }

  .btn:hover {
    background: #cc2e43;
  }
`;

export default StyledProfileItem;
