import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { LinearGradient } from "expo-linear-gradient";

import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const signUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = () => {};

  return (
    <View className="h-full">
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
        <SafeAreaView>
          <View className="mb-40">
            <TouchableOpacity
              onPress={() => {
                router.push("/(auth)/welcome");
              }}
            >
              {/* <Image source={Icons.exitIcon} className="mt-8 ml-6" /> */}
            </TouchableOpacity>

            <View className="flex justify-center items-center  ">
              <Text className="font-boldFont tracking-tighter text-5xl mt-24 text-fontPrimary-0">
                Create Account
              </Text>
              <Text className="m-3 text-center font-boldFont tracking-tighter text-lg mt-7 text-fontPrimary-0">
                Welcome ! Sign up to access your account, manage bookings, and
                enjoy a smooth car rental experience.
              </Text>
            </View>

            <View className=" mt-6">
              <InputField
                label="Name"
                placeholder="Ex. Ashley Mark"
                containerStyle="py-2 px-6 rounded-2xl mb-6 "
                labelStyle="font-boldFont text-xl tracking-tighter w-3/4 m-auto mb-3 text-fontPrimary-0"
                inputStyle="font-boldFont text-xl tracking-tighter text-fontPrimary-0"
                editable={true}
                inputModeType="text"
                onChangeText={setUsername}
              />
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
                labelStyle="font-boldFont text-xl tracking-tighter w-3/4 m-auto mb-3 text-fontPrimary-0"
                inputStyle="font-boldFont text-xl tracking-tighter text-fontPrimary-0"
                editable={true}
                inputModeType="password"
                onChangeText={setPassword}
              />
              <InputField
                label="Phone Number"
                placeholder="*********"
                containerStyle="py-2 px-6 rounded-2xl mb-6 "
                labelStyle="font-boldFont text-xl tracking-tighter w-3/4 m-auto mb-3 text-fontPrimary-0"
                inputStyle="font-boldFont text-xl tracking-tighter text-fontPrimary-0"
                editable={true}
                inputModeType="numeric"
                onChangeText={setPhone}
                maxLength={10}
              />
            </View>
              <View className="flex items-center mt-10">
           <CustomButton
              title="Sign up"
              className="py-3 px-5 w-4/5 "
              textStyle="text-white text-center w-full  font-boldFont tracking-tighter text-2xl"
              onPress={handleSignup}
              disabled={false}
            />
            </View>

           
            {/* <View>
              <Text className="text-center font-LeagueSpartanMedium text-base mt-5 mb-6 ">
                Or Sign up with
              </Text>
              {/* <View className="flex flex-row justify-center items-center  gap-7">
              <Image source={Icons.facebookIcon} />
              <Image source={Icons.googleIcon} />
              <Image source={Icons.appleIcon} />
            </View> */}
            {/* </View> */}
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default signUp;
