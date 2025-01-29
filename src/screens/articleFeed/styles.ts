import styled from "styled-components/native";

export const ArticleFeedContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};    
`

export const TestTitle = styled.Text`
    font-size: 24px;

    color: ${({ theme }) => theme.COLORS.WHITE}; ;
`