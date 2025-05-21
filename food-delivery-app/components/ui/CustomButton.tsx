import { ButtonProps } from "@/types";
import { TouchableOpacity, Text, Image, View } from "react-native";

const CustomButton = ({
    title,
    disabled = false,
    className,
    bgVariant,
    textVariant,
    textStyle,
    IconLeft,
    IconRight,
    IconRightStyle,
    IconLeftStyle,
    ...props
}: ButtonProps) => {
    return (
      <TouchableOpacity
        className={`bg-buttonPrimary-0  rounded-full items-center shadow-md shadow-black ${
          disabled ? "bg-gray-400" : ""
        } ${className}`}
        disabled={disabled}
        activeOpacity={0.8}
        {...props}
      >
        <View
          className={` flex flex-row   items-center justify-around w-full `}
        >
          {IconLeft && (
            <TouchableOpacity onPress={() => {}}>
              <Image source={IconLeft} className={`${IconLeftStyle}`} />
            </TouchableOpacity>
          )}
          <Text
            className={`text-white font-regularFont tracking-tighter text-3xl ${textStyle}`}
          >
            {title}
          </Text>
          {IconRight && (
            <TouchableOpacity onPress={() => {}}>
              <Image source={IconRight} className={`${IconRightStyle}`} />
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    );
};

export default CustomButton;
