import { horizontalImage } from "@/types/types";
import { images } from "@/constants";

export const category: horizontalImage[] = [
  {
    title: "Fruits",
    slug: "fruits",
    imageUrl: images.fruits,
    description:
      "Handpicked straight from the farms, our selection of popular fruits brings you the freshest and juiciest flavors, just as nature intended.",
  },
  {
    title: "Vegetables",
    slug: "vegetables",
    imageUrl: images.veges,
    description: "aasas",
  },
  {
    title: "Dairy",
    slug: "dairy",
    imageUrl: images.dairy,
    description: "aasas",
  },
  {
    title: "Grains",
    slug: "grains",
    imageUrl: images.grains,
    description: "aasas",
  },
  {
    title: "Spices",
    slug: "spices",
    imageUrl: images.spice,
    description: "aasas",
  },
];

export const allItems = [
  {
    id: "1",

    title: "Orange",
    image: images.FruitOne,
    category: "fruits",
    vitamin: "C,B1,folate",
  },
  {
    id: "2",

    title: "Mango",
    image: images.FruitTwo,
    category: "fruits",
    vitamin: "C,B1,folate",
  },
  {
    id: "3",

    title: "Grapes",
    image: images.FruitThree,
    category: "fruits",
    vitamin: "C,B1,folate",
  },
  {
    id: "4",

    title: "Blueberries",
    image: images.FruitFour,
    category: "fruits",
    vitamin: "C,B1,folate",
  },
  {
    id: "5",

    title: "Banana",
    image: images.FruitFive,
    category: "fruits",
    vitamin: "C,B1,folate",
  },
];
