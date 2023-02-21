import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  margin: auto;
  margin-top: 15%;
  width: 480px;
  height: 429px;
  background: #FFFFFF;
  border-radius: 6px;
  padding: 32px;

  form {
    width: 200px;
    height: 200px;
  }

  h1 {
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
  }
`;
