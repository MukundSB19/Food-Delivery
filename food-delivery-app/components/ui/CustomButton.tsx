import { ButtonProps } from "@/types";
import { TouchableOpacity, Text, Image, View } from "react-native";

const CustomButton = ({
  title,
  disabled = false,
  className,
  bgVariant,
  textVariant,
  textStyle,
  iconLeft,
  iconRight,
  iconRightStyle,
  iconLeftStyle,
  containerStyle,
  iconRightPress,
  iconLeftPress,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      className={` bg-buttonPrimary-0  rounded-full items-center shadow-md shadow-black ${
        disabled ? "bg-gray-400" : ""
      } ${className} `}
      disabled={disabled}
      activeOpacity={0.8}
      {...props}
    >
      <View
        className={` flex flex-row   items-center justify-between ${containerStyle} `}
      >
        {iconLeft && (
          <TouchableOpacity onPress={iconLeftPress}>
            <Image source={iconLeft} className={`${iconLeftStyle}`} />
          </TouchableOpacity>
        )}
        <Text
          className={`text-white font-regularFont tracking-tighter text-3xl ${textStyle}`}
        >
          {title}
        </Text>
        {iconRight && (
          <TouchableOpacity onPress={iconRightPress}>
            <Image source={iconRight} className={`${iconRightStyle}`} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
