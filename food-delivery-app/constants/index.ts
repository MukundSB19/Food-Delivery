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
import FruitOne from "@/assets/images/orange.png";
import FruitTwo from "@/assets/images/mango.png";
import FruitThree from "@/assets/images/grapes.png";
import FruitFour from "@/assets/images/blueberry.png";
import FruitFive from "@/assets/images/banana.png";
import MoongDall from "@/assets/images/moong dal.png"
import Momos from "@/assets/images/momos.png"
import Burrito from "@/assets/images/Burrito.png"
import Soup from "@/assets/images/miso soup.png"
import Grilled from "@/assets/images/grilled.png"
import ProductOne from "@/assets/images/product1.png"
import ProductTwo from "@/assets/images/product2.png"
import ProductThree from "@/assets/images/product3.png"
import ProductFour from "@/assets/images/product4.png"

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
    FruitOne,
    FruitTwo,
    FruitThree,
    FruitFour,
    FruitFive,
    MoongDall,
    Momos,
    Burrito,
    Soup,
    Grilled,
    ProductOne,
    ProductTwo,
    ProductThree,
    ProductFour
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
    image2: images.ProductOne,
    id: 0,
    estimatedTime: "30 min",
    text: "Sunny Avocado Breakfast",
    text2: "🥑 Sunny Avocado Breakfast Bowl",
    category: "Breakfast",
    price: 350,
    description:
      "Kickstart your day with this sunny avocado breakfast! 🥑☀️ Freshly toasted bread, creamy avocado, a perfectly runny egg, and a sprinkle of chili flakes—simple, healthy, and delicious. The golden yolk oozes over the green mash like sunshine on a plate. Quick to make, hard to resist!",
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
    image2: images.ProductTwo,
    id: 1,
    estimatedTime: "30 min",
    text: "Veggie Symphony Bowl",
    text2: "🥗 Veggie Symphony Bowl",
    category: "Lunch",
    price: 450,
    description:
      "A colorful harmony of fresh veggies in one bowl! 🥦🥕🍅 The Veggie Symphony Bowl blends roasted goodness, crisp textures, and bold flavors—quinoa, sautéed greens, chickpeas, bell peppers, and a zesty tahini drizzle. Every bite is a note in a delicious plant-powered melody. Healthy never tasted this good!",
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
    image2: images.ProductThree,
    id: 2,
    estimatedTime: "30 min",
    text: "Berry Bliss Smoothie",
    text2: "🍓 Berry Bliss Smoothie",
    category: "Snacks",
    price: 390,
    description:
      "Sip into bliss with this vibrant Berry Bliss Smoothie! 🍓🫐 A creamy blend of strawberries, blueberries, banana, and almond milk—sweet, refreshing, and packed with antioxidants. Perfect for mornings or a midday boost. One sip and you’ll feel the glow! ✨🍇",
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
    image2: images.ProductFour,
    id: 3,
    estimatedTime: "30 min",
    text: "Carnitas Burrito Bowl",
    text2: "🌯 Carnitas Burrito Bowl",
    category: "Dinner",
    price: 430,
    description:
      "Bold, juicy, and packed with flavor—the Carnitas Burrito Bowl is here to steal the show! 🌯🔥 Slow-cooked pork carnitas, cilantro-lime rice, black beans, fresh salsa, corn, and a dollop of guac. Every bite is a fiesta in your mouth! 🥑🌶️",
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
