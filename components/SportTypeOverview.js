import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { styles } from "../styles/styles";

const SportTypeOverview = ({ workouts, selectedUnit }) => {
  const [totalRunning, setTotalRunning] = useState(0);
  const [totalSkiing, setTotalSkiing] = useState(0);
  const [totalSwimming, setTotalSwimming] = useState(0);

  useEffect(() => {
    const calculateTotalKilometers = (sportType) => {
      const sportTypeWorkouts = workouts.filter(
        (workout) => workout.sportType === sportType
      );

      const totalKilometers = sportTypeWorkouts.reduce(
        (total, workout) =>
          total +
          (selectedUnit === "miles"
            ? workout.distance * 0.621371
            : workout.distance),
        0
      );

      return totalKilometers.toFixed(2);
    };

    setTotalRunning(calculateTotalKilometers("running"));
    setTotalSkiing(calculateTotalKilometers("skiing"));
    setTotalSwimming(calculateTotalKilometers("swimming"));
  }, [workouts, selectedUnit]);

  const getSportIcon = (sportType) => {
    switch (sportType) {
      case "running":
        return (
          <FontAwesome6 name="person-running" style={styles.sportTypeIconL} />
        );
      case "skiing":
        return (
          <FontAwesome6 name="person-skiing" style={styles.sportTypeIconL} />
        );
      case "swimming":
        return (
          <FontAwesome6 name="person-swimming" style={styles.sportTypeIconL} />
        );
      default:
        return null;
    }
  };

  console.log("Total Running:", totalRunning);
  console.log("Total Skiing:", totalSkiing);
  console.log("Total Swimming:", totalSwimming);

  return (
    <View style={styles.sportTypeOverviewContainerL}>
      <View style={styles.sportTypeButtonGroupL}>
        <View style={styles.sportTypeButtonContainerL}>
          <View style={styles.sportTypeButton}>
            {getSportIcon("running")}
            <Text style={styles.sportTypeButtonTextL}>
              {" "}
              {`${totalRunning} ${
                selectedUnit === "kilometers" ? "km" : selectedUnit
              }`}
            </Text>
          </View>
        </View>
        <View style={styles.sportTypeButtonSpacing} />
        <View style={styles.sportTypeButtonContainerL}>
          <View style={styles.sportTypeButtonL}>
            {getSportIcon("skiing")}
            <Text style={styles.sportTypeButtonTextL}>
              {" "}
              {`${totalSkiing} ${
                selectedUnit === "kilometers" ? "km" : selectedUnit
              }`}
            </Text>
          </View>
        </View>
        <View style={styles.sportTypeButtonSpacing} />
        <View style={styles.sportTypeButtonContainerL}>
          <View style={styles.sportTypeButtonL}>
            {getSportIcon("swimming")}
            <Text style={styles.sportTypeButtonTextL}>
              {" "}
              {`${totalSwimming} ${
                selectedUnit === "kilometers" ? "km" : selectedUnit
              }`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SportTypeOverview;
