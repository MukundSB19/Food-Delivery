import React from "react";
import { TouchableOpacity, Text } from "react-native";

const CustomButton = ({
  title,
  onPress,
  disabled = false,
  className = "",
  textClass = "",
}) => {
  return (
    <TouchableOpacity
      className={`bg-buttonPrimary-0 py-3 px-5 w-4/5 rounded-full items-center shadow-md shadow-black ${
        disabled ? "bg-gray-400" : ""
      } ${className}`}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text className={`text-white font-regularFont tracking-tighter text-3xl ${textClass}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
