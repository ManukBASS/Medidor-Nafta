import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../components/screens/HomeScreen";
import { ActividadScreen } from "../components/screens/ActividadScreen";
import { SettingsScreen } from "../components/screens/SettingsScreen";

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ActividadScreen" component={ActividadScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
