import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function SettingsScreen() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ top: top }}>
      <Text>SettingsScreen</Text>
    </View>
  );
}
