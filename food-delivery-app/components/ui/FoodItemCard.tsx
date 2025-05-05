import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useCart } from "@/context/CartContext";
// import { Plus } from "lucide-react-native";

type FoodItem = {
    id: string;
    name: string;
    price: number;
    image?: string;
};

export default function FoodItemCard({ item }: { item: FoodItem }) {
    const { addToCart } = useCart();

    const handleAdd = () => {
        addToCart({ ...item, quantity: 1 });
    };

    return (
        <View className="bg-white rounded-2xl p-3 shadow-sm mb-4 flex-row items-center justify-between">
            <View className="flex-row items-center space-x-4">
                {item.image && (
                    <Image
                        source={{ uri: item.image }}
                        className="w-16 h-16 rounded-xl"
                        resizeMode="cover"
                    />
                )}
                <View>
                    <Text className="text-base font-semibold">{item.name}</Text>
                    <Text className="text-sm text-gray-500">₹{item.price}</Text>
                </View>
            </View>

            <TouchableOpacity
                onPress={handleAdd}
                className="bg-green-500 p-2 rounded-full"
            >
                {/* <Plus size={20} color="white" /> */}
                <Text className="text-white font-semibold">Add</Text>
            </TouchableOpacity>
        </View>
    );
}
