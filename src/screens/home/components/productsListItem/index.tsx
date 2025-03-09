import { useProductSelectionAnimation } from "../productsList/hooks/useProductSelectionAnimation";
import { ProductsListItemImage, ProductsListItemMain, ProductsListItemName } from "./styles";
import Animated from "react-native-reanimated";

const AnimatedProductsListItemMain = Animated.createAnimatedComponent(ProductsListItemMain) as React.ComponentType<any>;;
const AnimatedProductsListItemImage = Animated.createAnimatedComponent(ProductsListItemImage) as React.ComponentType<any>;;
const AnimatedProductsListItemName = Animated.createAnimatedComponent(ProductsListItemName) as React.ComponentType<any>;;

interface ProductsListItemProps {
    productName: string;
    productImage?: string;
    isSelected: boolean;
}

export default function ProductsListItem({ productImage, productName, isSelected }: ProductsListItemProps) {
    const animatedStyle = useProductSelectionAnimation(isSelected);

    return (
        <AnimatedProductsListItemMain style={animatedStyle}>
            <AnimatedProductsListItemImage source={{ uri: productImage }} />
            <AnimatedProductsListItemName>{productName}</AnimatedProductsListItemName>
        </AnimatedProductsListItemMain>
    );
}
