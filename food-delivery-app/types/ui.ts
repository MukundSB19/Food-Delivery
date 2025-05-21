import {
    TouchableOpacityProps,
    TextInputProps,
    ImageSourcePropType,
} from "react-native";




export interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: ImageSourcePropType;
  IconRight?: ImageSourcePropType;
  classname?: string;
  textStyle?: string;
  disabled?: boolean;
  IconRightStyle?: string;
  IconLeftStyle?:string;
}

export interface InputFieldProps extends TextInputProps {
    label?: string;
    icon?: ImageSourcePropType;
    labelStyle?: string;
    containerStyle?: string;
    inputStyle?: string;
    iconStyle?: string;
    className?: string;
    inputModeType?: string;
}

export interface Slideshow {
    id: number;
    image: ImageSourcePropType;
}

export type HorizontalImage = {
    slug: string; // e.g., "pizza"
    title: string; // e.g., "Pizza"
    imageUrl: ImageSourcePropType;
    description: string;
};