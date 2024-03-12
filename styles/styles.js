import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  sportTypeButtonGroup: {
    marginBottom: 20,
    marginTop: 20,
    fontFamily: "Roboto_400Regular",
  },
  sportTypeButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  sportTypeButtonText: {
    color: "#007BFF",
  },
  sportTypeButtonGroupL: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 5,
    padding: 20,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
  },
  sportTypeButtonContainerL: {
    flex: 1,
    marginRight: -20,
    marginLeft: -20,
    backgroundColor: "darkgreen",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  sportTypeButtonL: {
    alignItems: "center",
    paddingVertical: 10,
  },
  sportTypeIconL: {
    color: "white",
    fontSize: 25,
    marginBottom: 10,
    marginTop: 7.5,
  },
  sportTypeButtonSpacing: {
    width: 60,
  },
  sportTypeButtonTextL: {
    color: "white",
    fontFamily: "Roboto_400Regular",
  },
  inputLabel: {
    fontSize: 18,
    marginVertical: 5,
    fontFamily: "Roboto_400Regular",
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  sportTypeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
    paddingHorizontal: 40,
  },
  dateText: {
    fontSize: 18,
    marginVertical: 10,
    color: "black",
    fontFamily: "Roboto_400Regular",
  },
  button: {
    backgroundColor: "darkgreen",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Roboto_400Regular",
  },
  clearButton: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    marginTop: 15,
  },

  workoutContainer: {
    marginBottom: 15,
    borderRadius: 10,
  },
  workoutIconContainer: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: "darkgreen",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 10,
  },

  workoutBox: {
    padding: 20,
    backgroundColor: "white",
    borderColor: "darkgreen",
    borderWidth: 1.5,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
  },

  workoutText: {
    fontSize: 18,
    marginBottom: 8,
    fontFamily: "Roboto_400Regular",
  },
  workoutIcon: {
    color: "white",
    fontSize: 25,
    marginBottom: 10,
    marginTop: 7.5,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },
  RadioButton: {
    marginTop: 10,
    buttonColor: "lightgray",
    selectedButtonColor: "lightgray",
    buttonSize: 10,
    buttonOuterSize: 15,
    labelStyle: { fontSize: 14, marginRight: 10 },
  },
  containerButton: {
    padding: 16,
    backgroundColor: "white",
  },
  radioButton: {
    labelColor: "darkgreen",
    selectedButtonColor: "darkgreen",
    marginBottom: 10,
  },
  inputLabelSettings: {
    fontSize: 18,
    marginVertical: 5,
    marginBottom: 25,
    fontFamily: "Roboto_400Regular",
  },
});
