import {
  View,
  Text,
  Button,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";


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
            <View className=" h-screen flex flex-col justify-between ">
              <View className="flex items-end ">
                <TouchableOpacity className="bg-white/10 border border-white/30 rounded-xl m-3 px-2 py-2 backdrop-blur-2xl">
                  <Text className="text-fontPrimary-0 text-2xl font-semibold">
                    SKIP{" "}
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="h-2/4 ">
                <Text className="text-7xl font-boldFont text-fontPrimary-0 ml-7 mt-11 tracking-tighter2">
                  Fresh. Organic.
                </Text>
                <Text className="text-5xl font-boldFont text-white ml-7 mt-4 tracking-tighter2 bg-[#ffffff33] p-2 w-4/5 rounded-2xl">
                  Delivered to your
                </Text>
                <Text className="text-5xl font-boldFont text-white ml-7 mt-4 tracking-tighter2 bg-[#ffffff33] p-2 w-[45%] rounded-2xl  ">
                  Doorstep
                </Text>
                <Text className="font-boldFont tracking-tighter text-fontPrimary-0 p-2 ml-7 mt-4 text-base">Green Basket brings you fresh organic and locally-sourced produce, making it simple to shop for high-quality fruits,vegetables, dairy and pantry staples.</Text>
                <View className="flex items-center mt-9 ">
              {/* <CustomButton title="Get Started" /> */}
              <CustomButton title="Get Started" />
              </View>
                {/* lower section*/}
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
};

export default Welcome;
