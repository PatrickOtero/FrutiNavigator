import { useState, useEffect, useCallback } from "react";
import { IUser } from "../../@types/entities/entities";
import { api, apiAuth } from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAuthProvider = () => {
    const [errors, setErrors] = useState<{ create?: string; edit?: string; login?: string }>({});
    const [isLoading, setIsLoading] = useState(false);
    const [isProfilePhotoLoading, setIsProfilePhotoLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<IUser | null>(null);

    const loadUserFromStorage = useCallback(async () => {
        try {
            const storedUser = await AsyncStorage.getItem("user");
            if (storedUser) {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.error("Erro ao carregar usuário do storage:", error);
        }
    }, []);

    const saveUserToStorage = useCallback(async (updatedUser: IUser | null) => {
        if (updatedUser) {
            await AsyncStorage.setItem("user", JSON.stringify(updatedUser));
        } else {
            await AsyncStorage.removeItem("user");
        }
    }, []);

    useEffect(() => {
        loadUserFromStorage();
    }, [loadUserFromStorage]);

    useEffect(() => {
        saveUserToStorage(user);
    }, [user, saveUserToStorage]);

    const handleCreateUser = async (name?: string, password?: string, email?: string, gender?: string) => {
        try {
            setIsLoading(true);
            setErrors({});
            const { data } = await api.post("/user", { name, password, email, gender });

            setUser(data.content);
            setIsLoggedIn(true);
        } catch (error: any) {
            setErrors({ create: error.response?.data?.message || "Erro ao criar o usuário." });
        } finally {
            setIsLoading(false);
        }
    };

    const handleEditUser = async (name?: string, gender?: string, avatar?: string) => {
        if (!user) return;

        const updatedUser = { ...user, name, gender, avatar };

        try {
            setIsLoading(true);
            setErrors({});

            const { data } = await apiAuth.put("/user", { name, gender, avatar });

            if (data.content) {
                setUser(data.content);
            }
        } catch (error: any) {
            setErrors({ edit: error.response?.data?.message || "Erro ao atualizar o perfil." });
        } finally {
            setIsLoading(false);
        }
    };

    const handleUserLogin = async (email: string, password: string) => {
        try {
            setIsLoading(true);
            setErrors({});
            const { data } = await api.post("/user/login", { email, password });

            await AsyncStorage.setItem("token", data.token);
            setUser(data.content);
            setIsLoggedIn(true);
        } catch (error: any) {
            setIsLoggedIn(false);
            setErrors({ login: error.response?.data?.message || "Erro ao fazer login." });
        } finally {
            setIsLoading(false);
        }
    };

    const handleUploadAvatar = async (formData: FormData) => {
        try {
            setIsProfilePhotoLoading(true);
            setErrors({});
            const { data } = await apiAuth.patch("/user/avatar", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            if (data.content) {
                setUser(data.content);
            }
        } catch (error: any) {
            setErrors({ edit: error.response?.data?.message || "Erro ao atualizar a imagem de perfil." });
        } finally {
            setIsProfilePhotoLoading(false);
        }
    };

    const handleLogout = async () => {
        setUser(null);
        setIsLoggedIn(false);
        await AsyncStorage.clear();
    };

    return {
        handleCreateUser,
        handleUserLogin,
        handleEditUser,
        handleLogout,
        handleUploadAvatar,
        errors,
        isLoading,
        isProfilePhotoLoading,
        isLoggedIn,
        user,
    };
};
