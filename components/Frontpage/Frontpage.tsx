import { urlencoded } from "express";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import {
  Card,
  Paragraph,
  Title,
  Button,
  Text,
  Surface,
} from "react-native-paper";
//import food_bg from "./food_bg";

export default function Frontpage() {
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
            {/* <Card.Title
            title="Go to search"
            subtitle="a modern search engine for recipes"
          ></Card.Title> */}
            <Paragraph style={styles.paragraph}>
              Please check out our search engine to find the perfect recipe for
              you!
            </Paragraph>
            <Button color={"#006a4e"} icon="magnify">
              Go to Search
            </Button>
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
