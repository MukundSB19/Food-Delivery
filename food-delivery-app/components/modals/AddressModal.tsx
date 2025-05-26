import { View, Text, Modal, ModalProps } from 'react-native'
import {
 
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AppScreenWrapper, CustomButton } from "@/components";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { images } from "@/constants";
import { useAddress } from "@/context/AddressContext";
import Checkbox from "expo-checkbox";


const AddressModal = ({children, ...props}:ModalProps) => {

  const defaultLabels = ["home", "office", "friend's house"];

    const {
      addresses,
      addAddress,
      deleteAddress,
      selectAddress,
      selectedAddressId,
    } = useAddress();
  
    const [customLabel, setCustomLabel] = useState("");
  
    const handleAddAddressWithLabel = (label: any) => {
      const exists = addresses.some((a) => a.label === label);
      if (exists) {
        Alert.alert("Duplicate Label", "You already have an address with this label.");
        return;
      }
      addAddress({
        label,
        fullAddress: `${label} street, City`,
        latitude: 0,
        longitude: 0,
      });
      setCustomLabel("");
    };
  
    useEffect(() => {
      // Ensure all 3 default labels exist once
      defaultLabels.forEach((label:any) => {
        const exists = addresses.some((a) => a.label === label);
        if (!exists) {
          addAddress({
            label,
            fullAddress: `${label} street, City`,
            latitude: 0,
            longitude: 0,
          });
        }
      });
    }, []);



  return (
    <Modal {...props}>
      <View className="flex-1 justify-center items-center bg-[rgba(0,0,0,0.5)]">
        <View className="w-[380] p-[20] bg-white rounded-3xl items-center ">
          <View className="flex flex-row items-center w-full justify-between px-3">
            <Text className="color-fontPrimary-0 font-regularFont tracking-tighter2 text-3xl">
              Addresses
            </Text>
            {children}
          </View>
          <View>
           
              <View>
                <View className="flex-row justify-between px-4 items-center">
                  <TouchableOpacity onPress={() => router.back()}>
                    <View className="bg-[#00000044] p-2 rounded-2xl">
                      <AntDesign name="left" size={29} color="white" />
                    </View>
                  </TouchableOpacity>
                  <Text className="font-regularFont text-[35px] tracking-tighter2">
                    Address
                  </Text>
                  <TouchableOpacity onPress={() => router.push("/account")}>
                    <View className="bg-[#00000044] p-2 rounded-2xl">
                      <Entypo
                        name="dots-three-vertical"
                        size={29}
                        color="white"
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <CustomButton
                  className="mt-12 mx-3 px-2 py-2"
                  title="Add New Home Address"
                  iconLeft={images.PlusIcon}
                  iconLeftStyle="w-[25] h-[25]"
                  textStyle="font-regularFont tracking-tighter text-[24px]"
                  onPress={() => handleAddAddressWithLabel("home")}
                />
                <CustomButton
                  className="mt-4 mx-3 px-2 py-2"
                  title="Add New Office Address"
                  iconLeft={images.PlusIcon}
                  iconLeftStyle="w-[25] h-[25]"
                  textStyle="font-regularFont tracking-tighter text-[24px]"
                  onPress={() => handleAddAddressWithLabel("office")}
                />
                <CustomButton
                  className="mt-4 mx-3 px-2 py-2"
                  title="Add Friend's House Address"
                  iconLeft={images.PlusIcon}
                  iconLeftStyle="w-[25] h-[25]"
                  textStyle="font-regularFont tracking-tighter text-[24px]"
                  onPress={() => handleAddAddressWithLabel("friend's house")}
                />

                <View className="mt-6 px-3">
                  <TextInput
                    className="border border-gray-300 rounded-xl px-4 py-2 text-lg font-regularFont"
                    placeholder="Enter custom label"
                    value={customLabel}
                    onChangeText={setCustomLabel}
                  />
                  <CustomButton
                    className="mt-3"
                    title="Add Custom Address"
                    iconLeft={images.PlusIcon}
                    iconLeftStyle="w-[25] h-[25]"
                    textStyle="font-regularFont tracking-tighter text-[20px]"
                    onPress={() => {
                      if (customLabel.trim()) {
                        handleAddAddressWithLabel(
                          customLabel.trim().toLowerCase()
                        );
                      }
                    }}
                  />
                </View>
              </View>
           
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default AddressModal