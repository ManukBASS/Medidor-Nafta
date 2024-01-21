import { View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function HomeScreen() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ top: top }}>
      <Text>HomeScreen</Text>
    </View>
  );
}
