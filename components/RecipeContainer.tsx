import React from "react";
import SearchBar from "./SearchBar";
import {
  Button,
  Paragraph,
  Provider as PaperProvider,
  Title,
  ToggleButton,
} from "react-native-paper";
import SortBar from "./SortBar";
import ScreenBar from "./ScreenBar";
import { View, StyleSheet, Dimensions } from "react-native";
import RecipeDisplay from "./RecipeDisplay";
import FilterBar from "./FilterBar";

export default function RecipeContainer() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={styles.filterSortContainer}>
        <SortBar />
        <FilterBar />
      </View>

      {/* <FilterBar /> */}

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
  filterSortContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
