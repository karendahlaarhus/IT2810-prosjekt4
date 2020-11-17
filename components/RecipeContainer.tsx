import React from "react";
import SearchBar from "./SearchBar";
import SortBar from "./SortBar";
import { Text } from "react-native";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import RecipeDisplay from "./RecipeDisplay";
import FilterBar from "./FilterBar";
import ScreenBar from "./ScreenBar";
import { Actions } from "react-native-router-flux";

export default function RecipeContainer() {
  const goToHome = () => {
    Actions.frontpage();
  };
  return (
    <>
      <ScrollView>
        {/* <ScreenBar /> */}
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

var { height, width } = Dimensions.get("window");
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
