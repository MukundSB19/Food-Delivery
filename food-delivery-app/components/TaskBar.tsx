// components/TaskBar.tsx
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TaskBar() {
    const router = useRouter();

    return (
        <View className="absolute bottom-0 w-full">
            <View className="h-[47] bg-buttonPrimary-0 flex-row justify-around items-center  mx-[30%] rounded-full mb-3  fixed overflow-hidden bottom-0">
                <TouchableOpacity
                    onPress={() => router.push("/(protected)/(tabs)/home")}
                >
                    <Octicons name="home" size={26} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => router.push("/(protected)/(tabs)/cart")}
                >
                    <MaterialCommunityIcons
                        name="cart"
                        size={28}
                        color="white"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => router.push("/(protected)/(tabs)/account")}
                >
                    <MaterialIcons
                        name="account-circle"
                        size={29}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}
