import { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

const useArrowAnimation = () => {
    const scaleRight = useSharedValue(1)
    const scaleLeft = useSharedValue(1)

    const animatedCarrouselArrowRight = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scaleRight.value}]
        }
    })

    const animatedCarrouselArrowLeft = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scaleLeft.value}]
        }
    })

    const onPressInRight = () => {
        scaleRight.value = withTiming(1.3, { easing: Easing.bounce});
    }

    const onPressOutRight = () => {
        scaleRight.value = withTiming(1, { easing: Easing.bounce});
    }

    const onPressInLeft = () => {
        scaleLeft.value = withTiming(1.3, { easing: Easing.bounce});
    }

    const onPressOutLeft = () => {
        scaleLeft.value = withTiming(1, { easing: Easing.bounce});
    }

  return {
    animatedCarrouselArrowRight,
    animatedCarrouselArrowLeft,
    onPressInRight,
    onPressOutLeft,
    onPressInLeft,
    onPressOutRight
  };
};

export default useArrowAnimation;