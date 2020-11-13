import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store/store";
import RecipeContainer from "./components/RecipeContainer";
import ScreenBar from "./components/ScreenBar";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <View>
          <ScreenBar />
          <RecipeContainer />
        </View>
      </Provider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
