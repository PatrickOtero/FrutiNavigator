import { ProductDetailsNutriContainer, ProductNutriIconsContainer, ProductNutriIconsContainerScroll, ProductNutriText } from "./styles";

import { IProduct } from "../../../../../../@types/entities/entities";
import NutriInfo from "../../../NutriInfo";
import { Text } from "react-native";

interface IProductDetailsNutriProps {
    productDetails: IProduct | undefined
}

export default function ProductDetailsNutri({ productDetails}: IProductDetailsNutriProps) {

    return(  
    <ProductDetailsNutriContainer>
        { productDetails && <ProductNutriIconsContainerScroll nestedScrollEnabled>
            <ProductNutriIconsContainer>
                <NutriInfo nutriIcon="https://oterofficia.com.br/calories.png" nutriInfoText={productDetails?.calories} scrolling/>
                <NutriInfo nutriIcon="https://oterofficia.com.br/wheat.png" nutriInfoText={productDetails?.fibers}/>
                <NutriInfo nutriIcon="https://oterofficia.com.br/vitamins.png" nutriInfoText={Array.isArray(productDetails?.vitamins) ? productDetails.vitamins.join(",") : ""} scrolling/>
                <NutriInfo nutriIcon="https://oterofficia.com.br/calcium.png" nutriInfoText={productDetails?.calcium} scrolling/>
                <NutriInfo nutriIcon="https://oterofficia.com.br/carbohydrates.png" nutriInfoText={productDetails?.carbohydrates}/>
                <NutriInfo nutriIcon="https://oterofficia.com.br/colesterol.png" nutriInfoText={productDetails?.colesterol}/>
                <NutriInfo nutriIcon="https://oterofficia.com.br/fats.png" nutriInfoText={productDetails?.totalFats} scrolling/>
                <NutriInfo nutriIcon="https://oterofficia.com.br/iron.png" nutriInfoText={productDetails?.iron} scrolling/>
                <NutriInfo nutriIcon="https://oterofficia.com.br/magnesium.png" nutriInfoText={productDetails?.magnesium} scrolling/>
                <NutriInfo nutriIcon="https://oterofficia.com.br/potassium.png" nutriInfoText={productDetails?.potassium} scrolling/>
                <NutriInfo nutriIcon="https://oterofficia.com.br/proteins.png" nutriInfoText={productDetails?.protein}/>
                <NutriInfo nutriIcon="https://oterofficia.com.br/sodium.png" nutriInfoText={productDetails?.sodium}/>
                <NutriInfo nutriIcon="https://oterofficia.com.br/sugar.png" nutriInfoText={productDetails?.sugar}/>
            </ProductNutriIconsContainer>
        </ProductNutriIconsContainerScroll> }
        {!productDetails && 
            <Text> Sem informações</Text>
        }
    </ProductDetailsNutriContainer>
    )
}