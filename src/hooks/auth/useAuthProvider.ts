import { useState } from "react"
import { IUser } from "../../@types/entities/entities"
import { api } from "../../services/api"

export const useAuthProvider = () => {
    const [ user, setUser ] = useState<IUser>()
    const [ createUserErrors, setCreateUserErrors ] = useState<string>("")
    const [ userLoginErrors, setUserLoginErrors ] = useState<string>("")
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleCreateUser = async (
        name?: string,
        password?: string,
        email?: string,
        gender?: string
      ) => {
        const body = {
          name,
          password,
          email,
          gender,
        };
      
        try {
          setIsLoading(true);
          setCreateUserErrors("");
          const createUserResponse = await api.post("/user", body);
          
          setUser(createUserResponse.data.content);
        } catch (error: any) {
          const errorMessage =
            error.response?.data?.message || "Erro ao criar o usuário.";
          setCreateUserErrors(errorMessage);
          throw new Error(errorMessage);
        } finally {
          setIsLoading(false);
        }
      };

    const handleUserLogin = async (email: string, password: string) => {
        const body = {
            password,
            email
        }

        try {
            setIsLoading(true);
            setUserLoginErrors("");
            const userLoginResponse = await api.post("/user/login", body);

            setUserLoginErrors(userLoginResponse.data.message)
            setUser(userLoginResponse.data.content)
            setIsLoggedIn(true)

          } catch (error: any) {
            setIsLoggedIn(false)
            setUserLoginErrors(error.response.data.message || "Erro desconhecido");
          } finally {
            setIsLoading(false);
          }
    }

    return {handleCreateUser, handleUserLogin, createUserErrors, userLoginErrors, user, isLoading, isLoggedIn, setIsLoggedIn}
}