import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ImageSourcePropType,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AddressModal, AppScreenWrapper, CustomButton } from "@/components";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { images } from "@/constants";
import { addresses } from "@/data";
import { DeliveryAddress } from "@/types";
import Checkbox from "expo-checkbox";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import FontAwesome from "@expo/vector-icons/FontAwesome";

const address = () => {
  const [isChecked, setChecked] = useState(false);
  const [addressModalVisible, setAddressModalVisible] = useState(false);

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
          <MaterialIcons name="delete-outline" size={24} color="red" />
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
          {/* <FontAwesome name="edit" size={24} color="black" className="mt-2" /> */}
          <CustomButton
            title="Edit"
            textStyle="text-lg"
            className="px-2 py-2 "
          ></CustomButton>
        </View>
      </View>
    </View>
  );

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
          onPress={() => setAddressModalVisible(true)}
        />
        <View className="mt-8">
          <FlatList
            data={addresses}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={renderItem}
          />
        </View>
      </View>
      <AddressModal
        animationType="fade"
        visible={addressModalVisible}
        transparent={true}
        onRequestClose={() => {
          setAddressModalVisible(false);
        }}
        statusBarTranslucent
      >
        <TouchableOpacity
          className=""
          onPress={() => setAddressModalVisible(false)}
        >
          <Entypo name="circle-with-cross" size={29} color="black" />
        </TouchableOpacity>
      </AddressModal>
    </AppScreenWrapper>
  );
};

export default address;


























// import React, { useState } from "react";
// import { View, TextInput, FlatList, TouchableOpacity } from "react-native";
// import { Text } from "react-native";
// import { useAddress } from "@/context/AddressContext";
// import { AppScreenWrapper } from "@/components";
// import { CustomButton } from "@/components";


// export default function AddressScreen() {
//   const {
//     addresses,
//     addAddress,
//     updateAddress,
//     deleteAddress,
//     selectAddress,
//     selectedAddressId,
//   } = useAddress();

//   const [label, setLabel] = useState("");
//   const [fullAddress, setFullAddress] = useState("");

//   const handleAdd = () => {
//     if (label && fullAddress) {
//       addAddress({
//         label,
//         fullAddress,
//         latitude: 0, // Replace with actual lat/lng from map
//         longitude: 0,
//       });
//       setLabel("");
//       setFullAddress("");
//     }
//   };

//   return (
//     <AppScreenWrapper>
//       <Text className="text-xl font-bold mb-4">Manage Addresses</Text>

//       <View className="mb-4 space-y-2">
//         <TextInput
//           placeholder="Label (e.g. Home)"
//           value={label}
//           onChangeText={setLabel}
//           className="border p-2 rounded"
//         />
//         <TextInput
//           placeholder="Full Address"
//           value={fullAddress}
//           onChangeText={setFullAddress}
//           className="border p-2 rounded"
//         />
//         <CustomButton title="Add Address" onPress={handleAdd} />
//       </View>

//       <FlatList
//         data={addresses}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View
//             className={`p-4 mb-2 rounded border ${
//               item.id === selectedAddressId
//                 ? "border-green-500"
//                 : "border-gray-300"
//             }`}
//           >
//             <Text className="font-semibold">{item.label}</Text>
//             <Text className="text-sm text-gray-600">{item.fullAddress}</Text>
//             <View className="flex-row space-x-2 mt-2">
//               <TouchableOpacity onPress={() => selectAddress(item.id)}>
//                 <Text className="text-blue-500">Select</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => deleteAddress(item.id)}>
//                 <Text className="text-red-500">Delete</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />
//     </AppScreenWrapper>
//   );
// }













// import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
// import React, { useEffect, useState } from "react";
// import { AppScreenWrapper, CustomButton } from "@/components";
// import { router } from "expo-router";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import Entypo from "@expo/vector-icons/Entypo";
// import { images } from "@/constants";
// import { useAddress } from "@/context/AddressContext";
// import Checkbox from "expo-checkbox";

// const defaultLabels = ["home", "office", "friend's house"];

