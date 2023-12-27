import { View, Text, StyleSheet, Alert, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import WeatherScreen from "./WeatherScreen";

// -------------------API KEY-----------------------
const API_KEY = "79472ab3a589c749170abfd3f5d67e7d";

const Weather = () => {
  // state to store weather data
  const [weatherData, setWeatherData] = useState(null);
  // state to check if data is loaded or not
  const [loaded, setLoaded] = useState(false);

  //   function to fetch weather data
  const fetchWeatherData = async (cityName) => {
    try {
      setLoaded(false);
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      if (response.status === 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
      setLoaded(true);
    } catch (error) {
      Alert.alert("Error Occured", error.message);
    }
  };

  //   use effect for api calling when component renders
  useEffect(() => {
    fetchWeatherData("New York");
  }, []);

  //   show loading when data is being loaded
  if (!loaded) {
    return (
      <>
        <View style={styles.container}>
          <ActivityIndicator size="large" color="red" />
        </View>
      </>
    );
  } else if (weatherData === null) {
    return (
      <View style={styles.container}>
        <Text>City Not Found 🤔</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Weather App</Text>
      </View>
      <WeatherScreen
        weatherData={weatherData}
        fetchWeatherData={fetchWeatherData}
      />
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcf5db",
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    alignItems: "center",
    backgroundColor: "#c5d2ef",
    height: 60,
    justifyContent: "center",
  },
  headerTitle: { fontSize: 22, fontWeight: "bold" },
  text: {
    fontSize: 15,
  },
});
