import AsyncStorage from "@react-native-async-storage/async-storage";
import { IProduct } from "../../@types/entities/entities";
import { PRODUCT_COLLECTION } from "../storageConfig";

export async function productGetInfo(getInfo: string) {
    try {
        await AsyncStorage.setItem(PRODUCT_COLLECTION, getInfo)

    } catch (error) {
        throw error;
    }
}