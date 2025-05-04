import { ImageSourcePropType } from "react-native";
import { OrderStatus } from "./enums";

export interface Product {
    id: string;
    name: string;
    image: ImageSourcePropType;
    price: number;
    description?: string;
    category: string;
    available?: boolean;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
    isAdmin?: boolean;
}

export interface Order {
    id: string;
    userId: string;
    items: CartItem[];
    total: number;
    status: OrderStatus;
    createdAt: string;
    updatedAt?: string;
    address: DeliveryAddress;
}

export interface DeliveryAddress {
    id?: string;
    userId?: string;
    street: string;
    city: string;
    state?: string;
    postalCode: string;
    country: string;
}

export interface Review {
    id: string;
    userId: string;
    productId: string;
    rating: number;
    comment: string;
    createdAt: string;
}
export interface CardsType {
    image: ImageSourcePropType;
    text: string;
    text2: string;
    category: string;
    ingredients: { name: string; quantity: string }[];
}