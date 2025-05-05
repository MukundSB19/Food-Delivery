import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useCart } from "@/context/CartContext";
import { CustomButton } from "@/components/ui";
import { AppScreenWrapper } from "@/components";
// import { Minus, Plus, Trash2 } from "lucide-react-native";

const Cart = () => {
    // const { state, addToCart, removeFromCart, totalPrice } = useCart();

    // return (
    //     <AppScreenWrapper gradientColors={["#EAECCC", "#9EDC88"]}>
    //         <View>
    //             <Text>Cart</Text>
    //         </View>
    //     </AppScreenWrapper>
    // );
    const { state, updateQuantity, removeFromCart, totalPrice, clearCart } =
        useCart();

    const handleIncrease = (id: string) => {
        const item = state.items.find((item) => item.id === id);
        if (item) {
            updateQuantity(id, item.quantity + 1);
        }
    };

    const handleDecrease = (id: string) => {
        const item = state.items.find((item) => item.id === id);
        if (item && item.quantity > 1) {
            updateQuantity(id, item.quantity - 1);
        }
    };

    const renderItem = ({ item }: any) => (
        <View className="flex-row items-center justify-between mb-4 bg-white p-3 rounded-2xl shadow">
            <View className="flex-row items-center space-x-3">
                {item.image && (
                    <Image
                        source={{ uri: item.image }}
                        className="w-14 h-14 rounded-xl"
                        resizeMode="cover"
                    />
                )}
                <View>
                    <Text className="text-base font-medium">{item.name}</Text>
                    <Text className="text-sm text-gray-500">₹{item.price}</Text>
                </View>
            </View>

            <View className="items-end">
                <View className="flex-row items-center gap-5">
                    <TouchableOpacity onPress={() => handleDecrease(item.id)}>
                        {/* <Minus size={16} /> */}
                        <Text className="text-gray-500 text-3xl">- </Text>
                    </TouchableOpacity>
                    <Text className="font-medium">{item.quantity}</Text>
                    <TouchableOpacity onPress={() => handleIncrease(item.id)}>
                        {/* <Plus size={16} /> */}
                        <Text className="text-gray-500 text-2xl"> +</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => removeFromCart(item.id)}
                    className="mt-2"
                >
                    {/* <Trash2 size={16} color="red" /> */}
                    <Text className="text-red-500">Remove</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    if (state.items.length === 0) {
        return (
            <View className="flex-1 items-center justify-center px-4">
                <Text className="text-xl font-semibold mb-2">
                    Your cart is empty
                </Text>
                <Text className="text-gray-500 text-center">
                    Add some delicious food to get started!
                </Text>
            </View>
        );
    }

    return (
        <AppScreenWrapper gradientColors={["#EAECCC", "#9EDC88"]}>
            <View className="flex-1 p-4">
                <FlatList
                    data={state.items}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 80 }}
                />

                <View className="absolute bottom-16 left-4 right-4 bg-white p-4 rounded-2xl shadow-lg">
                    <View className="flex-row justify-between mb-3">
                        <Text className="text-lg font-semibold">Total</Text>
                        <Text className="text-lg font-semibold">
                            ₹{totalPrice().toFixed(2)}
                        </Text>
                    </View>
                    <CustomButton
                        className="w-full"
                        onPress={() => clearCart()}
                        title="Checkout & Clear Cart"
                        textStyle="text-white text-center w-full font-boldFont tracking-tighter text-lg"
                    >
                    </CustomButton>
                </View>
            </View>
        </AppScreenWrapper>
    );
};

export default Cart;
