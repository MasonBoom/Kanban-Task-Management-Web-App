import styled, {keyframes} from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    width: 300px;
    display: flex;
  }
  to {
    transform: translateX(-100%);
    width: 0px;
    display: hidden;
  }
`

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  border-right: 1px solid #E4EBFA;

  &.hidden {
    animation: ${slideOut} 0.5s ease-in-out;
    animation-fill-mode: forwards;
    display: hidden;
  }

  &.visible {
    animation: ${slideIn} 0.5s ease-in-out;
    animation-fill-mode: forwards;
    display: flex;
  }
`;

export const Logo = styled.img`
  margin-left: 35px;
  margin-top: 35px;
  width: 150px;
`;

export const BoardsLabel = styled.span`
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 2.4px;
  color: #828FA3;
  margin-top: 55px;
  margin-left: 35px;
  margin-bottom: 20px;
`;

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddBoard = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;


  img {
    width: 16px;
    height: 16px;
    margin-left: 35px;
    margin-right: 15px;
  }

  span {
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    color: #635FC7;
        
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const BottomDiv = styled.div`
  float: bottom;
  margin-top: auto;
  margin-left: 35px;
  margin-bottom: 10vh;
  height: 100px;
`;

export const HideSidebar = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2.5rem;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }

  &.hidden {
    position: absolute;
    left: 40px;
    bottom: 40px;
  }

  span {
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    color: #828FA3;
    margin-left: 15px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
