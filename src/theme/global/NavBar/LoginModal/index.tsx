import React, { useEffect } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { LoginModalContainer, ModalButton, ModalButtonName } from "./style";
import { useModalAnimation } from "./hooks/useModalAnimation";
import Animated from "react-native-reanimated";

interface LoginModalProps {
  setOpenLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type RoutesParamsList = {
  login: undefined;
  cadastrar: undefined;
  config: undefined;
};

const LoginModalContainerAnimated = Animated.createAnimatedComponent(LoginModalContainer)

export const LoginModal = ({ setOpenLoginModal }: LoginModalProps) => {
  const navigation = useNavigation<NavigationProp<RoutesParamsList>>();
  
  const { openModal, animatedFadeStyle, animatedScaleStyle } = useModalAnimation();

  useEffect(() => {
    openModal();
  }, []);

  const handleRedirection = (route: keyof RoutesParamsList) => {
    navigation.navigate(route);
    setOpenLoginModal(false);
  };

  const buttons = [
    { key: "login", label: "Entrar" },
    { key: "register", label: "Cadastrar" },
    { key: "config", label: "Configurações" },
  ];

  return (
    <LoginModalContainerAnimated style={[animatedFadeStyle, animatedScaleStyle]}>
      {buttons.map(({ key, label }) => (
        <ModalButton
          key={key}
          onPress={() => handleRedirection(key as keyof RoutesParamsList)}
          accessible
          accessibilityLabel={`Botão para ${label.toLowerCase()}`}
        >
          <ModalButtonName>{label}</ModalButtonName>
        </ModalButton>
      ))}
    </LoginModalContainerAnimated>
  );
};
