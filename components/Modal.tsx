import React from "react";
import { View } from "react-native";
import { Dialog, Paragraph, Button, Portal } from "react-native-paper";

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
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <View>
      <Button color="blue" compact onPress={showDialog}>
        {name}
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>{name}</Dialog.Title>
          <Dialog.Content>
            <Paragraph>{ingredients}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Done</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default Modal;
