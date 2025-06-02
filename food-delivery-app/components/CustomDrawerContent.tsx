import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import { useContext, useEffect, useRef } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { AuthContext } from "@/context/AuthContext";

export default function CustomDrawerContent(
    props: DrawerContentComponentProps
) {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();
    const authState = useContext(AuthContext);
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
        }).start();
    }, []);

    return (
        <DrawerContentScrollView
            {...props}
            contentContainerStyle={{ flex: 1, paddingTop: 0 }}
        >
            <View className="px-4 py-7">
                {/* <Image
            source={require("")} // your image
            className="w-16 h-16 mb-2 rounded-full"
            
          /> */}
                <View className="flex flex-row justify-between py-6">
                    <View>
                        <Text className="text-xl font-boldFont text-fontPrimary-0">
                            John Doe
                        </Text>
                        <Text className="text-lg text-gray-600 font-regularFont">
                            john@example.com
                        </Text>
                    </View>

                    <TouchableOpacity
                        onPress={() =>
                            navigation.dispatch(DrawerActions.closeDrawer())
                        }
                    >
                        <Entypo
                            name="circle-with-cross"
                            size={34}
                            color="black"
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <DrawerItemList {...props} />
            <Animated.View
                style={{
                    flex: 1,
                    opacity: fadeAnim,
                }}
                className=""
            ></Animated.View>

            <View className="px-4 py-4 mt-auto border-t border-gray-200 ">
                <TouchableOpacity
                    className="flex flex-row gap-3"
                    onPress={() => authState.logOut()}
                >
                    <Entypo name="log-out" size={24} color="text-red-600" />
                    <Text className="text-2xl text-red-600 font-boldFont">
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
}
