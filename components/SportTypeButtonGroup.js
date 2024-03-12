import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { styles } from "../styles/styles";

const SportTypeButtonGroup = ({ selectedSportType, onPress }) => {
  const sportTypeOptions = [
    { label: "Running", value: "running", icon: "person-running" },
    { label: "Skiing", value: "skiing", icon: "person-skiing" },
    { label: "Swimming", value: "swimming", icon: "person-swimming" },
  ];

  return (
    <View style={[styles.sportTypeButtonGroup, { flexDirection: "row" }]}>
      {sportTypeOptions.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.sportTypeButton,
            {
              backgroundColor:
                selectedSportType === option.value ? "darkgreen" : "white",
              borderRightWidth: index < sportTypeOptions.length - 1 ? 1 : 0,
            },
          ]}
          onPress={() => onPress(option.value)}
        >
          <View style={{ alignItems: "center" }}></View>
          <FontAwesome6
            name={option.icon}
            size={24}
            color={selectedSportType === option.value ? "white" : "black"}
            style={{ marginTop: 8 }}
          />
          <Text
            style={{
              color: selectedSportType === option.value ? "white" : "black",
              marginBottom: 8,
              marginTop: 8,
            }}
          >
            {option.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SportTypeButtonGroup;
