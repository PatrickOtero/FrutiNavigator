import { useState } from "react"
import light from "../../theme/light"
import dark from "../../theme/dark"

export const useGlobalProvider = () => {
    const [ theme, setTheme ] = useState<string>("light")

    const currentTheme = theme === "light" ? light : dark

    return {
        currentTheme,
        theme,
        setTheme
    }
}