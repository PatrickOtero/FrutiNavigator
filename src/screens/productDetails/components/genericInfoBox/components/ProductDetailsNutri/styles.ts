import styled from "styled-components/native"

export const ProductDetailsNutriContainer = styled.View`
    width: 100%;
    height: 50%;

    align-items: center;
`
export const ProductNutriText = styled.Text`
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.BLACK};

    font-weight: bold;
`

export const ProductNutriIconsContainer = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    width: 300px;
    margin-top: 10px;
`

export const ProductNutriIconsContainerScroll = styled.ScrollView`

`