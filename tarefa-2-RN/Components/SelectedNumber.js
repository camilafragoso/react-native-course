import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../Constants/Colors";

const SelectedNumber = (props) => {
    return (
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{props.children}</Text>
        </View>
    );
  };

  const styles = StyleSheet.create({
    numberContainer: {
      borderWidth: 2,
      borderColor: Colors.secondary,
      borderRadius: 10,
      marginVertical: 10,
      marginBottom: 15,
      justifyContent: "center",
      alignItems: "center",
      width: 40,
    },
    number: {
      color: Colors.secondary,
      fontSize: 22,
    },
  });

  export default SelectedNumber;
  