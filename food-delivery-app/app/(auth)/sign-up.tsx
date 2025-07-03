import { AppScreenWrapper } from "@/components/shared";
import { CustomButton, InputField } from "@/components/ui";
import { router } from "expo-router";
import { useContext, useState } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { AuthContext } from "@/context/AuthContext";

const signUp = () => {
  // TODO: authentication process is not implemented yet
  const authContext = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  const handleSignup = () => {
    if (!username) {
      setNameMessage("Please enter your username");
    } else if (!email) {
      setEmailMessage("Please enter a valid email");
    } else if (!password) {
      setPasswordMessage("Please enter a valid password");
    } else if (!phone) {
      setPhoneMessage("Please enter a valid phone");
    } else {
      authContext.logIn("user");
    }
  };
  return (
    <AppScreenWrapper gradientColors={["#EAECCC", "#9EDC88"]}>
      <ScrollView>
        <View className="absolute flex-row justify-between w-full px-3 ">
          <TouchableOpacity onPress={() => router.push("/sign-in")}>
            <View className="bg-[#00000044] p-2 rounded-2xl">
              <AntDesign name="left" size={29} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <View className="mb-40">
          <TouchableOpacity
            onPress={() => {
              router.push("/(auth)/welcome");
            }}
          >
            {/* <Image source={icons.exitIcon} className="mt-8 ml-6" /> */}
          </TouchableOpacity>

          <View className="flex items-center justify-center ">
            <Text className="mt-24 text-5xl tracking-tighter font-boldFont text-fontPrimary-0">
              Create Account
            </Text>
            <Text className="m-3 text-lg tracking-tighter text-center font-boldFont mt-7 text-fontPrimary-0">
              Welcome ! Sign up to access your account, manage bookings, and
              enjoy a smooth car rental experience.
            </Text>
          </View>

          <View className="mt-6 ">
            <InputField
              label="Name"
              placeholder="Ex. Ashley Mark"
              containerStyle="py-2 px-6 rounded-2xl w-[90%]"
              labelStyle="font-boldFont text-xl tracking-tighter w-3/4 m-auto mb-3 text-fontPrimary-0"
              inputStyle="font-boldFont text-xl tracking-tighter text-fontPrimary-0"
              inputModeType="text"
              autoComplete="username"
              onChangeText={setUsername}
            />
            <Text className="mb-6 pl-6 text-red-500">{nameMessage}</Text>

            <InputField
              label="Email"
              placeholder="example@gmail.com"
              containerStyle="py-2 px-6 rounded-2xl w-[90%]"
              labelStyle="font-boldFont text-xl tracking-tighter w-3/4 m-auto mb-3 text-fontPrimary-0"
              inputStyle="font-boldFont text-xl tracking-tighter text-fontPrimary-0"
              inputModeType="email"
              autoComplete="email"
              keyboardType="email-address"
              onChangeText={setEmail}
            />
            <Text className="mb-6 pl-6 text-red-500">{emailMessage}</Text>

            <InputField
              label="Password"
              placeholder="*********"
              containerStyle="py-2 px-6 rounded-2xl w-[90%]"
              labelStyle="font-boldFont text-xl tracking-tighter w-3/4 m-auto mb-3 text-fontPrimary-0"
              inputStyle="font-boldFont text-xl tracking-tighter text-fontPrimary-0"
              inputModeType="password"
              onChangeText={setPassword}
            />
            <Text className="mb-6 pl-6 text-red-500">{passwordMessage}</Text>

            <InputField
              label="Phone Number"
              placeholder="896*******"
              containerStyle="py-2 px-6 rounded-2xl w-[90%] "
              labelStyle="font-boldFont text-xl tracking-tighter w-3/4 m-auto mb-3 text-fontPrimary-0"
              inputStyle="font-boldFont text-xl tracking-tighter text-fontPrimary-0"
              inputModeType="numeric"
              autoComplete="tel"
              keyboardType="phone-pad"
              onChangeText={setPhone}
              maxLength={10}
            />
            <Text className="mb-6 pl-6 text-red-500">{phoneMessage}</Text>
          </View>
          <View className="flex items-center mt-10">
            <CustomButton
              title="Sign up"
              className="w-4/5 px-5 py-3 "
              textStyle="text-white text-center w-full  font-boldFont tracking-tighter text-2xl"
              onPress={handleSignup}
              disabled={false}
            />
          </View>

          {/* <View>
              <Text className="mt-5 mb-6 text-base text-center font-LeagueSpartanMedium ">
                Or Sign up with
              </Text>
               <View className="flex flex-row items-center justify-center gap-7">
              <Image source={Icons.facebookIcon} />
              <Image source={Icons.googleIcon} />
              <Image source={Icons.appleIcon} />
            </View>
           </View> */}
        </View>
      </ScrollView>
    </AppScreenWrapper>
  );
};

export default signUp;
