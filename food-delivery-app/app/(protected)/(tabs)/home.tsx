import { View, Text, FlatList } from "react-native";
import { onboarding } from "@/constants";
import {
  HomeUpper,
  Cards,
  HorizontalList,
  AppScreenWrapper,
} from "@/components";
import { category } from "@/data";
import { foods } from "@/data/foods";
import { FoodItemCard, SlideShow } from "@/components/ui";
import { cardContent } from "@/data/cardContent";

const home = () => {
  return (
    <AppScreenWrapper gradientColors={["#EAECCC", "#9EDC88"]}>
      <FlatList
        data={foods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FoodItemCard item={item} />}
        ListHeaderComponent={
          <View className="mb-4">
            <HomeUpper />

            <SlideShow slideObject={onboarding} />

            <HorizontalList listObject={category} />

            <Cards listObject={cardContent} />

            <Text className="text-2xl font-regularFont tracking-tighter mt-9 ml-5 text-fontPrimary-0 bg-[#00000011] self-start px-3 py-2 rounded-xl">
              International Cuisines
            </Text>
          </View>
        }
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      />
    </AppScreenWrapper>
  );
};

export default home;
