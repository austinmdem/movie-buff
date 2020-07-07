import styled from 'styled-components';

export const StyledProfileTop = styled.div`
  .profile-top {
    grid-area: top;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .bg-primary {
    background: #191919;
    color: #fff;
    border-radius: 20px;
  }

  .p-2 {
    padding: 2rem;
  }
  .round-img {
    border-radius: 50%;
  }

  .my-1 {
    margin: 1rem 0;
  }
  .large {
    font-size: 2rem;
  }

  .lead {
    font-size: 1rem;
  }
`;

export default StyledProfileTop;
