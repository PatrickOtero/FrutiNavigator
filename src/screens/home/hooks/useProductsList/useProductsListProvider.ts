import { useState } from "react"
import { api } from "../../../../services/api"
import { IProduct } from "../../../../@types/entities/entities"
import { IGetProductListParams } from "../../../../@types/contexts/contexts"

export const useProductsListProvider = () => {
    const [productsListItems, setProductsListItems] = useState<IProduct[]>([])
    const [productVarietiesListItems, setProductVarietiesListItems] = useState<IProduct[]>([])
    const [productsListErrors, setProductsListErrors] = useState<string>("")

    const handleGetProductsList = async (filterParams: IGetProductListParams) => {
        try {
            const productsList = await api.get(`/product?name=${filterParams.name}&type=${filterParams.type}&origin=${filterParams.origin}&order=${filterParams.order}`)

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
        productsListItems,
        productVarietiesListItems,
        productsListErrors,
        setProductsListErrors,
        setProductsListItems,
        setProductVarietiesListItems
    }
}