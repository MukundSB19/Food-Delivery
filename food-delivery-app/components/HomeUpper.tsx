import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { InputField } from "@/components/ui";
import LocationModal from "@/components/LocationModal";
import { useRef, useState } from "react";
import DrawerComponent from "./DrawerComponent";
import Entypo from "@expo/vector-icons/Entypo";
import { InputFieldProps } from "@/types";

import {
  Button,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { View, Text } from "react-native";
import { router } from "expo-router";

const HomeUpper = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View className="flex flex-row items-center justify-between px-5 pt-3">
        <DrawerComponent />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View className="flex flex-row items-center justify-center gap-2 px-5 pt-3">
            <FontAwesome6 name="location-dot" size={24} color="#fa003f" />
            <Text className="text-xl tracking-tighter font-boldFont text-fontPrimary-0">
              South Delhi 182,DL
            </Text>
            <FontAwesome5 name="angle-down" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push("/(protected)/(tabs)/account")}
        >
          <Image
            source={require("@/assets/images/user.jpg")}
            className="w-[50] h-[50] rounded-full "
          />
        </TouchableOpacity>
      </View>
      <Text className="mt-6 text-4xl text-center font-regularFont tracking-tighter2 text-fontPrimary-0">
        What's on your list today?
      </Text>
      <View className="mt-5">
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <View
                className={`bg-[#ffffff55] flex flex-row justify-between  m-auto w-3/4 py-3 px-6 rounded-full mb-6  border border-solid`}
              >
                <TextInput
                  className="tracking-tighter font-boldFont text-fontPrimary-0 "
                  placeholder="Search Fruits, Vegetables, Dairy, etc."
                />
                <TouchableOpacity>
                  <Image
                    source={require("@/assets/images/filter.png")}
                    className="w-[32] h-[32]"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
      <View className="">
        <LocationModal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
          statusBarTranslucent
        >
          <TouchableOpacity className="" onPress={() => setModalVisible(false)}>
            <Entypo name="circle-with-cross" size={29} color="black" />
          </TouchableOpacity>
        </LocationModal>
      </View>
    </>
  );
};

export default HomeUpper;
