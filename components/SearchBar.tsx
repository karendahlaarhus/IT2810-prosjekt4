import React from "react";
import { sendQuery } from "../store/actions/actions";
import { useSelector, useDispatch } from 'react-redux';
import {
    View,
    TextInput,
  } from 'react-native';
  

export const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <View>
        <TextInput 
        placeholder='Search for recipes'
        onChangeText={text => (dispatch(sendQuery(text)))}
        />

    </View>
  );
};

const mapStateToProps = (state: { recipes: { text: any } }) => ({
  text: state.recipes.text,
});

export default SearchBar;
