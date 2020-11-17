import { urlencoded } from "express";
import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import {
  Card,
  Paragraph,
  Title,
  Button,
  Text,
  Surface,
} from "react-native-paper";
import { Actions } from "react-native-router-flux";
import RecipeContainer from "../RecipeContainer";
//import food_bg from "./food_bg";

export default function Frontpage() {
  const goToAbout = () => {
    Actions.search();
  };

  return (
    <>
      <ImageBackground
        source={require("./food_bg.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <Card style={styles.card}>
          <Card.Content>
            <Card.Title
              title="Bon Appétit"
              subtitle="a modern search engine for recipes"
            ></Card.Title>

            <Paragraph>
              Here you will find hundreds of delicious recipes made by some of
              the best chefs in the world!
            </Paragraph>
          </Card.Content>
        </Card>

        <Card style={styles.card}>
          <Card.Content>
            <Paragraph style={styles.paragraph}>
              Please check out our search engine to find the perfect recipe for
              you!
            </Paragraph>
            <Button color="#006a4e" icon="magnify" onPress={goToAbout}>
              Go to Search
            </Button>
            {/* <TouchableOpacity style={{ margin: 128 }} onPress={goToAbout}>
              <Text>This is HOME!</Text>
            </TouchableOpacity> */}
          </Card.Content>
        </Card>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 40,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  paragraph: {
    marginBottom: 20,
  },
});
