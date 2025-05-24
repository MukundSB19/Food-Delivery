import { ImageSourcePropType } from "react-native";
import { OrderStatus } from "./enums";
import { Ingredient, Product } from "./menu";

// export interface Product {
//     id: string;
//     name: string;
//     image: ImageSourcePropType;
//     price: number;
//     description?: string;
//     category: string;
//     available?: boolean;
// }

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
  label: string;
  addressLine: string;
  city: string;
  pincode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  type: "home" | "office" | "friend's house";
  receiver: string;
  number:string;
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
    product: Product;
    id?:string;
    ingredients: Ingredient[];
}