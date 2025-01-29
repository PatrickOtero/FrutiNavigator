import { ActivityIndicator } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState} from "react";
import {GoBackButtonContainer, LeftVarietiesButtonContainer, ProductDetailsContainer, ProductDetailsScroll, ProductDetailsTop, ProductImage, RightVarietiesButtonContainer } from "./styles";
import GenericInfoBox from "./components/genericInfoBox";
import { CaretLeft, CaretRight } from "phosphor-react-native";
import { IProductCarrouselImage } from "../../@types/entities/entities";
import { ImagesCarrousel } from "./components/imagesCarrousel";
import { useProductsList } from "../home/hooks/useProductsList/useProductsList";

type RouteParams = {
    productId: string
}

export default function ProductDetails() {
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ imagesData, setImagesData ] = useState<IProductCarrouselImage[]>([])
    const [ carrouselOpen, setCarrouselOpen ] = useState<boolean>(false)
    const [ imageIndex, setImageIndex ] = useState<number>(0)
    const [ index, setIndex ] = useState<number>(0)

    const route = useRoute()

    const navigation = useNavigation()

    const { productId } = route.params as RouteParams

    const { handleGetProductAndVarietiesList, productVarietiesListItems } = useProductsList()

    const handleGoBackToHomeScreen = () => {
        navigation.navigate("home")
    }

    useEffect(() => {
        const handleLoadProductDetails = async () => {
            try {
                setLoading(true)
                await handleGetProductAndVarietiesList(productId)
            } catch (error: any) {
                console.log(error)
            } finally {
                setLoading(false)
            }

        }
        
        handleLoadProductDetails()
    }, [productId])

    const handleVarietiesArrowLeft = () => {
        setIndex(index === 0 ? productVarietiesListItems.length - 1 : index - 1);
    };

    const handleVarietiesArrowRight = () => {
        setIndex(index >= productVarietiesListItems.length - 1 ? 0 : index + 1);
    };

    return (
        <ProductDetailsContainer>
            {(imagesData.length > 0 && !loading && carrouselOpen) &&
                <ImagesCarrousel setImageIndex={setImageIndex} loading={loading} imageIndex={imageIndex} imagesData={imagesData} setCarrouselOpen={setCarrouselOpen}/>
            }            
            { loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                
                <>
                    { productVarietiesListItems.length > 0 &&
                        <>
                            <ProductDetailsTop>
                                <GoBackButtonContainer onPress={() => handleGoBackToHomeScreen()}>
                                            <CaretLeft size={40} color="white"/>
                                </GoBackButtonContainer>
                                        
                                <LeftVarietiesButtonContainer disabled={productVarietiesListItems.length <= 1} onPress={() => handleVarietiesArrowLeft()}>
                                            <CaretLeft size={40} color="white"/>
                                </LeftVarietiesButtonContainer>

                                <ProductImage source={{uri: `${ productVarietiesListItems[index].productImage}`}}/>

                                <RightVarietiesButtonContainer disabled={productVarietiesListItems.length <= 1} onPress={() => handleVarietiesArrowRight()}>
                                            <CaretRight size={40} color="white"/>
                                </RightVarietiesButtonContainer>

                            </ProductDetailsTop>
                                        
                            <ProductDetailsScroll scrollEnabled>
                                <GenericInfoBox nutriInfo text="Informações nutricionais" product={ productVarietiesListItems[index]}></GenericInfoBox>

                                <GenericInfoBox text="História" productInfo={ productVarietiesListItems[index].history}/>

                                <GenericInfoBox text="Como usar" productInfo={ productVarietiesListItems[index].howToUse}/>

                                <GenericInfoBox text="Como escolher" productInfo={ productVarietiesListItems[index].howChoose}/>

                                <GenericInfoBox text="Imagens" imagesCarrousel
                                imagesData={imagesData}
                                carrouselOpen={carrouselOpen}
                                setImagesData={setImagesData}
                                setCarrouselOpen={setCarrouselOpen}
                                setImageIndex={setImageIndex}
                                productInfo={productVarietiesListItems[index].id}/>

                            </ProductDetailsScroll>
                        </>
                    }
                </>

            )}
        </ProductDetailsContainer>
    )
}