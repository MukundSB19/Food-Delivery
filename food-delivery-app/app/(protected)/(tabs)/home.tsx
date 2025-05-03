import { View, ScrollView } from "react-native";
import SlideShow from "@/components/ui/SlideShow";
import { CardContent, onboarding } from "@/constants";
import HorizontalList from "@/components/HorizontalList";
import Cards from "@/components/Cards";
import HomeUpper from "@/components/HomeUpper";
import { category } from "@/data/category";
import { AppScreenWrapper } from "@/components/shared";

const home = () => {
    return (
        <AppScreenWrapper gradientColors={["#EAECCC", "#9EDC88"]}>

                    <ScrollView>
                        <HomeUpper />

                        <View>
                            {/* Slide show section */}

                            <View className="mt-5 ">
                                <SlideShow slideObject={onboarding} />
                            </View>
                            {/* Category list */}

                            <View className="flex ">
                                <HorizontalList listObject={category} />
                            </View>
                        </View>
                        {/* Cards section */}

                        <View>
                            <View>
                                <Cards listObject={CardContent} />
                            </View>
                        </View>
                    </ScrollView>
            </AppScreenWrapper>
    );
};

export default home;
