import { CustomButton, InputField } from "@/components/ui";
import { router } from "expo-router";
import { Text, View, ScrollView } from "react-native";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/AuthContext";
import { AppScreenWrapper } from "@/components/shared";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const authContext = useContext(AuthContext);

  const handleSignIn = () => {
    if (!email) {
      setEmailMessage("Please enter your email");
    } else if (!password) {
      setPasswordMessage("Please enter a valid password");
    } else {
      authContext.logIn("user");
    }
  };

  return (
    <AppScreenWrapper gradientColors={["#EAECCC", "#9EDC88"]}>
      <ScrollView
        style={{ backgroundColor: "transparent" }}
        contentContainerStyle={{ paddingBottom: 56 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex items-center justify-center px-6 mt-28">
          <Text className="text-5xl font-boldFont tracking-tighter2 text-fontPrimary-0">
            Welcome back!
          </Text>
          <Text className="text-lg tracking-tighter text-center mt-7 font-boldFont text-fontPrimary-0">
            Sign in to access your account, manage orders, and enjoy a smooth
            fresh food delivery experience.
          </Text>
        </View>

        <View className="mt-12 ">
          <InputField
            label="Email"
            placeholder="example@gmail.com"
            autoComplete="email"
            keyboardType="email-address"
            containerStyle="py-2 px-6 rounded-2xl w-[90%]"
            labelStyle="font-boldFont text-xl tracking-tighter w-3/4 m-auto mb-3 text-fontPrimary-0"
            inputStyle="font-boldFont text-xl tracking-tighter text-fontPrimary-0"
            inputModeType="email"
            onChangeText={setEmail}
          />
          <Text className="mb-6 pl-6 text-red-500">{emailMessage}</Text>
          <InputField
            label="Password"
            placeholder="*********"
            containerStyle="py-2 px-6 rounded-2xl w-[90%]"
            labelStyle="font-boldFont text-xl w-3/4 m-auto mb-3 tracking-tighter text-fontPrimary-0"
            inputStyle="font-boldFont text-xl tracking-tighter text-fontPrimary-0"
            inputModeType="password"
            autoComplete="current-password"
            onChangeText={setPassword}
          />
          <Text className="mb-6 pl-6 text-red-500">{passwordMessage}</Text>
        </View>

        <View className="flex items-center mt-10">
          <CustomButton
            title="Sign in"
            className="w-4/5 px-5 py-3"
            textStyle="text-white text-center w-full font-boldFont tracking-tighter text-2xl"
            onPress={() => handleSignIn()}
            disabled={false}
          />
        </View>

        <View className="w-3/4 mx-auto h-[2px] rounded-full mt-7 bg-button-color" />

        {/* <Text className="mt-5 text-lg tracking-tighter text-center font-boldFont text-fontPrimary-0">
          Or Sign in with
        </Text> */}

        <View className="flex-row items-center justify-center mt-4 gap-7">
          {/* Social login icons/components go here if needed */}
        </View>

        <Text className="mt-6 text-lg tracking-tighter text-center font-boldFont text-fontPrimary-0">
          Create an Account
        </Text>

        <View className="flex items-center mt-5">
          <CustomButton
            onPress={() => router.replace("/(auth)/sign-up")}
            disabled={false}
            title="Sign up"
            className="w-1/5 p-2 bg-button-color"
            textStyle="text-white text-center font-boldFont tracking-tighter text-[18px]"
          />
        </View>
      </ScrollView>
    </AppScreenWrapper>
  );
};

export default SignIn;
