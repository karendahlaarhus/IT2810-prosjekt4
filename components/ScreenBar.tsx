import React from "react";
import { Appbar, Button, Paragraph, Dialog, Portal } from "react-native-paper";
import { View } from "react-native";
import FilterBar from "./FilterBar";
import { Provider } from "react-redux";
import store from "../store/store";

const ScreenBar = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const _goBack = () => {
    // go back to frontpage
    /* return (
        <FrontPage/>
    ) */
  };

  return (
    <View>
      <Appbar.Header
        statusBarHeight={40}
        style={{ backgroundColor: "#006a4e", padding: 20 }}
      >
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Search for a recipe" />
        {/* <Appbar.Action icon="dots-vertical" onPress={showDialog} /> */}
      </Appbar.Header>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Filter your search</Dialog.Title>
          <Dialog.Content>
            <Provider store={store}>
              <FilterBar />
            </Provider>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default ScreenBar;
