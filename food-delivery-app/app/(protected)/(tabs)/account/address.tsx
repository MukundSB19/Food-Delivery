import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { AddressModal, AppScreenWrapper, CustomButton } from "@/components";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { images } from "@/constants";
import { useDeliveryAddress } from "@/context/AddressContext";
import { DeliveryAddress } from "@/types";

const AddressScreen = () => {
  const [addressModalVisible, setAddressModalVisible] = useState(false);
  const { addresses, deleteAddress } = useDeliveryAddress();

  const renderItem = ({ item }: { item: DeliveryAddress }) => (
    <View className="p-4 mb-4 shadow-md bg-slate-100 rounded-3xl mx-3">
      <View className="flex-row items-center">
        <View className="flex flex-row justify-between w-full items-center">
          <View className="flex-row items-center mx-3 gap-3">
            {item.type === "home" && (
              <Image source={images.HomeIcon} className="w-[33] h-[33]" />
            )}
            {item.type === "office" && (
              <Image source={images.OfficeIcon} className="w-[33] h-[33]" />
            )}
            {item.type === "friend's house" && (
              <Image source={images.PersonIcon} className="w-[33] h-[33]" />
            )}
            <Text className="font-regularFont text-xl tracking-tighter bg-[#9EDC88] px-2 py-1 rounded-lg">
              {item.label}
            </Text>
          </View>
          <TouchableOpacity onPress={() => deleteAddress(item.id)}>
            <MaterialIcons name="delete-outline" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-3 mx-3">
        <Text className="font-regularFont text-xl tracking-tighter">
          {item.addressLine} {item.city} {item.pincode}
        </Text>
        <View className="flex-row items-center justify-between">
          <Text className="font-regularFont text-lg tracking-tighter mt-2">
            {item.receiver} {item.number}
          </Text>
          {/* <CustomButton
            title="Edit"
            textStyle="text-lg"
            className="px-2 py-2"
            // You can implement edit functionality later
          /> */}
        </View>
      </View>
    </View>
  );

  return (
    <AppScreenWrapper>
      <View>
        {/* Header */}
        <View className="flex-row justify-between px-4 items-center">
          <TouchableOpacity onPress={() => router.back()}>
            <View className="bg-[#00000044] p-2 rounded-2xl">
              <AntDesign name="left" size={29} color="white" />
            </View>
          </TouchableOpacity>
          <Text className="font-regularFont text-[35px] tracking-tighter2">
            Address
          </Text>
          <TouchableOpacity>
            
          </TouchableOpacity>
        </View>

        {/* Add Address Button */}
        <CustomButton
          className="mt-12 mx-3 px-2 py-2"
          title="Add New Address"
          iconLeft={images.PlusIcon}
          iconLeftStyle="w-[25] h-[25]"
          textStyle="font-regularFont tracking-tighter text-[24px]"
          onPress={() => setAddressModalVisible(true)}
        />

        {/* Address List */}
        <View className="mt-8">
          <FlatList
            data={addresses}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            ListEmptyComponent={
              <Text className="text-center text-gray-500 mt-8">
                No saved addresses
              </Text>
            }
          />
        </View>
      </View>

      {/* Modal */}
      <AddressModal
        animationType="fade"
        visible={addressModalVisible}
        transparent={true}
        onRequestClose={() => setAddressModalVisible(false)}
        statusBarTranslucent
      >
        <TouchableOpacity onPress={() => setAddressModalVisible(false)}>
          <Entypo name="circle-with-cross" size={29} color="black" />
        </TouchableOpacity>
      </AddressModal>
    </AppScreenWrapper>
  );
};

export default AddressScreen;
