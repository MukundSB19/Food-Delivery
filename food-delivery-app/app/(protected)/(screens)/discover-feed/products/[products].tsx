import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";
import { router } from "expo-router";
import { allItems } from "@/data";
import { CardContent, images } from "@/constants";
import { AppScreenWrapper, CustomButton } from "@/components";
import AntDesigns from "@expo/vector-icons/AntDesign";
import { useCart } from "@/context/CartContext";

const ProductScreen = () => {
  const { id, products, description } = useLocalSearchParams<{
    id: string;
    products: string;
    description: string;
  }>();

  const filteredItems = allItems.filter((item) => item.category === products);
//  const { addToCart } = useCart();

//   const handleAdd = () => {
//     addToCart({ ...item, quantity: 1 });
//   };

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
        <View className="absolute flex-row justify-between w-full mt-8 px-3">
          <TouchableOpacity onPress={() => router.push("/home")}>
            <View className="bg-[#00000044] p-2 rounded-2xl">
              <AntDesign name="left" size={29} color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/(protected)/(tabs)/cart")}
          >
            <View className="bg-[#00000044] p-2 rounded-2xl">
              <Ionicons name="bag-handle-outline" size={29} color="white" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Product Info Section */}
        <ScrollView className="absolute bottom-0 h-2/3 w-full bg-[#EAECCC] rounded-t-3xl p-4">
          <View className="flex flex-row justify-between relative">
            <Text className="text-fontPrimary-0 text-4xl font-regularFont tracking-tighter2 p-2  w-3/4 mt-6">
              {CardContent[Number(id)].text}
            </Text>
            <View>
              <Text className="bg-[#9EDC88] text-fontPrimary-0 text-4xl font-regularFont tracking-tighter2 mt-6 p-2 rounded-2xl">
                {CardContent[Number(id)].price} ₹
              </Text>
            </View>
          </View>
          <View className="flex flex-row gap-1 ml-2 mt-3">
            <AntDesigns
              name="star"
              size={24}
              color="#FFC300"
              className="shadow-md"
            />
            <AntDesigns
              name="star"
              size={24}
              color="#FFC300"
              className="shadow-md"
            />
            <AntDesigns
              name="star"
              size={24}
              color="#FFC300"
              className="shadow-md"
            />
            <AntDesigns
              name="star"
              size={24}
              color="#FFC300"
              className="shadow-md"
            />
            <AntDesigns
              name="star"
              size={24}
              color="#ffffff"
              className="shadow-md"
            />
            <Text className="font-regularFont text-xl ml-7 tracking-tighter">
              {CardContent[Number(id)].estimatedTime}{" "}
            </Text>
          </View>
          <View className="mt-8">
            <Text className="font-regularFont text-2xl">
              {CardContent[Number(id)].description}
            </Text>
          </View>
          <View className="mt-10">
            <CustomButton
              title="Add to bag "
              className="w-3/4 self-center p-3"
              
            ></CustomButton>
          </View>
          {/* {filteredItems.map((item) => (
            <Text key={item.id} className="text-black mt-2"></Text>
          ))} */}
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductScreen;
