import AppScreenWrapper from "@/components/shared/AppScreenWrapper";
import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        // <AppScreenWrapper gradientColors={["#EAECCC", "#9EDC88"]}>
            <Stack>
                <Stack.Screen name="sign-in" options={{ headerShown: false }} />
                <Stack.Screen name="sign-up" options={{ headerShown: false }} />
                <Stack.Screen name="welcome" options={{ headerShown: false }} />
            </Stack>
        // </AppScreenWrapper>
    );
}
