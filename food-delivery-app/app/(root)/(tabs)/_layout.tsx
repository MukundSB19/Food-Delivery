import { Tabs } from "expo-router";
import { View } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const TabIcon = ({
    focused,
    tabName,
}: {
    focused: boolean;
    tabName: "home" | "cart" | "account";
}) => (
    <View>
        {tabName === "home" && (
            <Octicons name="home" size={26} color="#ffffffdd" />
        )}
        {tabName === "cart" && (
            <MaterialCommunityIcons name="cart" size={28} color="#ffffffdd" />
        )}
        {tabName === "account" && (
            <MaterialIcons name="account-circle" size={29} color="#ffffffdd" />
        )}
    </View>
);

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
                    overflow: "hidden",
                    paddingTop: 4,
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ focused }: { focused: boolean }) => (
                        <TabIcon focused={focused} tabName="home" />
                    ),
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    headerShown: false,
                    title: "Cart",
                    tabBarIcon: ({ focused }: { focused: boolean }) => (
                        <TabIcon focused={focused} tabName="cart" />
                    ),
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    headerShown: false,
                    title: "Account",
                    tabBarIcon: ({ focused }: { focused: boolean }) => (
                        <TabIcon focused={focused} tabName="account" />
                    ),
                }}
            />
        </Tabs>
    );
}
