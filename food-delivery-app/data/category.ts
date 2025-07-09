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
    description:
      "Handpicked straight from the farms, our selection of popular vegetables brings you the freshest and crispest flavors, just as nature intended.",
  },
  {
    title: "Dairy",
    slug: "dairy",
    imageUrl: productCategories.CategoryDairy,
    description:
      "Sourced from trusted local dairies, our range of fresh dairy products brings you the purest and creamiest goodness, just as nature intended.",
  },
  {
    title: "Grains",
    slug: "grains",
    imageUrl: productCategories.CategoryGrains,
    description:
      "Harvested from fertile fields, our carefully chosen grains bring you the richest and most wholesome flavors, just as nature intended",
  },
  {
    title: "Spices",
    slug: "spices",
    imageUrl: productCategories.CategorySpices,
    description:
      "Sourced from the finest regions, our collection of aromatic spices brings you the boldest and most authentic flavors, just as nature intended",
  },
];
