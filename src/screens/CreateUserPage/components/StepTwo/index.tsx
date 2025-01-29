import React from "react";
import { Label, StyledTextInput } from "../../styles";

interface StepTwoProps {
  password: string;
  confirmPassword: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
}

const StepTwo: React.FC<StepTwoProps> = ({
  password,
  confirmPassword,
  setPassword,
  setConfirmPassword,
}) => {
  return (
    <>
      <Label>Senha</Label>
      <StyledTextInput
        placeholder="Digite sua senha"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      <Label>Confirmar Senha</Label>
      <StyledTextInput
        placeholder="Confirme sua senha"
        value={confirmPassword}
        secureTextEntry
        onChangeText={setConfirmPassword}
      />
    </>
  );
};

export default StepTwo;
