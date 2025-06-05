import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar, StyleSheet, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

type Props = {
  children: ReactNode;
  gradientColors?: [string, string, ...string[]];
  style?: ViewStyle;
};

const AppScreenWrapper = ({
  children,
  gradientColors = ["#EAECCC", "#9EDC88"],
  style,
}: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 0, y: 1 }}
        style={StyleSheet.absoluteFillObject}
      >
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <SafeAreaView style={[{ flex: 1 }, style]}>{children}</SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default AppScreenWrapper;
