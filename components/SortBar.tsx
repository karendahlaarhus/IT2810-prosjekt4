/*
 * implemented with react-native-option-select */

import React from "react";
import { useDispatch } from "react-redux";
import { fireAction } from "../store/reducers/appReducer";
import { Button, Menu, Provider, Drawer } from "react-native-paper";
import { View, StyleSheet } from "react-native";

/* This component handles sorting of recipes */
const SortBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const [isOpen, setOpen] = React.useState(false);

  /* Sends the value from the drop down sort menu to Redux */
  const handleSortOption = (optionValue: string) => {
    var optionArray = optionValue.split(" ");
    var boolean = optionArray.includes("asc") ? true : false;
    dispatch(fireAction(optionArray[0], boolean));

    //To display the sorting chosen by the user
    setValue(optionValue);
  };

  return (
    <View style={styles.container}>
      <Menu
        style={{ marginTop: 70 }}
        visible={isOpen}
        onDismiss={() => setOpen(false)}
        anchor={
          <Button
            style={styles.button}
            icon="swap-vertical"
            dark={true}
            mode="outlined"
            color="#006a4e"
            compact
            onPress={() => setOpen(true)}
          >
            Sort {value}
          </Button>
        }
      >
        <Menu.Item
          onPress={() => handleSortOption("name asc")}
          title="Title - A-Z"
        />

        <Menu.Item
          onPress={() => handleSortOption("name desc")}
          title="Title - Z-A"
        />
        <Menu.Item
          onPress={() => handleSortOption("servings asc")}
          title="Servings - few to many"
        />
        <Menu.Item
          onPress={() => handleSortOption("servings desc")}
          title="Servings - many to few"
        />
      </Menu>
    </View>
  );
};

export default () => <SortBar />;

const styles = StyleSheet.create({
  container: {
    //flex: 2,
  },
  button: {},
});
