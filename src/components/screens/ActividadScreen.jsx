import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function ActividadScreen() {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ top: top }}>
      <Text>ActividadScreen</Text>
    </View>
  );
}
