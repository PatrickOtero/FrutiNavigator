import { createContext } from "react";
import { IAuthContext, ICompProps } from "../../@types/contexts/contexts";
import { useAuthProvider } from "../../hooks/auth/useAuthProvider";

export const AuthContext = createContext({} as IAuthContext)

export const AuthContextProvider = ({children}: ICompProps) => {
    const authProvider = useAuthProvider()

    return (
        <AuthContext.Provider value={authProvider}>
            {children}
        </AuthContext.Provider>
    )
}