import React from "react";
import { ErrorText, Label, StyledTextInput } from "../../styles";
import { IAuthErrors } from "../../../../@types/contexts/contexts";

interface StepTwoProps {
  password: string;
  confirmPassword: string;
  errors: IAuthErrors
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
}

const StepTwo: React.FC<StepTwoProps> = ({
  password,
  confirmPassword,
  errors,
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
      {errors?.create && <ErrorText>{errors?.create}</ErrorText>}

      <Label>Confirmar Senha</Label>
      <StyledTextInput
        placeholder="Confirme sua senha"
        value={confirmPassword}
        secureTextEntry
        onChangeText={setConfirmPassword}
      />
      {errors?.create && <ErrorText>{errors?.create}</ErrorText>}

    </>
  );
};

export default StepTwo;
