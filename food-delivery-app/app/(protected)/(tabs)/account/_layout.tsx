import React from "react";
import { Stack } from "expo-router";

const accountlayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="address" options={{ headerShown: false }} />
      <Stack.Screen name="order" options={{ headerShown: false }} />
      <Stack.Screen name="payment" options={{ headerShown: false }} />
    </Stack>
  );
};

export default accountlayout;
