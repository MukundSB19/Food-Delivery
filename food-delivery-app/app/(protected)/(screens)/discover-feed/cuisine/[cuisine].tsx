import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    FlatList,
    StatusBar,
    ImageSourcePropType,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { AppScreenWrapper, CustomButton } from "@/components";
import { useCart } from "@/context/CartContext";
import { resolveProductById } from "@/utils/resolveCard";
import { Product } from "@/types";
import { foods } from "@/data/foods";
import { images } from "@/constants";

const cuisineBackgroundMap: Record<string, ImageSourcePropType> = {
    chinese: images.ChineseBg,
    japanese: images.JapanBg,
    indian: images.IndiaBg,
    italian: images.ItalianBg,
    mexican: images.MexicoBg,
};

const CuisineCategoryScreen = () => {
    const { cuisine } = useLocalSearchParams<{ cuisine?: string }>();
    const { addToCart } = useCart();

    const [bgImage, setBgImage] = useState<ImageSourcePropType>();

    // Convert cuisine to lowercase and set background
    useEffect(() => {
        if (cuisine) {
            const lowerCuisine = cuisine.toLowerCase();
            setBgImage(cuisineBackgroundMap[lowerCuisine]);
        }
    }, [cuisine]);

    // Filter products by selected cuisine
    const filteredItems = foods
        .map((item) => resolveProductById(item.productId))
        .filter(
            (product): product is Product =>
                !!product &&
                product.category.toLowerCase() === cuisine?.toLowerCase()
        );

    const handleAddToCart = (product: Product) => {
        addToCart({ ...product, quantity: 1 });
    };

    const renderItem = ({ item }: { item: Product }) => (
        <View className="flex-row items-center mb-4 shadow-md mt-4 h-[220] w-[95%] mx-auto relative">
            <Image
                source={item.image}
                className="w-full h-full rounded-2xl"
                resizeMode="cover"
            />
            <View className="absolute flex-col justify-between w-full h-full">
                <Text className="mb-1 text-2xl text-white bg-[#00000044] px-3 py-1 rounded-lg mx-3 mt-3 font-regularFont tracking-tighter2 self-start">
                    {item.name}
                </Text>
                <View className="flex-row justify-between items-baseline mx-3 mb-3">
                    <CustomButton
                        title="Add to Bag"
                        onPress={() => handleAddToCart(item)}
                        className="w-[38%] px-3 py-2"
                        textStyle="text-white text-center font-boldFont tracking-tighter text-xl"
                    />
                    <Text className="text-2xl text-white bg-[#00000044] px-3 py-1 rounded-lg">
                        {item.price} ₹/kg
                    </Text>
                </View>
            </View>
        </View>
    );

    return (
        <ImageBackground source={bgImage} className="flex-1 pt-5">
            <Text className="self-start mt-6 ml-3 p-3 text-3xl capitalize bg-white font-regularFont tracking-tighter2 rounded-2xl shadow--2xl text-fontPrimary-0">
                {cuisine} Cuisines
            </Text>

            <View className="mx-auto">
                {filteredItems.length === 0 ? (
                    <Text className="mt-4 text-center text-gray-500">
                        No items found in this category.
                    </Text>
                ) : (
                    <FlatList
                        data={filteredItems}
                        keyExtractor={(item) => `${item.id}`}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 80 }}
                    />
                )}
            </View>
        </ImageBackground>
    );
};

export default CuisineCategoryScreen;
