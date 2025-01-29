import styled from "styled-components/native"

    export const FilterImage = styled.Image`
        width: 70px;
        height: 70px;

        border-radius: 50px;
    `
    export const FilterBoxContainer = styled.View` 
        display: flex;

        justify-content: space-evenly
    `
    export const FilterBox = styled.View` 
        display: flex;
        align-items: center;
        gap: 10px;

        background-color: #fff;

        border-radius: 50px;

        width: 70px;
        height: 70px;

        margin-left: 10px
    `
    export const FilterName = styled.Text` 
        font-size: 16px;
        font-weight: bold;

        color: ${({ theme }) => theme.COLORS.TEXT_BACKGROUND}
    `