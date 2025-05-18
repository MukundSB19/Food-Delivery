import { View, Text, ImageBackground, StatusBar, ImageSourcePropType } from "react-native";
import React, { useEffect, useState } from "react";
import { AppScreenWrapper, CustomButton } from "@/components";
import { Image, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useCart } from "@/context/CartContext";
import { resolveProductById } from "@/utils/resolveCard";
import { Product } from "@/types";
import { foods } from "@/data/foods";
import { images } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { stripBaseUrl } from "expo-router/build/fork/getStateFromPath-forks";

const cuisineCategoryScreen = () => {
  const { cuisine } = useLocalSearchParams();
  const { addToCart } = useCart();
  
  const [bgImage,setBgImage] = useState<ImageSourcePropType>();
  // Filter items by category using resolved product data
  const filteredItems = foods
    .map((item) => resolveProductById(item.productId))
    .filter((product) => product && product.category === cuisine) as Product[];

  const handleAdd = (product: Product) => {
    addToCart({ ...product, quantity: 1 });
  };

  useEffect(() => {
    if (!cuisine) return;

    const cuisineLower = cuisine.toString().toLowerCase();

    if (cuisineLower==="chinese"){
      setBgImage(images.ChineseBg);
    }else if (cuisineLower==="japanese"){
      setBgImage(images.JapanBg);
    }else if (cuisineLower==="indian"){
      setBgImage(images.IndiaBg)
    }
  }, [cuisine]);





  const renderItem = ({ item }: { item: Product }) => (
    <View className="flex-row items-center mb-4  shadow-md mt-4  h-[220] w-[95%] mx-auto relative">
      <Image
        source={item.image}
        className="w-full h-full rounded-2xl"
        resizeMode="cover"
      />
      <View className="absolute flex-col justify-between w-full h-full ">
        <Text className="mb-1 text-2xl tracking-tighter2 text-white font-regularFont mx-3 mt-3 bg-[#00000044] self-start px-3 py-1 rounded-lg">
          {item.name}
        </Text>
        <View className="relative flex-row items-baseline justify-between bottom-2 mx-3">
          <CustomButton
            title="Add to Bag"
            // onPress={() => handleAdd(item)}
            className="w-[38%] px-3 py-2 "
            textStyle="text-white text-center font-boldFont tracking-tighter text-xl relative bottom-0"
            disabled={false}
          />
          <Text className="relative bottom-0   mb-3 text-2xl text-white rounded-lg bg-[#00000044] self-start px-3 py-1 ">
            {item.price} ₹/kg
          </Text>
          {/* <Text className="text-base tracking-tighter font-regularFont text-fontPrimary-0">
                      {item.description}
                  </Text> */}
        </View>
      </View>
    </View>
  );




  return (
    
      
        <ImageBackground source={bgImage} className="flex-1 pt-5 ">
          <Text className="self-start p-3 mt-6 mb-2 ml-3 text-3xl capitalize bg-white font-regularFont tracking-tighter2 rounded-2xl shadow--2xl text-fontPrimary-0 elevation-xl ">
            {cuisine} Cuisines
          </Text>
          <View className="mx-auto  ">
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
        </ImageBackground>
     
    
  );
};

export default cuisineCategoryScreen;
