import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ImageSourcePropType,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AppScreenWrapper, CustomButton } from "@/components";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { images } from "@/constants";
import { addresses } from "@/data";
import { DeliveryAddress } from "@/types";
import Checkbox from "expo-checkbox";

const address = () => {
  const [isChecked, setChecked] = useState(false);

  const renderItem = ({ item }: { item: DeliveryAddress }) => (
    <View className="p-4 mb-4 shadow-md bg-slate-100 rounded-3xl mx-3">
      <View className="flex-row items-center ">
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

            <Text className="font-regularFont text-xl tracking-tighter bg-[#9EDC88] px-2 py-1  rounded-lg">
              {item.label}
            </Text>
          </View>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#254F1A" : undefined}
            
          />
        </View>
      </View>
      <View className="mt-3 mx-3">
        <Text className="font-regularFont text-xl tracking-tighter">
          {item.addressLine} {item.city} {item.pincode}
        </Text>
        <Text className="font-regularFont text-lg tracking-tighter mt-2">
          {item.receiver} {item.number}
        </Text>
      </View>
    </View>
  );

  // const cuisineBackgroundMap: Record<string, ImageSourcePropType> = {
  //     // chinese: images.ChineseBg,
  //     // japanese: images.JapanBg,
  //     // indian: images.IndiaBg,
  //     // italian: images.ItalianBg,
  //     // mexican: images.MexicoBg,
  // };

  // const [iconImage, setIconImage] = useState<ImageSourcePropType>();

  //     // Convert cuisine to lowercase and set background
  //     useEffect(() => {
  //         if () {
  //             const lowerCuisine = .toLowerCase();
  //             setIconImage(cuisineBackgroundMap[lowerCuisine]);
  //         }
  //     }, []);

  //   useEffect(()=>{

  //   },[])

  return (
    <AppScreenWrapper>
      <View className="">
        <View className=" flex-row justify-between px-4 items-center">
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
              <Entypo name="dots-three-vertical" size={29} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <CustomButton
          className="mt-12 mx-3 px-2 py-2 "
          title=" Add New Address"
          iconLeft={images.PlusIcon}
          iconLeftStyle="w-[25] h-[25] "
          textStyle="font-regularFont tracking-tighter text-[24px]"
        />
        <View className="mt-8">
          <FlatList
            data={addresses}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={renderItem}
          />
        </View>
      </View>
    </AppScreenWrapper>
  );
};

export default address;
