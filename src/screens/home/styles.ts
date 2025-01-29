import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  padding: 24px;
`;

export const TopBox = styled.View`
  position: relative;
  margin-top: ${height * 0.05}px;
  align-items: center;
`;

export const GreetText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_BACKGROUND};
  font-size: ${width * 0.067}px;
  font-weight: bold;
  margin-bottom: ${height * 0.03}px;
`;

export const GreetTextUnderline = styled.View`
  position: absolute;
  bottom: ${height * 0.215}px;
  left: ${width * 0.58}px;
  width: ${width * 0.26}px;
  height: 3px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW};
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.COLORS.ITEM};
  color: ${({ theme }) => theme.COLORS.TEXT_ITEM};
  width: 90%;
  height: ${height * 0.07}px;
  border-radius: 18px;
  margin-bottom: ${height * 0.03}px;
  padding: 16px;
`;

export const SearchButton = styled.TouchableOpacity`
  position: absolute;
  top: ${height * 0.09}px;
  left: ${width * 0.7}px;
`;

export const HomeFilters = styled.View`
  flex-direction: row;
  gap: 5px;
`;