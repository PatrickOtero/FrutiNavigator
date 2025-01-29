import styled from "styled-components/native";

export const GenericInfoBoxContainerScroll = styled.ScrollView`

`

export const ProductCarrouselImages = styled.View `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    padding: 0 21px;

    gap: 10px;
`
export const CarrouselImageContainer = styled.TouchableOpacity`
    
`

export const CarrouselImage = styled.Image `
    width: 80px;
    height: 80px;

    border-radius: 20px;
`

export const CarrouselEmptyText = styled.Text `

    color: ${({ theme }) => theme.COLORS.TEXT_ITEM};
    font-size: 26px;
`

export const GenericInfoBoxContainer = styled.View`
    width: 80%;
    height: 200px;
    background-color: ${({ theme }) => theme.COLORS.ITEM};

    border-radius: 20px;

    align-items: center;

    margin-bottom: 20px;

    padding-top: 15px;
`

export const GenericInfoBoxTitle = styled.Text`
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.TEXT_ITEM};

    font-weight: bold;

    margin-bottom: 10px;
`

export const GenericInfoBoxTextContainer = styled.View`
    padding: 0px 20px;

    height: 125px;
`

export const GenericInfoBoxText = styled.Text`
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.TEXT_ITEM};

    font-weight: bold;
`

export const ProductTitleUnderline = styled.View`
    height: 3px;

    margin-bottom: 10px;

    background-color: ${({ theme }) => theme.COLORS.YELLOW};
`

export const BoxTitleUnderline = styled.View`
    height: 3px;
    width: 90%;

    margin-bottom: 10px;

    background-color: ${({ theme }) => theme.COLORS.YELLOW};
`

export const GenericInfoBoxShowMoreButton = styled.TouchableOpacity`

`

export const GenericInfoBoxShowMoreText = styled.Text`
    color: ${({ theme }) => theme.COLORS.TEXT_ITEM};
    text-align: center;
    font-size: 16px;
`

export const ProductTitleContainer = styled.Text`
    display: flex;


`