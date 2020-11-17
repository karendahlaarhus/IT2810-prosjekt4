import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Dialog, Paragraph, Button, Portal, Chip } from "react-native-paper";

/*This component contains button for each recipe and dialog modal that pops up when
a recipe is clicked */

interface IModal {
  key: number;
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
  name,
  ingredients,
  servings,
  instructions,
  tags,
}) => {
  // for open/close dialog (pop up modal)
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
      {/* Button for each recipe */}
      <Button
        color="#006a4e"
        mode="text"
        compact
        onPress={showDialog}
        style={{ margin: 5 }}
        uppercase={false}
      >
        {name}
      </Button>
      <Portal>
        {/* Dialog (pop up modal) that opens when recipe is clicked */}
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.ScrollArea>
            <ScrollView contentContainerStyle={{ paddingHorizontal: 24 }}>
              <Dialog.Title>{name}</Dialog.Title>
              <View style={styles.container}>
                {tags
                  .toString()
                  .split(",")
                  .map((item) => (
                    <Chip textStyle={{ color: "grey" }}>{item}</Chip>
                  ))}
              </View>
              {/* Code for content in dialog. Text, buttons, tags, ingredients (toggle
                  instructions (toggle) */}
              <Dialog.Content>
                <Paragraph style={{ marginTop: 15 }}>
                  Here you will learn how to make delicious {name}
                </Paragraph>

                <Paragraph style={styles.basetext}>
                  servings: {servings}
                </Paragraph>
                <Button
                  mode="contained"
                  onPress={toggleIng}
                  style={styles.button}
                  uppercase={false}
                >
                  Ingredients
                </Button>
                {isOpenedIng && <Paragraph>{ingredients}</Paragraph>}
                <Button
                  mode="contained"
                  onPress={toggleInst}
                  style={styles.button}
                  uppercase={false}
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
    marginTop: 10,
  },

  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#006a4e",
    margin: 10,
  },
});

export default Modal;
