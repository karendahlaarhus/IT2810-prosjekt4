import { connect, useDispatch } from "react-redux";
import React, { useState } from "react";
import { updateFilter } from "../store/actions/actions";
import { Button, Checkbox, Paragraph, ToggleButton } from "react-native-paper";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { grey } from "@material-ui/core/colors";

/**
 *
 * To update if the boxes is already checked or not by using data from Redux
 * https://medium.com/building-with-react-native/what-is-asyncstorage-in-react-native-and-how-you-to-use-it-with-app-state-manager-1x09-b8c636ce5f6e
 */

export const FilterBar = () => {
  const dispatch = useDispatch();
  const [checkedMain, setCheckedMain] = React.useState(false);
  const [checkedSnack, setCheckedSnack] = React.useState(false);
  const [checkedDessert, setCheckedDessert] = React.useState(false);
  const [checkedSoup, setCheckedSoup] = React.useState(false);
  const [checkedVeg, setCheckedVeg] = React.useState(false);

  const [isOpenedFilter, setIsOpenedFilter] = useState(false);

  function toggleFilter() {
    setIsOpenedFilter((wasOpened) => !wasOpened);
  }

  return (
    <View style={styles.container}>
      <Button
        mode="outlined"
        color="#006a4e"
        onPress={toggleFilter}
        icon="filter"
        compact
      >
        Filter
      </Button>

      {isOpenedFilter && (
        <>
          <Checkbox.Item
            label="Main"
            onPress={() => {
              dispatch(updateFilter("main")), setCheckedMain(!checkedMain);
            }}
            status={checkedMain ? "checked" : "unchecked"}
          />
          <Checkbox.Item
            label="Snack"
            onPress={() => {
              dispatch(updateFilter("snack")), setCheckedSnack(!checkedSnack);
            }}
            status={checkedSnack ? "checked" : "unchecked"}
          />
          <Checkbox.Item
            label="Dessert"
            onPress={() => {
              dispatch(updateFilter("dessert")),
                setCheckedDessert(!checkedDessert);
            }}
            status={checkedDessert ? "checked" : "unchecked"}
          />
          <Checkbox.Item
            label="Vegetarian"
            onPress={() => {
              dispatch(updateFilter("vegetarian")), setCheckedVeg(!checkedVeg);
            }}
            status={checkedVeg ? "checked" : "unchecked"}
          />
          <Checkbox.Item
            label="Soup"
            onPress={() => {
              dispatch(updateFilter("soup")), setCheckedSoup(!checkedSoup);
            }}
            status={checkedSoup ? "checked" : "unchecked"}
          />
        </>
      )}
    </View>
  );
};

const mapStateToProps = (state: { recipes: { filterChoice: [] } }) => ({
  filterChoice: state.recipes.filterChoice,
});

const styles = StyleSheet.create({
  container: {
    // flex: 2,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default connect(mapStateToProps)(FilterBar);
