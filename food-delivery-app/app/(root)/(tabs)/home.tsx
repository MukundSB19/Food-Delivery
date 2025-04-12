import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "@/components/InputField";
import SlideShow from "@/components/SlideShow";
import { CardContent, listImage, onboarding } from "@/constants";
import CustomButton from "@/components/CustomButton";
import HorizontalList from "@/components/HorizontalList";
import Cards from "@/components/Cards";

const home = () => {
  return (
    <View className="pb-56 h-full">
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <LinearGradient
        colors={["#EAECCC", "#9EDC88"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0, y: 1 }}
        className="h-screen "
      >
        <SafeAreaView >
          <ScrollView >
            <View>
              <View className="flex flex-row justify-between px-5 pt-3 items-center">
                <TouchableOpacity>
                  <Ionicons
                    name="menu"
                    size={39}
                    color="#3A3A3A"
                    className="bg-[#ffffff55] rounded-2xl "
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <View className="flex flex-row gap-2 px-5 pt-3 items-center justify-center">
                    <FontAwesome6
                      name="location-dot"
                      size={24}
                      color="#fa003f"
                    />
                    <Text className="text-xl font-boldFont tracking-tighter text-fontPrimary-0">
                      South Delhi 142,DL
                    </Text>
                    <FontAwesome5 name="angle-down" size={24} color="black" />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    source={require("@/assets/images/user.jpg")}
                    className="w-[50] h-[50] rounded-full "
                  />
                </TouchableOpacity>
              </View>
              <Text className="text-center font-regularFont tracking-tighter2 text-4xl mt-6 text-fontPrimary-0">
                What's on your list today?
              </Text>
              {/* upper part */}
            </View>
            <View>
              <View className="mt-3">
                <InputField
                  placeholder="Search Fruits, Vegetables, Dairy, etc."
                  containerStyle="py-2 px-6 rounded-full mb-6 "
                  inputStyle="font-boldFont  tracking-tighter text-fontPrimary-0 "
                  editable={true}
                  icon={require("@/assets/images/filter.png")}
                  iconStyle="w-[35] h-[35]"
                />
              </View>

              <View className="mt-3">
                <SlideShow slideObject={onboarding} />
              </View>
              <View className=" flex "> 
                  <HorizontalList listObject={listImage} />
              </View>
            </View>
            <View>
              <View>
                <Cards listObject={CardContent} /> 
               </View>
              {/* lower part  */}</View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default home;
