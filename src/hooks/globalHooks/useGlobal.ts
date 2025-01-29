import { useContext } from 'react'
import { GlobalContext } from '../../contexts/globalContext'


export const useGlobal = () => {
  return useContext(GlobalContext)
}