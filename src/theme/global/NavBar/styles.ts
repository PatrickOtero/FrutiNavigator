import styled from "styled-components/native";

export const NavBarContainer = styled.View`
    background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    height: 80px;
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding-left: 25px;
    padding-right: 25px;
    justify-content: space-evenly;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.15);
`;