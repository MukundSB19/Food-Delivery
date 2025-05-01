import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { allItems } from "@/data/category";
import CustomButton from "@/components/ui/CustomButton";

export default function CategoryScreen() {
    const { slug, description } = useLocalSearchParams();

    const filteredItems = allItems.filter((item) => item.category === slug);

    const renderItem = ({ item }: { item: (typeof allItems)[0] }) => (
        <View className="flex-row items-center bg-slate-100 rounded-3xl p-4 mb-4 shadow-md">
            <Image
                source={item.image}
                className="w-24 h-20 mr-4"
                resizeMode="contain"
            />
            <View className="flex-1">
                <Text className="text-base font-regularFont mb-1">
                    {item.title}
                </Text>
                <View className="flex-row justify-between items-center">
                    <Text className="text-sm text-gray-700">
                        Vitamin {item.vitamin}
                    </Text>
                    <CustomButton
                        title="Add to bag"
                        className="w-[38%] px-3 py-2"
                        textStyle="text-white text-center font-boldFont tracking-tighter text-sm"
                        disabled={false}
                    />
                </View>
            </View>
        </View>
    );

    return (
        <View className="flex-1">
            <LinearGradient
                colors={["#EAECCC", "#9EDC88"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 0, y: 1 }}
                className="absolute inset-0"
            />
            <SafeAreaView className="flex-1 px-4 ">
                <Text className="text-3xl font-regularFont tracking-tighter2 mb-2 mt-6 ml-2 capitalize bg-white w-[50%] p-3 rounded-2xl shadow--2xl text-fontPrimary-0 elevation-xl">
                    Popular {slug}
                </Text>
                <Text className="ml-2 font-regularFont tracking-tighter mb-4">
                    {description}
                </Text>

                {filteredItems.length === 0 ? (
                    <Text className="text-center text-gray-500 mt-4">
                        No items found in this category.
                    </Text>
                ) : (
                    <FlatList
                        data={filteredItems}
                        keyExtractor={(item, index) => `${item.title}-${index}`}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 80 }}
                    />
                )}
            </SafeAreaView>
        </View>
    );
}
