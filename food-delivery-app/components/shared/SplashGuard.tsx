import { Redirect } from "expo-router";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { ActivityIndicator, View, Text } from "react-native";

export default function SplashGuard({
    children,
    requiredRole,
}: {
    children: React.ReactNode;
    requiredRole?: "user" | "admin";
}) {
    const authState = useContext(AuthContext);

    if (!authState.isReady) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (!authState.isLoggedIn) {
        return <Redirect href="/(auth)/sign-in" />;
    }

    return <>{children}</>;
}
