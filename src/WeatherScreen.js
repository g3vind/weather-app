import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import React from "react";

const WeatherScreen = ({ weatherData }) => {
  const {
    name,
    visibility,
    weather: [{ icon, description }],
    main: { temp, humidity, feels_like },
    wind: { speed },
    sys: { sunrise, sunset },
  } = weatherData;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}></Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({ container: {}, header: {}, title: {} });

export default WeatherScreen;
