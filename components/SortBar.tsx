/*
 * implemented with react-native-option-select */

import React from "react";
import { useDispatch } from "react-redux";
import { fireAction } from "../store/reducers/appReducer";
import { Button, Menu, Provider } from "react-native-paper";
import { View, TextInput } from "react-native";

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

    console.log("optionArray.includes('asc') ", optionArray.includes("asc"));
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        style={{
          width: 300,
          backgroundColor: "transparent",
          margin: 0,
          padding: 0,
        }}
      />
      <Menu
        style={{ marginTop: 70 }}
        visible={isOpen}
        onDismiss={() => setOpen(false)}
        anchor={
          <Button
            style={{ marginTop: 25 }}
            color="#8DB600"
            icon="swap-vertical"
            dark={true}
            mode="contained"
            onPress={() => setOpen(true)}
          >
            Sort by {value}
          </Button>
        }
      >
        <Menu.Item
          onPress={() => handleSortOption("name asc")}
          title="Alphabet - A-Z"
        />
        <Menu.Item
          onPress={() => handleSortOption("name desc")}
          title="Alphabet - Z-A"
        />
        <Menu.Item
          onPress={() => handleSortOption("servings asc")}
          title="Servings - ascending"
        />
        <Menu.Item
          onPress={() => handleSortOption("servings desc")}
          title="Servings - descending"
        />
      </Menu>
    </View>
  );
};

export default () => (
  <Provider>
    <SortBar />
  </Provider>
);
