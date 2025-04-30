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
import { images } from "@/constants";

export default function CategoryScreen() {
  const { slug, description } = useLocalSearchParams();

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
            <Text
              style={styles.shadow}
              className="text-3xl font-regularFont tracking-tighter2 mb-4 mt-6 ml-4 capitalize bg-white w-[40%] p-2 rounded-2xl shadow-xl/30 color-fontPrimary-0"
            >
              Popular {slug}
            </Text>
            <Text className=" ml-4 font-regularFont tracking-tighter mb-3  ">
              {description}
            </Text>
            <View className="pb-20">
              {filteredItems.length === 0 ? (
                <Text className="text-center text-gray-500">
                  No items found in this category.
                </Text>
              ) : (
                filteredItems.map((item) => (
                  <View className="mb-3 mt-3 ">
                    <View className="pt-3 pb-3 rounded-3xl shadow-slate-950 drop-shadow-xl shadow bg-slate-100 flex-row">
                      <View className="">
                        <Image
                          source={item.image}
                          className="w-25 h-20"
                          resizeMode="contain"
                        />
                      </View>

                      <View className="flex-col flex ">
                        <Text className="text-lg font-regularFont ">
                          {item.title}
                        </Text>
                        <View className="flex-row gap-3 items-center ">
                          <Text className="text-sm ">Vitamin {item.vitamin}</Text>

                          <CustomButton
                            title="Add to bag"
                            className="w-[38%] px-3 py-2 "
                            textStyle="text-white text-center w-full  font-boldFont tracking-tighter text-sm"
                            disabled={false}
                          ></CustomButton>
                        </View>
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

const styles = StyleSheet.create({
  shadow: {
    boxShadow: "0 4px rgba(0 0 0 / 0.2)",
  },
});
