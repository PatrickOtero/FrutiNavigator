import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const LoadingIcon = styled.View`
  width: ${width * 0.8}px;
  height: ${height * 0.4}px;
  margin-top: ${height * 0.1}px;
`;

export const ProductsListMain = styled.View`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${height * 0.11}px; 
  height: ${height * 0.60}px;
  width: 100%;
`;

export const EmptyListImage = styled.Image`
  width: ${width * 0.8}px;
  height: ${height * 0.4}px;

  margin-bottom: 150px;
`;

export const EmptyListText = styled.Text`
  font-size: ${width * 0.06}px;
  color: ${({ theme }) => theme.COLORS.TEXT_BACKGROUND};
`;

export const ProductsListContainer = styled.View`
margin-top: 35px;
  display: flex;
`;

export const EmptyListContainer = styled.View`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const ProductsListTitle = styled.Text`
  position: absolute;
  font-size: ${width * 0.06}px;
  font-weight: bold;
  right: ${width * 0.15}px;
  bottom: ${height * 0.6}px;

  color: ${({ theme }) => theme.COLORS.TEXT_BACKGROUND};
`;

export const ProductListTitleUnderline = styled.View`
  position: absolute;
  width: ${width * 0.75}px;
  height: 4px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW};
  right: ${width * 0.07}px;
  bottom: ${height * 0.59}px;
`;

export const SearchIcon = styled.View`
  position: absolute;
  top: ${height * 0.02}px;
  left: ${width * 0.66}px;
`;

export const PlusIcon = styled.View`
  position: absolute;
  top: ${height * 0.015}px;
  left: ${width * 0.66}px;
`;

export const AddSelectionButton = styled.TouchableOpacity`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #00c853;
    padding: 12px 24px;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  gap: ${width * 0.02}px;
  padding-left: ${width * 0.05}px;
  padding-top: ${width * 0.02}px;
  background-color: ${({ theme }) => theme.COLORS.YELLOW};
  border-radius: ${width * 5}px;
  width: ${width * 0.2}px;
  height: ${height * 0.075}px;

  bottom: 30%;
  right: -8%;

  z-index: 2;
`;
