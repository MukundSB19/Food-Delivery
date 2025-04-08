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
                <Text className="text-5xl font-boldFont text-white ml-7 mt-4 tracking-tighter2 bg-[#ffffff33]  ">
                  Delivered to your
                </Text>
                <Text className="text-5xl font-boldFont text-white ml-7 mt-4 tracking-tighter2 bg-[#ffffff33]">
                  Doorstep
                </Text>
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
