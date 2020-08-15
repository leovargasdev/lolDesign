import styled, { css } from 'styled-components';

interface BoxInputProps {
  isFocus: boolean;
}

interface ButtonProps {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: auto 0;
  width: 100%;

  h1 {
    font-size: 40px;
    font-weight: bold;
    margin: 0 0 30px;
  }

  form {
    display: flex;
    justify-content: space-between;
    max-width: 1170px;
    width: 100%;
  }
`;

export const ContentInput = styled.div`
  flex: 1;
  display: flex;  
  flex-direction: column; 
  align-items: center;

  label {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  & + div {
    margin-left: 10px;
  }

  strong {
    color: #f2630f;
    font-weight: 700;
    font-size: 26px;
    margin: auto;
  }
`;

export const BoxInput = styled.div<BoxInputProps>`
  display: flex;
  padding: 12px;

  border: 1px solid #9590A8;
  border-radius: 6px;

  ${props =>
    props.isFocus &&
    css`
      border-color: #f2630f;
    `}

  input {
    width: 100%;
    border: 0;
    background: transparent;
    font-size: 18px;

    &::placeholder {
      color: rgba(12,12,12,0.5);
    }
  }
`;

export const Button = styled.button<ButtonProps>`
  border: 1px solid #9590A8;
  border-radius: 6px;
  flex: 1;
  width: 100%;
  background: transparent;
  padding: 12px;

  & + button {
    margin-top: 10px;
  }

  ${props =>
    props.active &&
    css`
      border-color: #f2630f;
      background: #f2630f;
      color: #FFF;
    `}
`;