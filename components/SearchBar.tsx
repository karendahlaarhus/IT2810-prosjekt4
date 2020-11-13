import React from "react";
import { sendQuery } from "../store/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { View, TextInput, StyleSheet } from "react-native";

export const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for recipes"
        onChangeText={(text) => dispatch(sendQuery(text))}
      />
    </View>
  );
};

const mapStateToProps = (state: { recipes: { text: any } }) => ({
  text: state.recipes.text,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});

export default SearchBar;
