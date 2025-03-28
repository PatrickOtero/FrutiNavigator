import React, { useEffect, useState } from "react";
import { ScrollView, Alert, ActivityIndicator } from "react-native";
import { CaretLeft, User, PencilSimple } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native"; 
import { useGlobal } from "../../hooks/globalHooks/useGlobal";
import { useAuth } from "../../hooks/auth/useAuth";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import {
    Container,
    ProfileImageContainer,
    ProfileImage,
    EditIconContainer,
    FormContainer,
    Input,
    Label,
    SaveButton,
    SaveButtonText,
    GoBackButtonContainer
} from "./styles";
import Toast from "react-native-toast-message";

const EditProfile = () => {
    const navigation = useNavigation();
    const { theme } = useGlobal();
    const { isLoading, isLoggedIn, user, handleEditUser, handleUploadAvatar, editUserErrors, isProfilePhotoLoading } = useAuth();

    const [formData, setFormData] = useState({
        name: user?.name || "",
        gender: user?.gender || "",
        avatar: user?.avatar || "",
    });

    useEffect(() => {
        if (user) {
          setFormData({
            name: user.name || "",
            gender: user.gender || "",
            avatar: user.avatar || "",
          });
        }
      }, [user]);

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prevState => ({ ...prevState, [field]: value }));
    };

    const handleOnSave = async () => {
        try {
            const { name, gender, avatar } = formData;
            await handleEditUser(name || "", gender || "", avatar || "");
            Toast.show({
                type: "success",
                position: "bottom",
                text1: "Perfil editado com sucesso!",
                visibilityTime: 3000,
            });
        } catch (error) {
            const errorMessage = Array.isArray(editUserErrors)
                ? editUserErrors.join(", ")
                : editUserErrors || "Erro desconhecido";
                Toast.show({
                    type: "error",
                    position: "bottom",
                    text1: "Erro de edição",
                    text2: errorMessage,
                    visibilityTime: 3000,
                });
        }
    };

    const handleImagePicker = async () => {
        try {
            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true
            });

            if (photoSelected.canceled) return;

            const photoUri = photoSelected.assets[0].uri;
            const photoInfo = await FileSystem.getInfoAsync(photoUri);

            if (photoInfo.exists && photoInfo.size && (photoInfo.size / 1024 / 1024) > 5) {
                Toast.show({
                    type: "error",
                    position: "bottom",
                    text1: "Erro de arquivo",
                    text2: "A imagem é muito grande, use outra menor.",
                    visibilityTime: 3000,
                });
                return;
            }

            setFormData(prevState => ({ ...prevState, avatar: photoUri }));

            const fileExtension = photoSelected.assets[0].uri.split(".").pop();

            const photoFile = {
                uri: photoUri,
                name: `${user.name}.${fileExtension}`.toLowerCase(),
                type: `${photoSelected.assets[0].type}/${fileExtension}`
            } as any;

            const userPhotoUploadForm = new FormData();
            userPhotoUploadForm.append("avatar", photoFile);

            await handleUploadAvatar(userPhotoUploadForm);
        } catch (error) {
            console.error("Erro ao selecionar imagem:", error);
        }
    };

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || "",
                gender: user.gender || "",
                avatar: user.avatar || "",
            });
        }
    }, [user]);

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Container>
                <GoBackButtonContainer onPress={handleGoBack}>
                    <CaretLeft size={40} color="white" />
                </GoBackButtonContainer>

                <ProfileImageContainer onPress={handleImagePicker}>
                    {isProfilePhotoLoading && (
                        <ActivityIndicator size={42} />
                    )}
                    {isLoggedIn && !isProfilePhotoLoading && user?.avatar && (
                        <ProfileImage source={{ uri: user.avatar }} />
                    )}
                    {!isProfilePhotoLoading && !user?.avatar && (   
                        <User size={100} color={theme === "light" ? "black" : "white"} />
                    )}
                    <EditIconContainer>
                        <PencilSimple size={24} color="black" />
                    </EditIconContainer>
                </ProfileImageContainer>
                
                <FormContainer>
                    <Label>Nome</Label>
                    <Input
                        value={formData.name}
                        onChangeText={(text) => handleInputChange("name", text)}
                    />

                    <Label>Sexo</Label>
                    <Input
                        value={formData.gender}
                        onChangeText={(text) => handleInputChange("gender", text)}
                    />

                    <SaveButton onPress={handleOnSave} disabled={isLoading}>
                        {isLoading ? (
                            <ActivityIndicator size="small" color="white" />
                        ) : (
                            <SaveButtonText>Salvar</SaveButtonText>
                        )}
                    </SaveButton>
                </FormContainer>
            </Container>
        </ScrollView>
    );
};

export default EditProfile;
