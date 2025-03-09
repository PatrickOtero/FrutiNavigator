import Toast from 'react-native-toast-message';
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { NavBar } from "../theme/global/NavBar";
import { ThemeProvider } from "styled-components/native";
import { useGlobal } from "../hooks/globalHooks/useGlobal";
import dark from "../theme/dark";
import light from "../theme/light";

export function Routes() {

    const { theme } = useGlobal()

    const currentTheme = theme === "dark" ? dark : light
    
    return (
        <ThemeProvider theme={currentTheme}>
        <NavigationContainer>
            <AppRoutes/>
            <NavBar/>
        </NavigationContainer>
        </ThemeProvider>
    )
}