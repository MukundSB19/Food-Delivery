import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { horizontalImage } from "@/types/types";
import { router } from "expo-router";

const HorizontalList = ({ listObject }: { listObject: horizontalImage[] }) => {
  return (
    <FlatList
      className="mt-6 ml-2"
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
          className="items-center mr-5"
        >
          <Image
            className="w-[100px] h-[100px] bg-[#ffffff55] rounded-full"
            resizeMode="cover"
            source={typeof item.imageUrl === "string" ? { uri: item.imageUrl } : item.imageUrl}
          />
          <Text className="tracking-tight text-center font-boldFont text-fontPrimary-0">
            {item.title}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default HorizontalList;