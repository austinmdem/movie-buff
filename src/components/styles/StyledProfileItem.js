import styled from 'styled-components';

export const StyledProfileItem = styled.div`
  .round-img {
    border-radius: 50%;
  }
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
    font-family: 'Abel', sans-serif;
    text-decoration: none;
  }

  .btn:hover {
    background: #cc2e43;
  }

  .post .comment-count {
    background: var(--light-color);
    color: var(--primary-color);
    padding: 0.1rem 0.2rem;
    border-radius: 5px;
    font-size: 0.8rem;
  }

  .post .post-date {
    color: #aaa;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: 1350px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 700px) {
    .round-img {
      height: 100px;
      width: auto;
    }

    .btn {
      width: 40px;
      font-size: 12px;
    }
  }

  @media screen and (max-width: 375px) {
    .round-img {
      height: 100px;
      width: auto;
    }

    .btn {
      width: 40px;
      font-size: 12px;
    }
  }
`;
