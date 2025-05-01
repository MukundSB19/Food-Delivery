import { Redirect } from "expo-router";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { ActivityIndicator, View } from "react-native";

export default function GuestGuard({
    children,
    disallowedRole,
}: {
    children: React.ReactNode;
    disallowedRole?: string;
}) {
    const authState = useContext(AuthContext);

    if (!authState.isReady) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (authState.isLoggedIn && authState.role === disallowedRole) {
        return <Redirect href="/" />;
    }

    return <>{children}</>;
}
