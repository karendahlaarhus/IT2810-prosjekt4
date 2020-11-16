import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store/store";
import RecipeContainer from "./components/RecipeContainer";
import ScreenBar from "./components/ScreenBar";
import { Provider as PaperProvider } from "react-native-paper";
import Frontpage from "./components/Frontpage/Frontpage";

export default function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <View style={styles.container}>
          <ScreenBar />
          <RecipeContainer />
          {/*<Frontpage></Frontpage> */}
        </View>
      </Provider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
