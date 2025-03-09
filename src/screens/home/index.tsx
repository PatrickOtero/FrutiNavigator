import { View } from "react-native"
import { GreetText, GreetTextUnderline, HomeContainer, HomeFilters, Input, SearchButton, TopBox } from "./styles"
import { MagnifyingGlass } from "phosphor-react-native"
import HomeFilter from "./components/homeFilter"
import ProductsList from "./components/productsList"
import { useState } from "react"
import { useGlobal } from "../../hooks/globalHooks/useGlobal"

export default function Home() {
    const [getFilterName, setGetFilterName] = useState<string>("")
    const [ productNameInput, setProductNameInput ] = useState<string>("")
    const [nameSearch, setNameSearch] = useState<boolean>(false)

    const { currentTheme } = useGlobal()


    const handleGetFilterName = (filterName: string) => {

        if (filterName === "Todos") {
            setGetFilterName("")
        } else {
            setGetFilterName(filterName)
        }
    }
    
    return (
        <HomeContainer>
            <TopBox>
                <GreetText>Olá, escolha o seu produto</GreetText>
                <GreetTextUnderline/>

                <Input onChangeText={setProductNameInput}
                placeholder="Digite o nome do produto"
                placeholderTextColor={currentTheme.COLORS.TEXT_ITEM}
                >   
                </Input>
                <SearchButton onPress={() => setNameSearch(!nameSearch)}>
                    <MagnifyingGlass size={32} />
                </SearchButton>
                <HomeFilters>
                    <HomeFilter getFilterName={getFilterName} handleGetFilterName={ handleGetFilterName }filterImage="oterofficia.com.br/allProducts.png" filterName="Todos" />
                    <HomeFilter getFilterName={getFilterName} handleGetFilterName={handleGetFilterName }filterImage="oterofficia.com.br/fruits.png" filterName="Frutas" />
                    <HomeFilter getFilterName={getFilterName} handleGetFilterName={handleGetFilterName }filterImage="oterofficia.com.br/vegetables.png"filterName="Legumes" />
                    <HomeFilter getFilterName={getFilterName} handleGetFilterName={ handleGetFilterName }filterImage="oterofficia.com.br/greens.png" filterName="Verduras" />
                </HomeFilters>
            </TopBox>
            <View>
                <ProductsList
                    getFilterName={getFilterName} productNameInput={productNameInput} nameSearch={nameSearch}
                 />
            </View>
        </HomeContainer>
    )
}