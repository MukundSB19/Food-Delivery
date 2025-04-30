import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { horizontalImage } from "@/types/types";
import { router } from "expo-router";

const HorizontalList = ({ listObject }: { listObject: horizontalImage[] }) => {
  return (
    <FlatList
      className="ml-2 mt-6"
      horizontal
      data={listObject}
      keyExtractor={(item) => item.slug}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/discover-feed/[slug]",
              params: { slug: item.slug, description:item.description },
            })
          }
          className="mr-5 items-center"
        >
          <Image
            className="w-[100px] h-[100px] bg-[#ffffff55] rounded-full"
            resizeMode="cover"
            source={typeof item.imageUrl === "string" ? { uri: item.imageUrl } : item.imageUrl}
          />
          <Text className="text-center font-boldFont tracking-tight color-fontPrimary-0">
            {item.title}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default HorizontalList;