import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import RadioForm from "react-native-simple-radio-button";
import { FontAwesome6 } from "@expo/vector-icons";
import { styles } from "../styles/styles";

const SettingsScreen = ({ navigation }) => {
  const [selectedUnit, setSelectedUnit] = useState("kilometers");

  const handleUnitChange = (value) => {
    setSelectedUnit(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.settingsContainer}>
        <Text style={styles.inputLabelSettings}>Select Units:</Text>
        <RadioForm
          radio_props={[
            { label: "Kilometers", value: "kilometers" },
            { label: "Miles", value: "miles" },
          ]}
          initial={0}
          formHorizontal={false}
          onPress={(value) => handleUnitChange(value)}
          style={styles.radioButton}
        />
      </View>
      <TouchableOpacity
        style={[styles.button, styles.clearButton]}
        onPress={() => {
          alert("Settings saved!");
          navigation.navigate("ListOfWorkoutsScreen", {
            selectedUnit: selectedUnit,
          });
        }}
      >
        <Text style={styles.buttonText}>Save Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
