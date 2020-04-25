import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: rgb(82, 45, 166);
  background: linear-gradient(
    90deg,
    rgba(82, 45, 166, 1) 50%,
    rgba(54, 25, 103, 1) 100%
  );
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    display: flex;
    justify-content: space-between;
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`;

export const StyledLoginNav = styled.div`
  color: #fff;
  margin-top: 35px;
  font-family: 'Abel', sans-serif;
  font-size: 22px;
  letter-spacing: 2px;
`;

export const StyledMovieBuffLogo = styled.img`
  width: 220px;
  margin-top: 20px;

  @media screen and (max-width: 500px) {
    width: 150px;
    margin-top: 5px;
  }
`;

export const StyledTMDBLogo = styled.img`
  width: 122px;
  margin-top: 25px;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`;
