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
        category: "Breakfast",
    },
    {
        image: images.cardTwo,
        text: "Veggie Symphony Bowl",
        category: "Lunch",
    },
    {
        image: images.cardThree,
        text: "Berry Bliss Smoothie",
        category: "Snacks",
    },
    {
        image: images.cardFour,
        text: "Carnitas Burrito Bowl",
        category: "Dinner",
    },
];
