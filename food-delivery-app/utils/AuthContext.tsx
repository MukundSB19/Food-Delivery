import { useRouter } from "expo-router";
import React, { PropsWithChildren, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthState = {
    isLoggedIn: boolean;
    isReady: boolean;
    logIn: () => void;
    logOut: () => void;
};

const AuthStorageKey = "auth-key";

export const AuthContext = React.createContext<AuthState>({
    isLoggedIn: false,
    isReady: false,
    logIn: () => {},
    logOut: () => {},
});

export function AuthProvider({ children }: PropsWithChildren) {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isReady, setIsReady] = useState(false);

    const storeAuthState = async (newState: { isLoggedIn: boolean }) => {
        try {
            const jsonValue = JSON.stringify(newState);
            await AsyncStorage.setItem(
                AuthStorageKey,
                jsonValue
            );
        } catch (error) {
            console.error("Error storing auth state:", error);
        }
        setIsReady(true);
    };

    const logIn = () => {
        setIsLoggedIn(false);
        storeAuthState({ isLoggedIn: true });
        router.replace("/home");
    };
    const logOut = () => {
        setIsLoggedIn(false);
        storeAuthState({ isLoggedIn: false });
        router.replace("/(auth)/sign-in");
    };

    useEffect(() => {
        const getAuthFromStorage = async () => {
            try {
                const storedState = await AsyncStorage.getItem(AuthStorageKey);
                if (storedState) {
                    const parsedState = JSON.parse(storedState);
                    setIsLoggedIn(parsedState.isLoggedIn);
                } else {
                    setIsLoggedIn(false);
                }

                const value = await AsyncStorage.getItem(AuthStorageKey);
                if (value !== null) {
                    const auth = JSON.parse(value);
                    setIsLoggedIn(auth.isLoggedIn);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (error) {
                console.log("Error retrieving auth state:", error);
            }
            setIsReady(true);
        };

        getAuthFromStorage();
    }, []);
    return (
        <AuthContext.Provider value={{ isLoggedIn, isReady, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}
