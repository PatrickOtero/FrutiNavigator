import { useState } from "react"
import { NavBarIcon } from "./NavIcon"
import { NavBarContainer } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { LoginModal } from "./LoginModal"
import { useAuth } from "../../../hooks/auth/useAuth"

export const NavBar = () => {

    const [ getFilterName, setGetFilterName ] = useState<string>("")
    const [ openLoginModal, setOpenLoginModal ] = useState<boolean>(false)

    const navigation = useNavigation()

    const { isLoggedIn, user } = useAuth()

    const handleGetFilterName = (filterName: string) => {
        setGetFilterName(filterName)
        if (filterName === "Posts") {
            navigation.navigate("articleFeed")
            setOpenLoginModal(false)
        }

        if (filterName === "Home") {
            navigation.navigate("home")
            setOpenLoginModal(false)
        }

        if (filterName === "config") {
            setOpenLoginModal(!openLoginModal)
        }

    }
    
    return (
        <NavBarContainer>
            { openLoginModal && 
                <LoginModal setOpenLoginModal={setOpenLoginModal}/>
            }
            <NavBarIcon getFilterName={getFilterName} filterName="Posts" handleGetFilterName={handleGetFilterName}/>
            <NavBarIcon getFilterName={getFilterName} filterName="Home" handleGetFilterName={handleGetFilterName}/>
            <NavBarIcon getFilterName={getFilterName} filterName="config" handleGetFilterName={handleGetFilterName} userLogged={isLoggedIn} profilePhoto={user?.avatar}/>
        </NavBarContainer>
    )
}