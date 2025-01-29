import React, { useState } from "react";
import { ScrollView, Pressable, Alert } from "react-native";
import { User } from "phosphor-react-native";
import { useGlobal } from "../../hooks/globalHooks/useGlobal";
import {
    Container,
    ProfileImageContainer,
    ProfileImage,
    FormContainer,
    Input,
    Label,
    SaveButton,
    SaveButtonText
} from "./styles";
import { useAuth } from "../../hooks/auth/useAuth";

const EditProfile = () => {
    const { theme } = useGlobal();
    const { isLoggedIn, user } = useAuth()

    const handleInputChange = (field: keyof any, value: string) => {
        
    };

    const handleOnSave = () => {
        Alert.alert("Perfil editado")
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Container>
                <Pressable onPress={() => console.log("Alterar imagem")}> 
                    <ProfileImageContainer>
                        {isLoggedIn && user.avatar ? (
                            <ProfileImage source={{ uri: user.avatar }} />
                        ) : (
                            <User size={100} color={theme === "light" ? "black" : "white"} />
                        )}
                    </ProfileImageContainer>
                </Pressable>
                
                <FormContainer>
                    <Label>Nome</Label>
                    <Input
                        value={user.name}
                        onChangeText={(text) => handleInputChange("name", text)}
                    />

                    <Label>Email</Label>
                    <Input
                        value={user.email}
                        onChangeText={(text) => handleInputChange("email", text)}
                        keyboardType="email-address"
                    />

                    <Label>Sexo</Label>
                    <Input
                        value={user.gender}
                        onChangeText={(text) => handleInputChange("gender", text)}
                    />

                    <Label>Senha</Label>
                    <Input
                        value={user.password}
                        onChangeText={(text) => handleInputChange("password", text)}
                        secureTextEntry
                    />

                    <SaveButton onPress={() => handleOnSave()}>
                        <SaveButtonText>Salvar</SaveButtonText>
                    </SaveButton>
                </FormContainer>
            </Container>
        </ScrollView>
    );
};

export default EditProfile
