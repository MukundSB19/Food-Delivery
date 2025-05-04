export type RouteNames =
    | "Home"
    | "SignIn"
    | "SignUp"
    | "Cart"
    | "Checkout"
    | "Settings"
    | "ProductDetails"
    | "Account";

export type StackParamList = {
    Home: undefined;
    SignIn: undefined;
    SignUp: undefined;
    Cart: undefined;
    Checkout: { cartId: string };
    Settings: undefined;
    ProductDetails: { productId: string };
    Account: undefined;
};
