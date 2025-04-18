import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import {
  View,
  Text,
  Image,
  Pressable,
  Animated,
  TouchableOpacity,
} from "react-native";
import { useEffect, useRef } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import { router, useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";


export default function CustomDrawerContent(props: any) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

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
      <View className=" px-4 py-7 ">
        {/* <Image
            source={require("")} // your image
            className="w-16 h-16 rounded-full mb-2"
            
          /> */}
        <View className="flex flex-row justify-between py-4">
          <View >
           
            <Text className="font-boldFont text-xl text-fontPrimary-0">
              John Doe
            </Text>
            <Text className="text-gray-600 text-lg font-regularFont">
              john@example.com
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
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

      <View className="mt-auto border-t border-gray-200 px-4 py-4 ">
        <TouchableOpacity
          className="flex gap-3 flex-row"
          onPress={() => {
            // logout logic here
            router.replace("/(auth)/sign-in");
          }}
        >
          <Entypo name="log-out" size={24} color="text-red-600" />
          <Text className="text-red-600 font-boldFont text-2xl">Logout</Text>
          
        </TouchableOpacity>
        
      </View>
    </DrawerContentScrollView>
  );
}
