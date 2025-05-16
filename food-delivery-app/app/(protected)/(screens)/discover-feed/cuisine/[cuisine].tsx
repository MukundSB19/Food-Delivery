import { View, Text } from "react-native";
import React from "react";
import { AppScreenWrapper, CustomButton } from "@/components";
import { Image, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { allItems } from "@/data";

import { useCart } from "@/context/CartContext";
import { resolveProductById } from "@/Utils/resolveCard";
import { Product } from "@/types";
import { foods } from "@/data/foods";

const cuisineCategoryScreen = () => {
  const { category } = useLocalSearchParams();
  const { addToCart } = useCart();

  // Filter items by category using resolved product data
  const filteredItems = foods
    .map((item) => resolveProductById(item.productId))
    .filter((product) => product && product.category === category) as Product[];

  const handleAdd = (product: Product) => {
    addToCart({ ...product, quantity: 1 });
  };

  const renderItem = ({ item }: { item: Product }) => (
    <View className="flex-row items-center mb-4  shadow-md mt-4  h-[220] w-[95%] mx-auto relative">
      <Image
        source={item.image}
        className="w-full h-full rounded-2xl"
        resizeMode="cover"
      />
      <View className=" flex-col absolute w-full h-full justify-between bg-black">
        <Text className="mb-1 text-2xl font-regularFont text-white  tracking-tighter">
          {item.name}
        </Text>
        <View className="flex-row items-center justify-between">
          <CustomButton
            title="Add to Bag"
            // onPress={() => handleAdd(item)}
            className="w-[38%] px-3 py-2 "
            textStyle="text-white text-center font-boldFont tracking-tighter text-sm"
            disabled={false}
          />
          <Text className="text-white self-start px-2 py-1 text-lg rounded-lg mb-3">
            {item.price} ₹/kg
          </Text>
        </View>

        <Text className="font-regularFont tracking-tighter text-fontPrimary-0 text-base">
          {item.description}
        </Text>
      </View>
    </View>
  );

  return (
    <AppScreenWrapper>
      <Text className="text-3xl font-regularFont tracking-tighter2 mb-2 mt-6 ml-2 capitalize bg-white p-3 rounded-2xl shadow--2xl text-fontPrimary-0 elevation-xl self-start ">
        {category} Cuisine
      </Text>
      <View className=" mx-auto ">
        {filteredItems.length === 0 ? (
          <Text className="mt-4 text-center text-gray-500">
            No items found in this Category.
          </Text>
        ) : (
          <FlatList
            data={filteredItems}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 80 }}
          />
        )}
      </View>
    </AppScreenWrapper>
  );
};

export default cuisineCategoryScreen;
