import React from "react";
import SearchBar from "./SearchBar";
import { StyleSheet, View } from "react-native";
import RecipeDisplay from "./RecipeDisplay";
import {
  Paragraph,
  Provider as PaperProvider,
  Title,
} from "react-native-paper";

export default function RecipeContainer() {
  return (
    <View>
      <RecipeDisplay />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
