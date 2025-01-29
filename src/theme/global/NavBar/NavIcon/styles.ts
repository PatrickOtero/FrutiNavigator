import styled from "styled-components/native"

export const NavIconContainer = styled.View`
    justify-content: center;
    align-items: center;
    width: 75px;
    height: 75px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.COLORS.SECONDARY_COLOR};
    padding: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    
    &:active {
        transform: scale(0.95);
    }

    &:hover {
        background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT_COLOR};
    }
`;

export const NavMainIconContainer = styled.View`
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    bottom: 20px;
    background-color: ${({ theme }) => theme.COLORS.SECONDARY_COLOR};
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
`;

export const NavIcon = styled.Image`
    width: 55px;
    height: 55px;
    border-radius: 50px;
    transition: all 0.3s ease;
`;

export const NavMainIcon = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 15px;
    transition: all 0.3s ease;
`;