import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
const Account = () => {
    return (
        <View className="h-full">

            <LinearGradient
                colors={["#EAECCC", "#9EDC88"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 0, y: 1 }}
                style= {StyleSheet.absoluteFill}
            ></LinearGradient>
        </View>
    );
};

export default Account;
