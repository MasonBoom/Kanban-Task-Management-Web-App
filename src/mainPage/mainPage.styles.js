import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #E4EBFA;
  align-items: center;
  background: #ffffff;

  h1 {
    margin-left: 25px;
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #000112;
  }

  div {
    display: flex;
    flex-direction: row;
    margin-left: 130vh;
    height: 48px;

    button {
      width: 164px;
      height: 48px;
      background: #ddccff;
      border-radius: 24px;
      border: none;
      font-family: 'Plus Jakarta Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 19px;
      color: #FFFFFF;
      cursor: pointer;
    }

    button:hover {
      background: #b3a3ff;
    }

    img {
      position: relative;
      top: 10px;
      margin-left: 30px;
      cursor: pointer;
      height: 25px;
    }
  }
`;

export const MainContent = styled.div`
  width: 100%;
  height: 100vh;
  background: #F2F2F2;
`;
