import { SplashGuard } from "@/components/shared";
import AppScreenWrapper from "@/components/shared/AppScreenWrapper";
import { Stack } from "expo-router";

export default function ProtectedLayout() {
    return (
        <SplashGuard requiredRole="user">
            {/* <AppScreenWrapper gradientColors={["#EAECCC", "#9EDC88"]}> */}
                <Stack>
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="(screens)"
                        options={{ headerShown: false }}
                    />
                </Stack>
            {/* </AppScreenWrapper> */}
        </SplashGuard>
    );
}
