import { useEffect, useState } from "react";
import { useProductsListProvider } from "../../hooks/useProductsList/useProductsListProvider";
import { EmptyListContainer, EmptyListImage, EmptyListText, LoadingIcon, ProductListTitleUnderline, ProductsListContainer, ProductsListMain, ProductsListTitle, SearchIcon } from "./styles";
import ProductsListItem from "../productsListItem";
import { ActivityIndicator, FlatList, Text, TouchableOpacity } from "react-native";
import { MagnifyingGlass } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { useProductsList } from "../../hooks/useProductsList/useProductsList";

interface IProductListProps {
    getFilterName: string
    productNameInput: string
    nameSearch: boolean
}

export default function ProductsList({ getFilterName, productNameInput, nameSearch, ...props}: IProductListProps) {   
    const [selectedProductName, setSelectedProductName] = useState<string>()
    const [ loading, setLoading ] = useState<boolean>(false)

    const { handleGetProductsList, productsListItems } = useProductsList()

    const navigation = useNavigation()

    const handleShowProductDetails = async (productId: string) => {
        setSelectedProductName(productId)
        navigation.navigate("productDetails", { productId })
    }

    useEffect(() => {
            const handleLoadGetProductsList = async () => {
                try {
                    setLoading(true)
                    await handleGetProductsList({ type: getFilterName, name: productNameInput, origin: "", order: ""})
                } catch (error: any) {
                    console.log(error)
                } finally {
                    setLoading(false)
                }
            }

       handleLoadGetProductsList()
    }, [getFilterName, nameSearch, selectedProductName])

    const productList = productsListItems

    const productListElements = ({ item }: any) => (
        <TouchableOpacity onPress={() => handleShowProductDetails(item.id)} key={item.id}>
        <ProductsListItem productImage={item.productImage} productName={item.name}/>
        <SearchIcon>
            <MagnifyingGlass size={32} />
        </SearchIcon>
    </TouchableOpacity> 
    )

    return (
        <ProductsListMain>
            <ProductsListTitle> Opções do seu hortifruti:</ProductsListTitle>
            <ProductListTitleUnderline/>
            { !loading ?
                (
                    <ProductsListContainer>
                    { productsListItems.length > 0 &&
                     <FlatList 
                        data={productList}
                        renderItem={productListElements}
                        keyExtractor={item => String(item.id)}
                        />
                    }
                    
                    { !productsListItems.length && 
                    
                    <EmptyListContainer>
                        <EmptyListText>Não há nenhum item na lista</EmptyListText>
                        <EmptyListImage source={{ uri: "https://oterofficia.com.br/emptyList.png"}} alt="A lista está vazia"/>
                    </EmptyListContainer>
                    
                    }
                    </ProductsListContainer>
                ) :
                (
                    <LoadingIcon>
                        <ActivityIndicator size="large" color="blue"/>
                    </LoadingIcon>
                )
            }
        </ProductsListMain>
    )
}