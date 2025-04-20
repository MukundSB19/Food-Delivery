import { View, StatusBar, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import SlideShow from "@/components/ui/SlideShow";
import { CardContent, listImage, onboarding } from "@/constants";
import HorizontalList from "@/components/HorizontalList";
import Cards from "@/components/Cards";
import HomeUpper from "@/components/HomeUpper";

const home = () => {
    return (
        <View className="h-full pb-56">
 
            <LinearGradient
                colors={["#EAECCC", "#9EDC88"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 0, y: 1 }}
                style={StyleSheet.absoluteFill}
            >
                <SafeAreaView>
                    <ScrollView>
                        <HomeUpper />
                        <View>
                            <View className="mt-5 ">
                                <SlideShow slideObject={onboarding} />
                            </View>
                            <View className="flex ">
                                <HorizontalList listObject={listImage} />
                            </View>
                        </View>
                        <View>
                            <View>
                                <Cards listObject={CardContent} />
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </LinearGradient>
        </View>
    );
};

export default home;
