import styled from "styled-components/native";

export const ImagesCarrouselContainer = styled.Pressable`
    position: absolute;
    justify-content: center;
    align-items: center;

    z-index: 2;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: rgba(0, 0, 0, 0.9);
`

export const CarrouselImage = styled.Image`
    width: 90%;
    height: 50%;

    border-radius: 20px;
`

export const LeftCarrouselArrow = styled.Pressable`
    position: absolute;
    justify-content: center;
    align-items: center;

    z-index: 2;

    left: 20px;
    bottom: 50px;
`

export const RightCarrouselArrow = styled.Pressable`
    position: absolute;
    justify-content: center;
    align-items: center;

    z-index: 2;

    right: 20px;
    bottom: 50px;
`

export const LoadingContainer = styled.View`
    position: absolute;
    justify-content: center;
    align-items: center;

    z-index: 3;
`