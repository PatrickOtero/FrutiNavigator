import { IProduct } from "../entities/entities";

interface IResponseData {
    message: string;
    content?: IProduct | IProduct[],
    tokIProduct
}

export interface IProductResponse {
    status: number,
    data: IResponseData
}