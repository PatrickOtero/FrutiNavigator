import { ConfigItemMain, ConfigItemName } from "../styles";
import { TouchableOpacity } from "react-native";
import { useAuth } from "../../../hooks/auth/useAuth";
import { ThemeButton, ThemeText } from "./styles";
import { useGlobal } from "../../../hooks/globalHooks/useGlobal";
import { useNavigation } from "@react-navigation/native";

interface IConfigsItemProps {
  text: string;
}

export const ConfigsItem = ({ text }: IConfigsItemProps) => {
  const { setTheme } = useGlobal(); // Para o tema
  const { handleLogout } = useAuth();

const navigation = useNavigation()

const onPressLogout = () => {
    handleLogout()
    navigation.navigate("home")
}

  if (text === "Tema")
    return (
      <ConfigItemMain>
        <ConfigItemName>{text}</ConfigItemName>
        <TouchableOpacity onPress={() => setTheme("light")}>
          <ThemeButton>
            <ThemeText>Light</ThemeText>
          </ThemeButton>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTheme("dark")}>
          <ThemeButton>
            <ThemeText>Dark</ThemeText>
          </ThemeButton>
        </TouchableOpacity>
      </ConfigItemMain>
    );

  if (text === "Editar Perfil")
    return (
      <ConfigItemMain>
        <ConfigItemName>{text}</ConfigItemName>
        <TouchableOpacity onPress={() => navigation.navigate("profileEdit")}>
          <ThemeButton>
            <ThemeText>Editar</ThemeText>
          </ThemeButton>
        </TouchableOpacity>
      </ConfigItemMain>
    );

  if (text === "Logout")
    return (
      <ConfigItemMain>
        <ConfigItemName>{text}</ConfigItemName>
        <TouchableOpacity onPress={onPressLogout}>
          <ThemeButton>
            <ThemeText>Sair</ThemeText>
          </ThemeButton>
        </TouchableOpacity>
      </ConfigItemMain>
    );

  return null;
};
