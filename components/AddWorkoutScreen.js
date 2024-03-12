import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome6 } from "@expo/vector-icons";
import { styles } from "../styles/styles";
import SportTypeButtonGroup from "./SportTypeButtonGroup";

const AddWorkoutScreen = () => {
  const [sportType, setSportType] = useState("");
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateClick = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setShowDatePicker(false);
      setDate(selectedDate || date);
    }
  };

  const addWorkout = async () => {
    try {
      if (!sportType) {
        Alert.alert(
          "Error",
          "Please select a sport type before adding a workout."
        );
        return;
      }

      const distanceValue = parseInt(distance, 10);
      const durationValue = parseInt(duration, 10);

      if (isNaN(distanceValue) || isNaN(durationValue)) {
        Alert.alert(
          "Error",
          "Please enter valid numeric values for distance and duration."
        );
        return;
      }

      const storedWorkouts = await AsyncStorage.getItem("workouts");
      const existingWorkouts = storedWorkouts ? JSON.parse(storedWorkouts) : [];

      const workoutData = {
        sportType,
        distance: distanceValue,
        duration: durationValue,
        date,
      };
      const updatedWorkouts = [...existingWorkouts, workoutData];

      await AsyncStorage.setItem("workouts", JSON.stringify(updatedWorkouts));

      console.log("Workout data saved successfully!");

      Alert.alert("Success", "Workout added successfully!");

      setSportType("");
      setDistance("");
      setDuration("");
      setDate(new Date());

      Keyboard.dismiss();
    } catch (error) {
      console.error("Error saving workout data:", error);
    }
  };

  const handleSportTypePress = (selectedSportType) => {
    setSportType(selectedSportType);
  };

  const handleContainerPress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleContainerPress}>
      <View style={styles.container}>
        <SportTypeButtonGroup
          selectedSportType={sportType}
          onPress={handleSportTypePress}
        />

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Distance:</Text>
          <TextInput
            style={styles.textInput}
            value={distance}
            onChangeText={(text) => {
              if (text === "" || parseInt(text) >= 0) {
                setDistance(text);
              } else {
                setDistance("");
                alert("Please enter a positive number");
              }
            }}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Duration:</Text>
          <TextInput
            style={styles.textInput}
            value={duration}
            onChangeText={(text) => {
              if (text === "" || parseInt(text) >= 0) {
                setDuration(text);
              } else {
                setDuration("");
                alert("Please enter a positive number");
              }
            }}
            keyboardType="numeric"
            onBlur={Keyboard.dismiss}
          />
        </View>

        <View style={styles.inputContainer}>
          <TouchableOpacity
            onPress={handleDateClick}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <FontAwesome6 name="calendar" size={24} color="black" />
            <Text style={[styles.dateText, { marginLeft: 20 }]}>
              {date.toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="spinner"
              onChange={handleDateChange}
            />
          )}
        </View>

        <TouchableOpacity
          style={[styles.button, styles.clearButton]}
          onPress={addWorkout}
        >
          <Text style={styles.buttonText}>Add Workout</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddWorkoutScreen;
