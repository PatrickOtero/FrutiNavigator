import { Pressable } from "react-native"
import { FilterBox, FilterBoxContainer, FilterImage, FilterName } from "./styles"
import Animated, { withTiming } from "react-native-reanimated"
import { useEffect} from "react"
import { useChangeColorAnimation } from "./hooks/useColorChangeAnim"

interface homeFilterProps {
    filterImage: string
    filterName: string
    getFilterName: string
    handleGetFilterName: (filterName: string) => void
}

export default function HomeFilter({ filterImage, filterName, handleGetFilterName, getFilterName }: homeFilterProps) {

    const FilterBoxAnim = Animated.createAnimatedComponent(FilterBox) as React.ComponentType<any>;

    const { changeFilterIconColor, onPressFilter, onPressIn, onPressOut, checked} = useChangeColorAnimation({ handleGetFilterName, filterName})

    useEffect(() => {
        checked.value = withTiming(getFilterName === filterName ? 1 : 0)

    }, [getFilterName])


    return (
            <FilterBoxContainer>
                <Pressable onPress={onPressFilter}
                 onPressIn={onPressIn}
                 onPressOut={onPressOut}
                 >
                    <FilterBoxAnim style={changeFilterIconColor}>
                        <FilterImage source={{ uri: `https://${filterImage}` }} alt={`filtro "${filterName}"`}/>
                        <FilterName>
                            { filterName }
                        </FilterName>
                    </FilterBoxAnim >
                </Pressable>
            </FilterBoxContainer>
    )
}