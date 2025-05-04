import { SplashGuard } from "@/components/shared";
import { Stack } from "expo-router";

export default function ProtectedLayout() {
    return (
        <SplashGuard requiredRole="user">
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
        </SplashGuard>
    );
}
