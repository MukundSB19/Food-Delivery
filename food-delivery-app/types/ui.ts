import {
  TouchableOpacityProps,
  TextInputProps,
  ImageSourcePropType,
} from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  iconLeft?: ImageSourcePropType;
  iconRight?: ImageSourcePropType;
  classname?: string;
  textStyle?: string;
  disabled?: boolean;
  iconRightStyle?: string;
  iconLeftStyle?: string;
  containerStyle?: string;
  iconRightPress?: () => void;
  iconLeftPress?: () => void;
}

export interface InputFieldProps extends TextInputProps {
  label?: string;
  iconLeft?: ImageSourcePropType;
  iconRight?: ImageSourcePropType;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
  inputModeType?: string;
  iconLeftStyle?: string;
  iconRightStyle?: string;
  iconRightPress?: () => void;
  iconLeftPress?: () => void;
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
