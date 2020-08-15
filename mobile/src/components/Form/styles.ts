import styled, {css} from 'styled-components/native';

interface ButtonProps {
  active?: boolean;
}
export const Container = styled.View`
  align-items: center;
  padding: 0 20px;
`;

export const Title = styled.Text`
  margin: 0 0 30px;
  font-size: 28px;
  font-weight: bold;
`;

export const ContainerRow = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
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

export const InputTime = styled.TextInput`
  text-align: center;
  width: 90px;
  height: 30px;
  padding: 2px;
  border: 1px solid #f2630f;
  border-radius: 6px;
`;
