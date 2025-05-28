import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { AppScreenWrapper, InputField } from "@/components";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { icons, images } from "@/constants";
import { orders } from "@/data";
import { Order } from "@/types";
import { resolveProductById } from "@/utils/resolveCard";
import { Product } from "@/types";

const order = () => {
  //  const filter = (productId:string) => {
  //   const filteredItems = orders
  //         .map((item) => resolveProductById(productId))
  //         return filteredItems[0]?.image
  //       }
  const renderItem = ({ item }: { item: Order }) => (
    <View>
      <View className="w-[95%] mt-5 mx-auto bg-white  shadow-black shadow">
        <View className="flex-row ">
          <Text></Text>
          <View>
            <Text></Text>
            <TouchableOpacity>
              <Text></Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <AppScreenWrapper>
      <View className="flex-row pl-2 justify-between  items-center">
        <TouchableOpacity onPress={() => router.back()}>
          <View className="bg-[#00000044] p-2 rounded-2xl">
            <AntDesign name="left" size={29} color="white" />
          </View>
        </TouchableOpacity>
        <Text className="font-regularFont text-[33px] tracking-tighter2 mr-4">
          Your Orders
        </Text>
        <TouchableOpacity></TouchableOpacity>
      </View>
      <InputField
        placeholder="Search by restaurant or dish"
        containerStyle="w-11/12 mx-auto rounded-xl pl-3 font-regularFont text-[27px]"
        iconLeft={images.SearchIcon}
        iconLeftStyle="w-[25] h-[25] "
      ></InputField>
      <View className="mt-8">
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ListEmptyComponent={
            <Text className="text-center text-gray-500 mt-8">
              No Orders Found
            </Text>
          }
        />
      </View>
    </AppScreenWrapper>
  );
};

export default order;
