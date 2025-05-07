import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useCart } from "@/context/CartContext";
// import { Plus } from "lucide-react-native";
import { ImageSourcePropType } from "react-native";
import CustomButton from "./CustomButton";

type FoodItem = {
  id: string;
  name: string;
  price: number;
  image?: ImageSourcePropType;
};

export default function FoodItemCard({ item }: { item: FoodItem }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ ...item, quantity: 1 });
  };

  return (
    // <View className="bg-white rounded-2xl p-3 shadow-sm mb-4 flex-row items-center justify-between mx-3">
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
    //     className="bg-green-500 p-2 rounded-full"
    //   >
    //     {/* <Plus size={20} color="white" /> */}
    //     <Text className="text-white font-semibold">Add</Text>
    //   </TouchableOpacity>
    // </View>

    <View className="mx-6 my-4">
      <Image
        className=" w-full h-[220]  rounded-3xl"
        resizeMode="cover"
        source={item.image}
      />
      <TouchableOpacity className="absolute m-5 bg-[#00000066] px-3 py-2 rounded-2xl">
        <Text className="text-lg tracking-tight rounded-lg font-boldFont color-white ">
          
        </Text>
      </TouchableOpacity>
      <Text className="text-center font-boldFont tracking-tight ml-2 p-1 rounded-lg bg-[#00000066] color-white absolute bottom-16">
        
      </Text>
      {/* // TODO: implement on press functionality */}
<View className=" w-full flex   bottom-3 absolute gap-2">
      <Text className="color-white font-regularFont  p-2 px-3 mx-2 rounded-lg shadow-2xl shadow-black bg-[#00000055] text-xl self-start">
        {item.name}
      </Text>
      <View className="flex-row justify-between ">
      <CustomButton className="self-start px-3 py-2 mx-2" title="Add to cart" textStyle="text-xl"/>
      <Text className="text-white my-auto mr-10">{item.price}</Text>
      </View>
      </View>
    </View>
  );
}
