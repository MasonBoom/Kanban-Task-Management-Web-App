import styled, { keyframes } from "styled-components";

// keyframes animations

const switchAnimation = keyframes`
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 20px;
  }
`;

const switchAnimationReverse = keyframes`
  0% {
    margin-left: 20px;
  }
  100% {
    margin-left: 0px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #F4F7FD;
  border-radius: 6px;
  width: 200px;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Switch = styled.div`
  border-radius: 20px;
  width: 40px;
  height: 20px;
  background: #635FC7;
  margin: 0 20px;

  div {
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;

    &.dark {
      animation: ${switchAnimation} 0.3s ease-in-out;
      animation-fill-mode: forwards;
    }
    
    &.light {
      animation: ${switchAnimationReverse} 0.3s ease-in-out;
      animation-fill-mode: forwards;
    }
  }
`
