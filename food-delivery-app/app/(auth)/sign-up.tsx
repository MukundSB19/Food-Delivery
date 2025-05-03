import { AppScreenWrapper } from "@/components/shared";
import { CustomButton, InputField } from "@/components/ui";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";

const signUp = () => {
    // TODO: authentication process is not implemented yet

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSignup = () => {};

    return (
        <AppScreenWrapper gradientColors={["#EAECCC", "#9EDC88"]}>
            <ScrollView>
                <View className="mb-40">
                    <TouchableOpacity
                        onPress={() => {
                            router.push("/(auth)/welcome");
                        }}
                    >
                        {/* <Image source={Icons.exitIcon} className="mt-8 ml-6" /> */}
                    </TouchableOpacity>

                    <View className="flex items-center justify-center ">
                        <Text className="mt-24 text-5xl tracking-tighter font-boldFont text-fontPrimary-0">
                            Create Account
                        </Text>
                        <Text className="m-3 text-lg tracking-tighter text-center font-boldFont mt-7 text-fontPrimary-0">
                            Welcome ! Sign up to access your account, manage
                            bookings, and enjoy a smooth car rental experience.
                        </Text>
                    </View>

                    <View className="mt-6 ">
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
              {/* <View className="flex flex-row items-center justify-center gap-7">
              <Image source={Icons.facebookIcon} />
              <Image source={Icons.googleIcon} />
              <Image source={Icons.appleIcon} />
            </View> */}
                    {/* </View> */}
                </View>
            </ScrollView>
        </AppScreenWrapper>
    );
};

export default signUp;
