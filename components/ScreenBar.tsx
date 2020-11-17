import React from "react";
import { Button, Dialog, Portal, Appbar, Paragraph } from "react-native-paper";
import { View, StyleSheet, Dimensions } from "react-native";
import FilterBar from "./FilterBar";
import { Provider } from "react-redux";
import store from "../store/store";
import Frontpage from "./Frontpage/Frontpage";
import { Actions } from "react-native-router-flux";

const ScreenBar = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const goToHome = () => {
    Actions.frontpage();
  };

  return (
    <View>
      <Appbar.Header style={{ backgroundColor: "#006a4e" }}>
        <Appbar.BackAction onPress={goToHome} />
        <Appbar.Content title="Bon Appétit"></Appbar.Content>
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: "Futura",
    color: "white",
  },
});

export default ScreenBar;
