import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store/store";
import RecipeContainer from "./components/RecipeContainer";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RecipeContainer />
      </View>
    </Provider>
  );
}

var { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingTop: height * 0.1,
    paddingLeft: width * 0.1,
    paddingRight: width * 0.1,
  },
});
