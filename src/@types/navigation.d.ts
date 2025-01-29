export type RootParamList = {
    home: undefined;
    productDetails: {
        productId: string | undefined
    }
    config: undefined;
    articleFeed: undefined;
    login: undefined;
    register: undefined;
}



export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            productDetails: {
                productId: string | undefined
            };
            config: undefined;
            articleFeed: undefined;
            login: undefined;
            register: undefined;
        }
    }
}
