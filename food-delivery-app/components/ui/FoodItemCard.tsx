import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useCart } from "@/context/CartContext";
// import { Plus } from "lucide-react-native";
import { ImageSourcePropType } from "react-native";
import CustomButton from "./CustomButton";
import { useLocalSearchParams, router } from "expo-router";
import { category } from "@/data";
import { Product } from "@/types";
export type FoodItem = {
    id: string;
    productId:string;
    product:Product;
};


export default function FoodItemCard({ item }: { item: FoodItem }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ ...item.product, quantity: 1 });
  };

  return (
    // <View className="flex-row items-center justify-between p-3 mx-3 mb-4 bg-white shadow-sm rounded-2xl">
    //   <View className="flex-row items-center space-x-4">
    //     {item.image && (
    //       <Image
    //         source={item.image}
    //         className="w-16 h-16 rounded-xl"
    //         resizeMode="cover"
    //       />
    //     )}
    //     <View>
    //       <Text className="text-base font-semibold">{item.name}</Text>
    //       <Text className="text-sm text-gray-500">₹{item.price}</Text>
    //     </View>
    //   </View>

    //   <TouchableOpacity
    //     onPress={handleAdd}
    //     className="p-2 bg-green-500 rounded-full"
    //   >
    //     {/* <Plus size={20} color="white" /> */}
    //     <Text className="font-semibold text-white">Add</Text>
    //   </TouchableOpacity>
    // </View>

    <View className="mx-6 my-4">
      <Image
        className=" w-full h-[220]  rounded-3xl"
        resizeMode="cover"
        source={item.product.image}
      />
      <View className="absolute flex-row items-baseline justify-between w-full px-3 mt-3">
        <Text className="color-white font-regularFont  p-2 px-3 rounded-lg shadow-2xl shadow-black bg-[#00000055] text-xl self-start mt-">
          {item.product.category}
        </Text>
        <CustomButton
          className="  bg-[#00000066] px-3 py-2 rounded-2xl"
          textStyle="text-lg tracking-tight rounded-lg font-boldFont color-white"
          title="See More"
           onPress={() => router.push({
            pathname:"/(protected)/(screens)/discover-feed/cuisine/[cuisine]",
            params:{cuisine:item.product.category},
          
          })}

        />
      </View>
      <Text className="text-center font-boldFont tracking-tight ml-2 p-1 rounded-lg bg-[#00000066] color-white absolute bottom-16"></Text>
      {/* // TODO: implement on press functionality */}
      <View className="absolute flex w-full gap-2  bottom-3">
        <Text className="color-white font-regularFont  p-2 px-3 mx-2 rounded-lg shadow-2xl shadow-black bg-[#00000055] text-xl self-start">
          {item.product.name}
        </Text>
        <View className="flex-row justify-between ">
          <CustomButton
            className="self-start px-3 py-2 mx-2"
            title="Add to Bag"
            textStyle="text-xl"
            onPress={handleAdd}
          />
          <Text className="text-black my-auto mr-6 text-2xl bg-[#9EDC88] p-1 px-3 rounded-2xl font-boldFont tracking-tighter">
            {item.product.price} ₹
          </Text>
        </View>
      </View>
    </View>
  );
}
