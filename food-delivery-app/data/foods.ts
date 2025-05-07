import { images } from "@/constants";
import { ImageSourcePropType } from "react-native";

export type FoodItem = {
    id: string;
    name: string;
    price: number;
    image: ImageSourcePropType;
};

export const foods: FoodItem[] = [
    {
        id: "1",
        name: "Moong Dal Khichdi",
        price: 349,
        image: images.MoongDall,
    },
    {
        id: "2",
        name: "Steamed Vegetable Dumplings",
        price: 459,
        image: images.Momos,
    },
    {
        id: "3",
        name: "Miso Soup",
        price: 350,
        image: images.Soup,
    },
    {
        id: "4",
        name: "Grilled Vegetable Panini",
        price: 200,
        image: images.Grilled,
    },
    {
        id: "5",
        name: "Veggie Burrito Bowl",
        price: 450,
        image: images.Burrito,
    },
    
    
    
];
