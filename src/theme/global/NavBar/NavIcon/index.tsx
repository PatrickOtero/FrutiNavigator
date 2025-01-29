import { Pressable } from "react-native";
import { NavIcon, NavIconContainer, NavMainIcon, NavMainIconContainer } from "./styles";
import { useChangeColorAnimation } from "../../../../screens/home/components/homeFilter/hooks/useColorChangeAnim";
import Animated, { withTiming } from "react-native-reanimated";
import { useEffect } from "react";
import { User } from "phosphor-react-native";
import { useGlobal } from "../../../../hooks/globalHooks/useGlobal";

interface NavIconProps {
    filterName: string;
    handleGetFilterName: (filterName: string) => void;
    getFilterName: string;
    userLogged?: boolean;
    profilePhoto?: string;
}

const NavIconContainerAnimated = Animated.createAnimatedComponent(NavIconContainer);
const NavMainIconContainerAnimated = Animated.createAnimatedComponent(NavMainIconContainer);

export const NavBarIcon = ({ filterName, getFilterName, handleGetFilterName, userLogged, profilePhoto }: NavIconProps) => {
    const { changeNavIconColor, checked, onPressFilter, onPressIn, onPressOut } = useChangeColorAnimation({ filterName, handleGetFilterName });
    const { theme } = useGlobal();

    useEffect(() => {
        checked.value = withTiming(getFilterName === filterName ? 1 : 0);
    }, [getFilterName]);

    if (filterName === "Home") {
        return (
            <Pressable onPressIn={onPressIn} onPressOut={onPressOut} onPress={onPressFilter}>
                <NavMainIconContainerAnimated style={changeNavIconColor}>
                    <NavMainIcon source={{ uri: `https://oterofficia.com.br/${theme === "light" ? filterName : filterName + "_white"}.png` }} />
                </NavMainIconContainerAnimated>
            </Pressable>
        );
    }

    if (filterName === "config") {
        return (
            <Pressable onPressIn={onPressIn} onPressOut={onPressOut} onPress={onPressFilter}>
                <NavIconContainerAnimated style={changeNavIconColor}>
                    {userLogged && profilePhoto ? (
                        <NavIcon source={{ uri: `${profilePhoto}` }} />
                    ) : (
                        <User size={30} color={theme === "light" ? "black" : "white"} />
                    )}
                </NavIconContainerAnimated>
            </Pressable>
        );
    }

    return (
        <Pressable onPressIn={onPressIn} onPressOut={onPressOut} onPress={onPressFilter}>
            <NavIconContainerAnimated style={changeNavIconColor}>
            <NavIcon 
                source={{ 
                    uri: `https://oterofficia.com.br/${theme === "light" ? filterName : filterName + "_white"}.png` 
                }} 
                onError={() => {
                    (this as any).setNativeProps({
                        source: { uri: `https://oterofficia.com.br/${theme === "light" ? filterName : filterName + "_white"}.jpg` },
                    });
                }}
            />
            </NavIconContainerAnimated>
        </Pressable>
    );
};