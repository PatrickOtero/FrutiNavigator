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

  export interface IAddUserProductDTO {
      product_id: string;
  }

  export interface IAuthErrors {
    create?: string
    edit?: string
    login?: string
  }

export interface IProductContext {
  handleGetProductsList: (filterParams: IGetProductListParams) => Promise<void>
  handleGetProductAndVarietiesList: (productId: string | undefined) => Promise<void>

  handleGetUserProductsList: (filterParams: IGetProductListParams) => Promise<void>

  handleAddProductsToUserList: (products: IAddUserProductDTO[]) => Promise<void>

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
  handleEditUser: (name: string, gender: string, avatar: string) => Promise<void>;
  handleUploadAvatar: (formData: FormData) => Promise<void>
  handleLogout: () => Promise<void>

  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
  setIsRegistering: React.Dispatch<React.SetStateAction<boolean>>
  setCreateUserErrors: React.Dispatch<React.SetStateAction<string>>
  setEditUserErrors: React.Dispatch<React.SetStateAction<string>>
  setErrors: React.Dispatch<React.SetStateAction<IAuthErrors>>

  createUserErrors: string;
  editUserErrors: string
  userLoginErrors: string;
  isLoading: boolean;
  isProfilePhotoLoading: boolean;
  isLoggedIn: boolean
  user: IUser
  isRegistering: boolean
  errors: IAuthErrors
}