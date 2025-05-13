import { ImageSourcePropType } from "react-native";

export interface Ingredient {
    id: string;
    name: string;
    quantity: string;
}

export interface Product {
    id: string;
    name: string;
    text: string;
    description?: string;
    category: string;
    price: number;
    estimatedTime: string;
    image: ImageSourcePropType;
    image2: ImageSourcePropType;
}

export interface CardContent {
    id: string;
    productId: string;
    ingredientIds: string[];
    product: Product;
    ingredients: Ingredient[];
}
