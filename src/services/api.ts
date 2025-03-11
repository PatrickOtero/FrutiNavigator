import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const localUrl = "http://192.168.1.64:3330"
// const remoteUrl = "https://hortichoice.onrender.com"

export const api = axios.create({
    baseURL: localUrl
})

export const apiAuth = axios.create({
    baseURL: localUrl
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