import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React from "react";
import { AppScreenWrapper, InputField } from "@/components";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { images } from "@/constants";
import { orders } from "@/data";
import { resolveProductById, resolveRestaurantById } from "@/utils/resolveCard";
import { Order, Product } from "@/types";

const OrderScreen = () => {
  const renderItem = ({ item }: { item: Order }) => {
    const orderProducts = item.items
      .map(({ productId, quantity }) => {
        const product = resolveProductById(productId);
        return { ...product, quantity };
      })
      .filter((p): p is Product & { quantity: number } => p !== null);

    const restaurant =
      orderProducts.length > 0
        ? resolveRestaurantById(orderProducts[0].restaurantId)
        : null;

    return (
      <View className="w-[95%] mt-5 mx-auto bg-white rounded-xl shadow-md p-4">
        {restaurant && (
          <View className="mb-2">
            <Text className="text-2xl font-regularFont tracking-tighter2">
              {restaurant.name}
            </Text>
            <Text className="text-base text-gray-500 font-regularFont tracking-tighter mt-2">
              {restaurant.location} • {restaurant.deliveryTime}
            </Text>
          </View>
        )}

        {orderProducts.map((product, index) => (
          <View key={product.id + index} className="flex-row items-center my-2">
            <Image
              source={product.image2 || product.image}
              className="w-[80px] h-[80px] rounded-2xl"
              resizeMode="cover"
            />
            <View className="ml-3 flex-1">
              <Text className="text-base font-regularFont tracking-tighter">
                {product.name}
              </Text>
              <Text className="text-base text-gray-500 font-regularFont">
                Quantity: {product.quantity}
              </Text>
              <Text className="text-sm font-regularFont text-gray-600">
                Price: ₹{product.price}
              </Text>
            </View>
          </View>
        ))}

        <View className="mt-2 border-t border-gray-200 pt-2 flex-row justify-between">
          <Text className="text-base font-regularFont">Total:</Text>
          <Text className="text-base font-regularFont">₹{item.total}</Text>
        </View>
      </View>
    );
  };

  return (
    <AppScreenWrapper>
      <View className="flex-row pl-2 justify-between items-center mt-2">
        <TouchableOpacity onPress={() => router.back()}>
          <View className="bg-[#00000044] p-2 rounded-2xl">
            <AntDesign name="left" size={29} color="white" />
          </View>
        </TouchableOpacity>
        <Text className="font-regularFont text-[28px] tracking-tight mr-4">
          Your Orders
        </Text>
        <View className="w-8" />
      </View>

      <InputField
        placeholder="Search by restaurant or dish"
        containerStyle="w-11/12 mx-auto rounded-xl pl-3 mt-3"
        iconLeft={images.SearchIcon}
        iconLeftStyle="w-[25] h-[25]"
      />

      <View className="mt-4">
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ListEmptyComponent={
            <Text className="text-center text-gray-500 mt-8">
              No orders Found
            </Text>
          }
        />
      </View>
    </AppScreenWrapper>
  );
};

export default OrderScreen;
