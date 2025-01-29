import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const ProductsListItemMain = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${width * 0.02}px;
  padding-left: ${width * 0.05}px;
  background-color: ${({ theme }) => theme.COLORS.ITEM};
  border-radius: ${width * 0.05}px;
  width: ${width * 0.8}px;
  height: ${height * 0.075}px;

  margin-bottom: 30px;
`;

export const ProductsListItemImage = styled.Image`
  width: ${width * 0.15}px;
  height: ${width * 0.15}px;
  border-radius: ${width * 0.03}px;
`;

export const ProductsListItemName = styled.Text`
  font-size: ${width * 0.05}px;
  font-weight: bold;
  flex: 1;
  color: ${({ theme }) => theme.COLORS.TEXT_ITEM};
`;

export const ProductsListItemSearchIcon = styled.Image`
  margin-left: auto;
  width: ${width * 0.15}px;
  height: ${width * 0.15}px;
`;