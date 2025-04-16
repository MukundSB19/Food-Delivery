import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import "../gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  const [loaded] = useFonts({
    regularFont: require("../assets/fonts/regular.ttf"),
    boldFont: require("../assets/fonts/bold.ttf"),
    semiBoldFont: require("../assets/fonts/semiBold.ttf"),
    extraBoldFont: require("../assets/fonts/extraBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        
        <Drawer.Screen
          name="(drawer)/language"
          options={{ title: "Language" }}
        />
        <Drawer.Screen
          name="(drawer)/settings"
          options={{ title: "Settings" }}
        />
        <Drawer.Screen name="(drawer)/faq" options={{ title: "FAQs" }} />
        <Drawer.Screen
          name="(drawer)/contact"
          options={{ title: "Contact Us" }}
        />
        <Drawer.Screen name="(drawer)/bookMark" options={{ title: "Liked" }} />
        <Drawer.Screen
          name="index"
          options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
        />
        <Drawer.Screen
          name="(auth)"
          options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
        />
        <Drawer.Screen
          name="(root)"
          options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
        />
        <Drawer.Screen
          name="+not-found"
          options={{ headerShown: false, drawerItemStyle: { display: "none" } }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
