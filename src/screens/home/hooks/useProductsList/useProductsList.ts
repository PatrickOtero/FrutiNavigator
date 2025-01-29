import { useContext } from 'react'
import { ProductContext} from "../../../../contexts/productsContext"

export const useProductsList = () => {
  return useContext(ProductContext)
}