import { images } from "@/constants";
import { ImageSourcePropType } from "react-native";

export type FoodItem = {
    id: string;
    name: string;
    price: number;
    image: ImageSourcePropType;
    country: string;
};

export const foods: FoodItem[] = [
    {
        id: "1",
        name: "Moong Dal Khichdi",
        country: "Indian",
        price: 349,
        image: images.MoongDall,
    },
    {
        id: "2",
        name: "Steamed Vegetable Dumplings",
        country: "Chinese",
        price: 459,
        image: images.Momos,
    },
    {
        id: "3",
        name: "Miso Soup",
        country: "Japanese",
        price: 350,
        image: images.Soup,
    },
    {
        id: "4",
        name: "Grilled Vegetable Panini",
        country: "Italian",
        price: 200,
        image: images.Grilled,
    },
    {
        id: "5",
        name: "Veggie Burrito Bowl",
        country: "Mexican",
        price: 450,
        image: images.Burrito,
    },
    
    
    
];
