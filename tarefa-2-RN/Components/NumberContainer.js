import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import Card from "../Components/Card";
import Colors from "../Constants/Colors";
import SelectedNumber from "../Components/SelectedNumber";

const NumberContainer = (props) => {
  return (
    <Card style={styles.selectedNumberContainer}>
      <Text style={styles.displayText}>You Selected</Text>
      <SelectedNumber>{props.selectedNumber}</SelectedNumber>
      <Button
        color={Colors.primary}
        style={styles.startButton}
        title="Start Game"
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  displayText: {
    marginBottom: 5,
    fontSize: 16,
  },
  selectedNumberContainer: {
    alignItems: "center",
  },
});

export default NumberContainer;
