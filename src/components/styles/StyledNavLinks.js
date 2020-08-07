import styled from 'styled-components';

export const StyledNavLinks = styled.div`
  padding-left: 1em;

  .login-panel {
    padding-right: 2em;
  }

  @media screen and (max-width: 1350px) {
    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
  }

  @media screen and (max-width: 375px) {
    p {
      font-size: 12px;
    }
    .login-panel {
      padding-left: 2em;
    }
  }
`;
