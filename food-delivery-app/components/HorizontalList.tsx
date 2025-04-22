import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

import { horizontalImage } from "@/types/types";
import { navigate } from "expo-router/build/global-state/routing";
import { router } from "expo-router";

const HorizontalList = ({ listObject }: { listObject: horizontalImage[] }) => {
  return (
    <FlatList
      className="ml-2 mt-6"
      horizontal
      data={listObject}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity
        
        >
          <View className="mr-5 ">
            <Image
              className=" w-[100] h-[100] bg-[#ffffff55] rounded-full"
              resizeMode="cover"
              source={item.image}
            />
            <Text className="text-center font-boldFont tracking-tight color-fontPrimary-0">
              {item.text}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default HorizontalList;
