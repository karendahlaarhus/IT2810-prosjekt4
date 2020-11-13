import React from "react";
import SearchBar from "./SearchBar";
import SortBar from "./SortBar";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import RecipeDisplay from "./RecipeDisplay";
import FilterBar from "./FilterBar";

export default function RecipeContainer() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {" "}
        What do you want to eat today? Search among hundreds of delicious
        recipes.{" "}
      </Text>
      <SearchBar />
      <SortBar />
      {/*  <FilterBar /> */}
      <RecipeDisplay />
    </View>
  );
}

var { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: height * 0.1,
    paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
  },
  header: {
    fontFamily: "Futura",
    color: "#35281e",
  },
});
