import { InputFieldProps } from "@/types";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { View, Text } from "react-native";

const InputField = ({
  label,
  labelStyle,
  icon,
  containerStyle,
  iconStyle,
  inputStyle,
  inputModeType,
  className,
  editable = true,
  ...props
}: InputFieldProps) => {
  const [isEditable, setEditable] = useState(editable);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text className={`${labelStyle}`}>{label}</Text>
          <View
            className={`bg-[#ffffff55] flex flex-row justify-between  m-auto items-center ${containerStyle}`}
          >
            <TextInput
              editable={isEditable}
              className={` ${inputStyle}  `}
              {...props}
            />
            <TouchableOpacity
              onPress={() => {
                setEditable(true);
              }}
            >
              {icon && <Image source={icon} className={`${iconStyle}`} />}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
