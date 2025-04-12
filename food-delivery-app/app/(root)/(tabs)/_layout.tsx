import { Tabs } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#254F1A",
          position: "absolute",
          display: "flex",
          justifyContent: "",
          alignItems: "center",
          borderRadius: 25,
          marginBottom: 10,
          marginHorizontal: "30%",
          overflow:"hidden",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{ headerShown: false, title: "Home" }}
      />
      <Tabs.Screen
        name="cart"
        options={{ headerShown: false, title: "Cart" }}
      />
      <Tabs.Screen
        name="account"
        options={{ headerShown: false, title: "Account" }}
      />
    </Tabs>
  );
}
