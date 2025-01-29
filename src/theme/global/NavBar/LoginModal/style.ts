import styled from "styled-components/native";

export const LoginModalContainer = styled.View`
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 1;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
  border-radius: 20px;
  padding: 25px;

  opacity: 0.5;

  width: 85%;
  max-width: 300px;
  min-width: 270px;

  right: 7%;
  bottom: 100%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
`;

export const ModalButton = styled.Pressable`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.ITEM};

  margin-bottom: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ModalButtonName = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.TEXT_ITEM};
  font-weight: bold;
`;

