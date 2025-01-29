import { IProduct, IUser } from "../entities/entities";
import { IProductResponse } from "../responses/responses";
import light from "../../theme/light";
import dark from "../../theme/dark";
import React, { SetStateAction } from "react";

export type ICompProps = {
    children: ReactNode;
  };  

  export interface IGetProductListParams {
    name?: string,
    type?: string,
    origin?: string,
    order?: string
  }


export interface IProductContext {
  handleGetProductsList: (filterParams: IGetProductListParams) => Promise<void>
  handleGetProductAndVarietiesList: (productId: string | undefined) => Promise<void>

  productsListItems: IProduct[]
  setProductsListItems: React.Dispatch<React.SetStateAction<IProduct[]>>

  productVarietiesListItems: IProduct[]
  setProductVarietiesListItems: React.Dispatch<React.SetStateAction<IProduct[]>>

  productsListErrors: string
  setProductsListErrors: React.Dispatch<React.SetStateAction<string>>
}

export interface IGlobalContext {
  currentTheme: typeof light | typeof dark
  theme: 'light' | 'dark'
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
}

export interface IAuthContext {
  handleUserLogin: ( email: string, userPassword: string) =>  Promise<void>
  handleCreateUser: (userName: string, userPassword: string, email: string, gender: string) => Promise<void>;

  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>

  userLoginErrors: string;
  isLoading: boolean;
  isLoggedIn: boolean
  user: IUser
}