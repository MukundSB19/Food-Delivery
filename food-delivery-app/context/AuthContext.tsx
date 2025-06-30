import { useRouter } from "expo-router";
import React, { PropsWithChildren, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthState } from "@/types";

const AuthStorageKey = "auth-key";

export const AuthContext = React.createContext<AuthState>({
  isLoggedIn: false,
  isReady: false,
  logIn: () => {},
  logOut: () => {},
  role: "user",
  setRole: () => {},
});

export function AuthProvider({ children }: PropsWithChildren) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [role, setRole] = useState<"user" | "admin" | "guest">("guest");

  const storeAuthState = async (state: {
    isLoggedIn: boolean;
    role: "user" | "admin" | "guest";
  }) => {
    try {
      await AsyncStorage.setItem(AuthStorageKey, JSON.stringify(state));
    } catch (error) {
      console.error("Error storing auth state:", error);
    }
  };

  const logIn = (userRole: "user" | "admin") => {
    setIsLoggedIn(true);
    setRole(userRole);
    storeAuthState({ isLoggedIn: true, role: userRole });
    router.replace("/home");
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setRole("guest");
    storeAuthState({ isLoggedIn: false, role: "guest" });
    router.replace("/(auth)/sign-in");
  };

  useEffect(() => {
    const getAuthFromStorage = async () => {
      try {
        const value = await AsyncStorage.getItem(AuthStorageKey);
        if (value) {
          const { isLoggedIn, role } = JSON.parse(value);
          setIsLoggedIn(isLoggedIn);
          setRole(role);
        }
      } catch (error) {
        console.log("Error retrieving auth state:", error);
      }
      setIsReady(true);
    };

    getAuthFromStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isReady, logIn, logOut, role, setRole }}
    >
      {children}
    </AuthContext.Provider>
  );
}
