import React, { useEffect, useState } from "react";
import { Alert, ActivityIndicator, StatusBar, ImageBackground } from "react-native";
import { Container, Title, Button, ButtonText, ErrorText, StepContainer, Form } from "./styles";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth/useAuth";

const CreateUserScreen = () => {
  const { handleCreateUser, errors, setErrors, isLoading } = useAuth();
  const navigation = useNavigation();

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
      return;
    }
  
    if (step === 2) {
      if (!password || !confirmPassword) {
        Alert.alert("Erro", "Por favor, preencha os campos de senha.");
        return;
      }
      
      if (password !== confirmPassword) {
        Alert.alert("Erro", "As senhas não coincidem.");
        return;
      }
  
      if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password)) {
        Alert.alert(
          "Erro",
          "A senha deve ter no mínimo 8 caracteres, uma letra maiúscula, um número e um símbolo."
        );
        return;
      }
  
      try {
        await handleCreateUser(userName, password, email, gender);
  
        if (Object.keys(errors).length > 0) {
          console.log("Errors exist:", errors);
          Alert.alert("Erro", errors.create || "Erro ao criar usuário.");
          return;
        }
  
        Alert.alert("Sucesso", "Usuário criado com sucesso!");
        navigation.navigate("login");
      } catch (error) {
        console.log("Caught error:", error);
        Alert.alert("Erro", "Erro ao criar usuário. Tente novamente.");
      }
    }
  };
  
  useEffect(() => {
    setErrors({});
}, [step]);

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
            errors={errors}
            userName={userName}
            email={email}
            gender={gender}
            setUserName={setUserName}
            setEmail={setEmail}
            setGender={setGender}
          />
        ) : (
          <StepTwo
            errors={errors}
            password={password}
            confirmPassword={confirmPassword}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
          />
        )}

        {errors.create && <ErrorText>{errors.create}</ErrorText>}
        {errors.edit && <ErrorText>{errors.edit}</ErrorText>}
        {errors.login && <ErrorText>{errors.login}</ErrorText>}

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