// const AddressScreen = () => {
//   const {
//     addresses,
//     addAddress,
//     deleteAddress,
//     selectAddress,
//     selectedAddressId,
//   } = useAddress();

//   const handleAddDefaultAddress = (label: string) => {
//     // Prevent duplicate default labels
//     const exists = addresses.some((a) => a.label === label);
//     if (!exists) {
//       addAddress({
//         label,
//         fullAddress: `${label} street, City`,
//         latitude: 0,
//         longitude: 0,
//       });
//     }
//   };

//   useEffect(() => {
//     // Ensure all 3 default labels exist once
//     defaultLabels.forEach((label) => {
//       handleAddDefaultAddress(label);
//     });
//   }, []);

//   const renderItem = ({ item }: { item: (typeof addresses)[0] }) => {
//     const isSelected = item.id === selectedAddressId;
//     return (
//       <View className="p-4 mb-4 shadow-md bg-slate-100 rounded-3xl mx-3">
//         <View className="flex-row items-center justify-between">
//           <View className="flex-row items-center gap-3">
//             {item.label === "home" && (
//               <Image source={images.HomeIcon} className="w-[33] h-[33]" />
//             )}
//             {item.label === "office" && (
//               <Image source={images.OfficeIcon} className="w-[33] h-[33]" />
//             )}
//             {item.label === "friend's house" && (
//               <Image source={images.PersonIcon} className="w-[33] h-[33]" />
//             )}
//             <Text className="font-regularFont text-xl tracking-tighter bg-[#9EDC88] px-2 py-1 rounded-lg">
//               {item.label}
//             </Text>
//           </View>
//           <Checkbox
//             value={isSelected}
//             onValueChange={() => selectAddress(item.id)}
//             color={isSelected ? "#254F1A" : undefined}
//           />
//         </View>
//         <View className="mt-3">
//           <Text className="font-regularFont text-xl tracking-tighter">
//             {item.fullAddress}
//           </Text>
//         </View>
//         <View className="mt-2 flex-row justify-end">
//           <TouchableOpacity onPress={() => deleteAddress(item.id)}>
//             <Text className="text-red-500 text-sm">Delete</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <AppScreenWrapper>
//       <View>
//         <View className="flex-row justify-between px-4 items-center">
//           <TouchableOpacity onPress={() => router.back()}>
//             <View className="bg-[#00000044] p-2 rounded-2xl">
//               <AntDesign name="left" size={29} color="white" />
//             </View>
//           </TouchableOpacity>
//           <Text className="font-regularFont text-[35px] tracking-tighter2">
//             Address
//           </Text>
//           <TouchableOpacity onPress={() => router.push("/account")}>
//             <View className="bg-[#00000044] p-2 rounded-2xl">
//               <Entypo name="dots-three-vertical" size={29} color="white" />
//             </View>
//           </TouchableOpacity>
//         </View>

//         <CustomButton
//           className="mt-12 mx-3 px-2 py-2"
//           title="Add New Home Address"
//           iconLeft={images.PlusIcon}
//           iconLeftStyle="w-[25] h-[25]"
//           textStyle="font-regularFont tracking-tighter text-[24px]"
//           onPress={() => handleAddDefaultAddress("home")}
//         />
//         <CustomButton
//           className="mt-4 mx-3 px-2 py-2"
//           title="Add New Office Address"
//           iconLeft={images.PlusIcon}
//           iconLeftStyle="w-[25] h-[25]"
//           textStyle="font-regularFont tracking-tighter text-[24px]"
//           onPress={() => handleAddDefaultAddress("office")}
//         />
//         <CustomButton
//           className="mt-4 mx-3 px-2 py-2"
//           title="Add Friend's House Address"
//           iconLeft={images.PlusIcon}
//           iconLeftStyle="w-[25] h-[25]"
//           textStyle="font-regularFont tracking-tighter text-[24px]"
//           onPress={() => handleAddDefaultAddress("friend's house")}
//         />

//         <View className="mt-8">
//           <FlatList
//             data={addresses}
//             keyExtractor={(item) => item.id}
//             renderItem={renderItem}
//           />
//         </View>
//       </View>
//     </AppScreenWrapper>
//   );
// };

// export default AddressScreen;
