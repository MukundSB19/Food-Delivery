import { Tabs } from "expo-router";
import { View } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const TabIcon = ({
    focused,
    tabName,
    color,
}: {
    focused: boolean;
    tabName: "home" | "cart" | "account";
    color: string;
}) => (
    <View
        className={
            focused
                ? "bg-[#00000044] w-12 h-12 items-center justify-center rounded-full"
                : "bg-transparent w-full h-full"
        }
    >
        {tabName === "home" && <Octicons name="home" size={26} color={color} />}
        {tabName === "cart" && (
            <MaterialCommunityIcons name="cart" size={28} color={color} />
        )}
        {tabName === "account" && (
            <MaterialIcons name="account-circle" size={29} color={color} />
        )}
    </View>
);

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#EAECCC",
                tabBarInactiveTintColor: "white",
                tabBarStyle: {
                    backgroundColor: "#254F1A",
                    position: "absolute",
                    display: "flex",
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
                        tabBarIcon: ({
                            focused,
                            color,
                        }: {
                            focused: boolean;
                            color: string;
                        }) => (
                            <TabIcon
                                focused={focused}
                                color={color}
                                tabName="home"
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="cart"
                    options={{
                        headerShown: false,
                        title: "Cart",
                        tabBarIcon: ({
                            focused,
                            color,
                        }: {
                            focused: boolean;
                            color: string;
                        }) => (
                            <TabIcon
                                focused={focused}
                                color={color}
                                tabName="cart"
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="account"
                    options={{
                        headerShown: false,
                        title: "Account",
                        tabBarIcon: ({
                            focused,
                            color,
                        }: {
                            focused: boolean;
                            color: string;
                        }) => (
                            <TabIcon
                                focused={focused}
                                color={color}
                                tabName="account"
                            />
                        ),
                    }}
                />
        </Tabs>
    );
}
