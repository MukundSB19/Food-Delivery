// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const { wrapWithReanimatedMetroConfig } = require("react-native-reanimated/metro-config");

// Get default config
const config = getDefaultConfig(__dirname);

// Apply NativeWind first, then wrap with Reanimated
const nativeWindConfig = withNativeWind(config, { input: './global.css' });
const finalConfig = wrapWithReanimatedMetroConfig(nativeWindConfig);

module.exports = finalConfig;
