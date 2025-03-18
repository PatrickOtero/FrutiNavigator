import { useEffect, useState } from "react";
import { TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { Plus, MagnifyingGlass, CheckFat, ArrowFatLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { useProductsList } from "../../hooks/useProductsList/useProductsList";
import { 
    ProductsListMain, ProductsListContainer, ProductsListTitle,
    ProductListTitleUnderline, EmptyListContainer, EmptyListText,
    EmptyListImage, LoadingIcon, PlusIcon, SearchIcon, Button
} from "./styles";
import ProductsListItem from "../productsListItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../../../hooks/auth/useAuth";

interface IProductListProps {
    getFilterName: string;
    productNameInput: string;
    nameSearch: boolean;
}

export default function ProductsList({ getFilterName, productNameInput, nameSearch }: IProductListProps) {
    const [selectedProducts, setSelectedProducts] = useState<Set<string>>(new Set());
    const [loading, setLoading] = useState<boolean>(false);
    const [addNewProduct, setAddNewProduct] = useState<boolean>(false);

    const { handleGetUserProductsList, handleGetProductsList, productsListItems, handleAddProductsToUserList, setProductsListItems } = useProductsList();
    const navigation = useNavigation();

    const { } = useAuth()

    useEffect(() => {
        const handleLoadProducts = async () => {
            try {
                setLoading(true);
                if (addNewProduct) {
                    await handleGetProductsList({ type: getFilterName, name: productNameInput, origin: "", order: "" });
                } else {
                    setProductsListItems([]);
                    await handleGetUserProductsList({ type: getFilterName, name: productNameInput, origin: "", order: "" });
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        handleLoadProducts();
    }, [getFilterName, nameSearch, addNewProduct]);

    const toggleProductSelection = (productId: string) => {
        if (addNewProduct) {
            setSelectedProducts((prev) => {
                const newSet = new Set(prev);
                if (newSet.has(productId)) {
                    newSet.delete(productId);
                } else {
                    newSet.add(productId);
                }
                return newSet;
            });
        } else {
            handleShowProductDetails(productId);
        }
    };

    const handleShowProductDetails = (productId: string) => {
        navigation.navigate("productDetails", { productId });
    };

    const finalizeSelection = async () => {
        const storedUser = await AsyncStorage.getItem("user");

        if (!storedUser) {
            console.error("User data is missing in AsyncStorage.");
            return;
        }

        const parsedUser = JSON.parse(storedUser);
        const userId = parsedUser?.id;

        if (!userId) {
            console.error("User ID is missing.");
            return;
        }

        const selectedProductsArray = Array.from(selectedProducts).map((productId) => ({
            product_id: productId
        }));

        if (selectedProductsArray.length > 0) {
            setLoading(true);
            try {
                await handleAddProductsToUserList(selectedProductsArray);
                setAddNewProduct(false);
                setSelectedProducts(new Set());
            } catch (error) {
                console.error("Error adding products: ", error);
            } finally {
                setLoading(false);
            }
        }
    };

    const returnToUserList = () => {
        setAddNewProduct(false)
    }

    const renderProduct = ({ item }: any) => {
        return (
            <TouchableOpacity onPress={() => toggleProductSelection(item.id)} key={item.id}>
                <ProductsListItem 
                    productImage={item.productImage} 
                    productName={item.name} 
                    isSelected={selectedProducts.has(item.id)}
                />
                {!addNewProduct ? (
                    <SearchIcon>
                        <MagnifyingGlass size={32} />
                    </SearchIcon>
                ) : (
                    <PlusIcon>
                        <Plus size={32} />
                    </PlusIcon>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <ProductsListMain>
            {addNewProduct &&
                <ProductsListTitle>Escolha seus produtos:</ProductsListTitle>
            }
            {!addNewProduct &&
            <ProductsListTitle>Opções do seu hortifruti:</ProductsListTitle>
            }
            <ProductListTitleUnderline />
            {!loading ? (
                <ProductsListContainer>
                    {!addNewProduct && (
                        <Button onPress={() => setAddNewProduct(true)}>
                            <Plus size={40} />
                            <PlusIcon>
                                <Plus size={40} />
                            </PlusIcon>
                        </Button>
                    )}
                    {addNewProduct && selectedProducts.size > 0 && (
                        <Button onPress={finalizeSelection}>
                            <CheckFat size={40}/>
                        </Button>
                    )}
                    {addNewProduct && selectedProducts.size === 0 && (
                        <Button onPress={returnToUserList}>
                            <ArrowFatLeft size={40}/>
                        </Button>
                    )}
                    {productsListItems.length > 0 ? (
                        <FlatList 
                            data={productsListItems} 
                            renderItem={renderProduct} 
                            keyExtractor={(item) => String(item.id)} 
                        />
                    ) : (
                        <EmptyListContainer>
                            {addNewProduct && <EmptyListText>Não há nenhum item que corresponde à pesquisa</EmptyListText>}
                            <EmptyListImage source={{ uri: "https://oterofficia.com.br/emptyList.png" }} alt="A lista está vazia" />
                        </EmptyListContainer>
                    )}
                </ProductsListContainer>
            ) : (
                <LoadingIcon>
                    <ActivityIndicator size="large" color="blue" />
                </LoadingIcon>
            )}
        </ProductsListMain>
    );
}
