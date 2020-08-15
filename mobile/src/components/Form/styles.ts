import styled, {css} from 'styled-components/native';

interface ButtonProps {
  active?: boolean;
}
export const Container = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 8px;
`;

export const Title = styled.Text`
  margin: 0 0 20px;
  font-size: 28px;
  font-weight: bold;
`;

export const ContainerRow = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  width: 110px;
  padding: 12px 0;
  margin-top: 10px;

  border: 1px solid #9590a8;
  border-radius: 6px;

  ${(props) =>
    props.active &&
    css`
      border-color: #f2630f;
      background: #f2630f;
    `}
`;

export const Label = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const Value = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #f2630f;
`;
