import { useEffect } from "react";
import { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import { useGlobalProvider } from "../../../../../hooks/globalHooks/useGlobalProvider";

export function useProductSelectionAnimation(isSelected: boolean) {
        const { currentTheme } = useGlobalProvider()
    
        const COLORS = {
            WHITE: currentTheme.COLORS.ITEM,
            YELLOW: currentTheme.COLORS.YELLOW,
            BLUE: currentTheme.COLORS.PRIMARY_COLOR
        }

    const backgroundColor = useSharedValue(isSelected ? "rgba(0, 200, 83, 0.3)" : COLORS.WHITE);

    useEffect(() => {
        backgroundColor.value = withTiming(isSelected ? "rgba(0, 200, 83, 0.3)" : COLORS.WHITE, { duration: 200 });
    }, [isSelected]);

    const animatedStyle = useAnimatedStyle(() => ({
        backgroundColor: backgroundColor.value,
    }));

    return animatedStyle;
}