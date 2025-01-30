export interface IProduct {
    id?: string
    productImage?: string
    name: string
    type: string
    calories: string
    fibers: string
    totalFats?: string
    colesterol?: string
    sodium?: string
    potassium?: string
    calcium?: string
    magnesium?: string
    iron?: string
    sugar?: string
    protein?: string
    carbohydrates?: string
    vitamins: string[]
    nativeFrom: string[];
    history: string
    howChoose: string
    howToUse: string
}

export interface IProductCarrouselImage {
    id?: string
    product_id: string
    imageUrl: string
}

export interface IUser {
    id?: string  
    avatar?: string
    name: string
    password: string
    email: string   
    gender?: string
    createdAt?: date 
    updatedAt?: date 
    deleted?: boolean 
}

export interface IUpdateUser {
    avatar?: string
    name?: string
    password?: string
    email?: string   
    gender?: string    
}