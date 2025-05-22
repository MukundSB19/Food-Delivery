import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import "../gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { CustomDrawerContent} from "@/components";
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

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
      <AuthProvider>
        <CartProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
              screenOptions={{
                drawerStatusBarAnimation: "fade",
                drawerLabelStyle: {
                  fontFamily: "regularFont",
                  fontSize: 23,
                  color: "black",
                },
                drawerStyle: { backgroundColor: "#EAECCC" },
                drawerActiveTintColor: "black",
                headerShown: false,
                drawerType:"back"
              }}
              drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
              <Drawer.Screen
                name="(protected)"
                options={{ headerShown: false, title: "Home" }}
              />
              
              <Drawer.Screen name="(drawer)/faq" options={{ title: "FAQs" }} />
              <Drawer.Screen
                name="(drawer)/contact"
                options={{ title: "Contact Us" }}
              />
              <Drawer.Screen
                name="(drawer)/bookMark"
                options={{ title: "Liked" }}
              />
              <Drawer.Screen
                name="index"
                options={{
                  headerShown: false,
                  drawerItemStyle: { display: "none" },
                }}
              />
              <Drawer.Screen
                name="(auth)"
                options={{
                  headerShown: false,
                  drawerItemStyle: { display: "none" },
                }}
              />
              <Drawer.Screen
                name="+not-found"
                options={{
                  headerShown: false,
                  drawerItemStyle: { display: "none" },
                }}
              />
            </Drawer>
          </GestureHandlerRootView>
        </CartProvider>
      </AuthProvider>
    );
}
