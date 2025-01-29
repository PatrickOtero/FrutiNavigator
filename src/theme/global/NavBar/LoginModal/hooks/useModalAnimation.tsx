import { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated";

export const useModalAnimation = () => {
  // Inicializando valores compartilhados
  const fadeAnim = useSharedValue(0); // Inicializa opacidade em 0
  const scaleAnim = useSharedValue(0.8); // Inicializa escala com valor 0.8

  // Definindo animações
  const animatedFadeStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(fadeAnim.value, { duration: 300 }), // Fade para 1 com duração de 500ms
    };
  });

  const animatedScaleStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(scaleAnim.value, { duration: 300 }), // Escala para 1 com duração de 500ms
        },
      ],
    };
  });

  // Função para iniciar a animação
  const openModal = () => {
    fadeAnim.value = 1; // Aumenta a opacidade para 1
    scaleAnim.value = 1; // Aumenta a escala para 1
  };

  // Função para fechar o modal (opcional, se precisar de animação de fechamento)
  const closeModal = () => {
    fadeAnim.value = 0; // Reduz a opacidade para 0
    scaleAnim.value = 0.8; // Reduz a escala para 0.8
  };

  return {
    openModal,
    closeModal,
    animatedFadeStyle,
    animatedScaleStyle,
  };
};
