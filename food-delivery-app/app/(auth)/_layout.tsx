import GuestGuard from "@/components/shared/GuestGuard";
import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        // <GuestGuard disallowedRole="user">
            <Stack>
                <Stack.Screen name="sign-in" options={{ headerShown: false }} />
                <Stack.Screen name="sign-up" options={{ headerShown: false }} />
                <Stack.Screen name="welcome" options={{ headerShown: false }} />
            </Stack>
        // </GuestGuard>
    );
}
