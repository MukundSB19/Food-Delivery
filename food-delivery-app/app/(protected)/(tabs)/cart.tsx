import { View, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
const Cart = () => {
    return (
        <View className="h-full">
            <LinearGradient
                colors={["#EAECCC", "#9EDC88"]}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 0, y: 1 }}
                style={StyleSheet.absoluteFill}
            ></LinearGradient>
        </View>
    );
};

export default Cart;
