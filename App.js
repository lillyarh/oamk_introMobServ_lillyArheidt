import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import AddWorkoutScreen from "./components/AddWorkoutScreen";
import ListOfWorkoutsScreen from "./components/ListOfWorkoutsScreen";
import SettingsScreen from "./components/SettingsScreen";
import { addInitialWorkouts } from "./components/ExistingWorkoutScreen";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    addInitialWorkouts();
  }, []);

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "AddWorkoutScreen") {
              iconName = "add-to-list";
            } else if (route.name === "ListOfWorkoutsScreen") {
              iconName = "view-list";
            } else if (route.name === "SettingsScreen") {
              iconName = "settings-sharp";
            }

            if (route.name === "AddWorkoutScreen") {
              return <Entypo name={iconName} size={size} color={color} />;
            } else if (route.name === "ListOfWorkoutsScreen") {
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "SettingsScreen") {
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          },
          tabBarActiveTintColor: "darkgreen",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],
        })}
      >
        <Tab.Screen
          name="AddWorkoutScreen"
          component={AddWorkoutScreen}
          options={{ title: "Add Workout" }}
        />
        <Tab.Screen
          name="ListOfWorkoutsScreen"
          component={ListOfWorkoutsScreen}
          options={{ title: "List of Workouts" }}
        />
        <Tab.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{ title: "Settings" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
