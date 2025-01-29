import { useState } from "react"
import { Easing, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import { useGlobalProvider } from "../../../../../hooks/globalHooks/useGlobalProvider"

interface useColorChangeAnimationProps {
    handleGetFilterName: (filterName: string) => void
    filterName: string
}

export const useChangeColorAnimation = ({ handleGetFilterName, filterName}: useColorChangeAnimationProps) => {

    const { currentTheme } = useGlobalProvider()



    const COLORS = {
        WHITE: currentTheme.COLORS.ITEM,
        YELLOW: currentTheme.COLORS.YELLOW,
        BLUE: currentTheme.COLORS.PRIMARY_COLOR
    }

    const [ isTouched, setIsTouched ] = useState<boolean>(false)

    const scale = useSharedValue(1)
    const checked = useSharedValue(1)

    const changeFilterIconColor = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
            backgroundColor: interpolateColor(
                checked.value,
                [0, 1],
                ["#fff", COLORS.YELLOW]
            )
        }
    })

    const changeNavIconColor = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
            backgroundColor: interpolateColor(
                checked.value,
                [0, 1],
                ["rgba(0,0,0,0)", COLORS.YELLOW]
            )
        }
    })

    function onPressIn() {
        scale.value = withTiming(1.1, { easing: Easing.bounce})
    }

    function onPressOut() {
        scale.value = withTiming(1, { easing: Easing.bounce})
    }

    function onPressFilter() {
        
        setIsTouched(!isTouched)
        handleGetFilterName(filterName)
    }

    return {
        changeFilterIconColor, changeNavIconColor, onPressIn, onPressOut, onPressFilter, checked
    }

}