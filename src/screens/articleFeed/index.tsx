import { useNavigation } from "@react-navigation/native"
import { ArticleFeedContainer, TestTitle } from "./styles"


export const ArticleFeed = () => {
    const navigation = useNavigation()
    return (
        <ArticleFeedContainer>
            <TestTitle> Article feed page</TestTitle>
        </ArticleFeedContainer>
    )
}