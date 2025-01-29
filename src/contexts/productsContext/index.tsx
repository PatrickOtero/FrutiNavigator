import { createContext } from 'react'
import { useProductsListProvider } from "../../screens/home/hooks/useProductsList/useProductsListProvider"
import { ICompProps, IProductContext } from '../../@types/contexts/contexts'


export const ProductContext = createContext({} as IProductContext)

export function ProductContextProvider({ children }: ICompProps) {
  const productContextProvider = useProductsListProvider()
  return (
    <ProductContext.Provider value={productContextProvider}>
      {children}
    </ProductContext.Provider>
  )
}