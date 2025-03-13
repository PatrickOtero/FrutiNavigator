import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// const localUrl = "http://192.168.1.64:3330"
const remoteUrl = "https://frutinavigator-api.onrender.com"

export const api = axios.create({
    baseURL: remoteUrl
})

export const apiAuth = axios.create({
    baseURL: remoteUrl
});

apiAuth.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);