import { TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function DrawerComponent() {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
            <Ionicons
                name="menu"
                size={39}
                color="#3A3A3A"
                className="bg-[#ffffff55] rounded-2xl "
            />
        </TouchableOpacity>
    );
}
