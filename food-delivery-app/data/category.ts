import { HorizontalImage } from "@/types";
import { productCategories } from "@/constants";

export const category: HorizontalImage[] = [
  {
    title: "Fruits",
    slug: "fruits",
    imageUrl: productCategories.CategoryFruits,
    description:
      "Handpicked straight from the farms, our selection of popular fruits brings you the freshest and juiciest flavors, just as nature intended.",
  },
  {
    title: "Vegetables",
    slug: "vegetables",
    imageUrl: productCategories.CategoryVegetables,
    description: "aasas",
  },
  {
    title: "Dairy",
    slug: "dairy",
    imageUrl: productCategories.CategoryDairy,
    description: "aasas",
  },
  {
    title: "Grains",
    slug: "grains",
    imageUrl: productCategories.CategoryGrains,
    description: "aasas",
  },
  {
    title: "Spices",
    slug: "spices",
    imageUrl: productCategories.CategorySpices,
    description: "aasas",
  },
];
