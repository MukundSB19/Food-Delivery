import {
    View,
    Text,
   
    Image,
    TouchableOpacity,
  } from "react-native";
  
  import Ionicons from "@expo/vector-icons/Ionicons";
  import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
  import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

  import InputField from "@/components/InputField";

  import LocationModal from "@/components/LocationModal";
  import { useState } from "react";
 


const HomeUpper = () => {
    const [modalVisible, setModalVisible] = useState(false);
  return  (  
    <>
    <View className="flex flex-row justify-between px-5 pt-3 items-center">
    <TouchableOpacity>
      <Ionicons
        name="menu"
        size={39}
        color="#3A3A3A"
        className="bg-[#ffffff55] rounded-2xl "
      />
    </TouchableOpacity>
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
           
            <View className="flex-1 justify-center items-center bg-[rgba(0,0,0,0.5)]"> 
              <View className="w-[380] p-[20] bg-white rounded-3xl items-center">
                <Text className="color-fontPrimary-0 font-regularFont tracking-tighter2 text-3xl">Select Your Location</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  
                  <Text className="bg-buttonPrimary-0 p-3 color-white rounded-xl text-lg">Close Modal</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LocationModal>
        </View>
        </>
  )
}

export default HomeUpper;