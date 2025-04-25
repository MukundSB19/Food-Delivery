import "@/global.css";
import { AuthContext } from "@/utils/AuthContext";
import { Redirect } from "expo-router";
import { useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const index = () => {
    const authState = useContext(AuthContext);

    if (!authState.isReady) {
        // Check if the app is ready
        // If not, show a loading screen or return null
        return (
            <SafeAreaProvider>
                <SafeAreaView style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator />
                </SafeAreaView>
            </SafeAreaProvider>
        );
    }
    // console.log("Auth state:", authState.isLoggedIn);
    if (!authState.isLoggedIn) {
        // Check if the user is logged in
        // If not, redirect to the sign-in page
        return <Redirect href={"/(auth)/sign-in"} />;
    }
    return <Redirect href={"/discover-feed/[cattegory]"} />;
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
});

export default index;
