import styled from "styled-components/native"

export const ConfigTitleContainer = styled.View`
    display: flex;
    justify-content: center;
`

export const ConfigTitle = styled.Text`
    font-size: 24px;

    color: ${({ theme }) => theme.COLORS.TEXT_BACKGROUND};
`
export const ConfigTitleUnderline = styled.View`
    height: 3px;

    margin-bottom: 10px;

    background-color: ${({ theme }) => theme.COLORS.YELLOW};
`