import styled from 'styled-components';

export const StyledPostForm = styled.div`
  .post-form .post-form-header {
    background: #17a2b8;
    padding: 0.5rem;
  }
  .form .form-group {
    margin: 1.2rem 0;
  }

  .form .form-text {
    display: block;
    margin-top: 0.3rem;
    color: #888;
  }

  .bg-primary {
    background: #17a2b8;
    color: #fff;
  }

  .my-1 {
    margin: 1rem 0;
  }

  .form textarea {
    display: block;

    width: 98%;
    padding: 0.4rem;
    font-size: 1.2rem;
    border: 1px solid #ccc;
    text-align: center;

    resize: none;
    text-align-last: center;
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
    font-family: 'lucida grande', 'sans-serif';
    letter-spacing: 2px;
    font-size: 16px;
  }
  input[type='submit']:hover {
    background: #cc2e43;
  }
`;
