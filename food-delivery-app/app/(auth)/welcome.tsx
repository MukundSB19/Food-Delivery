import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { CustomButton } from "@/components/ui";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { backgrounds } from "@/constants";

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
          source={backgrounds.BgWelcome}
          className="w-full h-full"
        >
          <View className="flex flex-col justify-between h-screen mb-10">
            <View className="flex items-end mt-4">
              <TouchableOpacity
                className="px-2 py-2 mr-3 border bg-white/10 border-white/30 rounded-xl backdrop-blur-2xl mt-5"
                onPress={() => {
                  router.push("/home");
                }}
              >
                <Text className="text-2xl font-semibold text-fontPrimary-0">
                  SKIP
                </Text>
              </TouchableOpacity>
            </View>
            <View className="h-2/4 ">
              <Text className="text-6xl font-boldFont text-fontPrimary-0 ml-7 tracking-tighter2">
                Fresh. Organic.
              </Text>
              <Text className="text-4xl font-boldFont text-white ml-7 mt-4 tracking-tighter2 bg-[#ffffff33] p-2 w-[70%] rounded-2xl">
                Delivered to your
              </Text>
              <Text className="text-4xl font-boldFont text-white ml-7 mt-4 tracking-tighter2 bg-[#ffffff33] p-2 w-[40%] rounded-2xl  ">
                Doorstep
              </Text>
              <Text className="p-2 mt-4 text-base tracking-tighter font-boldFont text-fontPrimary-0 ml-7">
                Green Basket brings you fresh organic and locally-sourced
                produce, making it simple to shop for high-quality
                fruits,vegetables, dairy and pantry staples.
              </Text>
              <View className="flex items-center mt-6 ">
                <CustomButton
                  title="Get Started"
                  className="w-4/5 px-5 py-3"
                  onPress={() => router.push("/(auth)/sign-in")}
                  disabled={false}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

export default Welcome;
