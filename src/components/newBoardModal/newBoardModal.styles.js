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
    width: 100%;
    height: 100%;
  }

  h1 {
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
  }

  label {
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #828FA3;
  }
`;

export const NameInput = styled.input`
  display: block;
  width: 97%;
  height: 40px;
  border-radius: 4px;
  margin-top: 8px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
  color: #000112;
  padding-left: 3%;
  margin-bottom: 24px;

  &::placeholder {
    color: #828FA3;
  }
`;

export const ColumnsInput = styled(NameInput)`
  width: 87%;
  margin-bottom: 12px;
`;
