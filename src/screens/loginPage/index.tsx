import React, { useEffect, useState } from "react";
import { StatusBar, ActivityIndicator, ImageBackground } from "react-native";
import { 
  Container, 
  Title, 
  Input, 
  Button, 
  ButtonText, 
  Form, 
  FooterText, 
  ErrorMessage 
} from "./styles";
import { useAuth } from "../../hooks/auth/useAuth";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleUserLogin, errors, isLoading, isLoggedIn, setIsRegistering } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate("config");
    }
  }, [isLoggedIn]);

  const onLoginPress = async () => {
    await handleUserLogin(email, password);
  };

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <ImageBackground
        source={require("../../../assets/icon.png")}
        style={{ width: "100%", height: 120, justifyContent: "center", alignItems: "center" }}
      >
        <Title>FrutiNavigator</Title>
      </ImageBackground>

      <Form>
        <Input
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {errors && <ErrorMessage>{errors.login}</ErrorMessage>}
        <Button onPress={onLoginPress} disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <>
              <FontAwesome name="sign-in" size={20} color="#fff" style={{ marginRight: 10 }} />
              <ButtonText>Entrar</ButtonText>
            </>
          )}
        </Button>
      </Form>
      <FooterText>Descubra, aprenda e compartilhe hortifruti!</FooterText>
    </Container>
  );
};
