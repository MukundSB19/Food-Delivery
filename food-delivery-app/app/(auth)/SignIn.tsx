import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";

import { router } from "expo-router";
import { Alert, Image, ScrollView, Text, TouchableOpacity, View,StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import { useState } from "react";

const signIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
 
const handleLogin = () =>{

}

  return (
<View className="">   
   <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />
           <LinearGradient
                  colors={["#EAECCC", "#9EDC88"]}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 0, y: 1 }}
                className="h-screen"
                >
    {/* <SafeAreaView> */}
      
        <View className="mb-40">
          <TouchableOpacity
            onPress={() => {
              router.replace("/(auth)/welcome");
            }}
          >
            {/* <Image source={Icons.exitIcon} className="mt-8 ml-6" /> */}
          </TouchableOpacity>

          <View className="flex justify-center items-center  ">
            <Text className="font-boldFont tracking-tighter2 text-5xl mt-28 text-fontPrimary-0">
              Welcome back!
            </Text>
            <Text className="m-3 text-center font-boldFont tracking-tighter text-lg mt-7 text-fontPrimary-0">
            Sign in to access your account, manage orders, and enjoy a
            smooth fresh food delivery experience.
            </Text>
          </View>

          <View className=" mt-12">
            <InputField
              label="Email"
              placeholder="example@gmail.com"
              containerStyle="py-2 px-6 rounded-2xl mb-6 "
              labelStyle="font-boldFont text-xl tracking-tighter w-3/4 m-auto mb-3 text-fontPrimary-0"
              inputStyle="font-boldFont text-xl tracking-tighter text-fontPrimary-0"
              editable={true}
              inputModeType="email"
              onChangeText={setEmail}
            />
            <InputField
              label="Password"
              placeholder="*********"
              containerStyle="py-2 px-6 rounded-2xl mb-6 "
              labelStyle="font-boldFont text-xl w-3/4 m-auto mb-3 tracking-tighter text-fontPrimary-0"
              inputStyle="font-boldFont text-xl tracking-tighter text-fontPrimary-0"
              editable={true}
              inputModeType="password"
              onChangeText={setPassword}
            />
          </View>
            <View className="flex items-center mt-10">
          <CustomButton
            title="Sign in"
            className="  py-3 px-5 w-4/5 "
            textStyle="text-white text-center w-full  font-boldFont tracking-tighter text-2xl"
            onPress={handleLogin}
            disabled = {false}
            
          />
          </View>

          <View className="w-3/4 m-auto h-[2px] rounded-full mt-7 bg-button-color"></View>
          <View>
            <Text className="text-center font-boldFont tracking-tighter text-lg mt-5 mb-6 text-fontPrimary-0">
              Or Sign in with  
            </Text> 
            <View className="flex flex-row justify-center items-center  gap-7">
              {/* <Image source={Icons.facebookIcon} />
              <Image source={Icons.googleIcon} />
              <Image source={Icons.appleIcon} /> */}
            </View>
            {/* create an auth for google , facebook , apple  */}
            <View>
              <Text className="text-center mt-5 text-lg font-boldFont tracking-tighter text-fontPrimary-0 ">
               Create an Account
              </Text>
              <View className="flex items-center mt-5">
              <CustomButton
                onPress={() => {
                  router.replace("/(auth)/SignUp");
                }}
                disabled = {false}
                title="Sign up"
                className=" w-1/5 m-auto p-2  bg-button-color "
                textStyle="text-white text-center w-full  font-boldFont tracking-tighter text-[18px]"
              ></CustomButton>
              </View>
            </View>
          </View>
        </View>
    
    {/* </SafeAreaView> */}
    </LinearGradient>
    </View>

  );
};

export default signIn;
