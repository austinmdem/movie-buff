import styled from 'styled-components';

export const StyledPostItem = styled.div`
  .bg-white {
    background: #fff;
    color: #333;
    border: #ccc solid 1px;
  }

  .post {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-gap: 2rem;
    align-items: center;
  }

  .post > div:first-child {
    text-align: center;
  }

  .post img {
    width: 100px;
  }

  .p-1 {
    padding: 1rem;
  }

  .my-1 {
    margin: 1rem 0;
  }

  .round-img {
    border-radius: 50%;
  }

  .post .post-date {
    color: #aaa;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }

  .btn {
    display: inline-block;
    background: #f4f4f4;
    color: #333;
    padding: 0.4rem 1.3rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    margin-right: 0.5rem;
    transition: opacity 0.2s ease-in;
    outline: none;
  }

  .btn-light {
    background: #f4f4f4;
    color: #333;
  }
`;
