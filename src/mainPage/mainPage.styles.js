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

  h1 {
    margin-left: 25px;
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #000112;
  }
`;
