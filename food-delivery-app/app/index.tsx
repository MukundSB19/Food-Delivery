// import { AuthContext } from "@/context/AuthContext";
// import { Redirect } from "expo-router";
// import { useContext } from "react";
// import { ActivityIndicator } from "react-native";
// import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

// const Index = () => {
//     const authState = useContext(AuthContext);

//     if (!authState.isReady) {
//         // If the app is not ready, show a loading indicator
//         return (
//             <SafeAreaProvider>
//                 <SafeAreaView className="flex-1 justify-center items-center">
//                     <ActivityIndicator />
//                 </SafeAreaView>
//             </SafeAreaProvider>
//         );
//     }

//     if (!authState.isLoggedIn) {
//         // Redirect to sign-in if not logged in
//         return <Redirect href={"/(auth)/sign-in"} />;
//     }

//     // If logged in, redirect to home/discover screen
//     return <Redirect href={"/discover-feed/fruits"} />;
// };

// export default Index;

import "@/global.css";
import { AuthContext } from "@/context/AuthContext";
import { Redirect } from "expo-router";
import { useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import "react-native-get-random-values";

export default function Index() {
  const authState = useContext(AuthContext);

  if (!authState.isReady) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!authState.isLoggedIn) {
    return <Redirect href="/(auth)/welcome" />;
  }

  return <Redirect href="/home" />;
}
