import { View, Text, StatusBar } from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";
const Cart = () => {
    return (
        <View className="">
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <LinearGradient
                colors={["#EAECCC", "#9EDC88"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 0, y: 1 }}
                className="h-screen"
            ></LinearGradient>
        </View>
    );
};

export default Cart;
