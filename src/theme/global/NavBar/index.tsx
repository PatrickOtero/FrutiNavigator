import { useState } from "react"
import { NavBarIcon } from "./NavIcon"
import { NavBarContainer, RegisterButton } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { useAuth } from "../../../hooks/auth/useAuth"
import { Text } from "react-native"

export const NavBar = () => {

    const [ getFilterName, setGetFilterName ] = useState<string>("")

    const navigation = useNavigation()

    const { isLoggedIn, user, isRegistering, setIsRegistering } = useAuth()

    const handleGetFilterName = (filterName: string) => {
        setGetFilterName(filterName)
        if (filterName === "Posts") {
            navigation.navigate("articleFeed")
        }

        if (filterName === "Home") {
            navigation.navigate("home")
        }

        if (filterName === "config") {
            navigation.navigate("config")
        }

    }
    const handleGoToLogin = () => {
        setIsRegistering(false)
        navigation.navigate("login")
    }

    const handleGoToRegister = () => {
        setIsRegistering(true)
        navigation.navigate("register")
    }
    
    return (
        <NavBarContainer>
            { isLoggedIn &&<NavBarIcon getFilterName={getFilterName} filterName="Posts" handleGetFilterName={handleGetFilterName}/>}
            { isLoggedIn &&<NavBarIcon getFilterName={getFilterName} filterName="Home" handleGetFilterName={handleGetFilterName}/>}
            { isLoggedIn && <NavBarIcon getFilterName={getFilterName} filterName="config" handleGetFilterName={handleGetFilterName} userLogged={isLoggedIn} profilePhoto={user?.avatar}/>}

            {(!isLoggedIn && !isRegistering) && <RegisterButton onPress={handleGoToRegister}><Text>Cadastre-se</Text></RegisterButton>}
            {(!isLoggedIn && isRegistering) && <RegisterButton onPress={handleGoToLogin}><Text>Login</Text></RegisterButton>}
        </NavBarContainer>
    )
}