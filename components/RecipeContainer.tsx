import React from "react";
import SearchBar from "./SearchBar";
import SortBar from "./SortBar";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import RecipeDisplay from "./RecipeDisplay";
import FilterBar from "./FilterBar";

/*This component contains all elements shown on the search page */
export default function RecipeContainer() {
  return (
    <>
      {/* ScrollView used for making scrolling possible*/}
      <ScrollView>
        <View style={styles.container}>
          <SearchBar />
          <View style={styles.filterSortContainer}>
            <SortBar />
            <FilterBar />
          </View>
          <RecipeDisplay />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
  },

  filterSortContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
});
