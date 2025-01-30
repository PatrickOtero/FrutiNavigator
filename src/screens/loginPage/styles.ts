import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
`;

export const Title = styled.Text`
  font-size: 40px;
  color: ${({ theme }) => theme.COLORS.YELLOW};
  font-weight: bold;
  text-shadow: 3px 3px 8px ${({ theme }) => theme.COLORS.BLACK};
  margin-bottom: 30px;
  text-align: center;
`;

export const Form = styled.View`
  width: 100%;
  max-width: 340px;
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 16px;
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.COLORS.ITEM};
  border-radius: 12px;
  height: 55px;
  padding: 12px 18px;
  margin-bottom: 20px;
  font-size: 16px;
  box-shadow: 0px 4px 12px ${({ theme }) => theme.COLORS.GRAY};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.YELLOW};
  border-radius: 12px;
  height: 55px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  flex-direction: row;
  box-shadow: 0px 3px 6px ${({ theme }) => theme.COLORS.TRANSPARENT_GRAY};
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_ITEM};
  font-size: 18px;
  font-weight: bold;
`;

export const FooterText = styled.Text`
  margin-top: 30px;
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.TEXT_BACKGROUND};
  text-align: center;
  opacity: 0.7;
  font-weight: bold;
`;

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.COLORS.RED};
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
`;
