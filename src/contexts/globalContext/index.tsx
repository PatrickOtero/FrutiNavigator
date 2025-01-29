import { createContext } from "react"
import { ICompProps, IGlobalContext } from "../../@types/contexts/contexts"
import { useGlobalProvider } from "../../hooks/globalHooks/useGlobalProvider"



export const GlobalContext = createContext({} as IGlobalContext)

export function GlobalContextProvider({ children }: ICompProps) {
  const globalContextProvider = useGlobalProvider()
  return (
    <GlobalContext.Provider value={globalContextProvider}>
      {children}
    </GlobalContext.Provider>
  )
}