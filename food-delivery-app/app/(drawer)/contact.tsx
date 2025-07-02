import React from "react";
import { View, Text, Linking, Pressable, ScrollView } from "react-native";
import { AppScreenWrapper, DrawerComponent } from "@/components";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { images } from "@/constants";

const Contact = () => {
  return (
    <AppScreenWrapper>
      <View className="flex flex-row justify-between items-center mx-3 mb-6 mt-2">
        <DrawerComponent />

        <Text className="text-center mr-7 font-regularFont tracking-tighter2 text-2xl">
          Contact Us
        </Text>
        <View></View>
      </View>
      <ScrollView contentContainerStyle={{ padding: 16 }} className="space-y-6">
        <Text className="text-gray-600 font-regularFont tracking-tighter text-lg">
          You can get in touch with us through the platforms below. Our team
          will reach out to you as soon as possible.
        </Text>

        {/* Customer Support Card */}
        <View className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-3 mt-6">
          <Text className="font-regularFont tracking-tighter text-xl text-gray-800">
            Customer Support
          </Text>

          <View className="flex-row items-center space-x-2 mt-3 gap-2">
            <MaterialIcons name="phone" size={20} color="#6B7280" />
            <Text
              className="text-blue-600"
              onPress={() => Linking.openURL("tel:+15651234567")}
            >
              +91 354123-4567
            </Text>
          </View>

          <View className="flex-row items-center space-x-2 mt-3 gap-2">
            <MaterialIcons name="email" size={20} color="#6B7280" />
            <Text
              className="text-blue-600"
              onPress={() => Linking.openURL("mailto:help@yourapp.com")}
            >
              help@greenbasket.com
            </Text>
          </View>
        </View>

        {/* Social Media Card */}
        <View className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 space-y-4 mt-5">
          <Text className="font-regularFont text-xl tracking-tighter text-gray-800">
            Social Media
          </Text>

          {[
            {
              name: "Instagram",
              handle: "@yourapp",
              icon: images.intagramLogo,
              link: "https://instagram.com/yourapp",
            },
            {
              name: "Twitter",
              handle: "@yourapp",
              icon: images.xLogo,
              link: "https://twitter.com/yourapp",
            },
            {
              name: "Facebook",
              handle: "@yourapp",
              icon: images.facebookLogo,
              link: "https://facebook.com/yourapp",
            },
          ].map((platform, index) => (
            <Pressable
              key={index}
              className="flex-row items-center space-x-3 mt-3"
              onPress={() => Linking.openURL(platform.link)}
            >
              <Image
                source={platform.icon}
                className="w-10 h-10"
                resizeMode="contain"
              />
              <View className="items-center ml-3 ">
                <Text className="text-gray-800 font-medium">
                  {platform.name}
                </Text>
                <Text className="text-gray-500">{platform.handle}</Text>
              </View>
            </Pressable>
          ))}
        </View>

        {/* Footer */}
        <View className="items-center mt-10">
          <Text className="text-gray-400 font-medium">Green Basket</Text>
          <Text className="text-xs text-gray-300 mt-1">
            We value your feedback
          </Text>
        </View>
      </ScrollView>
    </AppScreenWrapper>
  );
};

export default Contact;
