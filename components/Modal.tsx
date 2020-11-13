import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import {
  Dialog,
  Paragraph,
  Button,
  Portal,
  ToggleButton,
  Chip,
} from "react-native-paper";

interface IModal {
  _id: number;
  name: string;
  ingredients: Array<String>;
  servings: number;
  instructions: Array<String>;
  preptime: number;
  rating: Array<number>;
  tags: Array<String>;
}

const Modal: React.FC<IModal> = ({
  _id,
  name,
  ingredients,
  servings,
  instructions,
  preptime,
  tags,
}) => {
  // for dialog
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  //used for toggle (show/hide) paragraphs about ingredients and instructions
  const [isOpenedIng, setIsOpenedIng] = useState(false);
  const [isOpenedInst, setIsOpenedInst] = useState(false);

  //toggle for ingredients (abbreviated: Ing)
  function toggleIng() {
    setIsOpenedIng((wasOpened) => !wasOpened);
  }

  //toggle for instructions (abbreviated: Inst)
  function toggleInst() {
    setIsOpenedInst((wasOpened) => !wasOpened);
  }

  return (
    <View>
      <Button color="blue" compact onPress={showDialog}>
        {name}
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.ScrollArea>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
              <Dialog.Title>{name}</Dialog.Title>
              <View style={styles.container}>
                {tags
                  .toString()
                  .split(",")
                  .map((item) => (
                    <Chip textStyle={{ color: "grey", fontSize: 15 }}>
                      {item}
                    </Chip>
                  ))}
              </View>

              <Dialog.Content>
                <Paragraph>
                  Here you will learn how to make delicious {name}
                </Paragraph>

                <Paragraph style={styles.basetext}>
                  servings: {servings}
                </Paragraph>
                <Button
                  mode="contained"
                  onPress={toggleIng}
                  style={styles.button}
                >
                  Ingredients
                </Button>
                {isOpenedIng && <Paragraph>{ingredients}</Paragraph>}
                <Button
                  mode="contained"
                  onPress={toggleInst}
                  style={styles.button}
                >
                  Instuctions
                </Button>

                {isOpenedInst && <Paragraph>{instructions}</Paragraph>}
              </Dialog.Content>
              <Dialog.Actions>
                <Button onPress={hideDialog}>Done</Button>
              </Dialog.Actions>
            </ScrollView>
          </Dialog.ScrollArea>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  basetext: {
    fontWeight: "bold",
  },

  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#7ABAA1",
    margin: 5,
  },
});

export default Modal;
