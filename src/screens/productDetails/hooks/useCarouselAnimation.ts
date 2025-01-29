import { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from 'react-native-reanimated';
import { Dimensions } from 'react-native';

interface IUseCarouselAnimationProps {
  imageIndex: number;
  imagesDataLength: number;
  setImageIndex: React.Dispatch<React.SetStateAction<number>>;
}

const useCarouselAnimation = ({imageIndex, imagesDataLength, setImageIndex}: IUseCarouselAnimationProps) => {
  const imagePosition = useSharedValue(0)

  const { width } = Dimensions.get("window");
  const imageWidth = width

  const animatedImages = useAnimatedStyle(() => {
      return {
          transform: [{ translateX: imagePosition.value }]
      }
  })

  const handleGoLeft = () => {
    imagePosition.value = withTiming(imageWidth, { duration: 200 }, () => {
      runOnJS(setImageIndex)(imageIndex === 0 ? imagesDataLength- 1 : imageIndex - 1);
      imagePosition.value = withTiming(0, { duration: 400})
    });
};

const handleGoRight = () => {
    imagePosition.value = withTiming(-imageWidth, { duration: 200 }, () => {
      runOnJS(setImageIndex)(imageIndex === imagesDataLength -1 ? 0 : imageIndex + 1);
      imagePosition.value = withTiming(0, { duration: 400})
    });
};

  return {
    animatedImages,
    handleGoLeft,
    handleGoRight,
    imageWidth
  };
};

export default useCarouselAnimation;