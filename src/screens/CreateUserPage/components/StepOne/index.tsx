import React from "react";
import { ErrorText, Label, StyledTextInput } from "../../styles";
import { IAuthErrors } from "../../../../@types/contexts/contexts";

interface StepOneProps {
  userName: string;
  email: string;
  gender: string;
  errors: IAuthErrors
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setGender: React.Dispatch<React.SetStateAction<string>>;
}

const StepOne: React.FC<StepOneProps> = ({
  userName,
  email,
  gender,
  errors,
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
      {errors?.create && <ErrorText>{errors?.create}</ErrorText>}

      <Label>Email</Label>
      <StyledTextInput
        placeholder="Digite seu email"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <Label>Sexo</Label>
      <StyledTextInput
        placeholder="Digite seu sexo (Homem/Mulher/Prefiro não dizer)"
        value={gender}
        onChangeText={setGender}
      />
    </>
  );
};

export default StepOne;
