import { TouchableOpacityProps, TextInputProps, ModalBaseProps, ModalProps } from "react-native";
import { ImageSourcePropType } from "react-native";

declare interface ButtonProps extends TouchableOpacityProps {
    title?: string;
    bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
    textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
    IconLeft?: React.ComponentType<any>;
    IconRight?: React.ComponentType<any>;
    classname?: string;
    textStyle?: string;
    disabled: boolean;
}
declare interface InputFieldProps extends TextInputProps {
    label?: string;
    icon?: any;
    secureTextEntry?: boolean;
    labelStyle?: string;
    containerStyle?: string;
    inputStyle?: string;
    iconStyle?: string;
    className?: string;
    inputModeType?: string;
    editable?: boolean;
}
declare interface Slideshow {
    id: number;
    image: ImageSourcePropType;
}

declare interface horizontalImage {
    image: ImageSourcePropType;
    text: string;
}

declare interface CardsType {
    
    image: ImageSourcePropType;
    text: string;
    text2: string;
    category: string;
    ingredients:{name:string,quantity:string}[];
}

