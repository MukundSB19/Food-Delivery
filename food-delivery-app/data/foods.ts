import { images } from "@/constants";
import { Product } from "@/types";
import { ImageSourcePropType } from "react-native";
import { products } from "./product";

export type FoodItem = {
  id: string;
  productId: string;
  product: Product;
};

export const foods: FoodItem[] = [
  {
    id: "0",
    productId: "9",

    product: products.find((product) => product.id === "9")!,
  },
  {
    id: "1",
    productId: "10",

    product: products.find((product) => product.id === "10")!,
  },
  {
    id: "2",
    productId: "11",

    product: products.find((product) => product.id === "11")!,
  },
  {
    id: "3",
    productId: "12",

    product: products.find((product) => product.id === "12")!,
  },
  {
    id: "4",
    productId: "13",

    product: products.find((product) => product.id === "13")!,
  },
  // ...more cards
];
