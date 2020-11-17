import React from "react";
import { sendQuery } from "../store/actions/actions";
import { useDispatch } from "react-redux";
import { StyleSheet, View } from "react-native";
import { Icon, Input } from "react-native-elements";

/* Component used for search (searchfield and icon) */
export const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Icon
        name="search"
        size={30}
        color="grey"
        style={{ marginTop: 10 }}
      ></Icon>
      <Input
        placeholder="Search for recipes"
        onChangeText={(text) => dispatch(sendQuery(text))}
        style={{
          color: "grey",
          borderColor: "white",
          backgroundColor: "white",
        }}
      />
    </View>
  );
};

const mapStateToProps = (state: { recipes: { text: any } }) => ({
  text: state.recipes.text,
});

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    padding: 20,
    paddingBottom: 10,
  },
});

export default SearchBar;
