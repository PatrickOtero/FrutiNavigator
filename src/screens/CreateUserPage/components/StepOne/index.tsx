import React from "react";
import { Label, StyledTextInput } from "../../styles";

interface StepOneProps {
  userName: string;
  email: string;
  gender: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setGender: React.Dispatch<React.SetStateAction<string>>;
}

const StepOne: React.FC<StepOneProps> = ({
  userName,
  email,
  gender,
  setUserName,
  setEmail,
  setGender,
}) => {
  return (
    <>
      <Label>Nome de Usuário</Label>
      <StyledTextInput
        placeholder="Digite seu nome"
        value={userName}
        onChangeText={setUserName}
      />

      <Label>Email</Label>
      <StyledTextInput
        placeholder="Digite seu email"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <Label>Sexo</Label>
      <StyledTextInput
        placeholder="Digite seu sexo (Masculino/Feminino)"
        value={gender}
        onChangeText={setGender}
      />
    </>
  );
};

export default StepOne;
