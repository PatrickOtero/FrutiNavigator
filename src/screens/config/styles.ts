import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width, height } = Dimensions.get('window');

export const ConfigContainer = styled.View`
    display: flex;
    align-items: center;

    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};

    padding: 30px;
`

export const AppConfigContainer = styled.View`
    display: flex;

    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};

    margin-top: 40px;
`

export const UserConfigContainer = styled.View`
    display: flex;

    width: 100%;
    height: 40%;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
`

export const ConfigItemMain = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${width * 0.02}px;
  padding-left: ${width * 0.05}px;
  background-color: ${({ theme }) => theme.COLORS.ITEM};
  border-radius: ${width * 0.05}px;
  width: ${width * 0.8}px;
  height: ${height * 0.075}px;

  margin-bottom: 20px;
`;

export const ConfigItemImage = styled.Image`
  width: ${width * 0.15}px;
  height: ${width * 0.15}px;
  border-radius: ${width * 0.03}px;
`;

export const ConfigItemName = styled.Text`
  font-size: ${width * 0.05}px;
  font-weight: bold;
  flex: 1;

  color: ${({ theme }) => theme.COLORS.TEXT_ITEM};
`;

export const ConfigItemSearchIcon = styled.Image`
  margin-left: auto;
  width: ${width * 0.15}px;
  height: ${width * 0.15}px;
`;