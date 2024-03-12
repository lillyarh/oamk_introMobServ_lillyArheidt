import AsyncStorage from "@react-native-async-storage/async-storage";

export const addInitialWorkouts = async () => {
  try {
    const workoutsLoaded = await AsyncStorage.getItem("workoutsLoaded");
    if (!workoutsLoaded) {
      const initialWorkouts = [
        { date: new Date(), distance: 5, duration: 30, sportType: "running" },
        { date: new Date(), distance: 10, duration: 60, sportType: "swimming" },
        { date: new Date(), distance: 10, duration: 60, sportType: "skiing" },
      ];

      const storedWorkouts = await AsyncStorage.getItem("workouts");
      const existingWorkouts = storedWorkouts ? JSON.parse(storedWorkouts) : [];
      const updatedWorkouts = [...existingWorkouts, ...initialWorkouts];

      await AsyncStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
      await AsyncStorage.setItem("workoutsLoaded", "true");
    }
  } catch (error) {
    console.error("Error adding initial workouts:", error);
  }
};
