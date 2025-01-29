import { useEffect, useState } from "react"
import { IProduct, IProductCarrouselImage } from "../../../../@types/entities/entities"
import ProductDetailsNutri from "./components/ProductDetailsNutri"
import { BoxTitleUnderline, CarrouselEmptyText, CarrouselImage, CarrouselImageContainer, GenericInfoBoxContainer, GenericInfoBoxContainerScroll, GenericInfoBoxShowMoreButton, GenericInfoBoxShowMoreText, GenericInfoBoxText, GenericInfoBoxTextContainer, GenericInfoBoxTitle, ProductCarrouselImages, ProductTitleUnderline } from "./styles"
import { api } from "../../../../services/api"
import { ActivityIndicator } from "react-native"
import { ProductTitle } from "../../styles"
import theme from "../../../../theme/dark"

interface IGenericInfoBoxProps {
    text: string
    productInfo?: string
    product?: IProduct | undefined
    nutriInfo?: boolean
    imagesCarrousel?: boolean
    imagesData?: IProductCarrouselImage[]
    carrouselOpen?: boolean
    setImagesData?: React.Dispatch<React.
    SetStateAction<IProductCarrouselImage[]>>
    setCarrouselOpen?: React.Dispatch<React.
    SetStateAction<boolean>>
    setImageIndex?: React.Dispatch<React.
    SetStateAction<number>>
}

export default function GenericInfoBox({text, productInfo, nutriInfo, imagesCarrousel, product, carrouselOpen, imagesData, setImagesData, setCarrouselOpen, setImageIndex }:IGenericInfoBoxProps ) {
    const [ showMore, setShowMore ] = useState<boolean>(false)
    const [titleWidth, setTitleWidth] = useState(0)

    if (nutriInfo) {
        return(
            <GenericInfoBoxContainer style={{
                borderStyle: "dotted",
                borderWidth: 2,
                borderColor: theme.COLORS.WHITE
            }}>
                <ProductTitle onLayout={(e) => {
                    const { width } = e.nativeEvent.layout;
                    setTitleWidth(width)
                }}>{product?.name}</ProductTitle>                
                <ProductTitleUnderline style={{ width: titleWidth}}/>
                <GenericInfoBoxTitle>{text}</GenericInfoBoxTitle>
                <ProductDetailsNutri productDetails={product}/>
            </GenericInfoBoxContainer>
        )
    }

    if (imagesCarrousel && imagesData && setCarrouselOpen && setImagesData && setImageIndex) {
        const [loading, setLoading] = useState<boolean>(false)

        useEffect(() => {
            const loadProductImages = async (productId: string | undefined) => {
                try {
                    setLoading(true)
                    const images = await api.get(`/productCarrouselImages/${productId}`)

                    setImagesData(images.data.content)

                    setLoading(false)
                } catch (error: any) {
                    console.log(error)
                    setLoading(false)
                }
            }

            const handleLoadProductImages = async () => {
                await loadProductImages(productInfo)
            }

            handleLoadProductImages()
        }, [])

        const handleOpenCarrousel = (imageIndex: number) => {
            setCarrouselOpen(true)
            setImageIndex(imageIndex)
        }

        return (
            <GenericInfoBoxContainer>
                <GenericInfoBoxTitle>{text}</GenericInfoBoxTitle>
                <BoxTitleUnderline/>
                <GenericInfoBoxContainerScroll nestedScrollEnabled>
                    <ProductCarrouselImages>
                        { loading &&
                            <ActivityIndicator size={40} color="blue"/>   
                        }

                        { (imagesData.length > 0 && !loading && !carrouselOpen) &&
                            imagesData.map((images, index) => (
                                <CarrouselImageContainer key={images.id} onPress={() => handleOpenCarrousel(index)}>
                                    <CarrouselImage source={ { uri: images.imageUrl}}/>
                                </CarrouselImageContainer>
                            ))
                        }

                        { (!imagesData.length && !loading) && 
                            <CarrouselEmptyText>Não há imagens para exibir</CarrouselEmptyText>
                        }
                    </ProductCarrouselImages>
                </GenericInfoBoxContainerScroll>
            </GenericInfoBoxContainer>
        )
    }

    return (
        <GenericInfoBoxContainer>

            <GenericInfoBoxTitle>{text}</GenericInfoBoxTitle>
            <BoxTitleUnderline></BoxTitleUnderline>
                <GenericInfoBoxTextContainer>
                   { !showMore ?
                        (
                            <GenericInfoBoxText numberOfLines={5} ellipsizeMode="tail">
                                {productInfo}
                            </GenericInfoBoxText>
                        ) :
                        (
                            <GenericInfoBoxContainerScroll nestedScrollEnabled>
                                <GenericInfoBoxText>
                                    {productInfo}
                                </GenericInfoBoxText>
                            </GenericInfoBoxContainerScroll>
                        )
                    }
                    <GenericInfoBoxShowMoreButton onPress={() => setShowMore(!showMore)}>
                        <GenericInfoBoxShowMoreText>
                            { showMore ? "Ver menos" : "Ver mais"}
                        </GenericInfoBoxShowMoreText>
                    </GenericInfoBoxShowMoreButton>
                </GenericInfoBoxTextContainer>
        </GenericInfoBoxContainer>
    )
}