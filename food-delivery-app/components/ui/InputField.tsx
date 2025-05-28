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
  iconLeft,
  iconRight,
  containerStyle,
  iconLeftStyle,
  iconRightStyle,
  inputStyle,
  inputModeType,
  className,
  iconRightPress,
  iconLeftPress,
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
            className={`bg-[#ffffff55] flex flex-row justify-between  m-auto items-center  border border-solid ${containerStyle}`}
          >
            {iconLeft && (
              <TouchableOpacity
                onPress={() => {
                  setEditable(true);
                }}
              >
                <Image source={iconLeft} className={`${iconLeftStyle}`} />
              </TouchableOpacity>
            )}
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
              {iconRight && (
                <Image source={iconRight} className={`${iconRightStyle}`} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
