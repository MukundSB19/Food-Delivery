import React from "react";
import { View, Text, Image, StatusBar, SafeAreaView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";

import { allItems } from "@/data";
import { CardContent, images } from "@/constants";
import { AppScreenWrapper } from "@/components";

const ProductScreen = () => {
  const { id, products, description } = useLocalSearchParams<{
    id:string;
    products: string;
    description: string;
  }>();

  const filteredItems = allItems.filter((item) => item.category === products);

  // useFocusEffect(() => {
  //   StatusBar.setHidden(true); // or false
  //   return () => StatusBar.setHidden(false); // reset on blur
  // });

  return (
    <View>
      <View className="relative w-full h-full">
        {/* Product Image Section */}
        <Image
          source={CardContent[Number(id)].image2}
          resizeMode="cover"
          className="w-full h-[36%] absolute"
        />

        {/* Top Icons */}
        <View className="absolute flex-row justify-between w-full mt-4 px-3">
          <View className="bg-[#00000044] p-2 rounded-2xl">
            <AntDesign name="left" size={29} color="white" />
          </View>
          <View className="bg-[#00000044] p-2 rounded-2xl">
            <Ionicons name="bag-handle-outline" size={29} color="white" />
          </View>
        </View>

        {/* Product Info Section */}
        <View className="absolute bottom-0 h-2/3 w-full bg-[#EAECCC] rounded-t-3xl p-4">
          {/* Example content */}
          <Text className="text-white text-2xl font-semibold mb-2"></Text>
          <Text className="text-gray-300">{description}</Text>

          {/* Map filtered items (optional) */}
          {filteredItems.map((item) => (
            <Text key={item.id} className="text-black mt-2"></Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ProductScreen;
