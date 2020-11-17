import React from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store/store";
import RecipeContainer from "./components/RecipeContainer";
import ScreenBar from "./components/ScreenBar";
import { Provider as PaperProvider } from "react-native-paper";
import Frontpage from "./components/Frontpage/Frontpage";
import Routes from "./components/Routes";

export default function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        {/* <ScreenBar />  */}
        {/* <RecipeContainer /> */}
        <Routes />
        {/* <Frontpage></Frontpage> */}
      </Provider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
