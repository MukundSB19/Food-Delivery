import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  ModalProps,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import { AppScreenWrapper, CustomButton } from "@/components";
import { icons } from "@/constants";
import { useDeliveryAddress, DEFAULT_TYPES } from "@/context/AddressContext";

const AddressModal = ({ children, ...props }: ModalProps) => {
  const { addresses, addAddress, selectedAddressId, selectAddress } =
    useDeliveryAddress();

  const [form, setForm] = useState({
    label: "",
    receiver: "",
    number: "",
    addressLine: "",
    pincode: "",
    city: "",
    coordinates: { lat: 0, lng: 0 },
    type: "home" as (typeof DEFAULT_TYPES)[number],
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddAddress = () => {
    if (
      !form.receiver ||
      !form.number ||
      !form.addressLine ||
      !form.pincode ||
      !form.city
    ) {
      Alert.alert("Missing Info", "Please fill all fields.");
      return;
    }

    const exists = addresses.some((a) => a.label === form.label);
    if (exists) {
      Alert.alert(
        "Duplicate Label",
        "You already have an address with this label."
      );
      return;
    }

    addAddress({
      label: form.label || form.type, // fallback to type
      receiver: form.receiver,
      number: form.number,
      addressLine: form.addressLine,
      pincode: form.pincode,
      city: form.city,
      coordinates: form.coordinates, // you can update with real location later
      type: form.type,
    });

    setForm({
      label: "",
      receiver: "",
      number: "",
      addressLine: "",
      pincode: "",
      city: "",
      coordinates: { lat: 0, lng: 0 },
      type: "home",
    });
  };

  const handleTypeSelect = (type: (typeof DEFAULT_TYPES)[number]) => {
    setForm((prev) => ({ ...prev, type, label: type }));
  };

  return (
    <Modal {...props} transparent>
      <View className="flex-1 justify-center items-center bg-[rgba(0,0,0,0.5)]">
        <View className="w-[95%] p-[20] bg-white rounded-3xl">
          <View className="flex flex-row items-center justify-between px-3">
            <Text className="text-3xl  text-black font-regularFont tracking-tighter2">
              Address Details
            </Text>
            {children}
          </View>

          <Text className="mt-10 mx-3 text-lg bg-[#9EDC88] px-2 py-1 rounded-xl self-start font-regularFont tracking-tighter">
            Select address type
          </Text>

          <View className="flex-row mt-4 justify-around">
            {DEFAULT_TYPES.map((type, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => handleTypeSelect(type)}
                className={`px-4 py-2 rounded-full border ${
                  form.type === type ? "bg-[#c3f8b2]" : "bg-white"
                }`}
              >
                <Text className="text-base capitalize">{type}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View className="mt-6 px-3 gap-3">
            <TextInput
              placeholder="Receiver's Name"
              value={form.receiver}
              onChangeText={(text) => handleChange("receiver", text)}
              className="border border-gray-300 rounded-xl px-4 py-2 text-lg"
            />
            <TextInput
              placeholder="Phone Number"
              keyboardType="phone-pad"
              value={form.number}
              onChangeText={(text) => handleChange("number", text)}
              className="border border-gray-300 rounded-xl px-4 py-2 text-lg"
            />
            <TextInput
              placeholder="Complete Address"
              value={form.addressLine}
              onChangeText={(text) => handleChange("addressLine", text)}
              className="border border-gray-300 rounded-xl px-4 py-2 text-lg"
            />
            <TextInput
              placeholder="City"
              value={form.city}
              onChangeText={(text) => handleChange("city", text)}
              className="border border-gray-300 rounded-xl px-4 py-2 text-lg"
            />
            <TextInput
              placeholder="Postal Code"
              keyboardType="numeric"
              value={form.pincode}
              onChangeText={(text) => handleChange("pincode", text)}
              className="border border-gray-300 rounded-xl px-4 py-2 text-lg"
            />
          </View>

          <View className="flex-row justify-between mx-3 mt-7">
            <CustomButton
              title="Save"
              className="px-4 py-3 "
              textStyle="text-white text-lg"
              onPress={handleAddAddress}
            />
            <CustomButton
              title="Detect Location"
              iconRight={icons.IconLocation}
              iconRightStyle="w-[28] h-[28] ml-2"
              className="px-4 py-3 "
              textStyle="text-white text-lg"
              onPress={() => {
                // Stub for future location detection
                Alert.alert(
                  "Coming Soon",
                  "Detect location feature will be added."
                );
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddressModal;
