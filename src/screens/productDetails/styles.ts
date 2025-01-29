import styled from "styled-components/native";

export const ProductDetailsScroll = styled.ScrollView`
    width: 100%;

    margin-left: 75px;
`
export const ProductDetailsContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
`

export const ProductDetailsTop = styled.View`
    width: 100%;

    justify-content: center;
    align-items: center;
`

export const ProductImage = styled.Image`
    width: 250px;
    height: 250px;

    margin-top: 30px;
`

export const ProductTitle = styled.Text`
    font-size: 28px;
    color: ${({ theme }) => theme.COLORS.TEXT_ITEM};

    font-weight: bold;
`

export const GoBackButtonContainer = styled.TouchableOpacity`
    position: relative;
    
    align-items: center;
    justify-content: center;

    top: 50px;
    left: -130px;

    z-index: 2;

    width: 44px;
    height: 44px;

    border-radius: 50px;
    
    background-color: ${({ theme }) => theme.COLORS.TEXT_ITEM} ;
`

export const LeftVarietiesButtonContainer = styled.TouchableOpacity`
    position: relative;
    
    align-items: center;
    justify-content: center;

    top: 174px;
    left: -130px;

    z-index: 2;

    width: 44px;
    height: 44px;

    border-radius: 50px;
    
    background-color: ${({ theme, disabled }) => (disabled ? theme.COLORS.GREY : theme.COLORS.YELLOW)};
`

export const RightVarietiesButtonContainer = styled.TouchableOpacity`
    position: relative;
    
    align-items: center;
    justify-content: center;

    bottom: 150px;
    right: -130px;
    z-index: 2;

    width: 44px;
    height: 44px;

    border-radius: 50px;
    
    background-color: ${({ theme, disabled }) => (disabled ? theme.COLORS.GREY : theme.COLORS.YELLOW)};
`







