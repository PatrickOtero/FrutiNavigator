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
    const [ isRegistering, setIsRegistering ] = useState<boolean>(false)

    const loadUserFromStorage = useCallback(async () => {
        try {
            const storedUser = await AsyncStorage.getItem("user");
            const storedToken = await AsyncStorage.getItem("token");
    
            if (storedUser && storedToken) {
                const parsedUser = JSON.parse(storedUser);
                setUser(parsedUser);
                setIsLoggedIn(true);
                
                apiAuth.defaults.headers.Authorization = `Bearer ${storedToken}`;
            }
        } catch (error) {
            console.error("Erro ao carregar usuário e token do storage:", error);
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
        console.log("Updated Errors:", errors);
      }, [errors]);

    useEffect(() => {
        loadUserFromStorage();
    }, [loadUserFromStorage]);

    useEffect(() => {
        if (user !== null) {
            saveUserToStorage(user);
        }
    }, [user]);

    const handleCreateUser = async (name?: string, password?: string, email?: string, gender?: string) => {
        try {
            setIsLoading(true);
            setErrors({});
            const { data } = await api.post("/user", { name, password, email, gender });
    
            setUser(data.content);
            setIsLoggedIn(true);
        } catch (error: any) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                create: error.response?.data?.message || "Erro desconhecido ao criar usuário",
              }));
        } finally {
            setIsLoading(false);
        }
    };
    

    const handleEditUser = async (name?: string, gender?: string, avatar?: string) => {
        if (!user) return;

        try {
            setIsLoading(true);
            setErrors({});

            const { data } = await apiAuth.put("/user", { name, gender, avatar });

            if (data.content) {
                setUser({ ...user, ...data.content });
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
    
            const storedToken = await AsyncStorage.getItem("token");
            if (!storedToken) {
                throw new Error("Falha ao salvar o token no armazenamento local.");
            }
    
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
        try {
            await AsyncStorage.removeItem("user");
            await AsyncStorage.removeItem("token");
    
            setUser(null);
            setIsLoggedIn(false);
            
            delete apiAuth.defaults.headers.Authorization;
        } catch (error) {
            console.error("Erro ao fazer logout:", error);
        }
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
        isRegistering,
        setIsRegistering,
        setErrors
    };
};
