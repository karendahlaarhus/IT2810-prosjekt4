import React from 'react'
import SearchBar from './SearchBar'
import {
    View,
    StyleSheet,
    TextInput,
    Text
  } from 'react-native';
import RecipeDisplay from './RecipeDisplay';



export default function RecipeContainer() {
  return (
    <View>
    
    <Text style={styles.header}> bon appétit </Text>
    <Text style={styles.header}> What do you want to eat today? Search among hundreds of delicious
          recipes. </Text>
        <SearchBar />
        <RecipeDisplay />
        </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        fontFamily: "Futura", 
        color:'#35281e'
    },

    }
);
  