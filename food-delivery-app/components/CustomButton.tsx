import { ButtonProps } from "@/types/types";
import { TouchableOpacity, Text } from "react-native";

const CustomButton = ({
    title,
    disabled = false,
    className,
      bgVariant,
      textVariant,
      textStyle,
      IconLeft,
      IconRight,
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
            {IconLeft && <IconLeft />}
            <Text
                className={`text-white font-regularFont tracking-tighter text-3xl ${textStyle}`}
            >
                {title}
            </Text>
            {IconRight && <IconRight />}
        </TouchableOpacity>
    );
};

export default CustomButton;
