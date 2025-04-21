import slideOne from "@/assets/images/slideOne.png";
import slideTwo from "@/assets/images/slideTwo.png";
import fruits from "@/assets/images/fruits.png";
import veges from "@/assets/images/vegetables.png";
import dairy from "@/assets/images/dairy.png";
import grains from "@/assets/images/grains.png";
import spice from "@/assets/images/spice.png";
import cardOne from "@/assets/images/card1.png";
import cardTwo from "@/assets/images/card2.png";
import cardThree from "@/assets/images/card3.png";
import cardFour from "@/assets/images/card4.png";

export const images = {
  slideOne,
  slideTwo,
  fruits,
  veges,
  dairy,
  grains,
  spice,
  cardOne,
  cardTwo,
  cardThree,
  cardFour,
};

export const icons = {};

export const onboarding = [
  {
    id: 1,
    image: images.slideOne,
  },
  {
    id: 2,
    image: images.slideTwo,
  },
];

export const listImage = [
  {
    image: images.fruits,
    text: "Fruits",
  },
  {
    image: images.veges,
    text: "Vegetables",
  },
  {
    image: images.dairy,
    text: "Dairy",
  },
  {
    image: images.grains,
    text: "Grains",
  },
  {
    image: images.spice,
    text: "Spice",
  },
];
export const CardContent = [
  {
    image: images.cardOne,
    text: "Sunny Avocado Breakfast",
    text2: "🥑 Sunny Avocado Breakfast Bowl",
    category: "Breakfast",


    ingredients: [
      { name: "Cooked white rice", quantity: "120g" },
      { name: "Pinto beans", quantity: "80g" },
      { name: "Shredded carnitas", quantity: "100g" },
      { name: "Shredded cheese", quantity: "30g" },
      { name: "Guacamole", quantity: "40g" },
      { name: "Sour cream", quantity: "20g" },
      { name: "Romaine lettuce (chopped)", quantity: "25g" },
      { name: "Pico de gallo", quantity: "60g" },
      { name: "Fresh cilantro (garnish)", quantity: "5g" },
      { name: "Lime wedges", quantity: "2 wedges (~20g)" },
     
    ],
  },
  {
    image: images.cardTwo,
    text: "Veggie Symphony Bowl",
    text2: "🥗 Veggie Symphony Bowl",
    category: "Lunch",
    ingredients: [
        { name: "brown rice", quantity: "120g" },
        { name: "Roasted chickpeas", quantity: "80g" },
        { name: "sautéed bell peppers (mixed colors)", quantity: "60g" },
        { name: "Steamed broccoli", quantity: "50g" },
        { name: "Avocado (sliced)", quantity: "50g" },
        { name: "Cherry tomatoes (halved)", quantity: "50g" },
        { name: "Shredded carrots", quantity: "30g" },
        { name: "Red cabbage (shredded)", quantity: "30g" },
        { name: "Hummus", quantity: "40g" },
        { name: "Lemon", quantity: "1 wedge (~10g)" },
        { name: "Fresh herbs (cilantro)", quantity: "5g" },
       
      ],
  },
  {
    image: images.cardThree,
    text: "Berry Bliss Smoothie",
    text2: "🍓 Berry Bliss Smoothie",
    category: "Snacks",
    ingredients: [
        { name: "Frozen mixed berries ", quantity: "150g" },
        { name: "Banana (ripe)", quantity: "100g" },
        { name: "Greek yogurt ", quantity: "100g" },
        { name: "Almond milk", quantity: "200ml (~200g)" },
        { name: "Honey", quantity: "10g (about 1 tsp)" },
       
      ],
  },
  {
    image: images.cardFour,
    text: "Carnitas Burrito Bowl",
    text2: "🌯 Carnitas Burrito Bowl",
    category: "Dinner",
    ingredients: [
        { name: "Cooked white rice", quantity: "120g" },
        { name: "Slow-cooked carnitas (shredded pork)", quantity: "100g" },
        { name: "Black beans", quantity: "80g" },
        { name: "Grilled corn", quantity: "60g" },
        { name: "Pico de gallo (fresh tomato salsa)", quantity: "60g" },
        { name: "Guacamole", quantity: "50g" },
        { name: "Sour cream", quantity: "20g" },
        { name: "Shredded cheddar", quantity: "	30g" },
        { name: "Chopped romaine lettuce", quantity: "40g" },
        { name: "Fresh cilantro (for garnish)", quantity: "5g" },
        { name: "Lime wedge", quantity: " 1 wedge (~10g)" },
      ],
  },
];
