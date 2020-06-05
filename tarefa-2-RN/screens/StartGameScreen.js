import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Card from "../Components/Card";
import Input from "../Components/Input";
import ButtonContainer from "../Components/ButtonContainer";
import NumberContainer from "../Components/NumberContainer";

const StartGameScreen = (props) => {
  const [newNumber, setNewNumber] = useState("");
  const [selectedNumber, setSelectedNumber] = useState();
  const [isConfirmed, setIsConfirmed] = useState(false);

  const inputHandler = (enteredNumber) => {
    setNewNumber(enteredNumber.replace(/[^0-9]/g, ""));
  };

  const resetHandler = () => {
    setNewNumber("");
    setIsConfirmed(false);
  };

  const confirmHandler = () => {
    const chosenNumber = parseInt(newNumber);
    if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      return;
    }
    setIsConfirmed(true);
    setSelectedNumber(chosenNumber);
    setNewNumber("");
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (isConfirmed) {
    confirmedOutput = (
      <NumberContainer selectedNumber={selectedNumber}/>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>The Game Screen!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            maxLength={2}
            keyboardType="number-pad"
            BlurOnSubmit
            onChangeText={inputHandler}
            value={newNumber}
          />
          <ButtonContainer
            title1="Reset"
            title2="Confirm"
            pressr={resetHandler}
            pressc={confirmHandler}
          />
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
  },
  input: {
    width: "20%",
  },
  outputView: {
    height: "15%",
  }
});

export default StartGameScreen;
