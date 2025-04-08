import { Stack } from "expo-router";
import { useFonts } from "expo-font"
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function RootLayout() {
 const [loaded] = useFonts({
 "regularFont": require("../assets/fonts/regular.ttf"),
  "boldFont": require("../assets/fonts/bold.ttf"),
  "semiBoldFont": require("../assets/fonts/semiBold.ttf"),
 "extraBoldFont": require("../assets/fonts/extraBold.ttf"),
 })

 useEffect(() => {
  if (loaded) {
    SplashScreen.hideAsync();
  }
}, [loaded]);

if (!loaded) {
  return null;
}


  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="(auth)"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="(root)"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="+not-found"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
