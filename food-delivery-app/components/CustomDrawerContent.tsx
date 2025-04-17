import {
    DrawerContentScrollView,
    DrawerItemList,
  } from "@react-navigation/drawer";
  import { View, Text, Image, Pressable, Animated } from "react-native";
  import { useEffect, useRef } from "react";
  import { useNavigation } from "expo-router";
  
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
          <Text className="my-5"> Menu </Text>
          <Text className="font-boldFont text-xl text-fontPrimary-0">John Doe</Text>
          <Text className="text-gray-600 text-lg font-regularFont">john@example.com</Text>
        </View>
  
        <DrawerItemList {...props} />
        <Animated.View
          style={{
            flex: 1,
            opacity: fadeAnim,
          }}
          className=""
        >
          
        </Animated.View>
  
        
        <View className="mt-auto border-t border-gray-200 px-4 py-4">
          <Pressable
            className="flex-row items-center gap-2"
            // onPress={() => {
            //   // logout logic here
            //   navigation.navigate("");
            // }}
          >
            <Text className="text-red-600 font-interBold">Logout</Text>
          </Pressable>
        </View>
        
      </DrawerContentScrollView>
    );
  }
  ﻿
  