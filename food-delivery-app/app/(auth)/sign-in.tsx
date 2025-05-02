import CustomButton from "@/components/ui/CustomButton";
import InputField from "@/components/ui/InputField";
import { router } from "expo-router";
import {
    Text,
    TouchableOpacity,
    View,
    StatusBar,
    ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useContext, useState } from "react";
import { AuthContext } from "@/context/AuthContext";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const authContext = useContext(AuthContext);

    return (
        <View className="h-full">
            <LinearGradient
                colors={["#EAECCC", "#9EDC88"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 0, y: 1 }}
                className="flex-1"
            >
                <StatusBar barStyle="dark-content" backgroundColor="#EAECCC" />
                <ScrollView>
                    <View className="flex items-center justify-center px-6 mt-28">
                        <Text className="text-5xl font-boldFont tracking-tighter2 text-fontPrimary-0">
                            Welcome back!
                        </Text>
                        <Text className="mt-7 text-lg text-center font-boldFont tracking-tighter text-fontPrimary-0">
                            Sign in to access your account, manage orders, and
                            enjoy a smooth fresh food delivery experience.
                        </Text>
                    </View>

                    <View className="mt-12 ">
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
                            className="w-4/5 px-5 py-3"
                            textStyle="text-white text-center w-full font-boldFont tracking-tighter text-2xl"
                            onPress={() => authContext.logIn("ueer")}
                            disabled={false}
                        />
                    </View>

                    <View className="w-3/4 mx-auto h-[2px] rounded-full mt-7 bg-button-color" />

                    <Text className="mt-5 text-lg tracking-tighter text-center font-boldFont text-fontPrimary-0">
                        Or Sign in with
                    </Text>

                    <View className="flex-row items-center justify-center gap-7 mt-4">
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
            </LinearGradient>
        </View>
    );
};

export default SignIn;
