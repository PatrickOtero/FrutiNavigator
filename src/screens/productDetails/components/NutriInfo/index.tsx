import { ScrollView } from "react-native";
import { ProductNutriInfo, ProductNutriInfoImage, ProductNutriInfoImageContainer, ProductNutriInfoText } from "./styles";

interface NutriInfoProps {
    nutriIcon: string
    nutriInfoText: string | undefined
    scrolling?: boolean
}

export default function NutriInfo({ nutriIcon, nutriInfoText, scrolling}: NutriInfoProps) {
    if (scrolling) {
        return (
            <ProductNutriInfo>
                <ProductNutriInfoImageContainer>
                    <ProductNutriInfoImage source={{ uri: nutriIcon}}/>
                </ProductNutriInfoImageContainer>
                <ScrollView horizontal>
                    <ProductNutriInfoText>{nutriInfoText}</ProductNutriInfoText>
                </ScrollView>
            </ProductNutriInfo>
        )       
    }

    return (
        <ProductNutriInfo>
            <ProductNutriInfoImageContainer>
                <ProductNutriInfoImage source={{ uri: nutriIcon}}/>
            </ProductNutriInfoImageContainer>
            <ProductNutriInfoText>{nutriInfoText}</ProductNutriInfoText>
        </ProductNutriInfo>
    )
}