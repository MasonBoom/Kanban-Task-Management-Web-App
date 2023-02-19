import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  form {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
  }
`;