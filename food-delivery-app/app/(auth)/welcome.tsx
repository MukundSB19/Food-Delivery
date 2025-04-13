import {
    View,
    Text,
    StatusBar,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const Welcome = () => {
    return (
        <View className="h-full">
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <LinearGradient
                colors={["#EAECCC", "#9EDC88"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 0, y: 1 }}
            >
                <ImageBackground
                    source={require("@/assets/images/Background-welcome.png")}
                    className="w-full h-full"
                >
                    <SafeAreaView className="h-full ">
                        <View className="flex flex-col justify-between h-screen ">
                            <View className="flex items-end ">
                                <TouchableOpacity
                                    className="px-2 py-2 m-3 border bg-white/10 border-white/30 rounded-xl backdrop-blur-2xl"
                                    onPress={() => {
                                        router.push("/home");
                                    }}
                                >
                                    <Text className="text-2xl font-semibold text-fontPrimary-0">
                                        SKIP{" "}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View className="h-2/4 ">
                                <Text className="text-7xl font-boldFont text-fontPrimary-0 ml-7  tracking-tighter2">
                                    Fresh. Organic.
                                </Text>
                                <Text className="text-5xl font-boldFont text-white ml-7 mt-4 tracking-tighter2 bg-[#ffffff33] p-2 w-[70%] rounded-2xl">
                                    Delivered to your
                                </Text>
                                <Text className="text-5xl font-boldFont text-white ml-7 mt-4 tracking-tighter2 bg-[#ffffff33] p-2 w-[40%] rounded-2xl  ">
                                    Doorstep
                                </Text>
                                <Text className="p-2 mt-4 text-base tracking-tighter font-boldFont text-fontPrimary-0 ml-7">
                                    Green Basket brings you fresh organic and
                                    locally-sourced produce, making it simple to
                                    shop for high-quality fruits,vegetables,
                                    dairy and pantry staples.
                                </Text>
                                <View className="flex items-center mt-6 ">
                                    <CustomButton
                                        title="Get Started"
                                        className="py-3 px-5 w-4/5"
                                        onPress={
                                            () => router.push("/(auth)/sign-in")
                                        }
                                        disabled={false}
                                    />
                                </View>
                            </View>
                        </View>
                    </SafeAreaView>
                </ImageBackground>
            </LinearGradient>
        </View>
    );
};

export default Welcome;
