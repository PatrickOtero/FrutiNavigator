import axios from "axios";

const localUrl = "http://192.168.1.64:3330"
const remoteUrl = "https://hortichoice.onrender.com"

export const api = axios.create({
    baseURL: localUrl
})