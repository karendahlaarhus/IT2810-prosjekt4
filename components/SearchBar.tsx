import React from "react";
import { sendQuery } from "../store/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { Paragraph, Title } from "react-native-paper";

export const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Title> bon appétit </Title>
      <Paragraph>
        {" "}
        What do you want to eat today? Search among hundreds of delicious
        recipes.{" "}
      </Paragraph>
      <Input
        placeholder="Search for recipes"
        onChangeText={(text) => dispatch(sendQuery(text))}
      />
    </View>
  );
};

const mapStateToProps = (state: { recipes: { text: any } }) => ({
  text: state.recipes.text,
});

export default SearchBar;
