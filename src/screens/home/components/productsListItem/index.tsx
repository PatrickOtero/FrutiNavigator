import { ProductsListItemImage, ProductsListItemMain, ProductsListItemName } from "./styles";

interface ProductsListItemProps {
    productName: string
    productImage?: string;
}

export default function ProductsListItem({productImage, productName }: ProductsListItemProps) {
    return (
        <ProductsListItemMain>
            <ProductsListItemImage source={{ uri:`${productImage}`}}/>
            <ProductsListItemName>
                {productName}
            </ProductsListItemName>
        </ProductsListItemMain>
    )
}