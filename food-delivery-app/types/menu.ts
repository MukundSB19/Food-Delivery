import { ImageSourcePropType } from "react-native";

export interface Ingredient {
    id: string;
    name: string;
    quantity: string;
}

export interface Product {
    id: string;
    restaurantId:string;
    name: string;
    text?: string;
    description?: string;
    category: string;
    price: number;
    vitamin?: string;
    estimatedTime: string;
    image: ImageSourcePropType;
    image2?: ImageSourcePropType;
}

export interface CardContent {
    id: string;
    productId: string;
    ingredientIds: string[];
    product: Product;
    ingredients: Ingredient[];
}
