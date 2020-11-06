import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from "./store/store";
import  RecipeContainer from './components/RecipeContainer';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RecipeContainer />
     </View>
     </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
