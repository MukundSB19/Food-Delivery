import { View, Text, FlatList } from "react-native";
import { SlideShow } from "@/components/ui";
import { CardContent, onboarding } from "@/constants";
import { HomeUpper, Cards, HorizontalList } from "@/components";
import { category } from "@/data";
import { AppScreenWrapper } from "@/components/shared";
import { foods } from "@/data/foods";
import { FoodItemCard } from "@/components/ui";

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

                        <Cards listObject={CardContent} />

                        <Text className="text-xl font-bold mt-6 mb-2 px-4">
                            Popular Food
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
