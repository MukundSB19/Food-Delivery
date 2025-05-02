import { View, Text, Image, TouchableOpacity } from "react-native";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import InputField from "@/components/ui/InputField";

import LocationModal from "@/components/LocationModal";
import { useState } from "react";
import DrawerComponent from "./DrawerComponent";
import Entypo from "@expo/vector-icons/Entypo";

const HomeUpper = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <View className="flex flex-row justify-between px-5 pt-3 items-center">
                <DrawerComponent />
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <View className="flex flex-row gap-2 px-5 pt-3 items-center justify-center">
                        <FontAwesome6
                            name="location-dot"
                            size={24}
                            color="#fa003f"
                        />
                        <Text className="text-xl font-boldFont tracking-tighter text-fontPrimary-0">
                            South Delhi 142,DL
                        </Text>
                        <FontAwesome5
                            name="angle-down"
                            size={24}
                            color="black"
                        />
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
            <View className="">
                <LocationModal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(false);
                    }}
                >
                    <TouchableOpacity
                        className=""
                        onPress={() => setModalVisible(false)}
                    >
                        <Entypo
                            name="circle-with-cross"
                            size={29}
                            color="black"
                        />
                    </TouchableOpacity>
                </LocationModal>
            </View>
        </>
    );
};

export default HomeUpper;
