import { useState } from "react"
import Toast from 'react-native-toast-message';
import { api, apiAuth } from "../../../../services/api"
import { IProduct } from "../../../../@types/entities/entities"
import { IAddUserProductDTO, IGetProductListParams } from "../../../../@types/contexts/contexts"

export const useProductsListProvider = () => {
    const [productsListItems, setProductsListItems] = useState<IProduct[]>([])
    const [productVarietiesListItems, setProductVarietiesListItems] = useState<IProduct[]>([])
    const [productsListErrors, setProductsListErrors] = useState<string>("")

    const handleAddProductsToUserList = async (products: IAddUserProductDTO[]) => {
        try {
            const addProducts = await apiAuth.post(`product/userProducts`, products);
            
            Toast.show({
                type: 'success',
                position: 'bottom',
                text1: 'Sucesso!',
                text2: 'Produtos adicionados à sua lista.',
                visibilityTime: 3000,
            });
        } catch (error: any) {

            console.error(error.response?.data?.message)
            setProductsListErrors(error.response?.data?.message || 'Something went wrong!');
            
            Toast.show({
                type: 'error',
                position: 'bottom',
                text1: 'Falha!',
                text2: error.response?.data?.message || 'Adição de produtos falhou.',
                visibilityTime: 3000,
            });
        }
    };

    const handleGetProductsList = async (filterParams: IGetProductListParams) => {
        try {
            const productsList = await apiAuth.get(`/product?name=${filterParams.name}&type=${filterParams.type}&origin=${filterParams.origin}&order=${filterParams.order}`)

            setProductsListItems(productsList.data.content)
        } catch (error: any) {
            setProductsListErrors(error.response.data.message)
        }
    }

    const handleGetUserProductsList = async (filterParams: IGetProductListParams) => {
        try {
            const productsList = await apiAuth.get(`product/userProducts/list?name=${filterParams.name}&type=${filterParams.type}&origin=${filterParams.origin}&order=${filterParams.order}`)

            setProductsListItems(productsList.data.content)
        } catch (error: any) {
            setProductsListErrors(error.response.data.message)
        }
    }

    const handleGetProductAndVarietiesList = async(productId: string | undefined) => {
        try {
            const varietiesList = await api.get(`/product/${productId}`)
            setProductVarietiesListItems(varietiesList.data.content)
        } catch (error: any) {
            setProductsListErrors(error.response.data.message)
        }
    }

    return {
        handleGetProductsList,
        handleGetProductAndVarietiesList,
        handleGetUserProductsList,
        handleAddProductsToUserList,
        productsListItems,
        productVarietiesListItems,
        productsListErrors,
        setProductsListErrors,
        setProductsListItems,
        setProductVarietiesListItems
    }
}