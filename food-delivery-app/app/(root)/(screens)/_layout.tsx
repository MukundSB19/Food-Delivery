import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="location" options={{ headerShown: false }} />
         
        </Stack>
    );
}
