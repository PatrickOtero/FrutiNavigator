import AsyncStorage from "@react-native-async-storage/async-storage";

import { IUser } from "../@types/entities/entities";
import { USER_STORAGE } from "./storageConfig";

export const storageUserSave = async(user: IUser) => {
    await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user))
}