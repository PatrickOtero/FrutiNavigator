import styled from "styled-components/native";
import { TextInput, Pressable, View, Text } from "react-native";

export const Container = styled(View)`
    flex: 1;
    background-color: ${(props) => props.theme.COLORS.PRIMARY_COLOR};
    align-items: center;
    padding: 20px;
`;

export const ProfileImageContainer = styled(View)`
    width: 100%;
    height: 300px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border-bottom-width: 2px;
    border-bottom-color: ${(props) => props.theme.COLORS.YELLOW};
`;

export const ProfileImage = styled.Image`
    width: 200px;
    height: 200px;
    border-radius: 100px;
`;

export const FormContainer = styled(View)`
    width: 100%;
    padding-top: 20px;
`;

export const Label = styled(Text)`
    font-size: 16px;
    font-weight: bold;
    color: ${(props) => props.theme.COLORS.TEXT_ITEM};
    margin-bottom: 5px;
`;

export const Input = styled(TextInput)`
    width: 100%;
    height: 50px;
    background-color: ${(props) => props.theme.COLORS.ITEM};
    border-radius: 10px;
    padding: 10px;
    font-size: 16px;
    color: ${(props) => props.theme.COLORS.TEXT_BACKGROUND};
    margin-bottom: 15px;
`;

export const SaveButton = styled(Pressable)`
    width: 100%;
    height: 50px;
    background-color: ${(props) => props.theme.COLORS.YELLOW_NO_TRANSP};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-top: 10px;
`;

export const SaveButtonText = styled(Text)`
    font-size: 18px;
    font-weight: bold;
    color: ${(props) => props.theme.COLORS.TEXT_BACKGROUND};
`;
