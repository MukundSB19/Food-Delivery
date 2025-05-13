import { CardContent } from "@/types";
import { products } from "./product";
import { ingredients } from "./ingredient";

export const cardContent: CardContent[] = [
    {
        id: "0",
        productId: "0",
        ingredientIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        product: products.find((product) => product.id === "0")!,
        ingredients: ingredients.filter((ingredient) =>
            ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].includes(
                ingredient.id
            )
        ),
    },
    {
        id: "1",
        productId: "1",
        ingredientIds: [
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
        ],
        product: products.find((product) => product.id === "1")!,
        ingredients: ingredients.filter((ingredient) =>
            [
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
            ].includes(ingredient.id)
        ),
    },
    {
        id: "2",
        productId: "2",
        ingredientIds: ["22", "23", "24", "25", "26"],
        product: products.find((product) => product.id === "2")!,
        ingredients: ingredients.filter((ingredient) =>
            ["22", "23", "24", "25", "26"].includes(ingredient.id)
        ),
    },
    {
        id: "3",
        productId: "3",
        ingredientIds: [
            "27",
            "28",
            "29",
            "30",
            "31",
            "32",
            "33",
            "34",
            "35",
            "36",
            "37",
        ],
        product: products.find((product) => product.id === "3")!,
        ingredients: ingredients.filter((ingredient) =>
            [
                "27",
                "28",
                "29",
                "30",
                "31",
                "32",
                "33",
                "34",
                "35",
                "36",
                "37",
            ].includes(ingredient.id)
        ),
    },
    // ...more cards
];
