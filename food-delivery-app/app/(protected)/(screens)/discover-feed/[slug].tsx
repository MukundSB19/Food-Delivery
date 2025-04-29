import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { allItems, category } from "@/data/category";
import CustomButton from "@/components/ui/CustomButton";

export default function CategoryScreen() {
  const { slug } = useLocalSearchParams();

  // Filter items by the category slug
  const filteredItems = allItems.filter((item) => item.category === slug);

  return (
    <View className="h-full ">
      <LinearGradient
        colors={["#EAECCC", "#9EDC88"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0, y: 1 }}
        style={StyleSheet.absoluteFill}
      >
        <SafeAreaView>
          <ScrollView className=" p-4 " showsVerticalScrollIndicator={false}>
            <Text className="text-4xl font-bold mb-4 capitalize">{slug}</Text>
            <View className="pb-20">
              {filteredItems.length === 0 ? (
                <Text className="text-center text-gray-500">
                  No items found in this category.
                </Text>
              ) : (
                filteredItems.map((item) => (
                  <View className="m-3">
                    <View className="p-3 rounded-3xl shadow-slate-950 drop-shadow-xl bg-slate-100 ">
                      <Image
                        source={{ uri: item.image }}
                        className="w-full h-40"
                        resizeMode="cover"
                      />
                      <Text className="text-lg font-semibold">
                        {item.title}
                      </Text>
                      <View className="flex-row flex justify-between">
                        <Text className="">Vitamin {item.vitamin}</Text>
                        <CustomButton
                          title="Add to bag"
                          className="w-[33%] px-3 py-2 "
                          textStyle="text-white text-center w-full  font-boldFont tracking-tighter text-lg"
                          
                          disabled={false}
                        ></CustomButton>
                      </View>
                    </View>
                  </View>
                ))
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}
