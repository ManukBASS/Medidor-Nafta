import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SettingsScreen } from "../components/screens/SettingsScreen";
import { ActividadScreen } from "../components/screens/ActividadScreen";
import { StackNavigator } from "./StackNavigator";

import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarStyle: {
          position: "absolute",
          paddingBottom: 10,
          borderWidth: 0,
          elevaton: 0,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="HomeScreenStack"
        component={StackNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ActividadScreen"
        component={ActividadScreen}
        options={{
          tabBarLabel: "Actividad",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="fuel" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Opciones",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-sharp" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
