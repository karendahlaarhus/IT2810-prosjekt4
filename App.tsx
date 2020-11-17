import React from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "./store/store";
import { Provider as PaperProvider } from "react-native-paper";
import Routes from "./components/Routes";

export default function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
