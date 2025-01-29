import { IProductCarrouselImage } from "../../../../@types/entities/entities"
import { CarrouselImage, ImagesCarrouselContainer, LeftCarrouselArrow, RightCarrouselArrow } from "./style"
import { CaretCircleLeft, CaretCircleRight } from "phosphor-react-native"
import Animated from "react-native-reanimated"
import useArrowAnimation from "../../hooks/useArrowAnimation"
import useCarouselAnimation from "../../hooks/useCarouselAnimation"

interface IImagesCarrouselProps {
    imagesData: IProductCarrouselImage[]
    imageIndex: number
    loading: boolean
    setCarrouselOpen: React.Dispatch<React.SetStateAction<boolean>>
    setImageIndex: React.Dispatch<React.SetStateAction<number>>
}

export const ImagesCarrousel = ({ imagesData, imageIndex, loading, setCarrouselOpen, setImageIndex }: IImagesCarrouselProps) => {

    const RightCarrouselArrowContainer = Animated.createAnimatedComponent(RightCarrouselArrow);

    const LeftCarrouselArrowContainer = Animated.createAnimatedComponent(LeftCarrouselArrow);
  
    const CarrouselImageAnimated = Animated.createAnimatedComponent(CarrouselImage)

    const {
        animatedCarrouselArrowLeft,
        animatedCarrouselArrowRight,
        onPressInLeft, 
        onPressInRight, 
        onPressOutLeft, 
        onPressOutRight
    } = useArrowAnimation()

    const {
        animatedImages,
        handleGoLeft,
        handleGoRight,
    } = useCarouselAnimation({ imageIndex, imagesDataLength: imagesData.length, setImageIndex})
  
   

    return (
        <ImagesCarrouselContainer onPress={() => setCarrouselOpen(false)}>
                <RightCarrouselArrowContainer onPressIn={onPressInRight} onPressOut={onPressOutRight} style={[ animatedCarrouselArrowRight]} onPress={handleGoRight}>
                    <CaretCircleRight size={70} color="yellow"/>
                </RightCarrouselArrowContainer>
                <CarrouselImageAnimated source={ { uri: imagesData[imageIndex].imageUrl}} style={[ animatedImages ]}/>
                <LeftCarrouselArrowContainer onPressIn={onPressInLeft} onPressOut={onPressOutLeft} style={[ animatedCarrouselArrowLeft]} onPress={handleGoLeft}>
                    <CaretCircleLeft size={70} color="yellow"/>
                </LeftCarrouselArrowContainer>
        </ImagesCarrouselContainer>
    )
} 