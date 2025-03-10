import React, { useState } from "react";
import { Alert, ActivityIndicator, StatusBar, ImageBackground } from "react-native";
import { useAuthProvider } from "../../hooks/auth/useAuthProvider";
import { Container, Title, Button, ButtonText, ErrorText, StepContainer, Form } from "./styles";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import { useNavigation } from "@react-navigation/native";

const CreateUserScreen = () => {
  const { handleCreateUser, createUserErrors, isLoading } = useAuthProvider();
  const navigation = useNavigation()

  const [step, setStep] = useState(1);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async () => {
    if (step === 1) {
      if (!userName || !email || !gender) {
        Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (password !== confirmPassword) {
        Alert.alert("Erro", "As senhas não coincidem.");
        return;
      }
  
      try {
        await handleCreateUser(userName, password, email, gender);
        navigation.navigate("login")
        Alert.alert("Sucesso", "Usuário criado com sucesso!");
      } catch (error) {
        const errorMessage = Array.isArray(createUserErrors)
          ? createUserErrors.join(", ")
          : createUserErrors;
        Alert.alert("Erro", errorMessage || "Erro ao criar usuário.");
      }
    }
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

      <StepContainer>
        {step === 1 ? (
          <StepOne
            userName={userName}
            email={email}
            gender={gender}
            setUserName={setUserName}
            setEmail={setEmail}
            setGender={setGender}
          />
        ) : (
          <StepTwo
            password={password}
            confirmPassword={confirmPassword}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
          />
        )}

        {createUserErrors && <ErrorText>{createUserErrors}</ErrorText>}

        <Form>
          {step === 1 && (
            <Button onPress={handleSubmit}>
              <ButtonText>Próximo</ButtonText>
            </Button>
          )}

          {step === 2 && (
            <Button onPress={handleSubmit} disabled={isLoading}>
              {isLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <ButtonText>Criar Conta</ButtonText>
              )}
            </Button>
          )}
        </Form>
      </StepContainer>
    </Container>
  );
};

export default CreateUserScreen;
