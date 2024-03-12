import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SportTypeOverview from "./SportTypeOverview";
import { useIsFocused } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";
import { styles } from "../styles/styles";
import { addInitialWorkouts } from "./ExistingWorkoutScreen";

const ListOfWorkoutsScreen = ({ route }) => {
  const isFocused = useIsFocused();
  const [workouts, setWorkouts] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState("kilometers");

  const loadWorkouts = async () => {
    try {
      const storedWorkouts = await AsyncStorage.getItem("workouts");
      const existingWorkouts = storedWorkouts ? JSON.parse(storedWorkouts) : [];

      console.log("Loaded Workouts:", existingWorkouts);

      setWorkouts(existingWorkouts);
    } catch (error) {
      console.error("Error loading workouts:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isFocused) {
        const workoutsLoaded = await AsyncStorage.getItem("workoutsLoaded");

        if (!workoutsLoaded) {
          await addInitialWorkouts();
        }

        loadWorkouts();
      }
    };

    fetchData();
  }, [isFocused]);

  useEffect(() => {
    setSelectedUnit(route.params?.selectedUnit || "kilometers");
  }, [route.params?.selectedUnit]);

  const clearWorkouts = async () => {
    try {
      await AsyncStorage.removeItem("workouts");
      await AsyncStorage.removeItem("workoutsLoaded");
      setWorkouts([]);
    } catch (error) {
      console.error("Error clearing workouts:", error);
    }
  };

  const getSportIcon = (sportType) => {
    switch (sportType) {
      case "running":
        return (
          <FontAwesome6 name="person-running" style={styles.workoutIcon} />
        );
      case "skiing":
        return <FontAwesome6 name="person-skiing" style={styles.workoutIcon} />;
      case "swimming":
        return (
          <FontAwesome6 name="person-swimming" style={styles.workoutIcon} />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <SportTypeOverview workouts={workouts} selectedUnit={selectedUnit} />
      <FlatList
        data={workouts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.workoutContainer}>
            <View style={styles.workoutBox}>
              <View style={styles.workoutIconContainer}>
                {getSportIcon(item.sportType)}
              </View>
              <Text style={styles.workoutText}>{` Distance: ${
                selectedUnit === "miles"
                  ? (item.distance * 0.621371).toFixed(2)
                  : item.distance
              } ${selectedUnit}`}</Text>
              <Text
                style={styles.workoutText}
              >{` Duration: ${item.duration} minutes`}</Text>
              <Text style={styles.workoutText}>{` Date: ${
                item.date
                  ? new Date(item.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })
                  : "N/A"
              }`}</Text>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={[styles.button, styles.clearButton]}
        onPress={clearWorkouts}
      >
        <Text style={styles.buttonText}>Clear Workouts</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListOfWorkoutsScreen;
