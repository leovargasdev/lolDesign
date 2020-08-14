import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocus: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  flex: 1;
  display: flex;
  align-items: center;

  color: #FAFAFA;
  padding: 12px;
  background: transparent;
  border: 1px solid #d5d5d5;
  border-radius: 6px;


  & + div {
    margin-top: 10px;
  }

  ${props =>
    props.isFocus &&
    css`
      color: #f2630f;
      border-color: #f2630f;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    font-size: 18px;
    color: #FAFAFA;

    &::placeholder {
      color: #DEDEDE;
    }
  }

  svg {
    margin-right: 16px;
  }
`;