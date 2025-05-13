import { Product } from "@/types";
import { images } from "@/constants";

export const products: Product[] = [
    {
        image: images.cardOne,
        image2: images.ProductOne,
        id: "0",
        estimatedTime: "30 min",
        name: "Sunny Avocado Breakfast",
        text: "🥑 Sunny Avocado Breakfast Bowl",
        category: "Breakfast",
        price: 350,
        description:
            "Kickstart your day with this sunny avocado breakfast! 🥑☀️ Freshly toasted bread, creamy avocado, a perfectly runny egg, and a sprinkle of chili flakes—simple, healthy, and delicious. The golden yolk oozes over the green mash like sunshine on a plate. Quick to make, hard to resist!",
    },
    {
        image: images.cardTwo,
        image2: images.ProductTwo,
        id: "1",
        estimatedTime: "30 min",
        name: "Veggie Symphony Bowl",
        text: "🥗 Veggie Symphony Bowl",
        category: "Lunch",
        price: 450,
        description:
            "A colorful harmony of fresh veggies in one bowl! 🥦🥕🍅 The Veggie Symphony Bowl blends roasted goodness, crisp textures, and bold flavors—quinoa, sautéed greens, chickpeas, bell peppers, and a zesty tahini drizzle. Every bite is a note in a delicious plant-powered melody. Healthy never tasted this good!",
    },
    {
        image: images.cardThree,
        image2: images.ProductThree,
        id: "2",
        estimatedTime: "30 min",
        name: "Berry Bliss Smoothie",
        text: "🍓 Berry Bliss Smoothie",
        category: "Snacks",
        price: 390,
        description:
            "Sip into bliss with this vibrant Berry Bliss Smoothie! 🍓🫐 A creamy blend of strawberries, blueberries, banana, and almond milk—sweet, refreshing, and packed with antioxidants. Perfect for mornings or a midday boost. One sip and you’ll feel the glow! ✨🍇",
    },
    {
        image: images.cardFour,
        image2: images.ProductFour,
        id: "3",
        estimatedTime: "30 min",
        name: "Carnitas Burrito Bowl",
        text: "🌯 Carnitas Burrito Bowl",
        category: "Dinner",
        price: 430,
        description:
            "Bold, juicy, and packed with flavor—the Carnitas Burrito Bowl is here to steal the show! 🌯🔥 Slow-cooked pork carnitas, cilantro-lime rice, black beans, fresh salsa, corn, and a dollop of guac. Every bite is a fiesta in your mouth! 🥑🌶️",
    },
    // ... more products
];
