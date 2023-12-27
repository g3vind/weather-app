import { View, Text, TextInput, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";

const Search = ({ fetchWeatherData }) => {
  const [cityName, setCityName] = useState("");
  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Enter City Name"
        value={cityName}
        onChange={(text) => {
          setCityName(text);
        }}
      ></TextInput>
      <EvilIcons
        name="search"
        size={30}
        color="black"
        onPress={() => {
          fetchWeatherData(cityName);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center" },
  searchBar: {
    width: "80%",
    paddingVertical: 5,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    marginHorizontal: 35,
    paddingHorizontal: 10,
    backgroundColor: "lightgray",
  },
});
export default Search;
