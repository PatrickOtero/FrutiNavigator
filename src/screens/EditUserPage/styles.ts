import styled from "styled-components/native";
import { TextInput, Pressable, View, Text, TouchableOpacity } from "react-native";

export const Container = styled(View)`
    flex: 1;
    background-color: ${(props) => props.theme.COLORS.PRIMARY_COLOR};
    align-items: center;
    padding: 20px;
`;

export const ProfileImageContainer = styled(Pressable)`
    width: 220px;
    height: 220px;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border-radius: 110px;
    border-width: 4px;
    border-color: ${(props) => props.theme.COLORS.YELLOW};
    position: relative;
`;

export const ProfileImage = styled.Image`
    width: 200px;
    height: 200px;
    border-radius: 100px;
`;

export const EditIconContainer = styled(View)`
    position: absolute;
    bottom: 10px;
    right: 10px;
    background-color: ${(props) => props.theme.COLORS.YELLOW};
    width: 40px;
    height: 40px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
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

export const GoBackButtonContainer = styled(TouchableOpacity)`
    position: relative;
    align-items: center;
    justify-content: center;
    top: 50px;
    left: -130px;
    z-index: 2;
    width: 44px;
    height: 44px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.COLORS.TEXT_ITEM};
`;
