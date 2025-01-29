import styled from "styled-components/native"

export const ConfigTitleContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ConfigTitle = styled.Text`
    font-size: 24px;
`
export const ConfigTitleUnderline = styled.View`
    height: 3px;

    margin-bottom: 10px;

    background-color: ${({ theme }) => theme.COLORS.YELLOW};
`

export const ThemeButton = styled.View`
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.ITEM};

    width: 70px;
    height: 40px;

    border-radius: 10px;

    margin-right: 10px;
`

export const ThemeText = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_ITEM};

    font-size: 18px;
`