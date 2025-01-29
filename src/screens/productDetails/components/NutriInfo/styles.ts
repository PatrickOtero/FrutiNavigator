import styled from "styled-components/native"

export const ProductNutriInfoImage = styled.Image`
    width: 50px;
    height: 50px;
`

export const ProductNutriInfoImageContainer = styled.View`
    background-color: ${({ theme }) => theme.COLORS.YELLOW};

    width: 50px;
    height: 50px;

    border-radius: 50px;

    align-items: center;
    justify-content: center;
`

export const ProductNutriInfo = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 60px;
    padding-left: 20px;

    margin: 5px;
`

export const ProductNutriInfoText = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.TEXT_ITEM};

    font-weight: bold;
`

export const ProductVitaminsContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
`