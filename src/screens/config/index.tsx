import { useAuth } from "../../hooks/auth/useAuth";
import { ConfigsItem } from "./ConfigsItem";
import { ConfigsTitle } from "./ConfigsTitle";
import { AppConfigContainer, UserConfigContainer, ConfigContainer } from "./styles";

export const Config = () => {
  const { isLoggedIn } = useAuth();

  return (
    <ConfigContainer>
      <ConfigsTitle text="Configurações" />
      <AppConfigContainer>
        <ConfigsTitle text="Configurações do aplicativo" />
        <ConfigsItem text="Tema" />
      </AppConfigContainer>

      {isLoggedIn && (
        <UserConfigContainer>
          <ConfigsTitle text="Configurações do usuário" />
          <ConfigsItem text="Editar Perfil" />
          <ConfigsItem text="Logout" />
        </UserConfigContainer>
      )}
    </ConfigContainer>
  );
};
